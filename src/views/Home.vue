<template>
  <v-container>
    <v-layout
      text-left
      wrap
    >
      <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Request List
        </h1>
      </v-flex>
      <v-flex col-12>
        <template>
          <v-data-table
            :headers="headers"
            :items="requests"
            :items-per-page="15"
            class="elevation-1"
            :loading="loading"
            loading-text="NOW LOADING..."
            item-key="id"
            :custom-sort="customSort"
            disable-sort
          >
            <template v-slot:body="{ items }">
              <tbody>
                <tr v-for="item in items" :key="item.name">
                  <td class="caption pa-0 ba-0 ma-0">{{ item.age }}</td>
                  <td class="caption pa-0 ba-0 ma-0">{{ item.address }}</td>
                  <td class="caption pa-0 ba-0 ma-0">{{ item.debt }}</td>
                  <td class="caption pa-0 ba-0 ma-0" @click="clickActBtn(item)">{{ item.desiredAmount }}</td>
                </tr>
              </tbody>
            </template>
          </v-data-table>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import API, { graphqlOperation } from "@aws-amplify/api";
import { listRequests } from "../graphql/queries";
const moment = require('moment');
moment().format();

export default {
  name: 'HelloWorld',
  data() {
    return {
      requests: [],
      loading: true,
      headers: [
        { text: 'Age', value: 'age' },
        {
          text: 'Ad',
          align: 'left',
          value: 'address',
        },
        { text: 'Debt', value: 'debt' },
        { text: 'DA', value: 'desiredAmount' },
      ],
    }
  },
  methods: {
    async getData() {
      const requestData = await API.graphql(graphqlOperation(listRequests));
      this.requests.push(...this.requests, ...requestData.data.listRequests.items);
      this.requests.forEach((request) => {
        request.requestDateUnixTimeStamp = moment(request.requestDate, "YYYY年MM月DD日 HH:mm").unix();
      })
      this.loading = false
    },
    customSort(items) {
      items.sort((a, b) => {
        const aTimestamp = moment(a.requestDate, "YYYY年MM月DD日 HH:mm").unix()
        const bTimestamp = moment(b.requestDate, "YYYY年MM月DD日 HH:mm").unix()
        if (aTimestamp > bTimestamp) { return -1; }
        if (aTimestamp < bTimestamp) { return 1; }
        return 0
      })
      return items;
    },
    clickActBtn(request) {
      this.$router.push('/detail_request/' + request.id)
    }
  },
  created() {
    this.getData();
  }
};
</script>

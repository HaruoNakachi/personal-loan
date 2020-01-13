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
          ></v-data-table>
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
        {
          text: 'Address',
          align: 'left',
          value: 'address',
        },
        { text: 'DesiredAmount', value: 'desiredAmount' },
        { text: 'Age', value: 'age' },
        { text: 'RequestedAt', value: 'requestDate' },
        { text: 'debt', value: 'debt' },
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
      console.log(this.requests)
    },
    customSort(items) {
      items.sort((a, b) => {
        console.log('[DEBUG]')
        console.log(a)
        const aTimestamp = moment(a.requestDate, "YYYY年MM月DD日 HH:mm").unix()
        const bTimestamp = moment(b.requestDate, "YYYY年MM月DD日 HH:mm").unix()
        if (aTimestamp > bTimestamp) { return -1; }
        if (aTimestamp < bTimestamp) { return 1; }
        return 0
      })
      return items;
    }
  },
    created() {
    this.getData();
  }
};
</script>

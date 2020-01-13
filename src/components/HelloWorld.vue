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
          ></v-data-table>
        </template>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import API, { graphqlOperation } from "@aws-amplify/api";
import { listRequests } from "../graphql/queries";

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
          sortable: false,
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
      this.loading = false
    },
  },
    created() {
    this.getData();
  }
};
</script>

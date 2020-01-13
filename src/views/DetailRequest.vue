<template>
  <v-container>
    <v-layout
      text-left
      wrap
    >
      <v-flex col-12>
        <h1 class="display-2 font-weight-bold mb-3">
          Req Detail
        </h1>
      </v-flex>
      <v-layout>
        <v-flex col-12 pa-0 ba-0>
          <v-text-field
            v-model="request.title"
            label="TITLE"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex col-3 pa-0 ba-0>
          <v-text-field
            v-model="request.address"
            label="ADDRESS"
          ></v-text-field>
        </v-flex>
        <v-flex col-2 pa-0 ba-0>
          <v-text-field
            v-model="request.age"
            label="AGE"
          ></v-text-field>
        </v-flex>
        <v-flex col-2 pa-0 ba-0>
          <v-text-field
            v-model="request.sex"
            label="SEX"
          ></v-text-field>
        </v-flex>
        <v-flex col-5 pa-0 ba-0>
          <v-text-field
            v-model="request.name"
            label="NAME"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex col-3 pa-0 ba-0>
          <v-text-field
            v-model="request.desiredAmount"
            label="希望額"
          ></v-text-field>
        </v-flex>
        <v-flex col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.debt"
            label="借金"
          ></v-text-field>
        </v-flex>
        <v-flex col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.debtConsolidation"
            label="債務整理歴"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.salary"
            label="SALARY"
          ></v-text-field>
        </v-flex>
        <v-flex col-8 pa-0 ba-0>
          <v-text-field
            v-model="request.identification"
            label="TITLE"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex col-12 pa-0 ba-0>
          <v-textarea
            v-model="request.content"
            label="CONTENT"
            rows="4"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-text-field
            v-model="request.email"
            label="EMAIL"
          ></v-text-field>
          <v-text-field
            v-if="request.line"
            v-model="request.line"
            label="LINE"
          ></v-text-field>
          <v-text-field
            v-model="request.requestDate"
            label="DATE"
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import API, { graphqlOperation } from "@aws-amplify/api";
import { getRequest } from '../graphql/queries';

export default {
  name: 'DetailRequest',
  data() {
    return {
      request: {},
      loading: true,
    }
  },
  methods: {
    async getData() {
      const requestData = await API.graphql(graphqlOperation(getRequest, { id: this.$route.params.id}));
      this.request = requestData.data.getRequest;
      console.log(requestData.data.getRequest)
      this.loading = false
    },
    clickActBtn() {
    }
  },
  created() {
    this.getData();
  }
};
</script>

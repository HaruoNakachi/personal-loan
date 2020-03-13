<template>
  <v-container>
    <v-row
      text-left
      wrap
      pa-0 ba-0
    >
      <v-row>
        <v-col>
          <h1 class="display-2 font-weight-bold mb-3">
            Req Detail
          </h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col :cols="12">
          <v-text-field
            v-model="request.title"
            label="TITLE"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col-3 pa-0 ba-0>
          <v-text-field
            v-model="request.address"
            label="ADDRESS"
          ></v-text-field>
        </v-col>
        <v-col col-2 pa-0 ba-0>
          <v-text-field
            v-model="request.age"
            label="AGE"
          ></v-text-field>
        </v-col>
        <v-col col-2 pa-0 ba-0>
          <v-text-field
            v-model="request.sex"
            label="SEX"
          ></v-text-field>
        </v-col>
        <v-col col-5 pa-0 ba-0>
          <v-text-field
            v-model="request.name"
            label="NAME"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.desiredAmount"
            label="希望額"
          ></v-text-field>
        </v-col>
        <v-col col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.debt"
            label="借金"
          ></v-text-field>
        </v-col>
        <v-col col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.debtConsolidation"
            label="債務整理歴"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col-4 pa-0 ba-0>
          <v-text-field
            v-model="request.salary"
            label="SALARY"
          ></v-text-field>
        </v-col>
        <v-col col-8 pa-0 ba-0>
          <v-text-field
            v-model="request.identification"
            label="TITLE"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col col-12 pa-0 ba-0>
          <v-textarea
            v-model="request.content"
            label="CONTENT"
            rows="4"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
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
        </v-col>
      </v-row>
    </v-row>

    <v-row>
      <v-col :cols="8">
        <v-btn color="success" @click="updateRequest('InProcess')">
          進める
        </v-btn>
      </v-col>
      <v-col :cols="4">
        <v-btn color="error" @click="updateRequest('Rejected')">
          却下
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API, { graphqlOperation } from "@aws-amplify/api";
import { getRequest } from '../graphql/queries';
import { updateRequest } from '../graphql/mutations';

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
    async updateRequest(status){
      try {
        await API.graphql(graphqlOperation(updateRequest, {
          input: {
            id: this.request.id,
            status: status,
          }
        }))
        this.$router.push('/')
      } catch(e) {
        console.error('GraphQL Operation Failed: ', e)
        console.error(this.request)
      }
    }
  },
  created() {
    this.getData();
  }
};
</script>

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = `query GetRequest($id: ID!) {
  getRequest(id: $id) {
    id
    name
    splitLoans {
      items {
        id
        title
      }
      nextToken
    }
  }
}
`;
export const listRequests = `query ListRequests(
  $filter: ModelRequestFilterInput
  $limit: Int
  $nextToken: String
) {
  listRequests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      splitLoans {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getSplitLoan = `query GetSplitLoan($id: ID!) {
  getSplitLoan(id: $id) {
    id
    title
    request {
      id
      name
      splitLoans {
        nextToken
      }
    }
  }
}
`;
export const listSplitLoans = `query ListSplitLoans(
  $filter: ModelSplitLoanFilterInput
  $limit: Int
  $nextToken: String
) {
  listSplitLoans(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      request {
        id
        name
      }
    }
    nextToken
  }
}
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRequest = `query GetRequest($id: ID!) {
  getRequest(id: $id) {
    id
    title
    content
    email
    line
    name
    age
    sex
    address
    occupation
    desiredAmount
    salary
    debt
    identification
    debtConsolidation
    requestDate
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
      title
      content
      email
      line
      name
      age
      sex
      address
      occupation
      desiredAmount
      salary
      debt
      identification
      debtConsolidation
      requestDate
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
      title
      content
      email
      line
      name
      age
      sex
      address
      occupation
      desiredAmount
      salary
      debt
      identification
      debtConsolidation
      requestDate
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
        title
        content
        email
        line
        name
        age
        sex
        address
        occupation
        desiredAmount
        salary
        debt
        identification
        debtConsolidation
        requestDate
      }
    }
    nextToken
  }
}
`;

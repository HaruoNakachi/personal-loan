/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRequest = `mutation CreateRequest(
  $input: CreateRequestInput!
  $condition: ModelRequestConditionInput
) {
  createRequest(input: $input, condition: $condition) {
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
export const updateRequest = `mutation UpdateRequest(
  $input: UpdateRequestInput!
  $condition: ModelRequestConditionInput
) {
  updateRequest(input: $input, condition: $condition) {
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
export const deleteRequest = `mutation DeleteRequest(
  $input: DeleteRequestInput!
  $condition: ModelRequestConditionInput
) {
  deleteRequest(input: $input, condition: $condition) {
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
export const createSplitLoan = `mutation CreateSplitLoan(
  $input: CreateSplitLoanInput!
  $condition: ModelSplitLoanConditionInput
) {
  createSplitLoan(input: $input, condition: $condition) {
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
export const updateSplitLoan = `mutation UpdateSplitLoan(
  $input: UpdateSplitLoanInput!
  $condition: ModelSplitLoanConditionInput
) {
  updateSplitLoan(input: $input, condition: $condition) {
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
export const deleteSplitLoan = `mutation DeleteSplitLoan(
  $input: DeleteSplitLoanInput!
  $condition: ModelSplitLoanConditionInput
) {
  deleteSplitLoan(input: $input, condition: $condition) {
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

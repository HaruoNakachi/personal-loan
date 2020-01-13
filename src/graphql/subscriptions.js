/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRequest = `subscription OnCreateRequest {
  onCreateRequest {
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
export const onUpdateRequest = `subscription OnUpdateRequest {
  onUpdateRequest {
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
export const onDeleteRequest = `subscription OnDeleteRequest {
  onDeleteRequest {
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
export const onCreateSplitLoan = `subscription OnCreateSplitLoan {
  onCreateSplitLoan {
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
export const onUpdateSplitLoan = `subscription OnUpdateSplitLoan {
  onUpdateSplitLoan {
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
export const onDeleteSplitLoan = `subscription OnDeleteSplitLoan {
  onDeleteSplitLoan {
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

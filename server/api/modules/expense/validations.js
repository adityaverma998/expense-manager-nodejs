const exceptions = require('./exceptions');

const validateExpenseToAdd = (expense, allExpenses) => {
    if(!expense) {
        throw exceptions.nullExpenseException();
    }
    if(Object.keys(expense).length === 0 && expense.constructor === Object) {
        throw exceptions.emptyDataException();
    }
    if(!(expense.id && expense.title && expense.category && expense.description && expense.amount && expense.expenseDate)) {
        throw exceptions.missingDataException();
    }
    const expenseWithSameId = allExpenses.find(e => e.id === expense.id);
    if (expenseWithSameId) {
        throw exceptions.expenseWithIdPresentException();
    }
}

const validateExpenseToUpdate = (id, expense, allExpenses) => {
    const expenseWithId = allExpenses.find(e => e.id === id);
    if (!expenseWithId) {
        throw exceptions.expenseWithIdNotPresentException();
    }
    if(Object.keys(expense).length === 0 && expense.constructor === Object) {
        throw exceptions.emptyDataForUpdateException();
    }
    if (!expense.id) {
        throw exceptions.expenseWithoutIdReceivedException();
    }
    if(!(expense.title && expense.category && expense.description && expense.amount && expense.expenseDate)) {
        throw exceptions.expenseWithOnlyIdReceivedException();
    }
}

const validateExpenseToDelete = (id, allExpenses) => {
    const expenseWithId = allExpenses.find(e => e.id === id);
    if (!expenseWithId) {
        throw exceptions.expenseWithIdNotPresentForDeleteException();
    }
}

const validateRequestContentLength = (length, requestType) => {
    if(parseInt(length) === 0) {
        if(requestType === 'add') {
            throw exceptions.nullExpenseExceptionForAdd(requestType);
        }
        if(requestType === 'update') {
            throw exceptions.nullExpenseExceptionForUpdate(requestType);
        }
    }
}

module.exports = {
    validateExpenseToAdd,
    validateRequestContentLength,
    validateExpenseToUpdate,
    validateExpenseToDelete
}

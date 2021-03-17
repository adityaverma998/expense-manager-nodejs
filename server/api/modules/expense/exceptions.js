const responseMessages = require('./response-messages');
const statusCodes = require('../shared/status-codes');

const expenseWithIdPresentException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.expenseWithIDAlreadyPresent };
}

const expenseWithIdNotPresentException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.expenseNotFoundWithId };
}

const nullExpenseExceptionForUpdate = () => {
        return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.noDataReceivedForUpdate };
}

const nullExpenseExceptionForAdd = () => {
        return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.noDataReceived };
}

const missingDataException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.missingData };
}

const emptyDataException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.emptyDataReceived };
}

const emptyDataForUpdateException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.emptyDataForUpdate };
}

const expenseWithoutIdReceivedException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.idMissingInRequest };
}

const expenseWithOnlyIdReceivedException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.missingValuesOtherThanId };
}

const expenseWithIdNotPresentForDeleteException = () => {
    return { errorStatus: statusCodes.BadRequest, errorMessage: responseMessages.expenseNotFoundWithIdForDelete };
}

module.exports = {
    expenseWithIdPresentException,
    expenseWithIdNotPresentException,
    nullExpenseExceptionForAdd,
    nullExpenseExceptionForUpdate,
    missingDataException,
    emptyDataException,
    emptyDataForUpdateException,
    expenseWithoutIdReceivedException,
    expenseWithOnlyIdReceivedException,
    expenseWithIdNotPresentForDeleteException
}
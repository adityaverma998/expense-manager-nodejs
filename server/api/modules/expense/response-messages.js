const responseMessages = {
    successfullyAdded: 'Expense record is added successfully',
    notFound: 'Not Found',
    expenseWithIDAlreadyPresent: 'Expense record is already exist with the given id',
    emptyDataReceived: 'Empty data is not allowed, please provide some valid data to insert record',
    noDataReceived: 'Please provide some data to add new expense',
    missingData: 'Please provide values for id ,title, category, description, amount and expenseDate.' + 
                        ' All are mandatory data elements',
    successfullyUpdated: 'Expense record is updated successfully',
    expenseNotFoundWithId:'Expense record is not found with the given id',
    emptyDataForUpdate: 'Empty data is not allowed, please provide some valid data to update record',
    noDataReceivedForUpdate: 'Please provide id and some data to update expense record',
    idMissingInRequest: 'Please provide expense id to update record',
    missingValuesOtherThanId: 'Please provide values those needs to update',
    successfullyDeleted: 'Expense record is deleted successfully',
    expenseNotFoundWithIdForDelete: 'Expense provide correct id, there is no expense record with the given id'
}

module.exports = responseMessages;
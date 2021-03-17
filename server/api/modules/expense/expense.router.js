const router = require('express').Router();
const db = require('./expense-db')
const responseMessages = require('./response-messages');
const statusCodes = require('../shared/status-codes');
const validations = require('./validations');

// write all routing code and logic here   



// Get/ Search Expense   
router.get('/:category?', (req, res) => {
    const category = req.params.category;
    const startDate = req.query.startdate;
    const endDate = req.query.enddate;

    const data = db.getAll(category, startDate, endDate);
    res.status(statusCodes.success).json(data);
});

// Create Expense   
router.post('/', (req, res) => {
    try {
        validations.validateRequestContentLength(req.headers['content-length'], 'add');
        db.addExpense(req.body);
        res.status(statusCodes.Created).json(responseMessages.successfullyAdded);    
    } catch (error) {
        res.status(error.errorStatus).json(error.errorMessage);
    }    
});

// Update Expense
router.put('/:id', (req, res) => {
    const id = req.params.id;
    try {
        validations.validateRequestContentLength(req.headers['content-length'], 'update');
        db.updateExpense(id, req.body);
        res.status(statusCodes.success).json(responseMessages.successfullyUpdated);
    } catch (error) {
        res.status(error.errorStatus).json(error.errorMessage);
    }
});

// Delete Expense
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    try {
        db.deleteExpense(id);
        res.status(statusCodes.success).json(responseMessages.successfullyDeleted);
    } catch (error) {
        res.status(error.errorStatus).json(error.errorMessage);
    }
});

// Undefined routes
router.get('*', (req, res) => {
    res.status(statusCodes.NotFound).json(responseMessages.notFound);
});

module.exports = router;
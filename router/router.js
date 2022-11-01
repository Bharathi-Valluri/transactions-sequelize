const student_controller =require('../controller/transController')
const router=require('express').Router()
router.post('/saveBulkRecords',student_controller.bulkTransOperations)

module.exports = router
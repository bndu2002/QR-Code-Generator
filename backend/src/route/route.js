const express = require('express')
const router = express.Router()
const { generateCode, readCode } = require('../controller/contrller')

router.get('/test', (req, res) => {
    return res.status(200).send({ status: true, message: "application 👌" })
})


router.get('/code', generateCode)

// router.post('/read-qr-code', readCode)

module.exports = router
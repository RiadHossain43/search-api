const router = require('express').Router()
const {
    loginAndGetToken,
    validateRegistration,
    forgotPassword
} = require('../../controllers/auth')

router.post('/login', [], loginAndGetToken)

router.post('/validate-user', [], validateRegistration)

router.post('/forgotpassword', [], forgotPassword)

module.exports = router
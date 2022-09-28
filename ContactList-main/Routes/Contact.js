const express = require('express')
const { AddContact, GetContacts, GetOneContact, DeleteContact, UpdateContact } = require('../Controlers/Contact')
const Contact = require('../Models/Contact')


const contactRouter = express.Router()


contactRouter.post('/addContact',AddContact)

contactRouter.get('/getContacts',GetContacts)

contactRouter.get('/getOneContact/:id',GetOneContact)

contactRouter.delete('/deleteContact/:id',DeleteContact)

contactRouter.put('/updateContact/:id',UpdateContact)

module.exports = contactRouter

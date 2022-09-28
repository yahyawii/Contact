const Contact = require("../Models/Contact")

exports.AddContact=async(req,res)=>{
    try {
        const newContact = new Contact(req.body)
        const founded = await Contact.findOne({email : req.body.email})
        if(founded){
            return res.status(400).send('Contact already exist')
        }
        await newContact.save()
        res.status(200).send({Msg :'Contact Added',newContact})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.GetContacts=async(req,res)=>{
    try {
        const contacts = await Contact.find()
        res.status(200).send({Msg:'List of contacts',contacts})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.GetOneContact=async(req,res)=>{
    try {
        const {id} = req.params
        const oneContact = await Contact.findById(id)
        res.status(200).send({Msg : 'Contact One :',oneContact})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.DeleteContact=async(req,res)=>{
    try {
        const {id} = req.params
        const deleteContact = await Contact.findByIdAndDelete(id)
        res.status(200).send({Msg : 'Contact deleted',deleteContact})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}

exports.UpdateContact=async(req,res)=>{
    try {
        const {id} = req.params
        const updateContact = await Contact.findByIdAndUpdate(id,{$set : req.body})
        res.status(200).send({Msg : 'Contact updated',updateContact})
    } catch (error) {
        res.status(500).send('Server Error')
    }
}
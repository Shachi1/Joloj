const Message = require('../models/message')

exports.showAllMessage = (req, res) => {
    Message.find()
        .then(contacts => {
            res.render('pages/fish-doctor', {
                title:'fish doctors',
                contacts,
                error: {}
            })
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}
exports.getAllMessage = (req, res) => {
    Message.find()
        .then(contacts => {
            res.render('pages/adminPanel/updateFishDoctor', {
                contacts,
                error: {}
            })
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.getSingleMessage = (req, res) => {
    let {
        id
    } = req.params
    Message.findById(id)
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.createMessage = (req, res) => {
    let {
        name,
        phone,
        email,
        message
    } = req.body

    let error = {}

    if (!email) {
        error.email = 'Please provide an email'
    }
    if (!message) {
        error.name = 'Please provide your message'
    }

    let isError = Object.keys(error).length > 0
    if (isError) {
        Message.find()
            .then(contacts => {
                return res.render('pages/adminPanel/updateFishDoctor', {
                    contacts,
                    error
                })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    message: 'Error Occurred'
                })
            })
    }

    if (id) {
        Message.findOneAndUpdate({
            _id: id
        }, {
            $set: {
                name,
                bio,
                phone,
                email,
                workZone
            }
        }).then(() => {
            Contact.find()
                .then(contacts => {
                    res.render('pages/adminPanel/updateFishDoctor', { contacts, error: {} })
                })
        }).catch(e => {
            console.log(e)
            return res.json({
                message: 'Error Occurred'
            })
        })
    } else {
        let contact = new Contact({
            name,
            bio,
            phone,
            email,
            workZone
        })
        contact.save()
            .then(c => {
                Contact.find()
                    .then(contacts => {
                        return res.render('pages/adminPanel/updateFishDoctor', {
                            contacts,
                            error: {}
                        })
                    })
            })
            .catch(e => {
                console.log(e)
                return res.json({
                    message: 'Error Occurred'
                })
            })
    }

}

exports.updateContact = (req, res) => {
    let {
        name,
        bio,
        phone,
        email,
        workZone
    } = req.body
    let {
        id
    } = req.params

    Contact.findOneAndUpdate({
        _id: id
    }, {
        $set: {
            name,
            bio,
            phone,
            email,
            workZone,
        }
    }, {
        new: true
    })
        .then(contact => {
            res.json(contact)
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}

exports.deleteContact = (req, res) => {
    let {
        id
    } = req.params
    Contact.findOneAndDelete({
        _id: id
    })
        .then(() => {
            Contact.find()
                .then(contacts => {
                    res.render('pages/adminPanel/updateFishDoctor', {
                        contacts,
                        error: {}
                    })
                })
        })
        .catch(e => {
            console.log(e)
            res.json({
                message: 'Error Occurred'
            })
        })
}



const Message = require('../models/message')

exports.messagePostController = async (req, res, next) => {

    let { name, _email, phone, message } = req.body

    res.render('pages/contact-us', { title: 'Contact' })
           

    try {
        let messages = new Message({name, _email, phone, message
        })

        let createdMessage = await messages.save()
        console.log('Message Created Successfully', createdMessage)
        // res.render('pages/signup', {title: 'Create A New Account'})
       

    } catch (e) {
        console.log(e)
        // return next(err)
    }
    //res.redirect('/')
}
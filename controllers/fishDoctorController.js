const Contact = require('../models/fishDoctor')

exports.showAllContact = (req, res) => {
    Contact.find()
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
                message: 'hlw, Error Occurred'
            })
        })
}
exports.getAllContact = (req, res) => {
    Contact.find()
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

exports.getSingleContact = (req, res) => {
    let {
        id
    } = req.params
    Contact.findById(id)
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

exports.createContact = (req, res) => {
    let {
        name,
        bio,
        phone,
        email,
        workZone,
        id
    } = req.body

    let error = {}

    if (!name) {
        error.name = 'Please Provide A Name'
    }
    if (!bio) {
        error.name = 'Please Provide A Bio'
    }

    if (!phone) {
        error.phone = 'Please Provide A Phone Number'
    }

    if (!email) {
        error.email = 'Please Provide an Email'
    }
    if (!workZone) {
        error.name = 'Please Provide A work zone'
    }

    let isError = Object.keys(error).length > 0
    if (isError) {
        Contact.find()
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
        Contact.findOneAndUpdate({
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
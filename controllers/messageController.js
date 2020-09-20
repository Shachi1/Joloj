const Message = require('../models/message')


// exports.createMessage = (req, res) => {
//     let {
//         name,
//         email,
//         phone,
//         message,
//         id
//     } = req.body
//     console.log(req.body)
//     let error = {}

//     if (!name) {
//         error.name = 'Please Provide A Name'
//     }

//     if (!phone) {
//         error.phone = 'Please Provide A Phone Number'
//     }

//     if (!email) {
//         error.email = 'Please Provide an Email'
//     }
//     let isError = Object.keys(error).length > 0
//     if (isError) {
//         Message.find()
//             .then(messages => {
//                 return res.render('pages/contact-us', {
//                     messages,
//                     error
//                 })
//             })
//             .catch(e => {
//                 console.log(e)
//                 return res.json({
//                     message: 'Error Occurred'
//                 })
//             })
//     }

//     if (id) {
//         Message.findOneAndUpdate({
//             _id: id
//         }, {
//             $set: {
//                 name,
//                 email,
//                 phone,
//                 message
//             }
//         }).then(() => {
//             message.find()
//                 .then(messages => {
//                     res.render('pages/contact-us', { messages, error: {} })
//                 })
//         }).catch(e => {
//             console.log(e)
//             return res.json({
//                 message: 'Error Occurred'
//             })
//         })
//     } else {
//         let messag = new Message({
//             name,
//             email,
//             phone,
//             message
//         })
//         messag.save()
//             .then(c => {
//                 Message.find()
//                     .then(messages => {
//                         return res.render('pages/contact-us', {
//                             messages,
//                             error: {}
//                         })
//                     })
//             })
//             .catch(e => {
//                 console.log(e)
//                 return res.json({
//                     message: 'Error Occurred'
//                 })
//             })
//     }

// }

//////////////////////////////////////////////////



exports.messagePostController = async (req, res, next) => {
    console.log("bello")

    let { name, email, phone, message } = req.body
    res.render('pages/contact-us',
            {
                title: 'Contact Us',
                //error: errors.mapped(),
                value: {
                    name, email, phone, message
                }
            })
    try {
        let messages = new Message({name, email, phone, message
        })

        let createdMessage = await messages.save()
        console.log('Message Created Successfully', createdMessage)
        // res.render('pages/signup', {title: 'Create A New Account'})


    } catch (e) {
        console.log(e)
        // return next(err)
    }
}
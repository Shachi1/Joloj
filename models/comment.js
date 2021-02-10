// post, user, body, replies
const { Schema, model } = require('mongoose')

// const user = require('./user')
// const post = require('./post')

const commentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    body: {
        type: String,
        trim: true,
        required: true
    },
    replies: [
        {
            body: {
                type: String,
                required: true
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user',
                required: true
            },
            createAt: {
                type: Date,
                default: new Date()
            }
        }
    ]
}, { timestamps: true })

//test commit


const comment = model('comment', commentSchema)

module.exports = comment
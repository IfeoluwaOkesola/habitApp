const {Schema, model} = require('mongoose')

const habitSchema = new Schema({

    habitCategory:{
        type: String,
        required: [true, 'please enter habit category']
    },

    habitName:{
        type: String,
        required: [true, 'Please enter habit name']
    },

    isCompleted:{
        type: Boolean,
    },

    lastCompleted:{
        type: Date,
    
    },

    completedDates:[{
        type: Date
    }],

    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }

});

const habit = model('habit', habitSchema)

module.exports = {habit};
//how to deploy this to dev
//how to use openAPI / swagger to plan this out

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Insert task name please'
  },
  created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }] ,
    default: ['pending']
  }
})

module.exports = mongoose.model('Tasks', TaskSchema);

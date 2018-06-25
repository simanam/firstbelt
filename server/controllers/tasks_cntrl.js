const mongoose = require('mongoose');
const Pet = mongoose.model('Pet')
const Comment = mongoose.model('Comment')

module.exports = {

    new_task: function (request, response) {
        Pet.find({ name: request.body.name }, function (err, pet) {
            if (pet.length) {
                response.json({status: false, message: "Pet Already exist"})
            }
            else {

                var task = new Pet(request.body)
                task.save(function (err) {
                    if (err) {
                        console.log('somethig went worng');
                        response.json({ status: false, error: err })
                    } else {
                        console.log('successfully added a user');
                        response.json({ status: true })
                    }
                })

            }
        })


    },
    // new_comment: function(request, response){
    //     var comment = new Comment(request.body)
    //     comment.save(function(err){
    //         if(err){
    //         console.log('somethig went worng');
    //         response.json({message: "Error", error: err})
    //         }else{
    //             console.log('successfully added a user');
    //             response.json({message: "Success"})
    //         }
    //     })

    // },

    retrive_tasks: function (request, response) {
        Pet.find({}, function (err, tasks) {
            if (err) {
                console.log("Returned error", err);
                // respond with JSON
                response.json({ message: "Error", error: err })
            }
            else {
                // respond with JSON
                response.json({ message: "Success", data: tasks })
            }
        })
    },
    delete_task: function (request, response) {
        console.log(request.params._id)
        Pet.remove({ _id: request.params._id }, function (err, task) {
            if (err) {
                console.log('somethig went worng');
                response.json({ message: "Error", error: err })
            } else {
                console.log('successfully delete a user');
                response.json({ message: "Success removed" });
            }

        })

    },
    update_task: function (request, response) {
        // console.log(request.body)
        Pet.findByIdAndUpdate({ _id: request.body._id }, { $set: request.body }, function (err, task) {
            if (err) {
                console.log('somethig went worng');
                response.json({ message: "Error", error: err })
            } else {
                console.log('successfully updated a user', task);
                response.json({ message: "Success update" });
            }

        })
    },
    show_task: function (request, response) {
        console.log(request.params)

        Pet.findOne({ _id: request.params.id }, function (err, cake) {
            var data = cake;

            if (err) {
                console.log('somethig went worng');
                response.json({ message: "Error", error: err })
            } else {
                console.log(data);
                response.json({ message: "Success", data: cake });
            }

        })
    },
}
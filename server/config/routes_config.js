const taskcontroller = require('../controllers/tasks_cntrl.js')

module.exports = function(app){
   
    app.post('/api/pet', taskcontroller.new_task )

    app.get('/all', taskcontroller.retrive_tasks )
    app.delete('/remove/:_id', taskcontroller.delete_task)
    app.put('/edit/:id', taskcontroller.update_task)
    
    app.get('/show/:id', taskcontroller.show_task)

}
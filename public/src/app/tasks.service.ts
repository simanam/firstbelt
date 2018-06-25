import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private _http: HttpClient) {
  
   }
   getTasks(){
   
    return this._http.get('/all')
  }
   addTask(newObj){
     console.log(newObj)
    return this._http.post('/api/pet', newObj)
  }
  deleteTask(_id){
    return this._http.delete('/remove/'+_id)
  }
  editTask(_id, addComment){
    console.log(addComment)
    return this._http.put('/edit/'+_id, addComment)
  }
  addComment(newComment){

    return this._http.post('/comment', newComment)

  }

  showTask(_id){
    
    return this._http.get('/show/'+_id)
    
  }
}

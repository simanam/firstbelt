import { Component, OnInit, Input } from '@angular/core';
import{ TasksService} from '../tasks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit-author',
  templateUrl: './edit-author.component.html',
  styleUrls: ['./edit-author.component.css']
})
export class EditAuthorComponent implements OnInit {
  newTask : any ;
  id: any;

  constructor(private _TasksService:TasksService,
    private _route: ActivatedRoute,
    private _router: Router) {
      this._route.params.subscribe((params: Params) =>{ 
        let observable =  this._TasksService.showTask(params['id']);
        observable.subscribe(response => {
          console.log("Got data from post back", response);
    
         this.newTask = response['data']
         console.log(this.newTask)
    
        })
  
      
      });
      

    }

  ngOnInit() {
   
  }
  
   editSomething(id){
    let observable =  this._TasksService.editTask(this.id, this.newTask);
    observable.subscribe(data => {
      console.log("Got", data);
     
      this._router.navigate(['/pets/'+this.newTask._id])
     
      
    }) 
     }
  
   

}

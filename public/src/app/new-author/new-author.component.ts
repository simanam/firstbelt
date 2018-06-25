import { Component, OnInit } from '@angular/core';
import{ TasksService} from '../tasks.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new-author',
  templateUrl: './new-author.component.html',
  styleUrls: ['./new-author.component.css']
})
export class NewAuthorComponent implements OnInit {
  errormsg :any ;
  petName: any;

  

  constructor(private _TasksService:TasksService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.errormsg = false
    
    
  }
  onSubmit(mForm: NgForm){
    console.log(mForm)
    let newObj = mForm.value
    
    let observable =  this._TasksService.addTask(newObj);
    observable.subscribe(response => {
      console.log (response)
      
      if(response['status']){
        console.log("It sucsseful")
        
        this._router.navigate(['/pets'])
        mForm.reset();

      }else{
        
      
        this.errormsg = response['error']
        this.petName = response['message']
        
        
        
        
      }
      
      
      
    })
    
   
    

    }
   

}

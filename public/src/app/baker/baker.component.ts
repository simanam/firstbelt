import { Component, OnInit, Input } from '@angular/core';
import{ TasksService} from '../tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-baker',
  templateUrl: './baker.component.html',
  styleUrls: ['./baker.component.css']
})
export class BakerComponent implements OnInit {
  
  selectedpet: any;
  likeButton: boolean;
  
  

  constructor(private _TasksService:TasksService,
    private _route: ActivatedRoute,
    private _router: Router) {
    this._route.params.subscribe((params: Params) =>{ 
      let observable =  this._TasksService.showTask(params['id']);
      observable.subscribe(response => {
        console.log("Got data from post back", response);
  
       this.selectedpet = response['data']
      })
    });
    

  }
   

  ngOnInit() {
    this.likeButton = true;
    
  }
  destroyTask(id){
      let deleteObservable = this._TasksService.deleteTask(id);
      deleteObservable.subscribe(data => {});
      this._router.navigate(['/pets'])

    }
    likeButtonClicked(id){
      if(this.likeButton == true){
        this.selectedpet.likes.push(1)
        
        let observable =  this._TasksService.editTask(id, this.selectedpet);
        observable.subscribe(data => {
        console.log("Got", data);
      
        this._router.navigate(['/pets/'+id])
        this.likeButton = false;
      
      
    })
    
    }
  }

}

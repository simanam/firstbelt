import { Component, OnInit } from '@angular/core';
import{ TasksService} from '../tasks.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pets = [];
  selectedPet : any
 

  constructor(private _TasksService:TasksService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.getTasksFromService()
    
  }
  getTasksFromService(){
    let tempObservable = this._TasksService.getTasks();
    tempObservable.subscribe(data => {
      
      this.pets = data['data'];
  });
  }
  editButtonClicked(pet){
    
    
    this._router.navigate(['/pets/'+pet._id+'/edit'])

  }
  showButton(pet){
    this._router.navigate(['/pets/'+pet._id])

  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action'
import { AppState } from './../app.state';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  
  constructor(private store: Store<AppState>) { 
  }

  addTutorial(name: String,url: String){
    this.store.dispatch(new TutorialActions.AddTutorial({name,url}))
  }

  ngOnInit() {
  }

}

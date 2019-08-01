import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store'
import { Tutorial } from '../models/tutorial.model'
import * as TutoiralActions from './../actions/tutorial.action'
import { AppState} from '../app.state'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {


  tutorials: Observable<Tutorial[]>
  constructor(private store:Store<AppState>) {
      this.tutorials = store.select('tutorial')
  }

  onRemoveTutorial(index:number){
     this.store.dispatch(new TutoiralActions.RemoveTutorial(index))
  }

  ngOnInit() {
  }

}

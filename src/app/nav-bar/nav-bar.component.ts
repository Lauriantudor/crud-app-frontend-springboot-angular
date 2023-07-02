import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  constructor(private _router: Router, ) { }

  ngOnInit(): void {
  }
  goToProjects(){
    this._router.navigate(['/projects'])
  }
  goToTrainers(){
    this._router.navigate(['/trainers'])
  }
  goToParticipants(){
    this._router.navigate(['/participants'])
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  username:any;
  password:any;


  constructor(public navcontrollerconst: NavController, public routerconst: Router ) { }

  ngOnInit() {
  }

  gotonext(){
    this.routerconst.navigate(['/contact', this.username, this.password])
  }


}

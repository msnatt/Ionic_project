import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { Component } from '@angular/core';
// import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'About', url: '/about', icon: 'people' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'HomeDB', url:'/homedb', icon: 'server'},
    { title: 'Login', url:'/login-auth',icon: 'people'},
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}

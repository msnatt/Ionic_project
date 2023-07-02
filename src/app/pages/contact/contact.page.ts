import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  username:any;
  password:any;


  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {

    this.username = this.activeroute.snapshot.paramMap.get('uname');
    this.password = this.activeroute.snapshot.paramMap.get('psd');

    
  }

}

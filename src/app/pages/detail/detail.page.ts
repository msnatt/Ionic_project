import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  username:any;
  password:any;
  obj:any;


  constructor(public activeroute: ActivatedRoute) { }

  ngOnInit() {

    // this.username = this.activeroute.snapshot.paramMap.get('getname');
    // this.password = this.activeroute.snapshot.paramMap.get('getpsd');
    this.obj = this.activeroute.snapshot.paramMap.get('dataobj');
    let extractobj = JSON.parse(this.obj);
    this.username = extractobj.getname;
    this.password = extractobj.getpsd;



  }

}

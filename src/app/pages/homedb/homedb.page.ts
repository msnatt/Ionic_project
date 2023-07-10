import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CustomerData, HomeCrudService } from './homecrud.service';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {

  datalist:CustomerData[]=[];

  constructor(
    private dataService: HomeCrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef) {
      this.dataService.loadAllData().subscribe(res => {
        this.datalist = res;
        this.cd.detectChanges();

      });
     }

  ngOnInit() {
  }

}

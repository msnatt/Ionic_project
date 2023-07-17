import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CustomerData, HomeCrudService } from './homecrud.service';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {

  datalist:CustomerData[]=[];
  dataadd:any;


  constructor(
    private dataService: HomeCrudService,
    private modalCtrl: ModalController,
    private cd: ChangeDetectorRef,
    public alertCtrl: AlertController,
    ) {
      this.dataadd = [
        {
          id: Number,
          fullname: String,
          ispostpaid: Boolean,
          price: Number,
          tel:String
        },
    ];
      this.dataService.loadAllData().subscribe(res => {
        this.datalist = res;
        this.cd.detectChanges();

      });
      // this.dataService.CreateData(this.dataadd)

     }



  ngOnInit() {
  }
  async adddb(datalist:any) {
    let alert = this.alertCtrl.create({
      header: 'Add',
      subHeader: 'Add data to DB',

      inputs: [
        {
          name: 'fullname',
          placeholder:'Full name'
        },
        {
          name: 'price',
          placeholder:'Price'
        },
        {
          name: 'tel',
          placeholder:'Tel No.'
        },
        {
          name: 'ispostpaid',
          placeholder:'ispostpaid'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            const CustomerData:CustomerData = {
              fullname: data.fullname,
              price: data.price,
              tel: data.tel,
              ispostpaid: data.ispostpaid
            }
            this.dataService.CreateData(CustomerData);
          }
        }
      ]
    });
    (await alert).present();
  }
}

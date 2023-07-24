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


     }



  ngOnInit() {
  }
  async adddb() {
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
          placeholder:'ispostpaid',
          type:'radio'
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
          text: 'Create',
          handler: data => {
            const ispostpaid = data.ispostpaid === 'on';
            const customerData:CustomerData = {
              fullname: data.fullname,
              price: data.price,
              tel: data.tel,
              ispostpaid: ispostpaid
            }
            this.dataService.createData(customerData);
          }
        }
      ]
    });
    (await alert).present();
  }
  async editData(customer: CustomerData)
  {
    let alert = this.alertCtrl.create({
      header: 'Update',
      subHeader: 'Update data to DB',

      inputs: [
        {
          name: 'fullname',
          placeholder:'Full name',
          value:customer.fullname,
        },
        {
          name: 'price',
          placeholder:'Price',
          value:customer.price,
        },
        {
          name: 'tel',
          placeholder:'Tel No.',
          value:customer.tel,
        },
        {
          name: 'ispostpaid',
          placeholder:'ispostpaid',
          type:'checkbox',
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
            const ispostpaid = data.ispostpaid === 'on';
            const customerData:CustomerData = {
              id: customer.id,
              fullname: data.fullname,
              price: data.price,
              tel: data.tel,
              ispostpaid: ispostpaid
            }
            this.dataService.editData(customerData);
          }
        }
      ]
    });
    (await alert).present();
  }


  async deleteData(customer: CustomerData)
  {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Deletion',
      message: `Are you sure you want to delete ${customer.fullname}?`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.dataService.deletedata(customer).then(() => {
              this.datalist = this.datalist.filter(item => item.id !== customer.id);
              this.cd.detectChanges();
            }).catch(error => {
              console.error('Error deleting document:', error);
            });
          }
        }
      ]
    })
    await alert.present();
  }


}

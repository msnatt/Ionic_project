import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  productlist:any;

  constructor(public alertCtrl: AlertController) {
    this.productlist = [
      {
        id: 1,
        name: 'Diamond',
        price: 65,
        icon: 'diamond',
        img:'https://img.icons8.com/emoji/48/gem-stone.png'
      },
      {id: 2,
        name: 'Bicycle',
        price: 10,
        icon: 'bicycle',
        img:'https://img.icons8.com/emoji/48/bicycle-emoji.png'
      },
      {id: 3,
        name: 'Car',
        price: 155,
        icon: 'car',
        img:'https://img.icons8.com/emoji/48/automobile.png'
      },
    ];
   }

  ngOnInit() {



  }

  async edit(item:any) {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'Edit!!!!! Now!!!!!!',

      inputs: [
        {
          name: 'inname',
          placeholder: item.name
        },
        {
          name: 'inprice',
          placeholder: item.price
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

            for (let i=0;i<this.productlist.length;i++)
            {
              if (this.productlist[i] == item){
                this.productlist[i].name = data.inname;
                this.productlist[i].price = data.inprice;
              }
            }
          }
        }
      ]
    });
    (await alert).present();


  }
}

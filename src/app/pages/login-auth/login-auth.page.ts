import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from './login-auth-service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.page.html',
  styleUrls: ['./login-auth.page.scss'],
})
export class LoginAuthPage implements OnInit {
  inemail: any;
  inpassword: any;

  constructor(private AuthService: AuthService,
    private fb: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router,
    public navcontrollerconst: NavController,
  ) { }

  ngOnInit() {
  }

  async register() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.AuthService.register(this.inemail,this.inpassword);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/homedb', { replaceUrl: true });
    } else {
      this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    const user = await this.AuthService.login(this.inemail,this.inpassword);
    await loading.dismiss();

    if (user) {
      this.router.navigateByUrl('/homedb', { replaceUrl: true });
    } else {

      this.showAlert('Login failed', 'Please try again!');

    }
  }

  async showAlert(header:string, message:string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}


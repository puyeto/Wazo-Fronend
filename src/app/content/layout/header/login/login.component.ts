import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Config } from '../../../../config/config';
import { RegisterComponent } from '../register/register.component';
import { ApiService } from '../../../../service/api.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NotificationType } from '../../../../service/notification.message';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent extends SimpleModalComponent<any, any> implements OnInit {

  login: any;
  formSubmitted = false;

  constructor(private localStorageService: LocalStorageService, private router: Router,
    private simpleModalService: SimpleModalService, private api: ApiService,
    private notificationService: NotificationService) {
    super();
  }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  get email() {
    return this.login.get('email');
  }

  get password() {
    return this.login.get('password');
  }

  submitLogin() {
    this.formSubmitted = true;
    if (this.login.invalid) {
      return false;
    }

    const login_form = {
      email: this.login.controls.email.value,
      password: this.login.controls.password.value
    };

    this.api.postWithAuth("login", login_form).subscribe((res: any) => {
      if (res.success) {
        this.notificationService.sendMessage({
          message: res.message,
          type: NotificationType.success
        });
        this.localStorageService.setLocalStorage(Config.CURRENT_USER, res.data);
        this.close();
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
      } else {
        this.notificationService.sendMessage({
          message: res.error,
          type: NotificationType.error
        });
      }
    }, () => {
      console.log("oops something went wrong");
    });


  }

  openRegisterModal() {
    this.close();
    const modal = this.simpleModalService.addModal(RegisterComponent, {})
      .subscribe((isConfirmed) => {
        if (isConfirmed) {
        } else {
        }
      });
  }

}

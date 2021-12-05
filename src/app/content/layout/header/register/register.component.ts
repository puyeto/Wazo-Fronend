import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Config } from '../../../../config/config';
import { ApiService } from '../../../../service/api.service';
import { NotificationService } from 'src/app/service/notification.service';
import { NotificationType } from 'src/app/service/notification.message';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent extends SimpleModalComponent<any, any> implements OnInit {

  register: any;
  formSubmitted = false;
  constructor(private localStorageService: LocalStorageService, private notificationService: NotificationService,
    private api: ApiService, private router: Router) {
    super();
  }

  ngOnInit() {
    this.register = new FormGroup({
      fullname: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
    });
  }

  get fullname() {
    return this.register.get('fullname');
  }

  get email() {
    return this.register.get('email');
  }

  get password() {
    return this.register.get('password');
  }

  submitLogin() {
    this.formSubmitted = true;
    if (this.register.invalid) {
      return false;
    }

    const register_form = {
      email: this.register.controls.email.value,
      password: this.register.controls.password.value,
      name: this.register.controls.fullname.value
    };

    this.api.postWithAuth("register", register_form).subscribe((res: any) => {
      if (res.success) {
        this.notificationService.sendMessage({
          message: 'User Created Succesfully',
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
        this.formSubmitted = false;
      }
    }, () => {
      console.log("oops something went wrong");
    });

  }

  // openLoginModal() {
  //   this.close();
  //   const modal = this.simpleModalService.addModal(LoginComponent, {})
  //     .subscribe((isConfirmed) => {
  //       if (isConfirmed) {
  //       } else {
  //       }
  //     });
  // }
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { Router } from '@angular/router';

import { LocalStorageService } from '../../../../core/services/local-storage.service';
import { Config } from '../../../../config/config';
import { ApiService } from '../../../../service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html'
})

export class RegisterComponent extends SimpleModalComponent<any, any> implements OnInit {

  register: any;
  formSubmitted = false;
  constructor(private router: Router, private simpleModalService: SimpleModalService, private api: ApiService) {
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
      console.log(res);
      if (res.success) {
        // localStorage.setItem("accessToken", response.data.data.token);
        // localStorage.setItem("userId", response.data.data.user_id);

      } else {
        console.log(res.error);
      }
    }, () => {
      console.log("oops something went wrong");
    });


    // this.localStorageService.setLocalStorage(Config.CURRENT_USER, user);
    // this.close();
    // let currentUrl = this.router.url;
    // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    // this.router.navigate([currentUrl]);
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

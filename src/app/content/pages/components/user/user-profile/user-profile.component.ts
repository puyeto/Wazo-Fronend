import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { NotificationType } from '../../../../../service/notification.message';
import { NotificationService } from '../../../../../service/notification.service';

import { LoadingService } from '../../../../../core/services/loading.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html'
})
export class UserProfileComponent implements OnInit, AfterViewInit {

  userProfile: any;

  constructor(private loadingService: LoadingService, private api: ApiService,
    private notificationService: NotificationService) { }

  ngOnInit() {
    // Load user details
    this.getUserDetails()
  }

  private getUserDetails() {
    this.api.postWithAuth("profile", {}).subscribe((res: any) => {
      console.log(res);
      if (res.success) {
        this.userProfile = res.data;
      } else {
        if (res.error_code === 1005) {
          // update language
          this.updateLanguange()
        } else {
          this.notificationService.sendMessage({
            message: res.error,
            type: NotificationType.error
          });
        }
      }
    }, () => {
      console.log("oops something went wrong");
    });
  }

  private updateLanguange() {
    const languages = {
      language_ids: [1]
    }
    this.api.postWithAuth("languages/update", languages).subscribe((res: any) => {

      if (res.success) {
        this.getUserDetails();
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

  ngAfterViewInit() {
    this.loadingService.stopLoading();
  }

}

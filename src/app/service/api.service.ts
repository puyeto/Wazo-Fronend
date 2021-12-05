import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { LocalStorageService } from '../core/services/local-storage.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = environment.baseurl;
  public startTime: any;
  public APIGlobeSetting: any = {};

  public endTime: any;
  public myChargingSlot: string;

  constructor(private http: HttpClient, private localStorageService: LocalStorageService) { }

  public postWithOutAuth(endPoint: string, data: any) {
    return this.http.post(`${this.baseURL}${endPoint}`, data);
  }
  public getWithOutAuth(endPoint: string) {
    return this.http.get(`${this.baseURL}${endPoint}`);
  }

  public postWithAuth(endPoint: string, object: any) {
    const userDetails = this.localStorageService.getCurrentUser()

    let userId = (userDetails && userDetails.user_id !== '' && userDetails.user_id !== null && userDetails.user_id !== undefined) ? userDetails.user_id : '';
    let accessToken = (userDetails && userDetails.token !== '' && userDetails.token !== null && userDetails.token !== undefined) ? userDetails.token : '';
    const url = this.baseURL + endPoint;

    let formData: any = new FormData();

    // By Default Id and token
    formData.append('id', userId);
    formData.append('token', accessToken);

    var socialLoginUser = 0;
    // append your data
    for (var key in object) {
      formData.append(key, object[key]);
      if (key === 'social_unique_id') {
        socialLoginUser = 1;
      }
    }

    // By Default added device type and login type in future use
    if (!socialLoginUser) {
      formData.append('login_by', environment.LOGIN_BY);
    }

    formData.append('device_type', environment.DEVICE_TYPE);
    formData.append('device_token', environment.DEVICE_TOKEN);
    return this.http.post(`${url}`, formData);
  }

  public get(endPoint: string) {
    const url = this.baseURL + endPoint;
    return this.http.get(`${url}`);
  }

}

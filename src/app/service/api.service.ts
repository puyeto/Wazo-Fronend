import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL = environment.baseurl;
  public startTime: any;
  public APIGlobeSetting: any = {};

  public endTime: any;
  public myChargingSlot: string;

  constructor(private http: HttpClient) { }

  public postWithOutAuth(endPoint: string, data: any) {
    return this.http.post(`${this.baseURL}${endPoint}`, data);
  }
  public getWithOutAuth(endPoint: string) {
    return this.http.get(`${this.baseURL}${endPoint}`);
  }

  public postWithAuth(endPoint: string, object: any) {
    let userId = (localStorage.getItem('userId') !== '' && localStorage.getItem('userId') !== null && localStorage.getItem('userId') !== undefined) ? localStorage.getItem('userId') : '';
    let accessToken = (localStorage.getItem('accessToken') !== '' && localStorage.getItem('accessToken') !== null && localStorage.getItem('accessToken') !== undefined) ? localStorage.getItem('accessToken') : '';
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

  public getWithAuth(endPoint: string) {
    const tok = 'Bearer ' + localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', tok);
    headers = headers.set('Accept', 'application/json');
    return this.http.get(`${this.baseURL}${endPoint}`, { headers });
  }

}

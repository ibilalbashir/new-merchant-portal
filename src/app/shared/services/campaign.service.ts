import { SharedClass } from 'app/shared/services/SharedClass';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  url = environment.url;
  object = JSON.parse(localStorage.getItem('user'));
  merchantId = this.object['userId'];
  currentDate = new Date();

  constructor(private http: HttpClient) {
    // console.log('------------')
    // console.log(this.access_token);
    // console.log('-----------------')
  }

  getCategories(): Observable<object> {
    return this.http.get(`${this.url}/Categories`);
  }
  getAmbassadors(): Observable<object> {
    return this.http.get(
      `${this.url}/Uninamausers/get-ambassadors?access_token=${
        SharedClass.access_token
      }`
    );
  }
  createCampaign(obj): Observable<Object> {
    return this.http.post(
      `${this.url}/Campaigns?access_token=${SharedClass.access_token}`,
      obj
    );
  }
  uploadImage(obj): Observable<Object> {
    return this.http.post(
      `${this.url}/Attachments/upload?access_token=${SharedClass.access_token}`,
      obj
    );
  }

  getCampaigns(): Observable<Object> {
    console.log(this.merchantId);
    return this.http.get(
      `${this.url}/Merchants/${this.merchantId}/campaigns?access_token=${
        SharedClass.access_token
      }`
    );
  }
  getArchiveCampaigns(): Observable<Object> {
    return this.http.get(
      `${this.url}/Merchants/${
        this.merchantId
      }/campaigns?filter[where][endDate]<${this.currentDate}&access_token=${
        SharedClass.access_token
      }`
    );
  }

  verifyCouponCode(id, code): Observable<Object> {
    return this.http.get(
      `${this.url}/Campaigns/${id}/verify-coupon?code=${code}`
    );
  }
}

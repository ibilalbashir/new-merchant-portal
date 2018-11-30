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
  currentDate = new Date().toISOString();
  categoryName: any;

  constructor(private http: HttpClient) {
    // console.log('------------')
    // console.log(this.access_token);
    // console.log('-----------------')
  }

  getCategories(): Observable<object> {
    return this.http.get(`${this.url}/Categories`);
  }
  getCategoryById(id): Observable<object> {
    console.log('this is campaign id', id);
    return (this.categoryName = this.http.get(
      `${this.url}/Categories/${id}?access_token=${SharedClass.access_token}`
    ));
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

  getCampaignById(id): Observable<Object> {
    return this.http.get(
      `${this.url}/Campaigns/${id}?access_token=${SharedClass.access_token}`
    );
  }

  getCampaigns(): Observable<Object> {
    console.log(this.merchantId);
    return this.http.get(
      `${this.url}/Merchants/${
        this.merchantId
      }/campaigns?filter[where][endDate][gt]=${
        this.currentDate
      }&filter[where][isApproved]=true&filter[where][isRejected]=false&access_token=${
        SharedClass.access_token
      }`
    );
  }
  getArchiveCampaigns(): Observable<Object> {
    console.log('current date variable', this.currentDate);

    return this.http.get(
      `${this.url}/Merchants/${
        this.merchantId
      }/campaigns?filter[where][or][0][endDate][lt]=${
        this.currentDate
      }&filter[where][or][1][isRejected]=true&access_token=${
        SharedClass.access_token
      }`
    );
  }
  getPendingCampaigns(): Observable<Object> {
    return this.http.get(
      `${this.url}/Merchants/${
        this.merchantId
      }/campaigns?filter[where][and][0][endDate][gt]=${
        this.currentDate
      }&filter[where][and][1][isApproved]=false&filter[where][and][2][isRejected]=false&access_token=${
        SharedClass.access_token
      }`
    );
  }

  verifyCouponCode(id, code, branchId): Observable<Object> {
    return this.http.get(
      `${
        this.url
      }/Campaigns/${id}/verify-coupon?code=${code}&branchId=${branchId}`
    );
  }
  getBranches(): Observable<Object> {
    return this.http.get(
      `${this.url}/Merchants/${this.merchantId}/branches?access_token=${
        SharedClass.access_token
      }`
    );
  }
}

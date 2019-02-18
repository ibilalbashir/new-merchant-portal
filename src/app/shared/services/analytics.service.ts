import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SharedClass } from './SharedClass';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  url = environment.url;

  constructor(private http: HttpClient) {}
  getBranches(merchantId): Observable<object> {
    return this.http.get(
      `${this.url}/Merchants/${merchantId}/branches?access_token=${
        SharedClass.access_token
      }`
    );
  }
  getCampaigns(merchantId): Observable<object> {
    return this.http.get(
      `${this.url}/Merchants/${merchantId}/campaigns?access_token=${
        SharedClass.access_token
      }`
    );
  }
  getCouponByCampaignId(campaignId): Observable<object> {
    return this.http.get(
      `${this.url}/Campaigns/${campaignId}/coupons?access_token=${
        SharedClass.access_token
      }`
    );
  }
  getCampaignsWithCoupons(merchantId) {
    return this.http.get(
      `${
        this.url
      }/Merchants/${merchantId}/campaigns?filter[include]=coupons&access_token=${
        SharedClass.access_token
      }`
    );
  }

  getUserById(userId) {
    return this.http.get(
      `${this.url}/Uninamausers/${userId}?access_token=${
        SharedClass.access_token
      }`
    );
  }
}

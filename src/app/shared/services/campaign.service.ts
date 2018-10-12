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
    // object = JSON.parse(localStorage.getItem('user'))
    // access_token = this.object['id'];
     constructor(private http: HttpClient) {
        // console.log('------------')
        // console.log(this.access_token);
        // console.log('-----------------')
     }

      getCategories(): Observable < object > {
          return this.http.get(`${this.url}/Categories`);
      }
      getAmbassadors(): Observable < object > {

        return this.http.get(`${this.url}/Uninamausers/get-ambassadors?access_token=${SharedClass.access_token}`);
      }
      createCampaign(obj): Observable<Object> {
        return this.http.post(
          `${this.url}/Campaigns?access_token=${SharedClass.access_token}`,
          obj
        );
      }
      uploadImage( obj): Observable<Object> {
        return this.http.post(
          `${this.url}/Attachments/upload?access_token=${SharedClass.access_token}`,
          obj
        );
      }



 getCampaigns(): Observable<Object> {
      return this.http.get(
        `${this.url}/Campaigns?access_token=${SharedClass.access_token}`
      );
    }
   }

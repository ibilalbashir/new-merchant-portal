import { CampaignService } from './../services/campaign.service';
import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {
  @Input()
  data;

  constructor(private campaignService: CampaignService) { }

  ngOnInit() {
  }

  notApprovedMessage() {
    swal({
      type: 'error',
      text: 'Not Approved yet, Contact admins',
      title: 'Not Approved Yet'

    })
  }

  verifyCoupnCodeFn(campaignId) {
    console.log('-----------------')
    console.log(campaignId);

    swal({
      title: 'Enter Coupon Code',
      html:
        '<div class="form-group">' +
        '<input id="input-field" type="text" class="form-control" />' +
        '</div>',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Validate',
      cancelButtonText: 'Cancel',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false
    }).then(result => {
      if (result.value) {
        this.campaignService.verifyCouponCode(campaignId, $('#input-field').val()).subscribe(
          res => {
            swal({
              title: 'coupon code verified',
              type: 'success',
              confirmButtonClass: 'btn btn-success',
              buttonsStyling: false
            }).catch(swal.noop);


          }, err => {
            swal({
              title: 'NOT verified',
              text: err['message'],
              type: 'error',
              confirmButtonClass: 'btn btn-info',
              buttonsStyling: false
            }).catch(swal.noop);
          }
        )


      } else {
        swal({
          title: 'Cancelled',
          text: 'you did not run validation',
          type: 'error',
          confirmButtonClass: 'btn btn-info',
          buttonsStyling: false
        }).catch(swal.noop);
      }
    });
  }

}

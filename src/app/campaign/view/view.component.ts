import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../shared/services/campaign.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import swal from 'sweetalert2';

declare interface DataTable {
  headerRow: string[];
  footerRow: string[];
  dataRows: string[][];
}

declare const $: any;

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public dataTable: DataTable;

   $getCampaign: Observable<object>;

  constructor(private router: Router, private campaignService: CampaignService ) {

   }

  ngOnInit() {

    this.$getCampaign  = this.campaignService.getCampaigns();

     this.dataTable = {
      headerRow: [ 'Title', 'Description', 'Weeks', 'Start Date', 'Approved', 'Image' ],
      footerRow: ['Title', 'Description', 'Weeks', 'Start Date', 'Approved', 'Image'  ],

      dataRows: []
   };
  }

  ngAfterViewInit () {
    $('#datatables').DataTable({
      'pagingType': 'full_numbers',
      'lengthMenu': [
        [10, 25, 50, -1],
        [10, 25, 50, 'All']
      ]
      // ,
      // responsive: true,
      // language: {
      //   search: '_INPUT_',
      //   searchPlaceholder: 'Search records',
      // }

    });

    const table = $('#datatables').DataTable();

    // Edit record
    table.on('click', '.edit', function(e) {
      const $tr = $(this).closest('tr');
      const data = table.row($tr).data();
      alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
      e.preventDefault();
    });

    // Delete a record
    table.on('click', '.remove', function(e) {
      const $tr = $(this).closest('tr');
      table.row($tr).remove().draw();
      e.preventDefault();
    });

    // Like record
    table.on('click', '.like', function(e) {
      alert('You clicked on Like button');
      e.preventDefault();
    });

    $('.card .material-datatables label').addClass('form-group');
  }
  CreateCampaign() {
  this.router.navigateByUrl('/main/campaign/create');
  }
  notApprovedMessage() {
    swal({
      type: 'error',
      text: 'Not Approved yet, Contact admins',
      title: 'Not Approved Yet'

    })
  }


  //   swal({
  //     title: 'Input something',
  //     html: '<div class="form-group">' +
  //         '<input id="code" type="text" class="form-control" />' +
  //         '</div>',
  //     showCancelButton: true,
  //     confirmButtonClass: 'btn btn-success',
  //     cancelButtonClass: 'btn btn-danger',
  //     buttonsStyling: false
  // }).then(function(result) {

  //   this.campaignService.verifyCouponCode(campaignId, $('#input-field').val()).subscribe(
  //     res => {
  //       swal(res.message);

  //     }, err => {
  //       swal(err.message);
  //     }
  //   )
  //     swal({
  //         type: 'success',
  //         html: 'You entered: <strong>' +
  //             $('#input-field').val() +
  //             '</strong>',
  //         confirmButtonClass: 'btn btn-success',
  //         buttonsStyling: false

  //     })
  // }).catch(swal.noop)


}

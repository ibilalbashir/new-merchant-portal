import { CampaignService } from './../../shared/services/campaign.service';
import { Component, OnInit } from '@angular/core';
import {  Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';



declare const $: any;
interface FileReaderEventTarget extends EventTarget {
    result: string;
}

interface FileReaderEvent extends Event {
    target: FileReaderEventTarget;
    getMessage(): string;
}

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})


export class CreateComponent implements OnInit {
  fileName: any;
  base64: string;
  file: any;
  categoryObj$: Observable<object>
  ambassadorObj$: Observable<object>
  isLinear = false;
  status = true;
  discountTxtType = 'number'
  ambDiscountPlaceholder = 'input Vlaue'
  refDiscountPlaceholder = 'input Value'
  ambChecked = false;
  sepAmbPerksChecked = false;
  refChecked = false;
  sepRefPerksChecked  = false;
  firstFormGroup: FormGroup
  secondFormGroup: FormGroup
  imageFormGroup: FormGroup
  thirdFormGroup: FormGroup


  payloadObj = {
    ambassadorIds: [],
    campaignType: '',
    categoryId: '',
    description: '',
    discountAmount: {},
    discountType: {},
    discountUtilization: {ambassador: {}, user: {}},
    isApproved: false,
    merchantId: '',
    noOfWeeks: 0,
    startDate: '',
    termsAndConditions: '',
    title: '',
    createdOn: new Date()
  }
  discountAmount
  discountType
  discountUtilization

  imageObj: any


  weeks = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'}
  ]
  utilizationNumber = [
    {value: '1', viewValue: '1'},
    {value: '2', viewValue: '2'},
    {value: '3', viewValue: '3'},
    {value: '4', viewValue: '4'},
    {value: '5', viewValue: '5'},
    {value: '6', viewValue: '6'},
    {value: '7', viewValue: '7'},
    {value: '8', viewValue: '8'},
    {value: '9', viewValue: '9'},
    {value: '10', viewValue: '10'}
  ]
  campaignTypes = [
    {value: 'online', viewValue: 'Online'},
    {value: 'offline', viewValue: 'Offline'},
    {value: 'both', viewValue: 'Both'}
  ]
  discountTypes = [
    {value: 'fixed', viewValue: 'Fixed'},
    {value: 'percentage', viewValue: 'Percentage'},
    {value: 'other', viewValue: 'Other'}
  ]
  utilizations = [
    {value: 'n_days', viewValue: 'How Many Times a Day'},
    {value: 'n_weeks', viewValue: 'How Many Times a Week'},
    {value: 'n_campaign', viewValue: 'How Many Times Entire Campaign'}
  ]

  constructor(private formBuilder: FormBuilder, private campaignService: CampaignService) {
    this.firstFormGroup = formBuilder.group({
      title: ['', Validators.required],

      description: ['', Validators.required],
      termsAndConditions: ['', Validators.required],
      campaignType: ['', Validators.required],
      startDate: [new Date(), Validators.required],
      noOfWeeks: ['', Validators.required],
      discountType: ['', Validators.required],
      discountUtilization: ['', Validators.required],
      categoryId: ['', Validators.required],
      number: ['', Validators.required],
      baseDiscountAmount: ['', Validators.required]



    });
    this.secondFormGroup = formBuilder.group({
      secondCtrl: [],
      ambNumber: [''],
      ambDiscountUtilization: [''],
      ambassadorDiscount: [''],
      ambassadorDiscountAmount: [''],
      ambassadorIds: ['']

    })
    this.imageFormGroup = formBuilder.group({

    })
    this.thirdFormGroup = formBuilder.group({
      thirdFormGroup : [''],
      referralDiscountAmount: [''],
      referralDiscount: ['']
    })
  }

    ngOnInit() {
      this.categoryObj$ = this.campaignService.getCategories(); // get Categories call
      this.ambassadorObj$ = this.campaignService.getAmbassadors(); // get all ambassadorss
    }
    selectedNoOfWeeks(val) {
          console.log(val);
        }
        ambCheckBoxCilck(event) {
          this.ambChecked = !this.ambChecked;
          console.log(event);
        }
        sepAmbPerksClick(event) {
          this.sepAmbPerksChecked = !this.sepAmbPerksChecked;
          console.log(event);
        }
        sameAmbPerksClick(event) {
          this.sepAmbPerksChecked = false;
        }
        refCheckBoxClick(event) {
          this.refChecked = !this.refChecked;
        }
        sepRefPerksClick(event) {
          this.sepRefPerksChecked = !this.sepRefPerksChecked;
        }
        sameRefPerksClick(event) {
          this.sepRefPerksChecked = false;
        }

    discountTypesSelection(value) {
      console.log(value);
      if (value === 'fixed') {
        this.discountTxtType = 'number';
      } else if (value === 'percentage') {
        this.discountTxtType = 'number';
      } else if (value === 'other') {
       this.discountTxtType = 'text'
      }
    }

    ambDiscountTypesSelection(value) {
      if (value === 'fixed') {
        this.discountTxtType = 'number';
        this.ambDiscountPlaceholder = 'Enter Fixed Discount Amount'
      } else if (value === 'percentage') {
        this.discountTxtType = 'number';
        this.ambDiscountPlaceholder = 'Enter discount in percentage'
      } else if (value === 'other') {
        this.ambDiscountPlaceholder = 'Enter Details'
       this.discountTxtType = 'text'
      }
    }
    refDiscountTypesSelection(value) {
      if (value === 'fixed') {
        this.discountTxtType = 'number';
        this.refDiscountPlaceholder = 'Enter Fixed Discount Amount'
      } else if (value === 'percentage') {
        this.discountTxtType = 'number';
        this.refDiscountPlaceholder = 'Enter discount in percentage'
      } else if (value === 'other') {
        this.refDiscountPlaceholder = 'Enter Details'
       this.discountTxtType = 'text'
      }
    }







    handleFileSelect($event) {
      console.log($event);
      console.log($event.target.files);
      this.fileName = $event.target.files[0].name;
      this.getBase64($event.target.files[0], result => {
        this.base64 = result;
        // this.file.emit(this.base64);
      });
    }

    getBase64(file, cb) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        cb(reader.result);
      };
      reader.onerror = function(error) {
        console.log('Error: ', error);
      };
    }

    clear() {
      this.base64 = '';
      this.fileName = '';
    }

    // Setting values to payload
    SetPayload() {
      this.payloadObj.ambassadorIds = this.secondFormGroup.get('ambassadorIds').value;
      this.payloadObj.campaignType = this.firstFormGroup.get('campaignType').value;
      this.payloadObj.categoryId = this.firstFormGroup.get('categoryId').value;
      this.payloadObj.description = this.firstFormGroup.get('description').value;
      const discountAmount = {
        baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
        ambassadorDiscountAmount:  this.secondFormGroup.get('ambassadorDiscountAmount').value,
        referralDiscountAmount: this.thirdFormGroup.get('referralDiscountAmount').value
      }
      const discountType = {
        baseDiscount: this.firstFormGroup.get('discountType').value,
        ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount').value,
        referralDiscount: this.thirdFormGroup.get('referralDiscount').value
      }

      const discountUtilization = {
        ambassador :  {
          type: this.secondFormGroup.get('ambDiscountUtilization').value,
          number: this.secondFormGroup.get('ambNumber').value
        },
        user : {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        }

      }
      // this.discountAmount['baseDiscountAmount'] = this.firstFormGroup.get('baseDiscountAmount').value;
      // this.discountAmount.ambassadorDiscountAmount = this.secondFormGroup.get('ambassadorDiscountAmount').value;
      // this.discountAmount.referralDiscountAmount  = this.thirdFormGroup.get('referralDiscountAmount').value;
       this.payloadObj.discountAmount = discountAmount;
      // this.discountType.baseDiscount = this.firstFormGroup.get('discountType').value;
      // this.discountType.ambassadorDiscount = this.secondFormGroup.get('ambassadorDiscount').value;
      // this.discountType.referralDiscount = this.thirdFormGroup.get('referralDiscount').value;
       this.payloadObj.discountType = discountType;
      // this.ambassador.type = this.secondFormGroup.get('ambDiscountUtilization').value;
      // this.ambassador.number = this.secondFormGroup.get('abNumber').value;
       this.payloadObj.discountUtilization.ambassador = discountUtilization.ambassador;
      // this.user.type = this.firstFormGroup.get('discountUtilization').value;
      // this.user.number = this.firstFormGroup.get('number').value;
       this.payloadObj.discountUtilization.user = discountUtilization.user;
       this.payloadObj.isApproved = false;
       const temp = JSON.parse(localStorage.getItem('user'));
       this.payloadObj.merchantId =  temp['userId'] ;
       this.payloadObj.noOfWeeks = this.firstFormGroup.get('noOfWeeks').value;
       this.payloadObj.startDate = this.firstFormGroup.get('startDate').value;
       this.payloadObj.termsAndConditions = this.firstFormGroup.get('termsAndConditions').value;
       this.payloadObj.title = this.firstFormGroup.get('title').value;

      console.log(this.payloadObj);
      this.campaignService.createCampaign(this.payloadObj).subscribe(
        res => {
          const id = res['id'];
          this.imageFunc(id);
          alert('camapign created');

        }, err => {
          alert('err creating campagin');

        }
      );
    }
    imageFunc(id) {
      this.imageObj = {
        base64: this.base64,
        container: '/campaign',
        fileName: id,
        model: 'Campaign',
        id: id,
        updateAt: 'displayImage'
      };
      this.campaignService.uploadImage(this.imageObj).subscribe(
        res => {
          alert('image uploaded successfully')

        }, err => {
          alert('error uploading image')
        }
      )
    }




  // done

}

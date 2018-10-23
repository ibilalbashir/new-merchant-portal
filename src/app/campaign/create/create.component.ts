import { environment } from './../../../environments/environment';
import { MatDialog } from '@angular/material';
import { CreateCategoryComponent } from './../create-category/create-category.component';
import swal from 'sweetalert2';
import { CampaignService } from './../../shared/services/campaign.service';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import { ImageCroppedEvent } from 'ngx-image-cropper/src/image-cropper.component';

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
  temp: any;
  imagePicked = false;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  isOptional = false;
  fileName: any;
  base64 = new FormControl('', Validators.required);
  file: any;
  categoryObj$: Observable<object>;
  ambassadorObj$: Observable<object>;
  isLinear = false;
  status = true;
  discountTxtType = 'number';
  ambDiscountPlaceholder = 'input Vlaue';
  refDiscountPlaceholder = 'input Vlaue';
  ambChecked = false;
  sepAmbPerksChecked = false;
  refChecked = false;
  sepRefPerksChecked = false;
  sameAmbPerksChecked = false;
  sameRefPerksChecked = false;
  minDate = new Date();
  newCategoryChecked = false;
  imageSize = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  imageFormGroup: FormGroup;
  // thirdFormGroup: FormGroup;

  payloadObj = {
    ambassadorIds: [],
    campaignType: '',
    categoryId: '',
    description: '',
    discountAmount: {},
    discountType: {},
    discountUtilization: { ambassador: {}, user: {} },
    isApproved: false,
    isRejected: false,
    merchantId: '',
    noOfWeeks: 0,
    startDate: '',
    termsAndConditions: '',
    title: '',
    createdOn: new Date()
  };
  discountAmount;
  discountType;
  discountUtilization;

  imageObj: any;

  weeks = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' }
  ];
  utilizationNumber = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
    { value: '4', viewValue: '4' },
    { value: '5', viewValue: '5' },
    { value: '6', viewValue: '6' },
    { value: '7', viewValue: '7' },
    { value: '8', viewValue: '8' },
    { value: '9', viewValue: '9' },
    { value: '10', viewValue: '10' }
  ];
  campaignTypes = [
    { value: 'online', viewValue: 'Online' },
    { value: 'offline', viewValue: 'Offline' },
    { value: 'both', viewValue: 'Both' }
  ];
  discountTypes = [
    { value: 'fixed', viewValue: 'Fixed' },
    { value: 'percentage', viewValue: 'Percentage' },
    { value: 'other', viewValue: 'Other' }
  ];
  utilizations = [
    { value: 'n_days', viewValue: 'How Many Times a Day' },
    { value: 'n_weeks', viewValue: 'How Many Times a Week' },
    { value: 'n_campaign', viewValue: 'How Many Times Entire Campaign' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private campaignService: CampaignService,
    public dialog: MatDialog
  ) {
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
      // newCategoryText: ['']
    });
    this.secondFormGroup = formBuilder.group({
      secondCtrl: [],
      ambNumber: [''],
      ambDiscountUtilization: [''],
      ambassadorDiscount: [''],
      ambassadorDiscountAmount: [''],
      ambassadorIds: [],
      referralDiscountAmount: [''],
      referralDiscount: ['']
    });
    this.imageFormGroup = formBuilder.group({
      imagePicker: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.categoryObj$ = this.campaignService.getCategories(); // get Categories call
    this.ambassadorObj$ = this.campaignService.getAmbassadors(); // get all ambassadorss

    if (
      environment.navigatedFromArchived === true &&
      environment.campaignIdToReActivate !== ''
    ) {
      this.campaginById();
    }
  }
  campaginById() {
    this.campaignService
      .getCampaignById(environment.campaignIdToReActivate)
      .subscribe(
        res => {
          environment.navigatedFromArchived = false;
          environment.campaignIdToReActivate = '';
          console.log(res);
          // console.log('nwe new new', res['discountType'].baseDiscount);
          console.log('this is start date', res['startDate']);
          this.campaignService.getCategoryById(res['categoryId']).subscribe(
            response => {
              this.temp = response['name'];
              console.log('category name', this.temp);
            },
            error => {
              console.log('there is an error', error);
            }
          );

          this.firstFormGroup.setValue({
            title: res['title'],
            description: res['description'],
            termsAndConditions: res['termsAndConditions'],
            // categoryId: this.temp,
            categoryId: res['categoryId'],
            campaignType: res['campaignType'],
            startDate: res['startDate'],
            noOfWeeks: res['noOfWeeks'],
            discountType: res['discountType'].baseDiscount,
            discountUtilization: res['discountUtilization'].user['type'],
            number: res['discountUtilization'].user['number'],
            baseDiscountAmount: res['discountAmount'].baseDiscountAmount
          });
          console.log(
            ' this is number of weeks',
            this.firstFormGroup.get('noOfWeeks').value
          );
        },
        err => {
          console.log(err);
        }
      );
  }
  selectedNoOfWeeks(val) {
    console.log(val);
  }
  ambCheckBoxCilck(event) {
    // this.ambChecked = !this.ambChecked;
    this.ambChecked = event;
    if (!event) {
      this.sepAmbPerksChecked = false;
      this.refChecked = false;
      this.sepRefPerksChecked = false;
      this.secondFormGroup.reset();
      // this.thirdFormGroup.reset();
    }

    console.log(event);
  }
  sepAmbPerksClick(event) {
    this.sepAmbPerksChecked = true;
    this.sameAmbPerksChecked = false;
    console.log(event);
  }
  sameAmbPerksClick(event) {
    this.sepAmbPerksChecked = false;
    this.sameAmbPerksChecked = true;
  }
  refCheckBoxClick(event) {
    this.refChecked = event;
    if (!event) {
      this.sepRefPerksChecked = false;
      // this.thirdFormGroup.reset();
    }
  }

  sepRefPerksClick(event) {
    this.sepRefPerksChecked = true;
    this.sameRefPerksChecked = false;
  }
  sameRefPerksClick(event) {
    this.sepRefPerksChecked = false;
    this.sameRefPerksChecked = true;
  }
  newCategoryFn() {
    this.newCategoryChecked = true;
  }
  categoryCheckedFn() {
    this.newCategoryChecked = false;
  }

  discountTypesSelection(value) {
    console.log(value);
    if (value === 'fixed') {
      this.discountTxtType = 'number';
    } else if (value === 'percentage') {
      this.discountTxtType = 'number';
    } else if (value === 'other') {
      this.discountTxtType = 'text';
    }
  }

  ambDiscountTypesSelection(value) {
    if (value === 'fixed') {
      this.discountTxtType = 'number';
      this.ambDiscountPlaceholder = 'Enter Fixed Discount Amount';
    } else if (value === 'percentage') {
      this.discountTxtType = 'number';
      this.ambDiscountPlaceholder = 'Enter discount in percentage';
    } else if (value === 'other') {
      this.ambDiscountPlaceholder = 'Enter Details';
      this.discountTxtType = 'text';
    }
  }
  refDiscountTypesSelection(value) {
    if (value === 'fixed') {
      this.discountTxtType = 'number';
      this.refDiscountPlaceholder = 'Enter Fixed Discount Amount';
    } else if (value === 'percentage') {
      this.discountTxtType = 'number';
      this.refDiscountPlaceholder = 'Enter discount in percentage';
    } else if (value === 'other') {
      this.refDiscountPlaceholder = 'Enter Details';
      this.discountTxtType = 'text';
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  handleFileSelect($event) {
    console.log($event);
    console.log($event.target.files);
    this.fileName = $event.target.files[0].name;
    this.getBase64($event.target.files[0], result => {
      if ($event.target.files[0].size / 1024 > 100) {
        this.imageSize = true;
      } else {
        this.imageSize = false;
      }
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

  // clear() {
  //   this.base64.setValue = '';
  //   this.fileName = '';
  // }

  // Setting values to payload
  SetPayload() {
    this.payloadObj.ambassadorIds = this.secondFormGroup.get(
      'ambassadorIds'
    ).value;
    this.payloadObj.campaignType = this.firstFormGroup.get(
      'campaignType'
    ).value;
    this.payloadObj.categoryId = this.firstFormGroup.get('categoryId').value;
    this.payloadObj.description = this.firstFormGroup.get('description').value;
    if (this.sameAmbPerksChecked && this.sameRefPerksChecked) {
      this.discountUtilization = {
        ambassador: {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        },
        user: {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        }
      };
      this.discountType = {
        baseDiscount: this.firstFormGroup.get('discountType').value,
        ambassadorDiscount: this.firstFormGroup.get('discountType').value,
        referralDiscount: this.firstFormGroup.get('discountType').value
      };
      this.discountAmount = {
        baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,

        ambassadorDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
          .value,
        referralDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
          .value
      };
    } else if (this.sameAmbPerksChecked && !this.sameRefPerksChecked) {
      this.discountUtilization = {
        ambassador: {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        },
        user: {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        }
      };
      this.discountType = {
        baseDiscount: this.firstFormGroup.get('discountType').value,
        ambassadorDiscount: this.firstFormGroup.get('discountType').value,
        referralDiscount: this.secondFormGroup.get('referralDiscount').value
      };
      this.discountAmount = {
        baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,

        ambassadorDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
          .value,
        referralDiscountAmount: this.secondFormGroup.get(
          'referralDiscountAmount'
        ).value
      };
    } else if (!this.sameAmbPerksChecked && this.sameRefPerksChecked) {
      this.discountUtilization = {
        ambassador: {
          type: this.secondFormGroup.get('ambDiscountUtilization').value,
          number: this.secondFormGroup.get('ambNumber').value
        },
        user: {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        }
      };
      this.discountType = {
        baseDiscount: this.firstFormGroup.get('discountType').value,
        ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount')
          .value,
        referralDiscount: this.firstFormGroup.get('discountType').value
      };
      this.discountAmount = {
        baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,

        ambassadorDiscountAmount: this.secondFormGroup.get(
          'ambassadorDiscountAmount'
        ).value,
        referralDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
          .value
      };
    } else if (!this.sameAmbPerksChecked && !this.sameRefPerksChecked) {
      this.discountUtilization = {
        ambassador: {
          type: this.secondFormGroup.get('ambDiscountUtilization').value,
          number: this.secondFormGroup.get('ambNumber').value
        },
        user: {
          type: this.firstFormGroup.get('discountUtilization').value,
          number: this.firstFormGroup.get('number').value
        }
      };
      this.discountType = {
        baseDiscount: this.firstFormGroup.get('discountType').value,
        ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount')
          .value,
        referralDiscount: this.secondFormGroup.get('referralDiscount').value
      };
      this.discountAmount = {
        baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,

        ambassadorDiscountAmount: this.secondFormGroup.get(
          'ambassadorDiscountAmount'
        ).value,
        referralDiscountAmount: this.secondFormGroup.get(
          'referralDiscountAmount'
        ).value
      };
    }

    this.payloadObj.discountAmount = this.discountAmount;

    this.payloadObj.discountType = this.discountType;

    this.payloadObj.discountUtilization.ambassador = this.discountUtilization.ambassador;

    this.payloadObj.discountUtilization.user = this.discountUtilization.user;
    this.payloadObj.isApproved = false;
    this.payloadObj.isRejected = false;
    const temp = JSON.parse(localStorage.getItem('user'));
    this.payloadObj.merchantId = temp['userId'];
    this.payloadObj.noOfWeeks = this.firstFormGroup.get('noOfWeeks').value;
    this.payloadObj.startDate = this.firstFormGroup.get('startDate').value;
    this.payloadObj.termsAndConditions = this.firstFormGroup.get(
      'termsAndConditions'
    ).value;
    this.payloadObj.title = this.firstFormGroup.get('title').value;

    console.log(this.payloadObj);
    this.campaignService.createCampaign(this.payloadObj).subscribe(
      res => {
        const id = res['id'];
        this.imageFunc(id);
        swal('Campaign Created', 'Campaign Created Successfully', 'success');
      },
      err => {
        swal('Error', 'Something Went Wrong', 'error');
      }
    );
  }
  imageFunc(id) {
    this.imageObj = {
      base64: this.croppedImage,
      container: '/campaign',
      fileName: id,
      model: 'Campaign',
      id: id,
      updateAt: 'displayImage'
    };
    this.campaignService.uploadImage(this.imageObj).subscribe(
      res => {
        console.log('Image uploaded successfully');
      },
      err => {
        console.log('image upload errer');
      }
    );
  }

  // done
  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
    this.imagePicked = true;
  }
  imageCropped(event: ImageCroppedEvent) {
    console.log(event);
    this.croppedImage = event.base64;
    if (event.file.size / 1024 > 100 && event.file.size / 1024 < 1000) {
      this.imageSize = true;
    } else {
      this.imageSize = false;
    }
    console.log(event.file.size);
    console.log('nsdvliunekjvnwi');
    this.base64.setValue(this.croppedImage);
  }
  imageLoaded() {
    // alert('image loaded');
    // show cropper
  }
  loadImageFailed() {
    // s alert('load image failed');
    // show message
  }
}

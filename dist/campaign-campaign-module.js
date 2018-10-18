(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-campaign-module"],{

/***/ "./src/app/campaign/campaign-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/campaign/campaign-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRoutingModule", function() { return CampaignRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ "./src/app/campaign/view/view.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create/create.component */ "./src/app/campaign/create/create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '', component: _view_view_component__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"]
    },
    {
        path: 'create', component: _create_create_component__WEBPACK_IMPORTED_MODULE_3__["CreateComponent"]
    }
];
var CampaignRoutingModule = /** @class */ (function () {
    function CampaignRoutingModule() {
    }
    CampaignRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CampaignRoutingModule);
    return CampaignRoutingModule;
}());



/***/ }),

/***/ "./src/app/campaign/campaign.module.ts":
/*!*********************************************!*\
  !*** ./src/app/campaign/campaign.module.ts ***!
  \*********************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./campaign-routing.module */ "./src/app/campaign/campaign-routing.module.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create/create.component */ "./src/app/campaign/create/create.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view/view.component */ "./src/app/campaign/view/view.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CampaignModule = /** @class */ (function () {
    function CampaignModule() {
    }
    CampaignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _campaign_routing_module__WEBPACK_IMPORTED_MODULE_3__["CampaignRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"]
            ],
            declarations: [_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"]]
        })
    ], CampaignModule);
    return CampaignModule;
}());



/***/ }),

/***/ "./src/app/campaign/create/create.component.html":
/*!*******************************************************!*\
  !*** ./src/app/campaign/create/create.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 80px\">\r\n       <div class=\"row\">\r\n           <div class=\"col-12\">\r\n                <mat-horizontal-stepper linear #stepper>\r\n                        <mat-step [stepControl]=\"firstFormGroup\" [optional]=\"isOptional\">\r\n                                <div class=\"row\">\r\n                                        <div class=col-8>\r\n                            <form [formGroup]=\"firstFormGroup\">\r\n                                        <ng-template matStepLabel>Campagin Details</ng-template>\r\n                                <div class=row><!-- row 1 -->\r\n                                <div class=col-12>\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Campaign Title\" formControlName=\"title\" >\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                </div><!-- end  row 1 -->\r\n                                <div class=\"row\"> <!--Row 2-->\r\n                                        <div class=\"col-6\">\r\n                                                <mat-form-field>\r\n                                        <textarea matInput placeholder=\"Terms and Conditions\" formControlName=\"termsAndConditions\">\r\n                    \r\n                                        </textarea>\r\n                                    </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-6\">\r\n                                                        <mat-form-field>\r\n                                                <textarea matInput placeholder=\"Description\" formControlName=\"description\">\r\n                            \r\n                                                </textarea>\r\n                                            </mat-form-field>\r\n                                                </div>\r\n                                        \r\n                                </div><!--End of row 2-->\r\n                                \r\n                                    <div class=\"row\"><!--Row 3-->\r\n                                            <div class=\"col-4\">\r\n                                                        <mat-form-field>\r\n                                                                <mat-select placeholder=\"campaginType\" formControlName=\"campaignType\"> \r\n                                                                        <mat-option *ngFor=\"let row of campaignTypes\" [value]=\"row.value\">\r\n                                                                        {{row.viewValue}}\r\n                                                                                   \r\n                                                                        </mat-option>\r\n                                                                                \r\n                                                                </mat-select>\r\n                                                        </mat-form-field>\r\n                                            </div>\r\n                                            <div class=\"col-4\">\r\n                                                        <mat-form-field>\r\n                                                                <input [min]=\"minDate\" matInput formControlName=\"startDate\" [matDatepicker]=\"dp3\" placeholder=\"Strating date\"  (click)= \"dp3.open()\">\r\n                                                                <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n                                                                <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n                                                         </mat-form-field>\r\n                                                    \r\n                                            </div>\r\n                                            <div class=\"col-4\">\r\n                                                <mat-form-field>\r\n                                                <mat-select placeholder=\"Number of Weeks\" formControlName=\"noOfWeeks\" (selectionChange)=\"selectedNoOfWeeks($event.value)\" > \r\n                                                        <mat-option *ngFor=\"let row of weeks\" [value] =\"row.value \">\r\n                                                        {{row.viewValue}}\r\n                                                        </mat-option>\r\n                                                        \r\n                                                </mat-select>\r\n                                                </mat-form-field>\r\n\r\n                                            </div>\r\n\r\n                                    </div><!--End of row 3-->\r\n                                \r\n                                    <mat-form-field>\r\n                                                <mat-select placeholder=\"Campaign Category\" formControlName=\"categoryId\" > \r\n                                                        <mat-option *ngFor=\"let row of (categoryObj$ | async)\" [value]=\"row?.id\">\r\n                                                        {{ row?.name }}\r\n                                                        </mat-option>\r\n                                                        \r\n                                                        \r\n                                                </mat-select>\r\n                                        </mat-form-field>\r\n                                   \r\n                                    \r\n                                          <div class=row><!--row 4-->\r\n                                                <div class=\"col-6\">\r\n                                        <mat-form-field>\r\n                                                <mat-select placeholder=\"Discount Type\" formControlName=\"discountType\" (selectionChange)=\"discountTypesSelection($event.value)\"> \r\n                                                        <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                                                        {{row.viewValue}}\r\n                                                        </mat-option>\r\n                                                </mat-select>\r\n                                        </mat-form-field>\r\n                                </div>\r\n                                <div class=col-6>\r\n                                                <mat-form-field>\r\n                                                <input matInput placeholder=\"Input value\" formControlName=\"baseDiscountAmount\" [type]=\"discountTxtType\">\r\n                                                </mat-form-field>\r\n                                </div>\r\n                                </div><!-- end of row 4-->\r\n                                <div class=row><!--row 5-->\r\n                                        <div class=\"col-6\">\r\n                                        <mat-form-field>\r\n                                                <mat-select placeholder=\"Discount Utilization\" formControlName=\"discountUtilization\"> \r\n                                                        <mat-option *ngFor=\"let row of utilizations\" [value]=\"row.value\">\r\n                                                                {{row.viewValue}}\r\n                                                        </mat-option>\r\n                                                        \r\n                                                        \r\n                                                      </mat-select>\r\n                                        </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                        <mat-form-field>\r\n                                                <mat-select placeholder=\"pick a number\" formControlName=\"number\">\r\n                                                        <mat-option *ngFor=\"let row of utilizationNumber\" [value]=\"row.value\">\r\n                                                                {{row.viewValue}}\r\n                                                        </mat-option>\r\n                                                </mat-select>\r\n                                        </mat-form-field>\r\n\r\n                                </div>\r\n                                </div><!--end of Row 5-->\r\n\r\n                            </form>\r\n                        </div>\r\n                        <div class=\"col-4\">\r\n                            <form [formGroup]=\"imageFormGroup\"><!-- image form-->\r\n                                        <ng-template matStepLabel>Campaign Creation</ng-template>\r\n                                        <div class=\"card-body\">\r\n                                          <div class=\"tab-content\">\r\n                                            <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                                              <div class=\"fileinput-new thumbnail\">\r\n                                                <img src=\"../../../assets/img/image_placeholder.jpg\" alt=\"...\">\r\n                                              </div>\r\n                                              <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\r\n                                              <div>\r\n                                                <span class=\"btn btn-primary btn-round btn-file\">\r\n                                                  <span class=\"fileinput-new\">Select Campaign Image</span>\r\n                                                  <span class=\"fileinput-exists\">Change</span>\r\n                                                  <input type=\"file\" (change)=\"handleFileSelect($event)\" accept=\".jpg, .jpeg, .png\">\r\n                                                </span>\r\n                                                <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\"\r\n                                                  (change)=\"clear()\">\r\n                                                  <i class=\"fa fa-times\"></i> Remove</a>\r\n                                              </div>\r\n                                            </div>\r\n                                          </div>\r\n                                        </div>\r\n                                        \r\n                                      </form><!--image form end -->\r\n                                </div>\r\n                                </div>\r\n\r\n                                <div>\r\n                                                <button class=\"btn btn-round btn-primary\" mat-button matStepperNext>Next</button>\r\n                                              </div>\r\n                        </mat-step>\r\n                        <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\r\n                                <form [formGroup]=\"secondFormGroup\">\r\n                                                <ng-template matStepLabel>Ambassader Perks</ng-template>\r\n                                                <div class=row>\r\n                                                        <div class=\"col-12\">\r\n                                                <mat-checkbox (change)=\"ambCheckBoxCilck($event.checked)\" >Do you want Ambassaders for your campaign?</mat-checkbox>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div class=row>\r\n                                                <div class=\"col-12\" *ngIf=\"ambChecked\">\r\n                                                <mat-radio-group>\r\n                                                        <mat-radio-button (change)=\"sameAmbPerksClick($event.checked)\" value=\"1\" >Same perks as normal User      </mat-radio-button>\r\n                                                        <mat-radio-button (change)=\"sepAmbPerksClick($event.checked)\" value=\"2\">define Ambassadors  perks separately</mat-radio-button>\r\n                                                </mat-radio-group>\r\n                                        </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"sepAmbPerksChecked\">\r\n                                        <div class=\"row\">\r\n                                        <div class=\"col-6\">\r\n                                        <mat-form-field>\r\n                                                        <mat-select placeholder=\"Discount Utilization\" formControlName=\"ambDiscountUtilization\"> \r\n                                                                <mat-option *ngFor=\"let row of utilizations\" [value]=\"row.value\">\r\n                                                                        {{row.viewValue}}\r\n                                                                </mat-option>\r\n                                                                \r\n                                                                \r\n                                                              </mat-select>\r\n                                                </mat-form-field>\r\n                                        </div>\r\n                                        <div class=\"col-6\">\r\n                                                <mat-form-field>\r\n                                                                <mat-select placeholder=\"pick a number\" formControlName=\"ambNumber\">\r\n                                                                        <mat-option *ngFor=\"let row of utilizationNumber\" [value]=\"row.value\">\r\n                                                                                {{row.viewValue}}\r\n                                                                        </mat-option>\r\n                                                                </mat-select>\r\n                                                        </mat-form-field>\r\n                                        </div>\r\n                                        </div> \r\n                                \r\n                                        <div class=\"row\">\r\n                                                <div class=\"col-6\">\r\n                                                        <mat-form-field>\r\n                                                                <mat-select placeholder=\"Discount Type\" formControlName=\"ambassadorDiscount\" (selectionChange)=\"ambDiscountTypesSelection($event.value)\"> \r\n                                                                        <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                                                                        {{row.viewValue}}\r\n                                                                        </mat-option>\r\n                                                                        </mat-select>\r\n                                                                </mat-form-field>\r\n\r\n                                                </div>\r\n                                                <div class=\"col-6\">\r\n                                                        <mat-form-field>\r\n                                                                <input min=\"0\" matInput [placeholder]=\"ambDiscountPlaceholder\" formControlName=\"ambassadorDiscountAmount\" [type]=\"discountTxtType\">\r\n                                                        </mat-form-field>\r\n\r\n                                                </div>\r\n                                        </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                                <div class=\"col-12\" *ngIf=\"ambChecked\">\r\n                                                <mat-form-field>\r\n                                                                <mat-select placeholder=\"Select Ambassadors\" formControlName=\"ambassadorIds\" multiple>\r\n                                                                  <mat-option *ngFor=\"let row of (ambassadorObj$ | async)\" [value]=\"{'id' : row?.id,'referralCode' : row?.referralCode}\">\r\n                                                                    {{row?.firstName}} {{row?.lastName}}\r\n                                                                  </mat-option>\r\n                                                                </mat-select>\r\n\r\n                                                              </mat-form-field>\r\n                                                        </div>\r\n                                                </div>\r\n\r\n                                        \r\n                               \r\n                                        <div>\r\n                                                        <button class=\"btn btn-round btn-primary\" mat-button matStepperPrevious>Back</button>\r\n                                                        <button style=\"float: right\" class=\"btn btn-round btn-primary\" mat-button matStepperNext>Next</button>\r\n                                                      </div>\r\n                                </form>\r\n                            \r\n                        </mat-step>\r\n                        <mat-step [stepControl]=\"thirdFormGroup\" [optional]=\"isOptional\">\r\n                                <div class=\"container\">\r\n                        <form [formGroup]=\"thirdFormGroup\">\r\n                                \r\n                                <ng-template matStepLabel>Referral Perks</ng-template>\r\n                                <div class=\"row\">\r\n                                <mat-checkbox *ngIf=\"ambChecked\"  (change)=\"refCheckBoxClick($event.checked)\">Do you want referrals for your cammpaign?</mat-checkbox>\r\n                                </div>\r\n                                <div class=\"row\" *ngIf=\"refChecked\">\r\n                                <mat-radio-group>\r\n                                        <mat-radio-button (change)=\"sameRefPerksClick($event.checked)\" value=\"1\">Same perks as normal User      </mat-radio-button>\r\n                                        <mat-radio-button (change)=\"sepRefPerksClick($event.checked)\" value=\"2\">define Referral perks separately</mat-radio-button>\r\n                                </mat-radio-group>\r\n                                </div> \r\n                                <div class=\"row\" *ngIf=\"sepRefPerksChecked\">\r\n                                <div class=\"col-6\">\r\n                                <mat-form-field>\r\n                                        <mat-select placeholder=\"Discount Type\" formControlName=\"referralDiscount\" (selectionChange)=\"refDiscountTypesSelection($event.value)\"> \r\n                                                <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                                                {{row.viewValue}}\r\n                                                </mat-option>\r\n                                                </mat-select>\r\n                                        </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col-6\">\r\n                                        <mat-form-field>\r\n                                                <input min=\"0\" matInput [placeholder]=\"refDiscountPlaceholder\" formControlName=\"referralDiscountAmount\" [type]=\"discountTxtType\">\r\n                                        </mat-form-field>\r\n                                </div>\r\n                                </div>\r\n                                        \r\n\r\n\r\n\r\n\r\n                                <div>\r\n                                <button class=\"btn btn-round btn-primary\" mat-button matStepperPrevious>Back</button>\r\n                                <button (click)=\"SetPayload()\" style=\"float: right;\" class=\"btn btn-round btn-lg\" mat-button >Create Campaign</button>\r\n                                </div>\r\n                        </form>\r\n                </div>\r\n                        </mat-step>\r\n                    </mat-horizontal-stepper>\r\n           </div>\r\n       </div>\r\n</div>"

/***/ }),

/***/ "./src/app/campaign/create/create.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/campaign/create/create.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campaign/create/create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/campaign/create/create.component.ts ***!
  \*****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(formBuilder, campaignService) {
        this.formBuilder = formBuilder;
        this.campaignService = campaignService;
        this.isOptional = false;
        this.isLinear = false;
        this.status = true;
        this.discountTxtType = 'number';
        this.ambDiscountPlaceholder = 'input Vlaue';
        this.refDiscountPlaceholder = 'input Value';
        this.ambChecked = false;
        this.sepAmbPerksChecked = false;
        this.refChecked = false;
        this.sepRefPerksChecked = false;
        this.sameAmbPerksChecked = false;
        this.sameRefPerksChecked = false;
        this.minDate = new Date();
        this.payloadObj = {
            ambassadorIds: [],
            campaignType: '',
            categoryId: '',
            description: '',
            discountAmount: {},
            discountType: {},
            discountUtilization: { ambassador: {}, user: {} },
            isApproved: false,
            merchantId: '',
            noOfWeeks: 0,
            startDate: '',
            termsAndConditions: '',
            title: '',
            createdOn: new Date()
        };
        this.weeks = [
            { value: '1', viewValue: '1' },
            { value: '2', viewValue: '2' },
            { value: '3', viewValue: '3' },
            { value: '4', viewValue: '4' }
        ];
        this.utilizationNumber = [
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
        this.campaignTypes = [
            { value: 'online', viewValue: 'Online' },
            { value: 'offline', viewValue: 'Offline' },
            { value: 'both', viewValue: 'Both' }
        ];
        this.discountTypes = [
            { value: 'fixed', viewValue: 'Fixed' },
            { value: 'percentage', viewValue: 'Percentage' },
            { value: 'other', viewValue: 'Other' }
        ];
        this.utilizations = [
            { value: 'n_days', viewValue: 'How Many Times a Day' },
            { value: 'n_weeks', viewValue: 'How Many Times a Week' },
            { value: 'n_campaign', viewValue: 'How Many Times Entire Campaign' }
        ];
        this.firstFormGroup = formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            termsAndConditions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            campaignType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            startDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            noOfWeeks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            discountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            discountUtilization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            baseDiscountAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = formBuilder.group({
            secondCtrl: [],
            ambNumber: [''],
            ambDiscountUtilization: [''],
            ambassadorDiscount: [''],
            ambassadorDiscountAmount: [''],
            ambassadorIds: []
        });
        this.imageFormGroup = formBuilder.group({});
        this.thirdFormGroup = formBuilder.group({
            thirdFormGroup: [''],
            referralDiscountAmount: [''],
            referralDiscount: ['']
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.categoryObj$ = this.campaignService.getCategories(); // get Categories call
        this.ambassadorObj$ = this.campaignService.getAmbassadors(); // get all ambassadorss
    };
    CreateComponent.prototype.selectedNoOfWeeks = function (val) {
        console.log(val);
    };
    CreateComponent.prototype.ambCheckBoxCilck = function (event) {
        // this.ambChecked = !this.ambChecked;
        this.ambChecked = event;
        if (!event) {
            this.sepAmbPerksChecked = false;
            this.refChecked = false;
            this.sepRefPerksChecked = false;
            this.secondFormGroup.reset();
            this.thirdFormGroup.reset();
        }
        //    if (!event) {
        //       this.secondFormGroup.get('ambDiscountUtilization').value.clear();
        // //       this.secondFormGroup.get('ambNumber').reset();
        // //       this.secondFormGroup.get('ambassadorDiscount').reset();
        // // // //             ambDiscountUtilization: [''],
        // // // // ambassadorDiscount: [''],
        // // // // ambassadorDiscountAmount: [''],
        // // // // ambassadorIds: [ ]
        //   }
        console.log(event);
    };
    CreateComponent.prototype.sepAmbPerksClick = function (event) {
        this.sepAmbPerksChecked = true;
        this.sameAmbPerksChecked = false;
        console.log(event);
    };
    CreateComponent.prototype.sameAmbPerksClick = function (event) {
        this.sepAmbPerksChecked = false;
        this.sameAmbPerksChecked = true;
    };
    CreateComponent.prototype.refCheckBoxClick = function (event) {
        this.refChecked = event;
        if (!event) {
            this.sepRefPerksChecked = false;
            this.thirdFormGroup.reset();
        }
    };
    CreateComponent.prototype.sepRefPerksClick = function (event) {
        this.sepRefPerksChecked = true;
        this.sameRefPerksChecked = false;
    };
    CreateComponent.prototype.sameRefPerksClick = function (event) {
        this.sepRefPerksChecked = false;
        this.sameRefPerksChecked = true;
    };
    CreateComponent.prototype.discountTypesSelection = function (value) {
        console.log(value);
        if (value === 'fixed') {
            this.discountTxtType = 'number';
        }
        else if (value === 'percentage') {
            this.discountTxtType = 'number';
        }
        else if (value === 'other') {
            this.discountTxtType = 'text';
        }
    };
    CreateComponent.prototype.ambDiscountTypesSelection = function (value) {
        if (value === 'fixed') {
            this.discountTxtType = 'number';
            this.ambDiscountPlaceholder = 'Enter Fixed Discount Amount';
        }
        else if (value === 'percentage') {
            this.discountTxtType = 'number';
            this.ambDiscountPlaceholder = 'Enter discount in percentage';
        }
        else if (value === 'other') {
            this.ambDiscountPlaceholder = 'Enter Details';
            this.discountTxtType = 'text';
        }
    };
    CreateComponent.prototype.refDiscountTypesSelection = function (value) {
        if (value === 'fixed') {
            this.discountTxtType = 'number';
            this.refDiscountPlaceholder = 'Enter Fixed Discount Amount';
        }
        else if (value === 'percentage') {
            this.discountTxtType = 'number';
            this.refDiscountPlaceholder = 'Enter discount in percentage';
        }
        else if (value === 'other') {
            this.refDiscountPlaceholder = 'Enter Details';
            this.discountTxtType = 'text';
        }
    };
    CreateComponent.prototype.handleFileSelect = function ($event) {
        var _this = this;
        console.log($event);
        console.log($event.target.files);
        this.fileName = $event.target.files[0].name;
        this.getBase64($event.target.files[0], function (result) {
            _this.base64 = result;
            // this.file.emit(this.base64);
        });
    };
    CreateComponent.prototype.getBase64 = function (file, cb) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result);
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };
    CreateComponent.prototype.clear = function () {
        this.base64 = '';
        this.fileName = '';
    };
    // Setting values to payload
    CreateComponent.prototype.SetPayload = function () {
        var _this = this;
        this.payloadObj.ambassadorIds = this.secondFormGroup.get('ambassadorIds').value;
        this.payloadObj.campaignType = this.firstFormGroup.get('campaignType').value;
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
                ambassadorDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                referralDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value
            };
        }
        else if (this.sameAmbPerksChecked && !this.sameRefPerksChecked) {
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
                referralDiscount: this.thirdFormGroup.get('referralDiscount').value
            };
            this.discountAmount = {
                baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                ambassadorDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                referralDiscountAmount: this.thirdFormGroup.get('referralDiscountAmount').value
            };
        }
        else if (!this.sameAmbPerksChecked && this.sameRefPerksChecked) {
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
                ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount').value,
                referralDiscount: this.firstFormGroup.get('discountType').value
            };
            this.discountAmount = {
                baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                ambassadorDiscountAmount: this.secondFormGroup.get('ambassadorDiscountAmount').value,
                referralDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value
            };
        }
        else if (!this.sameAmbPerksChecked && !this.sameRefPerksChecked) {
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
                ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount').value,
                referralDiscount: this.thirdFormGroup.get('referralDiscount').value
            };
            this.discountAmount = {
                baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                ambassadorDiscountAmount: this.secondFormGroup.get('ambassadorDiscountAmount').value,
                referralDiscountAmount: this.thirdFormGroup.get('referralDiscountAmount').value
            };
        }
        // const discountAmount = {
        //   baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
        //   ambassadorDiscountAmount:  this.secondFormGroup.get('ambassadorDiscountAmount').value,
        //   referralDiscountAmount: this.thirdFormGroup.get('referralDiscountAmount').value
        // }
        // const discountType = {
        //   baseDiscount: this.firstFormGroup.get('discountType').value,
        //   ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount').value,
        //   referralDiscount: this.thirdFormGroup.get('referralDiscount').value
        // }
        // const discountUtilization = {
        //   ambassador :  {
        //     type: this.secondFormGroup.get('ambDiscountUtilization').value,
        //     number: this.secondFormGroup.get('ambNumber').value
        //   },
        //   user : {
        //     type: this.firstFormGroup.get('discountUtilization').value,
        //     number: this.firstFormGroup.get('number').value
        //   }
        // }
        // this.discountAmount['baseDiscountAmount'] = this.firstFormGroup.get('baseDiscountAmount').value;
        // this.discountAmount.ambassadorDiscountAmount = this.secondFormGroup.get('ambassadorDiscountAmount').value;
        // this.discountAmount.referralDiscountAmount  = this.thirdFormGroup.get('referralDiscountAmount').value;
        this.payloadObj.discountAmount = this.discountAmount;
        // this.discountType.baseDiscount = this.firstFormGroup.get('discountType').value;
        // this.discountType.ambassadorDiscount = this.secondFormGroup.get('ambassadorDiscount').value;
        // this.discountType.referralDiscount = this.thirdFormGroup.get('referralDiscount').value;
        this.payloadObj.discountType = this.discountType;
        // this.ambassador.type = this.secondFormGroup.get('ambDiscountUtilization').value;
        // this.ambassador.number = this.secondFormGroup.get('abNumber').value;
        this.payloadObj.discountUtilization.ambassador = this.discountUtilization.ambassador;
        // this.user.type = this.firstFormGroup.get('discountUtilization').value;
        // this.user.number = this.firstFormGroup.get('number').value;
        this.payloadObj.discountUtilization.user = this.discountUtilization.user;
        this.payloadObj.isApproved = false;
        var temp = JSON.parse(localStorage.getItem('user'));
        this.payloadObj.merchantId = temp['userId'];
        this.payloadObj.noOfWeeks = this.firstFormGroup.get('noOfWeeks').value;
        this.payloadObj.startDate = this.firstFormGroup.get('startDate').value;
        this.payloadObj.termsAndConditions = this.firstFormGroup.get('termsAndConditions').value;
        this.payloadObj.title = this.firstFormGroup.get('title').value;
        console.log(this.payloadObj);
        this.campaignService.createCampaign(this.payloadObj).subscribe(function (res) {
            var id = res['id'];
            _this.imageFunc(id);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Campaign Created', 'Campaign Created Successfully', 'success');
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()('Error', 'Something Went Wrong', 'error');
        });
    };
    CreateComponent.prototype.imageFunc = function (id) {
        this.imageObj = {
            base64: this.base64,
            container: '/campaign',
            fileName: id,
            model: 'Campaign',
            id: id,
            updateAt: 'displayImage'
        };
        this.campaignService.uploadImage(this.imageObj).subscribe(function (res) {
            console.log('Image uploaded successfully');
        }, function (err) {
            console.log('image upload errer');
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/campaign/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/campaign/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/campaign/view/view.component.html":
/*!***************************************************!*\
  !*** ./src/app/campaign/view/view.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n      <div class=\"row\">\n          <div class=\"col-md-12\">\n              <input type=\"button\" class=\"btn btn-primary\" value=\"Create campagin\" (click) = \"CreateCampaign()\">\n              <div class=\"card\">\n                <div class=\"card-header card-header-primary card-header-icon\">\n                  <div class=\"card-icon\">\n                    <i class=\"material-icons\">assignment</i>\n                  </div>\n                  <h4 class=\"card-title\">DataTables.net</h4>\n                </div>\n                  <div class=\"card-body\">\n                      <div class=\"toolbar\">\n                          <!--        Here you can write extra buttons/actions for the toolbar              -->\n                      </div>\n                      <div class=\"material-datatables\">\n                        <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\" style=\"width:100%\">\n                              <thead>\n                                  <tr>\n                                    <th>{{ dataTable.headerRow[0] }}</th>\n                                    <th>{{ dataTable.headerRow[1] }}</th>\n                                    <th>{{ dataTable.headerRow[2] }}</th>\n                                    <th>{{ dataTable.headerRow[3] }}</th>\n                                    <th>{{ dataTable.headerRow[4] }}</th>\n                                    <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[5] }}</th>\n                                  </tr>\n                              </thead>\n                              <tfoot>\n                                  <tr>\n                                    <th>{{ dataTable.footerRow[0] }}</th>\n                                    <th>{{ dataTable.footerRow[1] }}</th>\n                                    <th>{{ dataTable.footerRow[2] }}</th>\n                                    <th>{{ dataTable.footerRow[3] }}</th>\n                                    <th>{{ dataTable.footerRow[4] }}</th>\n                                    <th class=\"text-right\">{{ dataTable.footerRow[5] }}</th>\n                                  </tr>\n                              </tfoot>\n                              <tbody>\n                                  <tr *ngFor=\"let row of ($getCampaign|async)\">\n                                      <td>{{row?.title}}</td>\n                                      <td>{{row?.description}}</td>\n                                      <td>{{row?.noOfWeeks}}</td>\n                                      <td>{{row?.startDate}}</td>\n                                      <td>\n                                      <div class=\"form-check\">\n                                            <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"row.isApproved\" disabled=\"true\">\n                                            <span class=\"form-check-sign\">\n                                              <span class=\"check\"></span>\n                                            </span>\n                    \n                                          </div>\n                                        </td>\n                                        <td><img class=\"img-fluid\" src=\"{{row?.displayImage}}\" alt=\"No Image Available\"></td>\n                                      <td class=\"text-right\">\n                                        <button *ngIf=\"row.isApproved\" (click) = \"verifyCoupnCodeFn(row?.id)\" class=\"btn btn-danger btn-sm\">Verify CouponCode</button>\n                                        <button *ngIf=\"!row.isApproved\" (click)=\"notApprovedMessage()\" class=\"btn btn-light btn-sm\">Not Approved Yet</button>\n                                      </td>\n                                  </tr>\n                              </tbody>\n                          </table>\n                      </div>\n                  </div>\n                  <!-- end content-->\n              </div>\n              <!--  end card  -->\n          </div>\n          <!-- end col-md-12 -->\n      </div>\n      <!-- end row -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/campaign/view/view.component.scss":
/*!***************************************************!*\
  !*** ./src/app/campaign/view/view.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campaign/view/view.component.ts":
/*!*************************************************!*\
  !*** ./src/app/campaign/view/view.component.ts ***!
  \*************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = /** @class */ (function () {
    function ViewComponent(router, campaignService) {
        this.router = router;
        this.campaignService = campaignService;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.$getCampaign = this.campaignService.getCampaigns();
        this.dataTable = {
            headerRow: ['Title', 'Description', 'Weeks', 'Start Date', 'Approved', 'Image'],
            footerRow: ['Title', 'Description', 'Weeks', 'Start Date', 'Approved', 'Image'],
            dataRows: []
        };
    };
    ViewComponent.prototype.ngAfterViewInit = function () {
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
        var table = $('#datatables').DataTable();
        // Edit record
        table.on('click', '.edit', function (e) {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
            e.preventDefault();
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        // Like record
        table.on('click', '.like', function (e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    ViewComponent.prototype.CreateCampaign = function () {
        this.router.navigateByUrl('/main/campaign/create');
    };
    ViewComponent.prototype.notApprovedMessage = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            type: 'error',
            text: 'Not Approved yet, Contact admins',
            title: 'Not Approved Yet'
        });
    };
    ViewComponent.prototype.verifyCoupnCodeFn = function (campaignId) {
        var _this = this;
        console.log('-----------------');
        console.log(campaignId);
        sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
            title: 'Enter Coupon Code',
            html: '<div class="form-group">' +
                '<input id="input-field" type="text" class="form-control" />' +
                '</div>',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Validate',
            cancelButtonText: 'Cancel',
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false
        }).then(function (result) {
            if (result.value) {
                _this.campaignService.verifyCouponCode(campaignId, $('#input-field').val()).subscribe(function (res) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: 'coupon code verified',
                        type: 'success',
                        confirmButtonClass: 'btn btn-success',
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                }, function (err) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                        title: 'NOT verified',
                        text: err['message'],
                        type: 'error',
                        confirmButtonClass: 'btn btn-info',
                        buttonsStyling: false
                    }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()({
                    title: 'Cancelled',
                    text: 'you did not run validation',
                    type: 'error',
                    confirmButtonClass: 'btn btn-info',
                    buttonsStyling: false
                }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.noop);
            }
        });
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
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/campaign/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/campaign/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/campaign.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/services/campaign.service.ts ***!
  \*****************************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/shared/services/SharedClass */ "./src/app/shared/services/SharedClass.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CampaignService = /** @class */ (function () {
    function CampaignService(http) {
        this.http = http;
        this.url = environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.object = JSON.parse(localStorage.getItem('user'));
        this.merchantId = this.object['userId'];
        // console.log('------------')
        // console.log(this.access_token);
        // console.log('-----------------')
    }
    CampaignService.prototype.getCategories = function () {
        return this.http.get(this.url + "/Categories");
    };
    CampaignService.prototype.getAmbassadors = function () {
        return this.http.get(this.url + "/Uninamausers/get-ambassadors?access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token);
    };
    CampaignService.prototype.createCampaign = function (obj) {
        return this.http.post(this.url + "/Campaigns?access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token, obj);
    };
    CampaignService.prototype.uploadImage = function (obj) {
        return this.http.post(this.url + "/Attachments/upload?access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token, obj);
    };
    CampaignService.prototype.getCampaigns = function () {
        console.log(this.merchantId);
        return this.http.get(this.url + "/Merchants/" + this.merchantId + "/campaigns?access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token);
    };
    CampaignService.prototype.verifyCouponCode = function (id, code) {
        return this.http.get(this.url + "/Campaigns/" + id + "/verify-coupon?code=" + code);
    };
    CampaignService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CampaignService);
    return CampaignService;
}());



/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module.js.map
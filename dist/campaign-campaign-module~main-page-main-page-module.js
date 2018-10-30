(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-campaign-module~main-page-main-page-module"],{

/***/ "./src/app/shared/campaign-card/campaign-card.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/shared/campaign-card/campaign-card.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n\n\n    <div class=\"col-12\">\n      <div class=\"card card-product\">\n        <div (click)=\"showDetailsFn()\">\n          <div class=\"card-header card-header-image\">\n\n            <img class=\"img-fluid campaignImage\" class=\"img\" src=\"{{data?.displayImage}}\">\n\n          </div>\n          <div class=\"card-body\">\n            <div class=\"card-actions text-center\">\n              <!-- <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link fix-broken-card\">\n                  <i class=\"material-icons\">build</i> Fix Header!\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-default btn-link\" matTooltip=\"View\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">art_track</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-success btn-link\" matTooltip=\"Edit\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">edit</i>\n                </button>\n                <button mat-raised-button type=\"button\" class=\"btn btn-danger btn-link\" matTooltip=\"Remove\" [matTooltipPosition]=\"'below'\">\n                  <i class=\"material-icons\">close</i>\n                </button> -->\n            </div>\n            <h4 class=\"card-title\">\n              {{data?.title}}\n            </h4>\n            <div class=\"card-description\">\n              {{data?.description}}\n            </div>\n\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <ng-container *ngIf=\"rejectedBtn; else elseTemplate\">\n\n            <button style=\"margin: auto\" class=\"btn  \" *ngIf=\"rejectedBtn\" (click)=\"activateAgainFn(data?.id)\">Activate Again</button>\n            <i matTooltip=\"This Campaign is Rejected\" *ngIf=\"rejectedSign\" class=\"fa fa-close\" style=\"font-size:48px;color:red\"></i>\n          </ng-container>\n          <ng-template #elseTemplate>\n            <button (click)=\"verifyCoupnCodeFn()\" style=\"margin: auto\" class=\"btn btn-success verifyBtn\" *ngIf=\"data?.isApproved\">Verify Coupon</button>\n\n            <button (click)=\"notApprovedMessage()\" style=\"margin: auto\" class=\"btn btn-danger \" *ngIf=\"!data?.isApproved\">Not Approved Yet</button>\n\n          </ng-template>\n\n\n\n\n        </div>\n        <!-- <p>{{data?.endDate }}</p> -->\n        <!-- <div class=\"card-footer\">\n              <div class=\"price\">\n                <h4>$459/night</h4>\n              </div>\n              <div class=\"stats\">\n                <p class=\"card-category\"><i class=\"material-icons\">place</i> Milan, Italy</p>\n              </div>\n            </div> -->\n      </div>\n    </div>\n    <!-- end col-md-12 -->\n  </div>\n\n</div>\n\n<!-- | date: 'dd/MM/yyyy' -->"

/***/ }),

/***/ "./src/app/shared/campaign-card/campaign-card.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shared/campaign-card/campaign-card.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  cursor: pointer; }\n\n.campaignImage {\n  height: 153px; }\n\n.verifyBtn {\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/shared/campaign-card/campaign-card.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/campaign-card/campaign-card.component.ts ***!
  \*****************************************************************/
/*! exports provided: CampaignCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignCardComponent", function() { return CampaignCardComponent; });
/* harmony import */ var _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../campaign-detail/campaign-detail.component */ "./src/app/shared/campaign-detail/campaign-detail.component.ts");
/* harmony import */ var _coupon_verification_coupon_verification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../coupon-verification/coupon-verification.component */ "./src/app/shared/coupon-verification/coupon-verification.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CampaignCardComponent = /** @class */ (function () {
    function CampaignCardComponent(campaignService, router, dialog, detailsDialog) {
        this.campaignService = campaignService;
        this.router = router;
        this.dialog = dialog;
        this.detailsDialog = detailsDialog;
        this.rejectedBtn = false;
        this.archivedBtn = false;
        this.btnArchived = false;
        this.date = new Date();
        this.currentDate = this.date.toISOString();
    }
    CampaignCardComponent.prototype.ngOnInit = function () {
        // if (this.data['endDate'] < this.currentDate) {
        //   this.btnArchived = true;
        // }
        // if (this.data['isRejected']) {
        //   this.rejectedBtn = true;
        // }
        this.campaignId = this.data['id'];
        // console.log('idddd', this.camapignId);
        if (this.data['endDate'] < this.currentDate || this.data['isRejected']) {
            this.rejectedBtn = true;
            if (this.data['isRejected']) {
                this.rejectedSign = true;
            }
        }
    };
    CampaignCardComponent.prototype.notApprovedMessage = function () {
        sweetalert2__WEBPACK_IMPORTED_MODULE_7___default()({
            type: 'error',
            text: 'Not Approved yet, Contact admins',
            title: 'Not Approved Yet'
        });
    };
    // verifyCoupnCodeFn(campaignId) {
    //   console.log('-----------------');
    //   console.log(campaignId);
    CampaignCardComponent.prototype.verifyCoupnCodeFn = function () {
        var dialogRef = this.dialog.open(_coupon_verification_coupon_verification_component__WEBPACK_IMPORTED_MODULE_1__["CouponVerificationComponent"], {
            width: '500px',
            data: { id: this.campaignId }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CampaignCardComponent.prototype.showDetailsFn = function () {
        var dialogRef = this.dialog.open(_campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_0__["CampaignDetailComponent"], {
            width: '500px',
            data: this.data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CampaignCardComponent.prototype.activateAgainFn = function (campaignId) {
        this.router.navigate(['/main/campaign/create']);
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].campaignIdToReActivate = campaignId;
        _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].navigatedFromArchived = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Input"])(),
        __metadata("design:type", Object)
    ], CampaignCardComponent.prototype, "data", void 0);
    CampaignCardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-campaign-card',
            template: __webpack_require__(/*! ./campaign-card.component.html */ "./src/app/shared/campaign-card/campaign-card.component.html"),
            styles: [__webpack_require__(/*! ./campaign-card.component.scss */ "./src/app/shared/campaign-card/campaign-card.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_campaign_service__WEBPACK_IMPORTED_MODULE_5__["CampaignService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CampaignCardComponent);
    return CampaignCardComponent;
}());



/***/ }),

/***/ "./src/app/shared/campaign-detail/campaign-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/shared/campaign-detail/campaign-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-dialog-container\">\n  <form class=\"text-center\">\n\n    <mat-dialog-content>\n      <img class=\"img-fluid campaignImage\" src=\"{{data.displayImage}}\">\n      <h3>{{data.title}}</h3>\n      <p>Start Date: {{data.startDate| date: 'dd/MM/yyyy'}}</p><br>\n\n      <p>End Date: {{data.endDate | date: 'dd/MM/yyyy'}}</p>\n      <hr>\n\n    </mat-dialog-content>\n    <mat-dialog-actions>\n\n      <button mat-button mat-dialog-close>Close</button>\n    </mat-dialog-actions>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/shared/campaign-detail/campaign-detail.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/shared/campaign-detail/campaign-detail.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".campaignImage {\n  width: 400px;\n  height: 300px; }\n"

/***/ }),

/***/ "./src/app/shared/campaign-detail/campaign-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/campaign-detail/campaign-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: CampaignDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignDetailComponent", function() { return CampaignDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var CampaignDetailComponent = /** @class */ (function () {
    function CampaignDetailComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CampaignDetailComponent.prototype.ngOnInit = function () { };
    CampaignDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-campaign-detail',
            template: __webpack_require__(/*! ./campaign-detail.component.html */ "./src/app/shared/campaign-detail/campaign-detail.component.html"),
            styles: [__webpack_require__(/*! ./campaign-detail.component.scss */ "./src/app/shared/campaign-detail/campaign-detail.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CampaignDetailComponent);
    return CampaignDetailComponent;
}());



/***/ }),

/***/ "./src/app/shared/coupon-verification/coupon-verification.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/coupon-verification/coupon-verification.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"md-dialog-container\">\n  <form class=\"text-center\" [formGroup]=\"verifyForm\">\n    <h2>Coupon code Verification</h2>\n    <mat-dialog-content>\n      <input type=\"text\" placeholder=\"Enter Coupon Code\" formControlName=\"couponCode\">\n    </mat-dialog-content>\n    <mat-dialog-actions>\n\n\n      <button mat-raised-button (click)=\"verifyCouponCode()\" class=\"btn btn-success\">Verify\n      </button>\n\n      <button mat-button mat-dialog-close>cancel</button>\n    </mat-dialog-actions>\n  </form>\n</div>"

/***/ }),

/***/ "./src/app/shared/coupon-verification/coupon-verification.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/coupon-verification/coupon-verification.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/coupon-verification/coupon-verification.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/coupon-verification/coupon-verification.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CouponVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponVerificationComponent", function() { return CouponVerificationComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CouponVerificationComponent = /** @class */ (function () {
    function CouponVerificationComponent(formBuilder, campaignService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.campaignService = campaignService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.cId = data.id;
        this.verifyForm = formBuilder.group({
            couponCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    CouponVerificationComponent.prototype.ngOnInit = function () { };
    CouponVerificationComponent.prototype.verifyCouponCode = function () {
        var _this = this;
        this.campaignService
            .verifyCouponCode(this.cId, this.verifyForm.get('couponCode').value)
            .subscribe(function (res) {
            console.log(res);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                type: 'success',
                title: 'Verified',
                text: 'Coupon Code is Valid'
            });
            _this.verifyForm.get('couponCode').setValue('');
        }, function (err) {
            console.log(err['error'].error.message);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                type: 'error',
                title: 'Oops...',
                text: err['error'].error.message
            });
            _this.verifyForm.get('couponCode').setValue('');
        });
    };
    CouponVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-coupon-verification',
            template: __webpack_require__(/*! ./coupon-verification.component.html */ "./src/app/shared/coupon-verification/coupon-verification.component.html"),
            styles: [__webpack_require__(/*! ./coupon-verification.component.scss */ "./src/app/shared/coupon-verification/coupon-verification.component.scss")]
        }),
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], CouponVerificationComponent);
    return CouponVerificationComponent;
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
        this.currentDate = new Date().toISOString();
        // console.log('------------')
        // console.log(this.access_token);
        // console.log('-----------------')
    }
    CampaignService.prototype.getCategories = function () {
        return this.http.get(this.url + "/Categories");
    };
    CampaignService.prototype.getCategoryById = function (id) {
        console.log('this is campaign id', id);
        return (this.categoryName = this.http.get(this.url + "/Categories/" + id + "?access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token));
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
    CampaignService.prototype.getCampaignById = function (id) {
        return this.http.get(this.url + "/Campaigns/" + id + "?access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token);
    };
    CampaignService.prototype.getCampaigns = function () {
        console.log(this.merchantId);
        return this.http.get(this.url + "/Merchants/" + this.merchantId + "/campaigns?filter[where][endDate][gt]=" + this.currentDate + "&filter[where][isApproved]=true&filter[where][isRejected]=false&access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token);
    };
    CampaignService.prototype.getArchiveCampaigns = function () {
        console.log('current date variable', this.currentDate);
        return this.http.get(this.url + "/Merchants/" + this.merchantId + "/campaigns?filter[where][or][0][endDate][lt]=" + this.currentDate + "&filter[where][or][1][isRejected]=true&access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token);
    };
    CampaignService.prototype.getPendingCampaigns = function () {
        return this.http.get(this.url + "/Merchants/" + this.merchantId + "/campaigns?filter[where][endDate][gt]=" + this.currentDate + "&filter[where][isApproved]=false&filters[where][isRejected]=false&access_token=" + app_shared_services_SharedClass__WEBPACK_IMPORTED_MODULE_0__["SharedClass"].access_token);
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



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _campaign_card_campaign_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./campaign-card/campaign-card.component */ "./src/app/shared/campaign-card/campaign-card.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _shared_coupon_verification_coupon_verification_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/coupon-verification/coupon-verification.component */ "./src/app/shared/coupon-verification/coupon-verification.component.ts");
/* harmony import */ var _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./campaign-detail/campaign-detail.component */ "./src/app/shared/campaign-detail/campaign-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ReactiveFormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_1__["MaterialModule"]
            ],
            declarations: [
                _campaign_card_campaign_card_component__WEBPACK_IMPORTED_MODULE_2__["CampaignCardComponent"],
                _shared_coupon_verification_coupon_verification_component__WEBPACK_IMPORTED_MODULE_6__["CouponVerificationComponent"],
                _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_7__["CampaignDetailComponent"]
            ],
            exports: [_campaign_card_campaign_card_component__WEBPACK_IMPORTED_MODULE_2__["CampaignCardComponent"]],
            entryComponents: [_shared_coupon_verification_coupon_verification_component__WEBPACK_IMPORTED_MODULE_6__["CouponVerificationComponent"], _campaign_detail_campaign_detail_component__WEBPACK_IMPORTED_MODULE_7__["CampaignDetailComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module~main-page-main-page-module.js.map
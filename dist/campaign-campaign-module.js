(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["campaign-campaign-module"],{

/***/ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js":
/*!*******************************************************************!*\
  !*** ./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js ***!
  \*******************************************************************/
/*! exports provided: ImageCropperModule, ImageCropperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperModule", function() { return ImageCropperModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCropperComponent", function() { return ImageCropperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageUtils = /** @class */ (function () {
    function ImageUtils() {
    }
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageUtils.getOrientation = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        /** @type {?} */
        var view = new DataView(this.base64ToArrayBuffer(imageBase64));
        if (view.getUint16(0, false) != 0xFFD8) {
            return -2;
        }
        /** @type {?} */
        var length = view.byteLength;
        /** @type {?} */
        var offset = 2;
        while (offset < length) {
            if (view.getUint16(offset + 2, false) <= 8)
                return -1;
            /** @type {?} */
            var marker = view.getUint16(offset, false);
            offset += 2;
            if (marker == 0xFFE1) {
                if (view.getUint32(offset += 2, false) != 0x45786966) {
                    return -1;
                }
                /** @type {?} */
                var little = view.getUint16(offset += 6, false) == 0x4949;
                offset += view.getUint32(offset + 4, little);
                /** @type {?} */
                var tags = view.getUint16(offset, little);
                offset += 2;
                for (var i = 0; i < tags; i++) {
                    if (view.getUint16(offset + (i * 12), little) == 0x0112) {
                        return view.getUint16(offset + (i * 12) + 8, little);
                    }
                }
            }
            else if ((marker & 0xFF00) != 0xFF00) {
                break;
            }
            else {
                offset += view.getUint16(offset, false);
            }
        }
        return -1;
    };
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageUtils.base64ToArrayBuffer = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        imageBase64 = imageBase64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        /** @type {?} */
        var binaryString = atob(imageBase64);
        /** @type {?} */
        var len = binaryString.length;
        /** @type {?} */
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    };
    /**
     * @param {?} srcBase64
     * @param {?} srcOrientation
     * @param {?} callback
     * @return {?}
     */
    ImageUtils.resetOrientation = /**
     * @param {?} srcBase64
     * @param {?} srcOrientation
     * @param {?} callback
     * @return {?}
     */
    function (srcBase64, srcOrientation, callback) {
        /** @type {?} */
        var img = new Image();
        img.onload = function () {
            /** @type {?} */
            var width = img.width;
            /** @type {?} */
            var height = img.height;
            /** @type {?} */
            var canvas = document.createElement('canvas');
            /** @type {?} */
            var ctx = canvas.getContext('2d');
            if (ctx) {
                if (4 < srcOrientation && srcOrientation < 9) {
                    canvas.width = height;
                    canvas.height = width;
                }
                else {
                    canvas.width = width;
                    canvas.height = height;
                }
                ImageUtils.transformCanvas(ctx, srcOrientation, width, height);
                ctx.drawImage(img, 0, 0);
                callback(canvas.toDataURL());
            }
            else {
                callback(srcBase64);
            }
        };
        img.src = srcBase64;
    };
    /**
     * @param {?} ctx
     * @param {?} orientation
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ImageUtils.transformCanvas = /**
     * @param {?} ctx
     * @param {?} orientation
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (ctx, orientation, width, height) {
        switch (orientation) {
            case 2:
                ctx.transform(-1, 0, 0, 1, width, 0);
                break;
            case 3:
                ctx.transform(-1, 0, 0, -1, width, height);
                break;
            case 4:
                ctx.transform(1, 0, 0, -1, 0, height);
                break;
            case 5:
                ctx.transform(0, 1, 1, 0, 0, 0);
                break;
            case 6:
                ctx.transform(0, 1, -1, 0, height, 0);
                break;
            case 7:
                ctx.transform(0, -1, -1, 0, height, width);
                break;
            case 8:
                ctx.transform(0, -1, 1, 0, 0, width);
                break;
            default:
                break;
        }
    };
    return ImageUtils;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageCropperComponent = /** @class */ (function () {
    function ImageCropperComponent(elementRef, sanitizer, cd) {
        this.elementRef = elementRef;
        this.sanitizer = sanitizer;
        this.cd = cd;
        this.marginLeft = '0px';
        this.imageVisible = false;
        this.format = 'png';
        this.outputType = 'both';
        this.maintainAspectRatio = true;
        this.aspectRatio = 1;
        this.resizeToWidth = 0;
        this.roundCropper = false;
        this.onlyScaleDown = false;
        this.imageQuality = 92;
        this.autoCrop = true;
        this.cropper = {
            x1: -100,
            y1: -100,
            x2: 10000,
            y2: 10000
        };
        this.imageCropped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageCroppedBase64 = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageCroppedFile = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.imageLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.loadImageFailed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.initCropper();
    }
    Object.defineProperty(ImageCropperComponent.prototype, "imageFileChanged", {
        set: /**
         * @param {?} file
         * @return {?}
         */
        function (file) {
            this.initCropper();
            if (file) {
                this.loadImageFile(file);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageChangedEvent", {
        set: /**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            this.initCropper();
            if (event && event.target && event.target.files && event.target.files.length > 0) {
                this.loadImageFile(event.target.files[0]);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImageCropperComponent.prototype, "imageBase64", {
        set: /**
         * @param {?} imageBase64
         * @return {?}
         */
        function (imageBase64) {
            this.initCropper();
            this.loadBase64Image(imageBase64);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    ImageCropperComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes['cropper']) {
            setTimeout(function () {
                _this.setMaxSize();
                _this.checkCropperPosition(false);
                _this.doAutoCrop();
                _this.cd.markForCheck();
            });
        }
        if (changes['aspectRatio']) {
            this.resetCropperPosition();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.initCropper = /**
     * @return {?}
     */
    function () {
        this.imageVisible = false;
        this.originalImage = null;
        this.safeImgDataUrl = 'data:image/png;base64,iVBORw0KGg'
            + 'oAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAC0lEQVQYV2NgAAIAAAU'
            + 'AAarVyFEAAAAASUVORK5CYII=';
        this.moveStart = {
            active: false,
            type: null,
            position: null,
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
            clientX: 0,
            clientY: 0
        };
        this.maxSize = {
            width: 0,
            height: 0
        };
        this.originalSize = {
            width: 0,
            height: 0
        };
        this.cropper.x1 = -100;
        this.cropper.y1 = -100;
        this.cropper.x2 = 10000;
        this.cropper.y2 = 10000;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    ImageCropperComponent.prototype.loadImageFile = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        var _this = this;
        /** @type {?} */
        var fileReader = new FileReader();
        fileReader.onload = function (event) {
            /** @type {?} */
            var imageType = file.type;
            if (_this.isValidImageType(imageType)) {
                try {
                    _this.checkExifRotationAndLoadImage(event.target.result);
                }
                catch (e) {
                    _this.loadImageFailed.emit();
                }
            }
            else {
                _this.loadImageFailed.emit();
            }
        };
        fileReader.readAsDataURL(file);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    ImageCropperComponent.prototype.isValidImageType = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === 'image/jpeg'
            || type === 'image/jpg'
            || type === 'image/png'
            || type === 'image/gif';
    };
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.checkExifRotationAndLoadImage = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        /** @type {?} */
        var exifRotation = ImageUtils.getOrientation(imageBase64);
        if (exifRotation > 1) {
            ImageUtils.resetOrientation(imageBase64, exifRotation, function (rotatedBase64) { return _this.loadBase64Image(rotatedBase64); });
        }
        else {
            this.loadBase64Image(imageBase64);
        }
    };
    /**
     * @param {?} imageBase64
     * @return {?}
     */
    ImageCropperComponent.prototype.loadBase64Image = /**
     * @param {?} imageBase64
     * @return {?}
     */
    function (imageBase64) {
        var _this = this;
        this.safeImgDataUrl = this.sanitizer.bypassSecurityTrustResourceUrl(imageBase64);
        this.originalImage = new Image();
        this.originalImage.onload = function () {
            _this.originalSize.width = _this.originalImage.width;
            _this.originalSize.height = _this.originalImage.height;
            _this.cd.markForCheck();
        };
        this.originalImage.src = imageBase64;
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.imageLoadedInView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.originalImage != null) {
            this.imageLoaded.emit();
            setTimeout(function () {
                _this.setMaxSize();
                _this.resetCropperPosition();
                _this.cd.markForCheck();
            });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.onResize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.resizeCropperPosition();
        this.setMaxSize();
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resizeCropperPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (this.maxSize.width !== displayedImage.offsetWidth || this.maxSize.height !== displayedImage.offsetHeight) {
            this.cropper.x1 = this.cropper.x1 * displayedImage.offsetWidth / this.maxSize.width;
            this.cropper.x2 = this.cropper.x2 * displayedImage.offsetWidth / this.maxSize.width;
            this.cropper.y1 = this.cropper.y1 * displayedImage.offsetHeight / this.maxSize.height;
            this.cropper.y2 = this.cropper.y2 * displayedImage.offsetHeight / this.maxSize.height;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.resetCropperPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage.offsetWidth / this.aspectRatio < displayedImage.offsetHeight) {
            this.cropper.x1 = 0;
            this.cropper.x2 = displayedImage.offsetWidth;
            /** @type {?} */
            var cropperHeight = displayedImage.offsetWidth / this.aspectRatio;
            this.cropper.y1 = (displayedImage.offsetHeight - cropperHeight) / 2;
            this.cropper.y2 = this.cropper.y1 + cropperHeight;
        }
        else {
            this.cropper.y1 = 0;
            this.cropper.y2 = displayedImage.offsetHeight;
            /** @type {?} */
            var cropperWidth = displayedImage.offsetHeight * this.aspectRatio;
            this.cropper.x1 = (displayedImage.offsetWidth - cropperWidth) / 2;
            this.cropper.x2 = this.cropper.x1 + cropperWidth;
        }
        this.doAutoCrop();
        this.imageVisible = true;
    };
    /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    ImageCropperComponent.prototype.startMove = /**
     * @param {?} event
     * @param {?} moveType
     * @param {?=} position
     * @return {?}
     */
    function (event, moveType, position) {
        if (position === void 0) { position = null; }
        this.moveStart = Object.assign({
            active: true,
            type: moveType,
            position: position,
            clientX: this.getClientX(event),
            clientY: this.getClientY(event)
        }, this.cropper);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.moveImg = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            event.stopPropagation();
            event.preventDefault();
            this.setMaxSize();
            if (this.moveStart.type === 'move') {
                this.move(event);
                this.checkCropperPosition(true);
            }
            else if (this.moveStart.type === 'resize') {
                this.resize(event);
                this.checkCropperPosition(false);
            }
            this.cd.detectChanges();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.setMaxSize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.elementRef.nativeElement.querySelector('.source-image');
        this.maxSize.width = el.offsetWidth;
        this.maxSize.height = el.offsetHeight;
        this.marginLeft = this.sanitizer.bypassSecurityTrustStyle('calc(50% - ' + this.maxSize.width / 2 + 'px)');
    };
    /**
     * @param {?=} maintainSize
     * @return {?}
     */
    ImageCropperComponent.prototype.checkCropperPosition = /**
     * @param {?=} maintainSize
     * @return {?}
     */
    function (maintainSize) {
        if (maintainSize === void 0) { maintainSize = false; }
        if (this.cropper.x1 < 0) {
            this.cropper.x2 -= maintainSize ? this.cropper.x1 : 0;
            this.cropper.x1 = 0;
        }
        if (this.cropper.y1 < 0) {
            this.cropper.y2 -= maintainSize ? this.cropper.y1 : 0;
            this.cropper.y1 = 0;
        }
        if (this.cropper.x2 > this.maxSize.width) {
            this.cropper.x1 -= maintainSize ? (this.cropper.x2 - this.maxSize.width) : 0;
            this.cropper.x2 = this.maxSize.width;
        }
        if (this.cropper.y2 > this.maxSize.height) {
            this.cropper.y1 -= maintainSize ? (this.cropper.y2 - this.maxSize.height) : 0;
            this.cropper.y2 = this.maxSize.height;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.moveStop = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.moveStart.active) {
            this.moveStart.active = false;
            this.doAutoCrop();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.move = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        this.cropper.x1 = this.moveStart.x1 + diffX;
        this.cropper.y1 = this.moveStart.y1 + diffY;
        this.cropper.x2 = this.moveStart.x2 + diffX;
        this.cropper.y2 = this.moveStart.y2 + diffY;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.resize = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var diffX = this.getClientX(event) - this.moveStart.clientX;
        /** @type {?} */
        var diffY = this.getClientY(event) - this.moveStart.clientY;
        switch (this.moveStart.position) {
            case 'left':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                break;
            case 'topleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'top':
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'topright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y1 = Math.min(this.moveStart.y1 + diffY, this.cropper.y2 - 20);
                break;
            case 'right':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                break;
            case 'bottomright':
                this.cropper.x2 = Math.max(this.moveStart.x2 + diffX, this.cropper.x1 + 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottom':
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
            case 'bottomleft':
                this.cropper.x1 = Math.min(this.moveStart.x1 + diffX, this.cropper.x2 - 20);
                this.cropper.y2 = Math.max(this.moveStart.y2 + diffY, this.cropper.y1 + 20);
                break;
        }
        if (this.maintainAspectRatio) {
            this.checkAspectRatio();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.checkAspectRatio = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var overflowX = 0;
        /** @type {?} */
        var overflowY = 0;
        switch (this.moveStart.position) {
            case 'top':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'bottom':
                this.cropper.x2 = this.cropper.x1 + (this.cropper.y2 - this.cropper.y1) * this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : (overflowX / this.aspectRatio);
                }
                break;
            case 'topleft':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'topright':
                this.cropper.y1 = this.cropper.y2 - (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(0 - this.cropper.y1, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y1 += (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'right':
            case 'bottomright':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(this.cropper.x2 - this.maxSize.width, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x2 -= (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
            case 'left':
            case 'bottomleft':
                this.cropper.y2 = this.cropper.y1 + (this.cropper.x2 - this.cropper.x1) / this.aspectRatio;
                overflowX = Math.max(0 - this.cropper.x1, 0);
                overflowY = Math.max(this.cropper.y2 - this.maxSize.height, 0);
                if (overflowX > 0 || overflowY > 0) {
                    this.cropper.x1 += (overflowY * this.aspectRatio) > overflowX ? (overflowY * this.aspectRatio) : overflowX;
                    this.cropper.y2 -= (overflowY * this.aspectRatio) > overflowX ? overflowY : overflowX / this.aspectRatio;
                }
                break;
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.doAutoCrop = /**
     * @return {?}
     */
    function () {
        if (this.autoCrop) {
            this.crop();
        }
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.crop = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var displayedImage = this.elementRef.nativeElement.querySelector('.source-image');
        if (displayedImage && this.originalImage != null) {
            /** @type {?} */
            var ratio = this.originalSize.width / displayedImage.offsetWidth;
            /** @type {?} */
            var left = Math.round(this.cropper.x1 * ratio);
            /** @type {?} */
            var top_1 = Math.round(this.cropper.y1 * ratio);
            /** @type {?} */
            var width = Math.round((this.cropper.x2 - this.cropper.x1) * ratio);
            /** @type {?} */
            var height = Math.round((this.cropper.y2 - this.cropper.y1) * ratio);
            /** @type {?} */
            var resizeRatio = this.getResizeRatio(width);
            /** @type {?} */
            var resizedWidth = Math.floor(width * resizeRatio);
            /** @type {?} */
            var resizedHeight = Math.floor(height * resizeRatio);
            /** @type {?} */
            var cropCanvas = /** @type {?} */ (document.createElement('canvas'));
            cropCanvas.width = resizedWidth;
            cropCanvas.height = resizedHeight;
            /** @type {?} */
            var ctx = cropCanvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(this.originalImage, left, top_1, width, height, 0, 0, width * resizeRatio, height * resizeRatio);
                this.cropToOutputType(cropCanvas, resizedWidth, resizedHeight);
            }
        }
    };
    /**
     * @param {?} cropCanvas
     * @param {?} resizedWidth
     * @param {?} resizedHeight
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToOutputType = /**
     * @param {?} cropCanvas
     * @param {?} resizedWidth
     * @param {?} resizedHeight
     * @return {?}
     */
    function (cropCanvas, resizedWidth, resizedHeight) {
        var _this = this;
        /** @type {?} */
        var output = {
            width: resizedWidth,
            height: resizedHeight,
            cropperPosition: Object.assign({}, this.cropper)
        };
        switch (this.outputType) {
            case 'base64':
                output.base64 = this.cropToBase64(cropCanvas);
                this.imageCropped.emit(output);
                break;
            case 'file':
                this.cropToFile(cropCanvas)
                    .then(function (result) {
                    output.file = result;
                    _this.imageCropped.emit(output);
                });
                break;
            case 'both':
                output.base64 = this.cropToBase64(cropCanvas);
                this.cropToFile(cropCanvas)
                    .then(function (result) {
                    output.file = result;
                    _this.imageCropped.emit(output);
                });
                break;
        }
    };
    /**
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToBase64 = /**
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        /** @type {?} */
        var imageBase64 = cropCanvas.toDataURL('image/' + this.format, this.getQuality());
        this.imageCroppedBase64.emit(imageBase64);
        return imageBase64;
    };
    /**
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.cropToFile = /**
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        var _this = this;
        return this.getCanvasBlob(cropCanvas)
            .then(function (result) {
            if (result) {
                _this.imageCroppedFile.emit(result);
            }
            return result;
        });
    };
    /**
     * @param {?} cropCanvas
     * @return {?}
     */
    ImageCropperComponent.prototype.getCanvasBlob = /**
     * @param {?} cropCanvas
     * @return {?}
     */
    function (cropCanvas) {
        var _this = this;
        return new Promise(function (resolve) {
            cropCanvas.toBlob(function (result) { return resolve(result); }, 'image/' + _this.format, _this.getQuality());
        });
    };
    /**
     * @return {?}
     */
    ImageCropperComponent.prototype.getQuality = /**
     * @return {?}
     */
    function () {
        return Math.min(1, Math.max(0, this.imageQuality / 100));
    };
    /**
     * @param {?} width
     * @return {?}
     */
    ImageCropperComponent.prototype.getResizeRatio = /**
     * @param {?} width
     * @return {?}
     */
    function (width) {
        return this.resizeToWidth > 0 && (!this.onlyScaleDown || width > this.resizeToWidth)
            ? this.resizeToWidth / width
            : 1;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientX = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.clientX != null ? event.clientX : event.touches[0].clientX;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ImageCropperComponent.prototype.getClientY = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        return event.clientY != null ? event.clientY : event.touches[0].clientY;
    };
    ImageCropperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'image-cropper',
                    template: "<div>\n    <img\n        [src]=\"safeImgDataUrl\"\n        [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n        (load)=\"imageLoadedInView()\"\n        class=\"source-image\"\n    />\n    <div class=\"cropper\"\n         [class.rounded]=\"roundCropper\"\n         [style.top.px]=\"cropper.y1\"\n         [style.left.px]=\"cropper.x1\"\n         [style.width.px]=\"cropper.x2 - cropper.x1\"\n         [style.height.px]=\"cropper.y2 - cropper.y1\"\n         [style.margin-left]=\"marginLeft\"\n         [style.visibility]=\"imageVisible ? 'visible' : 'hidden'\"\n    >\n        <div\n            (mousedown)=\"startMove($event, 'move')\"\n            (touchstart)=\"startMove($event, 'move')\"\n            class=\"move\"\n        >&nbsp;</div>\n        <span\n            class=\"resize topleft\"\n            (mousedown)=\"startMove($event, 'resize', 'topleft')\"\n            (touchstart)=\"startMove($event, 'resize', 'topleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize top\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize topright\"\n            (mousedown)=\"startMove($event, 'resize', 'topright')\"\n            (touchstart)=\"startMove($event, 'resize', 'topright')\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize right\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize bottomright\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomright')\"\n            (touchstart)=\"startMove($event, 'resize', 'bottomright')\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize bottom\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize bottomleft\"\n            (mousedown)=\"startMove($event, 'resize', 'bottomleft')\"\n            (touchstart)=\"startMove($event, 'resize', 'bottomleft')\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize left\"\n        ><span class=\"square\"></span></span>\n        <span\n            class=\"resize-bar top\"\n            (mousedown)=\"startMove($event, 'resize', 'top')\"\n            (touchstart)=\"startMove($event, 'resize', 'top')\"\n        ></span>\n        <span\n            class=\"resize-bar right\"\n            (mousedown)=\"startMove($event, 'resize', 'right')\"\n            (touchstart)=\"startMove($event, 'resize', 'right')\"\n        ></span>\n        <span\n            class=\"resize-bar bottom\"\n            (mousedown)=\"startMove($event, 'resize', 'bottom')\"\n            (touchstart)=\"startMove($event, 'resize', 'bottom')\"\n        ></span>\n        <span\n            class=\"resize-bar left\"\n            (mousedown)=\"startMove($event, 'resize', 'left')\"\n            (touchstart)=\"startMove($event, 'resize', 'left')\"\n        ></span>\n    </div>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                    styles: [":host{display:flex;position:relative;width:100%;max-width:100%;max-height:100%;overflow:hidden;padding:5px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host>div{position:relative;width:100%}:host>div .source-image{max-width:100%;max-height:100%}:host .cropper{position:absolute;display:flex;color:#53535c!important;background:0 0!important;touch-action:none;outline:rgba(255,255,255,.3) solid 1000px}:host .cropper:after{position:absolute;content:'';top:0;bottom:0;left:0;right:0;pointer-events:none;border:1px dashed;opacity:.75;color:inherit;z-index:1}:host .cropper .move{width:100%;cursor:move;border:1px solid rgba(255,255,255,.5)}:host .cropper .resize{position:absolute;display:inline-block;line-height:6px;padding:8px;opacity:.85;z-index:1}:host .cropper .resize .square{display:inline-block;background:#53535c!important;width:6px;height:6px;border:1px solid rgba(255,255,255,.5)}:host .cropper .resize.topleft{top:-12px;left:-12px;cursor:nw-resize}:host .cropper .resize.top{top:-12px;left:calc(50% - 12px);cursor:n-resize}:host .cropper .resize.topright{top:-12px;right:-12px;cursor:ne-resize}:host .cropper .resize.right{top:calc(50% - 12px);right:-12px;cursor:e-resize}:host .cropper .resize.bottomright{bottom:-12px;right:-12px;cursor:se-resize}:host .cropper .resize.bottom{bottom:-12px;left:calc(50% - 12px);cursor:s-resize}:host .cropper .resize.bottomleft{bottom:-12px;left:-12px;cursor:sw-resize}:host .cropper .resize.left{top:calc(50% - 12px);left:-12px;cursor:w-resize}:host .cropper .resize-bar{position:absolute;z-index:1}:host .cropper .resize-bar.top{top:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:n-resize}:host .cropper .resize-bar.right{top:11px;right:-11px;height:calc(100% - 22px);width:22px;cursor:e-resize}:host .cropper .resize-bar.bottom{bottom:-11px;left:11px;width:calc(100% - 22px);height:22px;cursor:s-resize}:host .cropper .resize-bar.left{top:11px;left:-11px;height:calc(100% - 22px);width:22px;cursor:w-resize}:host .cropper.rounded{outline-color:transparent}:host .cropper.rounded:after{box-shadow:0 0 0 100vw rgba(255,255,255,.3);border-radius:100%}:host .cropper.rounded .move{border-radius:100%}"]
                }] }
    ];
    /** @nocollapse */
    ImageCropperComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }
    ]; };
    ImageCropperComponent.propDecorators = {
        imageFileChanged: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageChangedEvent: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        format: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        outputType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        maintainAspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        aspectRatio: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        resizeToWidth: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        roundCropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        onlyScaleDown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageQuality: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        autoCrop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        cropper: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        imageCropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        imageCroppedBase64: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        imageCroppedFile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        imageLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        loadImageFailed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }],
        moveImg: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mousemove', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchmove', ['$event'],] }],
        moveStop: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:mouseup', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['document:touchend', ['$event'],] }]
    };
    return ImageCropperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ImageCropperModule = /** @class */ (function () {
    function ImageCropperModule() {
    }
    ImageCropperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                    ],
                    declarations: [
                        ImageCropperComponent
                    ],
                    exports: [
                        ImageCropperComponent
                    ]
                },] }
    ];
    return ImageCropperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWltYWdlLWNyb3BwZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1pbWFnZS1jcm9wcGVyL3NyYy9pbWFnZS51dGlscy50cyIsIm5nOi8vbmd4LWltYWdlLWNyb3BwZXIvc3JjL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50LnRzIiwibmc6Ly9uZ3gtaW1hZ2UtY3JvcHBlci9zcmMvaW1hZ2UtY3JvcHBlci5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEltYWdlVXRpbHMge1xuICAgIHN0YXRpYyBnZXRPcmllbnRhdGlvbihpbWFnZUJhc2U2NDogc3RyaW5nKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLmJhc2U2NFRvQXJyYXlCdWZmZXIoaW1hZ2VCYXNlNjQpKTtcbiAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KDAsIGZhbHNlKSAhPSAweEZGRDgpIHtcbiAgICAgICAgICAgIHJldHVybiAtMjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGg7XG4gICAgICAgIGxldCBvZmZzZXQgPSAyO1xuICAgICAgICB3aGlsZSAob2Zmc2V0IDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAodmlldy5nZXRVaW50MTYob2Zmc2V0ICsgMiwgZmFsc2UpIDw9IDgpIHJldHVybiAtMTtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICBpZiAobWFya2VyID09IDB4RkZFMSkge1xuICAgICAgICAgICAgICAgIGlmICh2aWV3LmdldFVpbnQzMihvZmZzZXQgKz0gMiwgZmFsc2UpICE9IDB4NDU3ODY5NjYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IGxpdHRsZSA9IHZpZXcuZ2V0VWludDE2KG9mZnNldCArPSA2LCBmYWxzZSkgPT0gMHg0OTQ5O1xuICAgICAgICAgICAgICAgIG9mZnNldCArPSB2aWV3LmdldFVpbnQzMihvZmZzZXQgKyA0LCBsaXR0bGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhZ3MgPSB2aWV3LmdldFVpbnQxNihvZmZzZXQsIGxpdHRsZSk7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IDI7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YWdzOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZpZXcuZ2V0VWludDE2KG9mZnNldCArIChpICogMTIpLCBsaXR0bGUpID09IDB4MDExMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZpZXcuZ2V0VWludDE2KG9mZnNldCArIChpICogMTIpICsgOCwgbGl0dGxlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChtYXJrZXIgJiAweEZGMDApICE9IDB4RkYwMCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ICs9IHZpZXcuZ2V0VWludDE2KG9mZnNldCwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBiYXNlNjRUb0FycmF5QnVmZmVyKGltYWdlQmFzZTY0OiBzdHJpbmcpIHtcbiAgICAgICAgaW1hZ2VCYXNlNjQgPSBpbWFnZUJhc2U2NC5yZXBsYWNlKC9eZGF0YVxcOihbXlxcO10rKVxcO2Jhc2U2NCwvZ21pLCAnJyk7XG4gICAgICAgIGNvbnN0IGJpbmFyeVN0cmluZyA9IGF0b2IoaW1hZ2VCYXNlNjQpO1xuICAgICAgICBjb25zdCBsZW4gPSBiaW5hcnlTdHJpbmcubGVuZ3RoO1xuICAgICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGxlbik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5U3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ5dGVzLmJ1ZmZlcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgcmVzZXRPcmllbnRhdGlvbihzcmNCYXNlNjQ6IHN0cmluZywgc3JjT3JpZW50YXRpb246IG51bWJlciwgY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc3Qgd2lkdGggPSBpbWcud2lkdGg7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBpbWcuaGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuICAgICAgICAgICAgaWYgKGN0eCkge1xuICAgICAgICAgICAgICAgIGlmICg0IDwgc3JjT3JpZW50YXRpb24gJiYgc3JjT3JpZW50YXRpb24gPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IHdpZHRoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBJbWFnZVV0aWxzLnRyYW5zZm9ybUNhbnZhcyhjdHgsIHNyY09yaWVudGF0aW9uLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soY2FudmFzLnRvRGF0YVVSTCgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soc3JjQmFzZTY0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgaW1nLnNyYyA9IHNyY0Jhc2U2NDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyB0cmFuc2Zvcm1DYW52YXMoY3R4OiBhbnksIG9yaWVudGF0aW9uOiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XG4gICAgICAgIHN3aXRjaCAob3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKC0xLCAwLCAwLCAxLCB3aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgtMSwgMCwgMCwgLTEsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMSwgMCwgMCwgLTEsIDAsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgY3R4LnRyYW5zZm9ybSgwLCAxLCAxLCAwLCAwLCAwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKDAsIDEsIC0xLCAwLCBoZWlnaHQsIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgICAgIGN0eC50cmFuc2Zvcm0oMCwgLTEsIC0xLCAwLCBoZWlnaHQsIHdpZHRoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgICAgICBjdHgudHJhbnNmb3JtKDAsIC0xLCAxLCAwLCAwLCB3aWR0aCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHtcbiAgICBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsXG4gICAgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlVXJsLCBTYWZlU3R5bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEltYWdlVXRpbHMgfSBmcm9tICcuL2ltYWdlLnV0aWxzJztcblxuaW50ZXJmYWNlIE1vdmVTdGFydCB7XG4gICAgYWN0aXZlOiBib29sZWFuO1xuICAgIHR5cGU6IHN0cmluZyB8IG51bGw7XG4gICAgcG9zaXRpb246IHN0cmluZyB8IG51bGw7XG4gICAgeDE6IG51bWJlcjtcbiAgICB5MTogbnVtYmVyO1xuICAgIHgyOiBudW1iZXI7XG4gICAgeTI6IG51bWJlcjtcbiAgICBjbGllbnRYOiBudW1iZXI7XG4gICAgY2xpZW50WTogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgRGltZW5zaW9ucyB7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDcm9wcGVyUG9zaXRpb24ge1xuICAgIHgxOiBudW1iZXI7XG4gICAgeTE6IG51bWJlcjtcbiAgICB4MjogbnVtYmVyO1xuICAgIHkyOiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VDcm9wcGVkRXZlbnQge1xuICAgIGJhc2U2ND86IHN0cmluZyB8IG51bGw7XG4gICAgZmlsZT86IEJsb2IgfCBudWxsO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgY3JvcHBlclBvc2l0aW9uOiBDcm9wcGVyUG9zaXRpb247XG59XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnaW1hZ2UtY3JvcHBlcicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL2ltYWdlLWNyb3BwZXIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAgIHByaXZhdGUgb3JpZ2luYWxJbWFnZTogYW55O1xuICAgIHByaXZhdGUgbW92ZVN0YXJ0OiBNb3ZlU3RhcnQ7XG4gICAgcHJpdmF0ZSBtYXhTaXplOiBEaW1lbnNpb25zO1xuICAgIHByaXZhdGUgb3JpZ2luYWxTaXplOiBEaW1lbnNpb25zO1xuXG4gICAgc2FmZUltZ0RhdGFVcmw6IFNhZmVVcmwgfCBzdHJpbmc7XG4gICAgbWFyZ2luTGVmdDogU2FmZVN0eWxlIHwgc3RyaW5nID0gJzBweCc7XG4gICAgaW1hZ2VWaXNpYmxlID0gZmFsc2U7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBpbWFnZUZpbGVDaGFuZ2VkKGZpbGU6IEZpbGUpIHtcbiAgICAgICAgdGhpcy5pbml0Q3JvcHBlcigpO1xuICAgICAgICBpZiAoZmlsZSkge1xuICAgICAgICAgICAgdGhpcy5sb2FkSW1hZ2VGaWxlKGZpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgaW1hZ2VDaGFuZ2VkRXZlbnQoZXZlbnQ6IGFueSkge1xuICAgICAgICB0aGlzLmluaXRDcm9wcGVyKCk7XG4gICAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LmZpbGVzICYmIGV2ZW50LnRhcmdldC5maWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRJbWFnZUZpbGUoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBJbnB1dCgpXG4gICAgc2V0IGltYWdlQmFzZTY0KGltYWdlQmFzZTY0OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5pbml0Q3JvcHBlcigpO1xuICAgICAgICB0aGlzLmxvYWRCYXNlNjRJbWFnZShpbWFnZUJhc2U2NCk7XG4gICAgfVxuXG4gICAgQElucHV0KCkgZm9ybWF0OiAncG5nJyB8ICdqcGVnJyB8ICdibXAnIHwgJ3dlYnAnIHwgJ2ljbycgPSAncG5nJztcbiAgICBASW5wdXQoKSBvdXRwdXRUeXBlOiAnYmFzZTY0JyB8ICdmaWxlJyB8ICdib3RoJyA9ICdib3RoJztcbiAgICBASW5wdXQoKSBtYWludGFpbkFzcGVjdFJhdGlvID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBhc3BlY3RSYXRpbyA9IDE7XG4gICAgQElucHV0KCkgcmVzaXplVG9XaWR0aCA9IDA7XG4gICAgQElucHV0KCkgcm91bmRDcm9wcGVyID0gZmFsc2U7XG4gICAgQElucHV0KCkgb25seVNjYWxlRG93biA9IGZhbHNlO1xuICAgIEBJbnB1dCgpIGltYWdlUXVhbGl0eSA9IDkyO1xuICAgIEBJbnB1dCgpIGF1dG9Dcm9wID0gdHJ1ZTtcbiAgICBASW5wdXQoKSBjcm9wcGVyOiBDcm9wcGVyUG9zaXRpb24gPSB7XG4gICAgICAgIHgxOiAtMTAwLFxuICAgICAgICB5MTogLTEwMCxcbiAgICAgICAgeDI6IDEwMDAwLFxuICAgICAgICB5MjogMTAwMDBcbiAgICB9O1xuXG4gICAgQE91dHB1dCgpIGltYWdlQ3JvcHBlZCA9IG5ldyBFdmVudEVtaXR0ZXI8SW1hZ2VDcm9wcGVkRXZlbnQ+KCk7XG4gICAgQE91dHB1dCgpIGltYWdlQ3JvcHBlZEJhc2U2NCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuICAgIEBPdXRwdXQoKSBpbWFnZUNyb3BwZWRGaWxlID0gbmV3IEV2ZW50RW1pdHRlcjxCbG9iPigpO1xuICAgIEBPdXRwdXQoKSBpbWFnZUxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgICBAT3V0cHV0KCkgbG9hZEltYWdlRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgICAgICB0aGlzLmluaXRDcm9wcGVyKCk7XG4gICAgfVxuXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgICAgICBpZiAoY2hhbmdlc1snY3JvcHBlciddKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldE1heFNpemUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ3JvcHBlclBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvQXV0b0Nyb3AoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYW5nZXNbJ2FzcGVjdFJhdGlvJ10pIHtcbiAgICAgICAgICAgIHRoaXMucmVzZXRDcm9wcGVyUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdENyb3BwZXIoKSB7XG4gICAgICAgIHRoaXMuaW1hZ2VWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuc2FmZUltZ0RhdGFVcmwgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2cnXG4gICAgICAgICAgICArICdvQUFBQU5TVWhFVWdBQUFBRUFBQUFCQ0FZQUFBQWZGY1NKQUFBQUMwbEVRVlFZVjJOZ0FBSUFBQVUnXG4gICAgICAgICAgICArICdBQWFyVnlGRUFBQUFBU1VWT1JLNUNZSUk9JztcbiAgICAgICAgdGhpcy5tb3ZlU3RhcnQgPSB7XG4gICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBudWxsLFxuICAgICAgICAgICAgeDE6IDAsXG4gICAgICAgICAgICB5MTogMCxcbiAgICAgICAgICAgIHgyOiAwLFxuICAgICAgICAgICAgeTI6IDAsXG4gICAgICAgICAgICBjbGllbnRYOiAwLFxuICAgICAgICAgICAgY2xpZW50WTogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm1heFNpemUgPSB7XG4gICAgICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgICAgIGhlaWdodDogMFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9yaWdpbmFsU2l6ZSA9IHtcbiAgICAgICAgICAgIHdpZHRoOiAwLFxuICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3JvcHBlci54MSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY3JvcHBlci55MSA9IC0xMDA7XG4gICAgICAgIHRoaXMuY3JvcHBlci54MiA9IDEwMDAwO1xuICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSAxMDAwMDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRJbWFnZUZpbGUoZmlsZTogRmlsZSkge1xuICAgICAgICBjb25zdCBmaWxlUmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgZmlsZVJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2VUeXBlID0gZmlsZS50eXBlO1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEltYWdlVHlwZShpbWFnZVR5cGUpKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0V4aWZSb3RhdGlvbkFuZExvYWRJbWFnZShldmVudC50YXJnZXQucmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlRmFpbGVkLmVtaXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZEltYWdlRmFpbGVkLmVtaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZmlsZVJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaXNWYWxpZEltYWdlVHlwZSh0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdpbWFnZS9qcGVnJ1xuICAgICAgICAgICAgfHwgdHlwZSA9PT0gJ2ltYWdlL2pwZydcbiAgICAgICAgICAgIHx8IHR5cGUgPT09ICdpbWFnZS9wbmcnXG4gICAgICAgICAgICB8fCB0eXBlID09PSAnaW1hZ2UvZ2lmJ1xuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tFeGlmUm90YXRpb25BbmRMb2FkSW1hZ2UoaW1hZ2VCYXNlNjQ6IHN0cmluZykge1xuICAgICAgICBjb25zdCBleGlmUm90YXRpb24gPSBJbWFnZVV0aWxzLmdldE9yaWVudGF0aW9uKGltYWdlQmFzZTY0KTtcbiAgICAgICAgaWYgKGV4aWZSb3RhdGlvbiA+IDEpIHtcbiAgICAgICAgICAgIEltYWdlVXRpbHMucmVzZXRPcmllbnRhdGlvbihcbiAgICAgICAgICAgICAgICBpbWFnZUJhc2U2NCxcbiAgICAgICAgICAgICAgICBleGlmUm90YXRpb24sXG4gICAgICAgICAgICAgICAgKHJvdGF0ZWRCYXNlNjQ6IHN0cmluZykgPT4gdGhpcy5sb2FkQmFzZTY0SW1hZ2Uocm90YXRlZEJhc2U2NClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRCYXNlNjRJbWFnZShpbWFnZUJhc2U2NCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRCYXNlNjRJbWFnZShpbWFnZUJhc2U2NDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuc2FmZUltZ0RhdGFVcmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaW1hZ2VCYXNlNjQpO1xuICAgICAgICB0aGlzLm9yaWdpbmFsSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEltYWdlLm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWxTaXplLndpZHRoID0gdGhpcy5vcmlnaW5hbEltYWdlLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbFNpemUuaGVpZ2h0ID0gdGhpcy5vcmlnaW5hbEltYWdlLmhlaWdodDtcbiAgICAgICAgICAgIHRoaXMuY2QubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3JpZ2luYWxJbWFnZS5zcmMgPSBpbWFnZUJhc2U2NDtcbiAgICB9XG5cbiAgICBpbWFnZUxvYWRlZEluVmlldygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxJbWFnZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmltYWdlTG9hZGVkLmVtaXQoKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWF4U2l6ZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRDcm9wcGVyUG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNkLm1hcmtGb3JDaGVjaygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyckZXZlbnQnXSlcbiAgICBvblJlc2l6ZShldmVudDogRXZlbnQpIHtcbiAgICAgICAgdGhpcy5yZXNpemVDcm9wcGVyUG9zaXRpb24oKTtcbiAgICAgICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZXNpemVDcm9wcGVyUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZS1pbWFnZScpO1xuICAgICAgICBpZiAodGhpcy5tYXhTaXplLndpZHRoICE9PSBkaXNwbGF5ZWRJbWFnZS5vZmZzZXRXaWR0aCB8fCB0aGlzLm1heFNpemUuaGVpZ2h0ICE9PSBkaXNwbGF5ZWRJbWFnZS5vZmZzZXRIZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSA9IHRoaXMuY3JvcHBlci54MSAqIGRpc3BsYXllZEltYWdlLm9mZnNldFdpZHRoIC8gdGhpcy5tYXhTaXplLndpZHRoO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5jcm9wcGVyLngyICogZGlzcGxheWVkSW1hZ2Uub2Zmc2V0V2lkdGggLyB0aGlzLm1heFNpemUud2lkdGg7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSB0aGlzLmNyb3BwZXIueTEgKiBkaXNwbGF5ZWRJbWFnZS5vZmZzZXRIZWlnaHQgLyB0aGlzLm1heFNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyID0gdGhpcy5jcm9wcGVyLnkyICogZGlzcGxheWVkSW1hZ2Uub2Zmc2V0SGVpZ2h0IC8gdGhpcy5tYXhTaXplLmhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgcmVzZXRDcm9wcGVyUG9zaXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGRpc3BsYXllZEltYWdlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLnNvdXJjZS1pbWFnZScpO1xuICAgICAgICBpZiAoZGlzcGxheWVkSW1hZ2Uub2Zmc2V0V2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvIDwgZGlzcGxheWVkSW1hZ2Uub2Zmc2V0SGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gZGlzcGxheWVkSW1hZ2Uub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBjb25zdCBjcm9wcGVySGVpZ2h0ID0gZGlzcGxheWVkSW1hZ2Uub2Zmc2V0V2lkdGggLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gKGRpc3BsYXllZEltYWdlLm9mZnNldEhlaWdodCAtIGNyb3BwZXJIZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMuY3JvcHBlci55MSArIGNyb3BwZXJIZWlnaHQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyID0gZGlzcGxheWVkSW1hZ2Uub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgY29uc3QgY3JvcHBlcldpZHRoID0gZGlzcGxheWVkSW1hZ2Uub2Zmc2V0SGVpZ2h0ICogdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSA9IChkaXNwbGF5ZWRJbWFnZS5vZmZzZXRXaWR0aCAtIGNyb3BwZXJXaWR0aCkgLyAyO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5jcm9wcGVyLngxICsgY3JvcHBlcldpZHRoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZG9BdXRvQ3JvcCgpO1xuICAgICAgICB0aGlzLmltYWdlVmlzaWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgc3RhcnRNb3ZlKGV2ZW50OiBhbnksIG1vdmVUeXBlOiBzdHJpbmcsIHBvc2l0aW9uOiBzdHJpbmcgfCBudWxsID0gbnVsbCkge1xuICAgICAgICB0aGlzLm1vdmVTdGFydCA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgdHlwZTogbW92ZVR5cGUsXG4gICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICBjbGllbnRYOiB0aGlzLmdldENsaWVudFgoZXZlbnQpLFxuICAgICAgICAgICAgY2xpZW50WTogdGhpcy5nZXRDbGllbnRZKGV2ZW50KVxuICAgICAgICB9LCB0aGlzLmNyb3BwZXIpO1xuICAgIH1cblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50Om1vdXNlbW92ZScsIFsnJGV2ZW50J10pXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6dG91Y2htb3ZlJywgWyckZXZlbnQnXSlcbiAgICBtb3ZlSW1nKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgaWYgKHRoaXMubW92ZVN0YXJ0LmFjdGl2ZSkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRNYXhTaXplKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlU3RhcnQudHlwZSA9PT0gJ21vdmUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ3JvcHBlclBvc2l0aW9uKHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLm1vdmVTdGFydC50eXBlID09PSAncmVzaXplJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzaXplKGV2ZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQ3JvcHBlclBvc2l0aW9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRNYXhTaXplKCkge1xuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zb3VyY2UtaW1hZ2UnKTtcbiAgICAgICAgdGhpcy5tYXhTaXplLndpZHRoID0gZWwub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMubWF4U2l6ZS5oZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIHRoaXMubWFyZ2luTGVmdCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RTdHlsZSgnY2FsYyg1MCUgLSAnICsgdGhpcy5tYXhTaXplLndpZHRoIC8gMiArICdweCknKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNoZWNrQ3JvcHBlclBvc2l0aW9uKG1haW50YWluU2l6ZSA9IGZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIueDEgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgLT0gbWFpbnRhaW5TaXplID8gdGhpcy5jcm9wcGVyLngxIDogMDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3JvcHBlci55MSA8IDApIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiAtPSBtYWludGFpblNpemUgPyB0aGlzLmNyb3BwZXIueTEgOiAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5jcm9wcGVyLngyID4gdGhpcy5tYXhTaXplLndpZHRoKSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgLT0gbWFpbnRhaW5TaXplID8gKHRoaXMuY3JvcHBlci54MiAtIHRoaXMubWF4U2l6ZS53aWR0aCkgOiAwO1xuICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5tYXhTaXplLndpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNyb3BwZXIueTIgPiB0aGlzLm1heFNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgLT0gbWFpbnRhaW5TaXplID8gKHRoaXMuY3JvcHBlci55MiAtIHRoaXMubWF4U2l6ZS5oZWlnaHQpIDogMDtcbiAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMubWF4U2l6ZS5oZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDptb3VzZXVwJywgWyckZXZlbnQnXSlcbiAgICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDp0b3VjaGVuZCcsIFsnJGV2ZW50J10pXG4gICAgbW92ZVN0b3AoZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5tb3ZlU3RhcnQuYWN0aXZlKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmVTdGFydC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZG9BdXRvQ3JvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBtb3ZlKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGlmZlggPSB0aGlzLmdldENsaWVudFgoZXZlbnQpIC0gdGhpcy5tb3ZlU3RhcnQuY2xpZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlkgPSB0aGlzLmdldENsaWVudFkoZXZlbnQpIC0gdGhpcy5tb3ZlU3RhcnQuY2xpZW50WTtcblxuICAgICAgICB0aGlzLmNyb3BwZXIueDEgPSB0aGlzLm1vdmVTdGFydC54MSArIGRpZmZYO1xuICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSB0aGlzLm1vdmVTdGFydC55MSArIGRpZmZZO1xuICAgICAgICB0aGlzLmNyb3BwZXIueDIgPSB0aGlzLm1vdmVTdGFydC54MiArIGRpZmZYO1xuICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSB0aGlzLm1vdmVTdGFydC55MiArIGRpZmZZO1xuICAgIH1cblxuICAgIHByaXZhdGUgcmVzaXplKGV2ZW50OiBhbnkpIHtcbiAgICAgICAgY29uc3QgZGlmZlggPSB0aGlzLmdldENsaWVudFgoZXZlbnQpIC0gdGhpcy5tb3ZlU3RhcnQuY2xpZW50WDtcbiAgICAgICAgY29uc3QgZGlmZlkgPSB0aGlzLmdldENsaWVudFkoZXZlbnQpIC0gdGhpcy5tb3ZlU3RhcnQuY2xpZW50WTtcbiAgICAgICAgc3dpdGNoICh0aGlzLm1vdmVTdGFydC5wb3NpdGlvbikge1xuICAgICAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngxID0gTWF0aC5taW4odGhpcy5tb3ZlU3RhcnQueDEgKyBkaWZmWCwgdGhpcy5jcm9wcGVyLngyIC0gMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wbGVmdCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngxID0gTWF0aC5taW4odGhpcy5tb3ZlU3RhcnQueDEgKyBkaWZmWCwgdGhpcy5jcm9wcGVyLngyIC0gMjApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MSA9IE1hdGgubWluKHRoaXMubW92ZVN0YXJ0LnkxICsgZGlmZlksIHRoaXMuY3JvcHBlci55MiAtIDIwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gTWF0aC5taW4odGhpcy5tb3ZlU3RhcnQueTEgKyBkaWZmWSwgdGhpcy5jcm9wcGVyLnkyIC0gMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9wcmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiA9IE1hdGgubWF4KHRoaXMubW92ZVN0YXJ0LngyICsgZGlmZlgsIHRoaXMuY3JvcHBlci54MSArIDIwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSBNYXRoLm1pbih0aGlzLm1vdmVTdGFydC55MSArIGRpZmZZLCB0aGlzLmNyb3BwZXIueTIgLSAyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gTWF0aC5tYXgodGhpcy5tb3ZlU3RhcnQueDIgKyBkaWZmWCwgdGhpcy5jcm9wcGVyLngxICsgMjApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90dG9tcmlnaHQnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiA9IE1hdGgubWF4KHRoaXMubW92ZVN0YXJ0LngyICsgZGlmZlgsIHRoaXMuY3JvcHBlci54MSArIDIwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSBNYXRoLm1heCh0aGlzLm1vdmVTdGFydC55MiArIGRpZmZZLCB0aGlzLmNyb3BwZXIueTEgKyAyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IE1hdGgubWF4KHRoaXMubW92ZVN0YXJ0LnkyICsgZGlmZlksIHRoaXMuY3JvcHBlci55MSArIDIwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbWxlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSA9IE1hdGgubWluKHRoaXMubW92ZVN0YXJ0LngxICsgZGlmZlgsIHRoaXMuY3JvcHBlci54MiAtIDIwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTIgPSBNYXRoLm1heCh0aGlzLm1vdmVTdGFydC55MiArIGRpZmZZLCB0aGlzLmNyb3BwZXIueTEgKyAyMCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5tYWludGFpbkFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrQXNwZWN0UmF0aW8oKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgY2hlY2tBc3BlY3RSYXRpbygpIHtcbiAgICAgICAgbGV0IG92ZXJmbG93WCA9IDA7XG4gICAgICAgIGxldCBvdmVyZmxvd1kgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5tb3ZlU3RhcnQucG9zaXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgJ3RvcCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyID0gdGhpcy5jcm9wcGVyLngxICsgKHRoaXMuY3JvcHBlci55MiAtIHRoaXMuY3JvcHBlci55MSkgKiB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WCA9IE1hdGgubWF4KHRoaXMuY3JvcHBlci54MiAtIHRoaXMubWF4U2l6ZS53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZID0gTWF0aC5tYXgoMCAtIHRoaXMuY3JvcHBlci55MSwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93WCA+IDAgfHwgb3ZlcmZsb3dZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgLT0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pIDogb3ZlcmZsb3dYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgKz0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gb3ZlcmZsb3dZIDogb3ZlcmZsb3dYIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MiA9IHRoaXMuY3JvcHBlci54MSArICh0aGlzLmNyb3BwZXIueTIgLSB0aGlzLmNyb3BwZXIueTEpICogdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1ggPSBNYXRoLm1heCh0aGlzLmNyb3BwZXIueDIgLSB0aGlzLm1heFNpemUud2lkdGgsIDApO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WSA9IE1hdGgubWF4KHRoaXMuY3JvcHBlci55MiAtIHRoaXMubWF4U2l6ZS5oZWlnaHQsIDApO1xuICAgICAgICAgICAgICAgIGlmIChvdmVyZmxvd1ggPiAwIHx8IG92ZXJmbG93WSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLngyIC09IChvdmVyZmxvd1kgKiB0aGlzLmFzcGVjdFJhdGlvKSA+IG92ZXJmbG93WCA/IChvdmVyZmxvd1kgKiB0aGlzLmFzcGVjdFJhdGlvKSA6IG92ZXJmbG93WDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyIC09IChvdmVyZmxvd1kgKiB0aGlzLmFzcGVjdFJhdGlvKSA+IG92ZXJmbG93WCA/IG92ZXJmbG93WSA6IChvdmVyZmxvd1ggLyB0aGlzLmFzcGVjdFJhdGlvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3BsZWZ0JzpcbiAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgPSB0aGlzLmNyb3BwZXIueTIgLSAodGhpcy5jcm9wcGVyLngyIC0gdGhpcy5jcm9wcGVyLngxKSAvIHRoaXMuYXNwZWN0UmF0aW87XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dYID0gTWF0aC5tYXgoMCAtIHRoaXMuY3JvcHBlci54MSwgMCk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZID0gTWF0aC5tYXgoMCAtIHRoaXMuY3JvcHBlci55MSwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93WCA+IDAgfHwgb3ZlcmZsb3dZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDEgKz0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pIDogb3ZlcmZsb3dYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgKz0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gb3ZlcmZsb3dZIDogb3ZlcmZsb3dYIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0b3ByaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkxID0gdGhpcy5jcm9wcGVyLnkyIC0gKHRoaXMuY3JvcHBlci54MiAtIHRoaXMuY3JvcHBlci54MSkgLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WCA9IE1hdGgubWF4KHRoaXMuY3JvcHBlci54MiAtIHRoaXMubWF4U2l6ZS53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZID0gTWF0aC5tYXgoMCAtIHRoaXMuY3JvcHBlci55MSwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93WCA+IDAgfHwgb3ZlcmZsb3dZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgLT0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pIDogb3ZlcmZsb3dYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTEgKz0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gb3ZlcmZsb3dZIDogb3ZlcmZsb3dYIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgICAgICBjYXNlICdib3R0b21yaWdodCc6XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wcGVyLnkyID0gdGhpcy5jcm9wcGVyLnkxICsgKHRoaXMuY3JvcHBlci54MiAtIHRoaXMuY3JvcHBlci54MSkgLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIG92ZXJmbG93WCA9IE1hdGgubWF4KHRoaXMuY3JvcHBlci54MiAtIHRoaXMubWF4U2l6ZS53aWR0aCwgMCk7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3dZID0gTWF0aC5tYXgodGhpcy5jcm9wcGVyLnkyIC0gdGhpcy5tYXhTaXplLmhlaWdodCwgMCk7XG4gICAgICAgICAgICAgICAgaWYgKG92ZXJmbG93WCA+IDAgfHwgb3ZlcmZsb3dZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueDIgLT0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pIDogb3ZlcmZsb3dYO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyb3BwZXIueTIgLT0gKG92ZXJmbG93WSAqIHRoaXMuYXNwZWN0UmF0aW8pID4gb3ZlcmZsb3dYID8gb3ZlcmZsb3dZIDogb3ZlcmZsb3dYIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICAgIGNhc2UgJ2JvdHRvbWxlZnQnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiA9IHRoaXMuY3JvcHBlci55MSArICh0aGlzLmNyb3BwZXIueDIgLSB0aGlzLmNyb3BwZXIueDEpIC8gdGhpcy5hc3BlY3RSYXRpbztcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1ggPSBNYXRoLm1heCgwIC0gdGhpcy5jcm9wcGVyLngxLCAwKTtcbiAgICAgICAgICAgICAgICBvdmVyZmxvd1kgPSBNYXRoLm1heCh0aGlzLmNyb3BwZXIueTIgLSB0aGlzLm1heFNpemUuaGVpZ2h0LCAwKTtcbiAgICAgICAgICAgICAgICBpZiAob3ZlcmZsb3dYID4gMCB8fCBvdmVyZmxvd1kgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci54MSArPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgOiBvdmVyZmxvd1g7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JvcHBlci55MiAtPSAob3ZlcmZsb3dZICogdGhpcy5hc3BlY3RSYXRpbykgPiBvdmVyZmxvd1ggPyBvdmVyZmxvd1kgOiBvdmVyZmxvd1ggLyB0aGlzLmFzcGVjdFJhdGlvO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgZG9BdXRvQ3JvcCgpIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b0Nyb3ApIHtcbiAgICAgICAgICAgIHRoaXMuY3JvcCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JvcCgpIHtcbiAgICAgICAgY29uc3QgZGlzcGxheWVkSW1hZ2UgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuc291cmNlLWltYWdlJyk7XG4gICAgICAgIGlmIChkaXNwbGF5ZWRJbWFnZSAmJiB0aGlzLm9yaWdpbmFsSW1hZ2UgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcmF0aW8gPSB0aGlzLm9yaWdpbmFsU2l6ZS53aWR0aCAvIGRpc3BsYXllZEltYWdlLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgY29uc3QgbGVmdCA9IE1hdGgucm91bmQodGhpcy5jcm9wcGVyLngxICogcmF0aW8pO1xuICAgICAgICAgICAgY29uc3QgdG9wID0gTWF0aC5yb3VuZCh0aGlzLmNyb3BwZXIueTEgKiByYXRpbyk7XG4gICAgICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgucm91bmQoKHRoaXMuY3JvcHBlci54MiAtIHRoaXMuY3JvcHBlci54MSkgKiByYXRpbyk7XG4gICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLnJvdW5kKCh0aGlzLmNyb3BwZXIueTIgLSB0aGlzLmNyb3BwZXIueTEpICogcmF0aW8pO1xuICAgICAgICAgICAgY29uc3QgcmVzaXplUmF0aW8gPSB0aGlzLmdldFJlc2l6ZVJhdGlvKHdpZHRoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlc2l6ZWRXaWR0aCA9IE1hdGguZmxvb3Iod2lkdGggKiByZXNpemVSYXRpbyk7XG4gICAgICAgICAgICBjb25zdCByZXNpemVkSGVpZ2h0ID0gTWF0aC5mbG9vcihoZWlnaHQgKiByZXNpemVSYXRpbyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyb3BDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcbiAgICAgICAgICAgIGNyb3BDYW52YXMud2lkdGggPSByZXNpemVkV2lkdGg7XG4gICAgICAgICAgICBjcm9wQ2FudmFzLmhlaWdodCA9IHJlc2l6ZWRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNyb3BDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICAgIGlmIChjdHgpIHtcbiAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMub3JpZ2luYWxJbWFnZSwgbGVmdCwgdG9wLCB3aWR0aCwgaGVpZ2h0LCAwLCAwLCB3aWR0aCAqIHJlc2l6ZVJhdGlvLCBoZWlnaHQgKiByZXNpemVSYXRpbyk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcm9wVG9PdXRwdXRUeXBlKGNyb3BDYW52YXMsIHJlc2l6ZWRXaWR0aCwgcmVzaXplZEhlaWdodCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGNyb3BUb091dHB1dFR5cGUoY3JvcENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQsIHJlc2l6ZWRXaWR0aDogbnVtYmVyLCByZXNpemVkSGVpZ2h0OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgb3V0cHV0OiBJbWFnZUNyb3BwZWRFdmVudCA9IHtcbiAgICAgICAgICAgIHdpZHRoOiByZXNpemVkV2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IHJlc2l6ZWRIZWlnaHQsXG4gICAgICAgICAgICBjcm9wcGVyUG9zaXRpb246IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuY3JvcHBlcilcbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoICh0aGlzLm91dHB1dFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2Jhc2U2NCc6XG4gICAgICAgICAgICAgICAgb3V0cHV0LmJhc2U2NCA9IHRoaXMuY3JvcFRvQmFzZTY0KGNyb3BDYW52YXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VDcm9wcGVkLmVtaXQob3V0cHV0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2ZpbGUnOlxuICAgICAgICAgICAgICAgIHRoaXMuY3JvcFRvRmlsZShjcm9wQ2FudmFzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0OiBCbG9iIHwgbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmZpbGUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ3JvcHBlZC5lbWl0KG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYm90aCc6XG4gICAgICAgICAgICAgICAgb3V0cHV0LmJhc2U2NCA9IHRoaXMuY3JvcFRvQmFzZTY0KGNyb3BDYW52YXMpO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JvcFRvRmlsZShjcm9wQ2FudmFzKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzdWx0OiBCbG9iIHwgbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3V0cHV0LmZpbGUgPSByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ3JvcHBlZC5lbWl0KG91dHB1dCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBjcm9wVG9CYXNlNjQoY3JvcENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBzdHJpbmcge1xuICAgICAgICBjb25zdCBpbWFnZUJhc2U2NCA9IGNyb3BDYW52YXMudG9EYXRhVVJMKCdpbWFnZS8nICsgdGhpcy5mb3JtYXQsIHRoaXMuZ2V0UXVhbGl0eSgpKTtcbiAgICAgICAgdGhpcy5pbWFnZUNyb3BwZWRCYXNlNjQuZW1pdChpbWFnZUJhc2U2NCk7XG4gICAgICAgIHJldHVybiBpbWFnZUJhc2U2NDtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNyb3BUb0ZpbGUoY3JvcENhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpOiBQcm9taXNlPEJsb2IgfCBudWxsPiB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENhbnZhc0Jsb2IoY3JvcENhbnZhcylcbiAgICAgICAgICAgIC50aGVuKChyZXN1bHQ6IEJsb2IgfCBudWxsKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmltYWdlQ3JvcHBlZEZpbGUuZW1pdChyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRDYW52YXNCbG9iKGNyb3BDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KTogUHJvbWlzZTxCbG9iIHwgbnVsbD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIGNyb3BDYW52YXMudG9CbG9iKFxuICAgICAgICAgICAgICAgIChyZXN1bHQ6IEJsb2IgfCBudWxsKSA9PiByZXNvbHZlKHJlc3VsdCksXG4gICAgICAgICAgICAgICAgJ2ltYWdlLycgKyB0aGlzLmZvcm1hdCxcbiAgICAgICAgICAgICAgICB0aGlzLmdldFF1YWxpdHkoKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXRRdWFsaXR5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB0aGlzLmltYWdlUXVhbGl0eSAvIDEwMCkpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0UmVzaXplUmF0aW8od2lkdGg6IG51bWJlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc2l6ZVRvV2lkdGggPiAwICYmICghdGhpcy5vbmx5U2NhbGVEb3duIHx8IHdpZHRoID4gdGhpcy5yZXNpemVUb1dpZHRoKVxuICAgICAgICAgICAgPyB0aGlzLnJlc2l6ZVRvV2lkdGggLyB3aWR0aFxuICAgICAgICAgICAgOiAxO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2xpZW50WChldmVudDogYW55KSB7XG4gICAgICAgIHJldHVybiBldmVudC5jbGllbnRYICE9IG51bGwgPyBldmVudC5jbGllbnRYIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRYO1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Q2xpZW50WShldmVudDogYW55KSB7XG4gICAgICAgIHJldHVybiBldmVudC5jbGllbnRZICE9IG51bGwgPyBldmVudC5jbGllbnRZIDogZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZS1jcm9wcGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBJbWFnZUNyb3BwZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSW1hZ2VDcm9wcGVyQ29tcG9uZW50XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZUNyb3BwZXJNb2R1bGUge31cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLElBQUE7Ozs7Ozs7SUFDVyx5QkFBYzs7OztJQUFyQixVQUFzQixXQUFtQjs7UUFDckMsSUFBTSxJQUFJLEdBQUcsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxNQUFNLEVBQUU7WUFDcEMsT0FBTyxDQUFDLENBQUMsQ0FB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T0FBTyxDQUFDO1FBQzlELFFBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQzNCLEtBQUssTUFBTTtnQkFDUCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDNUUsTUFBTTtZQUNWLEtBQUssU0FBUztnQkFDVixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLE1BQU07WUFDVixLQUFLLEtBQUs7Z0JBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLE1BQU07WUFDVixLQUFLLFVBQVU7Z0JBQ1gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzVFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNO1lBQ1YsS0FBSyxPQUFPO2dCQUNSLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RSxNQUFNO1lBQ1YsS0FBSyxhQUFhO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDNUUsTUFBTTtZQUNWLEtBQUssUUFBUTtnQkFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztnQkFDNUUsTUFBTTtZQUNWLEtBQUssWUFBWTtnQkFDYixJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMs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

/***/ }),

/***/ "./src/app/campaign/archive/archive.component.html":
/*!*********************************************************!*\
  !*** ./src/app/campaign/archive/archive.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.4.1/css/all.css\" integrity=\"sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz\" crossorigin=\"anonymous\">\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <!-- <input type=\"button\" class=\"btn btn-primary\" value=\"Create campagin\" (click) = \"CreateCampaign()\"> -->\n    <div class=\"row\">\n\n      <div class=\"col-md-3 col-sm-12 col-xs-12\" *ngFor=\"let row of $getCampaign | async\">\n        <app-campaign-card [data]=\"row\"></app-campaign-card>\n\n      </div>\n\n\n      <!-- end row -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/campaign/archive/archive.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/campaign/archive/archive.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  margin-top: 30px;\n  padding: 0px 0px; }\n"

/***/ }),

/***/ "./src/app/campaign/archive/archive.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/campaign/archive/archive.component.ts ***!
  \*******************************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../shared/services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
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




var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(campaignService, router, datePipe) {
        this.campaignService = campaignService;
        this.router = router;
        this.datePipe = datePipe;
    }
    // transformDate(currentDate): String {
    //   return this.datePipe.transform(currentDate, 'yyyy-MM-dd'); // whatever format you need.
    // }
    ArchiveComponent.prototype.ngOnInit = function () {
        // this.transformDate(this.currentDate);
        console.log(this.currentDate);
        // this.campaignService.getCampaigns().subscribe(
        //   res => {
        //     this.currentDate = this.transformDate(res['endDate']);
        //     // this.currentDate = res['endDate'].toLocaleDateString();
        //     alert(this.currentDate);
        //   },
        //   err => {}
        // );
        this.$getCampaign = this.campaignService.getArchiveCampaigns();
        // this.campaignService.getArchiveCampaigns().subscribe(
        //   res => {
        //     this.campaignEndDate = res['endDate'];
        //     console.log('camapaignEndDate', this.campaignEndDate);
        //   },
        //   err => {}
        // );
    };
    ArchiveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/campaign/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.scss */ "./src/app/campaign/archive/archive.component.scss")],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
        }),
        __metadata("design:paramtypes", [_shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

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
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./campaign-routing.module */ "./src/app/campaign/campaign-routing.module.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/campaign/create/create.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/campaign/view/view.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/campaign/archive/archive.component.ts");
/* harmony import */ var _current_current_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./current/current.component */ "./src/app/campaign/current/current.component.ts");
/* harmony import */ var _pending_pending_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pending/pending.component */ "./src/app/campaign/pending/pending.component.ts");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./create-category/create-category.component */ "./src/app/campaign/create-category/create-category.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// tslint:disable-next-line:max-line-length







// import { SharedModule } from 'app/shared/shared.module';
var CampaignModule = /** @class */ (function () {
    function CampaignModule() {
    }
    CampaignModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _campaign_routing_module__WEBPACK_IMPORTED_MODULE_4__["CampaignRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_0__["MaterialModule"],
                app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_9__["ImageCropperModule"]
            ],
            declarations: [
                _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"],
                _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"],
                _archive_archive_component__WEBPACK_IMPORTED_MODULE_10__["ArchiveComponent"],
                _current_current_component__WEBPACK_IMPORTED_MODULE_11__["CurrentComponent"],
                _pending_pending_component__WEBPACK_IMPORTED_MODULE_12__["PendingComponent"],
                _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_13__["CreateCategoryComponent"]
            ],
            entryComponents: [_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_13__["CreateCategoryComponent"]]
        })
    ], CampaignModule);
    return CampaignModule;
}());



/***/ }),

/***/ "./src/app/campaign/create-category/create-category.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/create-category/create-category.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "dialog-overview-example-dialog.html\n<ol>\n  <li>\n    <mat-form-field>\n      <input matInput placeholder=\"What's your name?\">\n    </mat-form-field>\n  </li>\n  <li>\n    <button mat-raised-button>Pick one</button>\n  </li>\n\n</ol>"

/***/ }),

/***/ "./src/app/campaign/create-category/create-category.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/campaign/create-category/create-category.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campaign/create-category/create-category.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/campaign/create-category/create-category.component.ts ***!
  \***********************************************************************/
/*! exports provided: CreateCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCategoryComponent", function() { return CreateCategoryComponent; });
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


var CreateCategoryComponent = /** @class */ (function () {
    function CreateCategoryComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CreateCategoryComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CreateCategoryComponent.prototype.ngOnInit = function () { };
    CreateCategoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-category',
            template: __webpack_require__(/*! ./create-category.component.html */ "./src/app/campaign/create-category/create-category.component.html"),
            styles: [__webpack_require__(/*! ./create-category.component.scss */ "./src/app/campaign/create-category/create-category.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], CreateCategoryComponent);
    return CreateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/campaign/create/create.component.html":
/*!*******************************************************!*\
  !*** ./src/app/campaign/create/create.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-top: 80px\">\r\n  <div class=\"row\">\r\n    <div class=\"col-12\">\r\n      <mat-horizontal-stepper linear #stepper>\r\n        <mat-step [stepControl]=\"firstFormGroup\" [optional]=\"isOptional\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8 col-sm-12 col-xs-12\">\r\n              <form [formGroup]=\"firstFormGroup\">\r\n                <ng-template matStepLabel>Campagin Details</ng-template>\r\n                <div class=row>\r\n                  <!-- row 1 -->\r\n                  <div class=col-12>\r\n                    <mat-form-field>\r\n                      <input matInput placeholder=\"Campaign Title (maximum 30 characters)\" formControlName=\"title\" maxlength=\"30\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div><!-- end  row 1 -->\r\n                <div class=\"row\">\r\n                  <!--Row 2-->\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field>\r\n                      <textarea matInput placeholder=\"Terms and Conditions (Maximum 500 characters)\" formControlName=\"termsAndConditions\" maxlength=\"500\">\r\n\r\n                        </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-6\">\r\n                    <mat-form-field>\r\n                      <textarea matInput placeholder=\"Description ( Maximum 100 characters)\" formControlName=\"description\" maxlength=\"100\">\r\n\r\n                        </textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </div>\r\n                <!--End of row 2-->\r\n\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Campaign Category\" formControlName=\"categoryId\">\r\n\r\n                    <mat-option *ngFor=\"let row of (categoryObj$ | async)\" [value]=\"row?.id\" (onSelectionChange)=\"categoryCheckedFn()\">\r\n                      {{ row?.name }}\r\n                    </mat-option>\r\n                    <!-- <mat-option (click)=\"openDialog()\">Can't find my Category</mat-option> -->\r\n\r\n\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!-- <mat-form-field *ngIf=\"newCategoryChecked\">\r\n                  <input matInput placeholder=\"Enter new Category name\" formControlName=\"newCategoryText\" maxlength=\"30\" required>\r\n                </mat-form-field> -->\r\n\r\n                <div class=\"row\">\r\n                  <!--Row 3-->\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Campagin Type\" formControlName=\"campaignType\">\r\n                        <mat-option *ngFor=\"let row of campaignTypes\" [value]=\"row.value\">\r\n                          {{row.viewValue}}\r\n\r\n                        </mat-option>\r\n\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field>\r\n                      <input [min]=\"minDate\" matInput formControlName=\"startDate\" [matDatepicker]=\"dp3\" placeholder=\"Strating date\" (click)=\"dp3.open()\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"dp3\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #dp3 disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                  <div class=\"col-4\">\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"Number of Weeks\" formControlName=\"noOfWeeks\" (selectionChange)=\"selectedNoOfWeeks($event.value)\">\r\n                        <mat-option *ngFor=\"let row of weeks\" [value]=\"row.value \">\r\n                          {{row.viewValue}}\r\n                        </mat-option>\r\n\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n                <!--End of row 3-->\r\n\r\n\r\n\r\n                <div class=\" border mat-elevation-z1 for-admin\">\r\n                  <p class=\"for-admin-p\"><u matTooltip=\"This information won't be displayed on website\">This informtion won't be dislayed</u></p>\r\n\r\n                  <div class=row>\r\n\r\n                    <!--row 4-->\r\n                    <div class=\" col-6\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Discount Type\" formControlName=\"discountType\" (selectionChange)=\"discountTypesSelection($event.value)\">\r\n                          <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                            {{row.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=col-6>\r\n                      <mat-form-field>\r\n                        <input matInput [placeholder]=\"discountPlaceholder\" formControlName=\"baseDiscountAmount\" [type]=\"discountTxtType\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div><!-- end of row 4-->\r\n                  <div class=row>\r\n                    <!--row 5-->\r\n                    <div class=\"col-6\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"Discount Utilization\" formControlName=\"discountUtilization\">\r\n                          <mat-option *ngFor=\"let row of utilizations\" [value]=\"row.value\">\r\n                            {{row.viewValue}}\r\n                          </mat-option>\r\n\r\n\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-6\">\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"pick a number\" formControlName=\"number\">\r\n                          <mat-option *ngFor=\"let row of utilizationNumber\" [value]=\"row.value\">\r\n                            {{row.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <!--end of Row 5-->\r\n\r\n              </form>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-12 col-xs-12\">\r\n              <form [formGroup]=\"imageFormGroup\">\r\n                <!-- image form-->\r\n                <ng-template matStepLabel>Campaign Creation</ng-template>\r\n                <div class=\"card-body\">\r\n                  <div class=\"tab-content\">\r\n                    <!-- <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                      <div class=\"fileinput-new thumbnail\">\r\n                        <img src=\"../../../assets/img/image_placeholder.jpg\" alt=\"...\">\r\n                      </div>\r\n                      <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\r\n                      <div>\r\n                        <span class=\"btn btn-primary btn-round btn-file\">\r\n                          <span class=\"fileinput-new\">Select\r\n                            Campaign\r\n                            Image</span>\r\n                          <span class=\"fileinput-exists\">Change</span>\r\n\r\n                          \r\n                        </span>\r\n                        <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\" (change)=\"clear()\">\r\n                          <i class=\"fa fa-times\"></i>\r\n                          Remove</a>\r\n                      </div>\r\n                    </div> -->\r\n                    <h4>Choose Campaign Image</h4>\r\n                    <input formControlName=\"imagePicker\" class=\"fileinput\" type='file' (change)=\"fileChangeEvent($event)\" accept=\".jpg, .jpeg, .png\" required />\r\n                    <image-cropper *ngIf=\"imageCropperStatus\" [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"370/270\" [resizeToWidth]=\"370\" format=\"png\" (imageCropped)=\"imageCropped($event)\" (imageLoaded)=\"imageLoaded()\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n                    <p *ngIf=\"!imageSize\" style=\"color: red\">please choose the image of appropriate size from 200KB to 5MB</p>\r\n                    <!-- <img [src]=\"croppedImage\" /> -->\r\n                  </div>\r\n                </div>\r\n\r\n              </form>\r\n              <!--image form end -->\r\n            </div>\r\n          </div>\r\n\r\n          <div>\r\n            <mat-error *ngIf=\"base64.invalid\">Please upload the image.</mat-error>\r\n            <button [disabled]=\"base64.invalid || !imageSize\" class=\"btn btn-round btn-success pull-right\" mat-button matStepperNext>Next</button>\r\n          </div>\r\n        </mat-step>\r\n        <mat-step [stepControl]=\"secondFormGroup\" [optional]=\"isOptional\">\r\n          <form [formGroup]=\"secondFormGroup\">\r\n            <ng-template matStepLabel>Ambassader Perks</ng-template>\r\n            <div class=row>\r\n              <div class=\"col-12\">\r\n                <mat-checkbox (change)=\"ambCheckBoxCilck($event.checked)\">Do\r\n                  you want Ambassadors for your campaign?</mat-checkbox>\r\n              </div>\r\n            </div>\r\n            <div class=row>\r\n              <!---    ambassadors select-->\r\n              <div class=\"col-12\" *ngIf=\"ambChecked\">\r\n                <mat-form-field>\r\n                  <mat-select placeholder=\"Select Ambassadors\" formControlName=\"ambassadorIds\" multiple>\r\n                    <mat-option style=\"height:6rem\" *ngFor=\"let row of (ambassadorObj$ | async)\" [value]=\"{'id' : row?.id,'referralCode' : row?.referralCode}\">\r\n                      {{row?.firstName}}\r\n                      {{row?.lastName}}\r\n                      <img style=\"height: 80px; padding-left: 30px;\" src=\"{{row?.idCard}}\">\r\n                      {{row?.instituteName}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n\r\n                </mat-form-field>\r\n              </div>\r\n              <!---    ambassadors selected-->\r\n              <div class=\"col-12\" *ngIf=\"ambChecked\">\r\n                <mat-radio-group>\r\n                  <mat-radio-button (change)=\"sameAmbPerksClick($event.checked)\" value=\"1\">Same perks as normal User&nbsp;&nbsp;\r\n                  </mat-radio-button>\r\n                  <mat-radio-button (change)=\"sepAmbPerksClick($event.checked)\" value=\"2\">define Ambassadors perks\r\n                    separately</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n            </div>\r\n            <div *ngIf=\"sepAmbPerksChecked\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Discount Utilization\" formControlName=\"ambDiscountUtilization\">\r\n                      <mat-option *ngFor=\"let row of utilizations\" [value]=\"row.value\">\r\n                        {{row.viewValue}}\r\n                      </mat-option>\r\n\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"pick a number\" formControlName=\"ambNumber\">\r\n                      <mat-option *ngFor=\"let row of utilizationNumber\" [value]=\"row.value\">\r\n                        {{row.viewValue}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Discount Type\" formControlName=\"ambassadorDiscount\" (selectionChange)=\"ambDiscountTypesSelection($event.value)\">\r\n                      <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                        {{row.viewValue}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <input min=\"0\" matInput [placeholder]=\"ambDiscountPlaceholder\" formControlName=\"ambassadorDiscountAmount\" [type]=\"discountTxtType\">\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!--Referral-->\r\n            <hr>\r\n            <div class=\"container\">\r\n              <div class=\"row\">\r\n                <mat-checkbox *ngIf=\"ambChecked\" (change)=\"refCheckBoxClick($event.checked)\">Do\r\n                  you want referrals for your cammpaign?</mat-checkbox>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"refChecked\">\r\n                <mat-radio-group>\r\n                  <mat-radio-button (change)=\"sameRefPerksClick($event.checked)\" value=\"1\">Same perks as normal User&nbsp;&nbsp;\r\n                  </mat-radio-button>\r\n                  <mat-radio-button (change)=\"sepRefPerksClick($event.checked)\" value=\"2\">define Referral perks\r\n                    separately</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"sepRefPerksChecked\">\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Discount Type\" formControlName=\"referralDiscount\" (selectionChange)=\"refDiscountTypesSelection($event.value)\">\r\n                      <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                        {{row.viewValue}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <input min=\"0\" matInput [placeholder]=\"refDiscountPlaceholder\" formControlName=\"referralDiscountAmount\" [type]=\"discountTxtType\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n              <div>\r\n                <button class=\"btn btn-round \" mat-button matStepperPrevious>Back</button>\r\n\r\n\r\n                <button (click)=\"SetPayload()\" style=\"float: right;\" class=\"btn btn-round btn-success btn-lg\" mat-button>Create\r\n                  Campaign</button>\r\n\r\n              </div>\r\n            </div>\r\n          </form>\r\n\r\n        </mat-step>\r\n        <!-- <mat-step [stepControl]=\"thirdFormGroup\" [optional]=\"isOptional\">\r\n          <div class=\"container\">\r\n            <form [formGroup]=\"thirdFormGroup\">\r\n\r\n              <ng-template matStepLabel>Referral Perks</ng-template>\r\n              <div class=\"row\">\r\n                <mat-checkbox *ngIf=\"ambChecked\" (change)=\"refCheckBoxClick($event.checked)\">Do\r\n                  you want referrals for your cammpaign?</mat-checkbox>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"refChecked\">\r\n                <mat-radio-group>\r\n                  <mat-radio-button (change)=\"sameRefPerksClick($event.checked)\" value=\"1\">Same perks as normal User\r\n                  </mat-radio-button>\r\n                  <mat-radio-button (change)=\"sepRefPerksClick($event.checked)\" value=\"2\">define Referral perks\r\n                    separately</mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"sepRefPerksChecked\">\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <mat-select placeholder=\"Discount Type\" formControlName=\"referralDiscount\" (selectionChange)=\"refDiscountTypesSelection($event.value)\">\r\n                      <mat-option [value]=\"row.value\" *ngFor=\"let row of discountTypes\">\r\n                        {{row.viewValue}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <mat-form-field>\r\n                    <input min=\"0\" matInput [placeholder]=\"refDiscountPlaceholder\" formControlName=\"referralDiscountAmount\" [type]=\"discountTxtType\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n\r\n\r\n              <div>\r\n                <button class=\"btn btn-round btn-primary\" mat-button matStepperPrevious>Back</button>\r\n                <button (click)=\"SetPayload()\" style=\"float: right;\" class=\"btn btn-round btn-lg\" mat-button>Create\r\n                  Campaign</button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        </mat-step> -->\r\n      </mat-horizontal-stepper>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/campaign/create/create.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/campaign/create/create.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".resize left {\n  visibility: hidden; }\n\n.for-admin {\n  padding: 10px 16px; }\n\n.for-admin-p {\n  font-size: 11px;\n  color: #afafaf; }\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _create_category_create_category_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../create-category/create-category.component */ "./src/app/campaign/create-category/create-category.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../shared/services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function CreateComponent(formBuilder, campaignService, dialog, router) {
        this.formBuilder = formBuilder;
        this.campaignService = campaignService;
        this.dialog = dialog;
        this.router = router;
        this.imagePicked = false;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.isOptional = false;
        this.base64 = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required);
        this.isLinear = false;
        this.status = true;
        this.discountTxtType = 'number';
        this.ambDiscountPlaceholder = 'input Vlaue';
        this.refDiscountPlaceholder = 'input Vlaue';
        this.discountPlaceholder = 'input Value';
        this.ambChecked = false;
        this.sepAmbPerksChecked = false;
        this.refChecked = false;
        this.sepRefPerksChecked = false;
        this.sameAmbPerksChecked = false;
        this.sameRefPerksChecked = false;
        this.minDate = new Date();
        this.newCategoryChecked = false;
        this.imageSize = false;
        this.imageCropperStatus = false;
        // thirdFormGroup: FormGroup;
        this.payloadObj = {
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
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            termsAndConditions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            campaignType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            startDate: [new Date(), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            noOfWeeks: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            discountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            discountUtilization: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            baseDiscountAmount: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
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
            imagePicker: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.categoryObj$ = this.campaignService.getCategories(); // get Categories call
        this.ambassadorObj$ = this.campaignService.getAmbassadors(); // get all ambassadorss
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].navigatedFromArchived === true &&
            _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].campaignIdToReActivate !== '') {
            this.campaginById();
        }
    };
    CreateComponent.prototype.campaginById = function () {
        var _this = this;
        this.campaignService
            .getCampaignById(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].campaignIdToReActivate)
            .subscribe(function (res) {
            _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].navigatedFromArchived = false;
            _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].campaignIdToReActivate = '';
            console.log(res);
            // console.log('nwe new new', res['discountType'].baseDiscount);
            console.log('this is start date', res['startDate']);
            _this.campaignService.getCategoryById(res['categoryId']).subscribe(function (response) {
                _this.temp = response['name'];
                console.log('category name', _this.temp);
            }, function (error) {
                console.log('there is an error', error);
            });
            _this.firstFormGroup.setValue({
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
            console.log(' this is number of weeks', _this.firstFormGroup.get('noOfWeeks').value);
        }, function (err) {
            console.log(err);
        });
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
            // this.thirdFormGroup.reset();
        }
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
            // this.thirdFormGroup.reset();
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
    CreateComponent.prototype.newCategoryFn = function () {
        this.newCategoryChecked = true;
    };
    CreateComponent.prototype.categoryCheckedFn = function () {
        this.newCategoryChecked = false;
    };
    CreateComponent.prototype.discountTypesSelection = function (value) {
        console.log(value);
        if (value === 'fixed') {
            this.discountTxtType = 'number';
            this.discountPlaceholder = 'Enter Fixed Discount Amount';
        }
        else if (value === 'percentage') {
            this.discountPlaceholder = 'Enter discount in percentage';
            this.discountTxtType = 'number';
        }
        else if (value === 'other') {
            this.discountPlaceholder = 'Enter Details';
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
    CreateComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_create_category_create_category_component__WEBPACK_IMPORTED_MODULE_2__["CreateCategoryComponent"], {
            width: '250px',
            data: {}
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    CreateComponent.prototype.handleFileSelect = function ($event) {
        var _this = this;
        console.log($event);
        console.log($event.target.files);
        this.fileName = $event.target.files[0].name;
        this.getBase64($event.target.files[0], function (result) {
            // if ($event.target.files[0].size / 1024 > 100) {
            //   this.imageSize = true;
            // } else {
            //   this.imageSize = false;
            // }
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
    // clear() {
    //   this.base64.setValue = '';
    //   this.fileName = '';
    // }
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
                ambassadorDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
                    .value,
                referralDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
                    .value
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
                referralDiscount: this.secondFormGroup.get('referralDiscount').value
            };
            this.discountAmount = {
                baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                ambassadorDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
                    .value,
                referralDiscountAmount: this.secondFormGroup.get('referralDiscountAmount').value
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
                ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount')
                    .value,
                referralDiscount: this.firstFormGroup.get('discountType').value
            };
            this.discountAmount = {
                baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                ambassadorDiscountAmount: this.secondFormGroup.get('ambassadorDiscountAmount').value,
                referralDiscountAmount: this.firstFormGroup.get('baseDiscountAmount')
                    .value
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
                ambassadorDiscount: this.secondFormGroup.get('ambassadorDiscount')
                    .value,
                referralDiscount: this.secondFormGroup.get('referralDiscount').value
            };
            this.discountAmount = {
                baseDiscountAmount: this.firstFormGroup.get('baseDiscountAmount').value,
                ambassadorDiscountAmount: this.secondFormGroup.get('ambassadorDiscountAmount').value,
                referralDiscountAmount: this.secondFormGroup.get('referralDiscountAmount').value
            };
        }
        this.payloadObj.discountAmount = this.discountAmount;
        this.payloadObj.discountType = this.discountType;
        this.payloadObj.discountUtilization.ambassador = this.discountUtilization.ambassador;
        this.payloadObj.discountUtilization.user = this.discountUtilization.user;
        this.payloadObj.isApproved = false;
        this.payloadObj.isRejected = false;
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
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Campaign Created', 'Campaign Created Successfully', 'success');
            _this.router.navigateByUrl('/main');
        }, function (err) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default()('Error', 'Something Went Wrong', 'error');
        });
    };
    CreateComponent.prototype.imageFunc = function (id) {
        this.imageObj = {
            base64: this.croppedImage,
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
    // done
    CreateComponent.prototype.fileChangeEvent = function (event) {
        this.imageChangedEvent = event;
        this.imagePicked = true;
        this.imageCropperStatus = true;
    };
    CreateComponent.prototype.imageCropped = function (event) {
        console.log(event);
        this.croppedImage = event.base64;
        console.log('image size', event.file.size / 1024);
        if (event.file.size / 1024 > 100 && event.file.size / 1024 < 5000) {
            this.imageSize = true;
        }
        else {
            this.imageSize = false;
        }
        console.log(event.file.size);
        console.log('nsdvliunekjvnwi');
        this.base64.setValue(this.croppedImage);
    };
    CreateComponent.prototype.imageLoaded = function () {
        // alert('image loaded');
        // show cropper
    };
    CreateComponent.prototype.loadImageFailed = function () {
        // s alert('load image failed');
        // show message
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/campaign/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.scss */ "./src/app/campaign/create/create.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_4__["CampaignService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/campaign/current/current.component.html":
/*!*********************************************************!*\
  !*** ./src/app/campaign/current/current.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.4.1/css/all.css\" integrity=\"sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz\" crossorigin=\"anonymous\">\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <!-- <input type=\"button\" class=\"btn btn-primary\" value=\"Create campagin\" (click) = \"CreateCampaign()\"> -->\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-12 col-xs-12\">\n        <div class=\" col-12 addCard\">\n\n          <div class=\"card card-product text-center \" style=\"padding-top: 68px;\" (click)=\"CreateCampaign()\">\n\n            <a>\n              <i class=\"fas fa-plus fa-3x addBtn\"></i>\n            </a>\n\n            <div class=\"card-body\">\n              <h3 style=\"padding-bottom: 40px; margin: auto\">Create New Campaign</h3>\n\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </div>\n      <div class=\"col-md-3 col-sm-12 col-xs-12\" *ngFor=\"let row of $getCampaign | async\">\n        <app-campaign-card [data]=\"row\"></app-campaign-card>\n      </div>\n\n\n      <!-- end row -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/campaign/current/current.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/campaign/current/current.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".addCard :hover {\n  background: #47a44b; }\n  .addCard :hover h3 {\n    color: white; }\n  .addCard :hover .addBtn {\n    color: white; }\n  .main-content {\n  margin-top: 30px;\n  padding: 0px 0px; }\n  .card {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/campaign/current/current.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/campaign/current/current.component.ts ***!
  \*******************************************************/
/*! exports provided: CurrentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentComponent", function() { return CurrentComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CurrentComponent = /** @class */ (function () {
    function CurrentComponent(campaignService, router) {
        this.campaignService = campaignService;
        this.router = router;
    }
    CurrentComponent.prototype.ngOnInit = function () {
        this.$getCampaign = this.campaignService.getCampaigns();
    };
    CurrentComponent.prototype.CreateCampaign = function () {
        this.router.navigateByUrl('/main/campaign/create');
    };
    CurrentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-current',
            template: __webpack_require__(/*! ./current.component.html */ "./src/app/campaign/current/current.component.html"),
            styles: [__webpack_require__(/*! ./current.component.scss */ "./src/app/campaign/current/current.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], CurrentComponent);
    return CurrentComponent;
}());



/***/ }),

/***/ "./src/app/campaign/pending/pending.component.html":
/*!*********************************************************!*\
  !*** ./src/app/campaign/pending/pending.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://use.fontawesome.com/releases/v5.4.1/css/all.css\" integrity=\"sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz\" crossorigin=\"anonymous\">\n<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <!-- <input type=\"button\" class=\"btn btn-primary\" value=\"Create campagin\" (click) = \"CreateCampaign()\"> -->\n    <div class=\"row\">\n\n      <div class=\"col-md-3 col-sm-12 col-xs-12\" *ngFor=\"let row of $getCampaign | async\">\n        <app-campaign-card [data]=\"row\"></app-campaign-card>\n\n      </div>\n\n\n      <!-- end row -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/campaign/pending/pending.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/campaign/pending/pending.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/campaign/pending/pending.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/campaign/pending/pending.component.ts ***!
  \*******************************************************/
/*! exports provided: PendingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingComponent", function() { return PendingComponent; });
/* harmony import */ var _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../shared/services/campaign.service */ "./src/app/shared/services/campaign.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PendingComponent = /** @class */ (function () {
    function PendingComponent(campaignService) {
        this.campaignService = campaignService;
    }
    PendingComponent.prototype.ngOnInit = function () {
        this.$getCampaign = this.campaignService.getPendingCampaigns();
    };
    PendingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pending',
            template: __webpack_require__(/*! ./pending.component.html */ "./src/app/campaign/pending/pending.component.html"),
            styles: [__webpack_require__(/*! ./pending.component.scss */ "./src/app/campaign/pending/pending.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_0__["CampaignService"]])
    ], PendingComponent);
    return PendingComponent;
}());



/***/ }),

/***/ "./src/app/campaign/view/view.component.html":
/*!***************************************************!*\
  !*** ./src/app/campaign/view/view.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid \" style=\"padding-top: 50px\">\n  <mat-tab-group>\n    <mat-tab label=\"Active Campaigns\">\n      <app-current></app-current>\n    </mat-tab>\n    <mat-tab label=\"Pending Approval\">\n      <app-pending></app-pending>\n    </mat-tab>\n    <div id=\"Archived\">\n      <mat-tab label=\"Archived\">\n        <app-archive></app-archive>\n      </mat-tab>\n    </div>\n\n  </mat-tab-group>\n</div>"

/***/ }),

/***/ "./src/app/campaign/view/view.component.scss":
/*!***************************************************!*\
  !*** ./src/app/campaign/view/view.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Archived #btnHide {\n  visibility: hidden; }\n"

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
            headerRow: [
                'Title',
                'Description',
                'Weeks',
                'Start Date',
                'Approved',
                'Image'
            ],
            footerRow: [
                'Title',
                'Description',
                'Weeks',
                'Start Date',
                'Approved',
                'Image'
            ],
            dataRows: []
        };
    };
    ViewComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            pagingType: 'full_numbers',
            lengthMenu: [[10, 25, 50, -1], [10, 25, 50, 'All']]
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
            alert('You press on Row: ' +
                data[0] +
                ' ' +
                data[1] +
                ' ' +
                data[2] +
                '\'s row.');
            e.preventDefault();
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table
                .row($tr)
                .remove()
                .draw();
            e.preventDefault();
        });
        // Like record
        table.on('click', '.like', function (e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/campaign/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.scss */ "./src/app/campaign/view/view.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _shared_services_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=campaign-campaign-module.js.map
import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { SharedClass } from 'app/shared/services/SharedClass';

declare var $: any;

@Component({
  selector: 'app-login-cmp',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  loginForm: FormGroup;
  loginBtnStatus = false;
  tempEmail: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private element: ElementRef,
    private services: AuthService
  ) {
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
    const user = localStorage.getItem('user');
    if (user) {
      this.router.navigate(['/main']);
    }
  }

  ngOnInit() {
    // this.loginForm = new FormGroup({
    //     email: new FormControl(),
    //     password: new FormControl()
    // })
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });

    const navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    body.classList.add('off-canvas-sidebar');
    const card = document.getElementsByClassName('card')[0];
    setTimeout(function() {
      // after 1000 ms we add the class animated to the login/register card
      card.classList.remove('card-hidden');
    }, 700);
  }

  sidebarToggle() {
    const toggleButton = this.toggleButton;
    const body = document.getElementsByTagName('body')[0];
    const sidebar = document.getElementsByClassName('navbar-collapse')[0];
    if (this.sidebarVisible === false) {
      setTimeout(function() {
        toggleButton.classList.add('toggled');
      }, 500);
      body.classList.add('nav-open');
      this.sidebarVisible = true;
    } else {
      this.toggleButton.classList.remove('toggled');
      this.sidebarVisible = false;
      body.classList.remove('nav-open');
    }
  }
  ngOnDestroy() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }

  onSubmit() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginBtnStatus = true;
    }

    const temp = this.loginForm.value;
    temp['email'] = temp['email'].toLowerCase();
    // console.log(temp);
    this.services.logIn(temp).subscribe(
      res => {
        console.log(res);
        SharedClass.access_token = res['id'];
        // console.log(SharedClass.access_token);
        // SharedClass.merchant_name = res['user'].name;
        // localStorage.setItem('hola', 'test');
        localStorage.setItem('user', JSON.stringify(res));
        localStorage.setItem('merchant_name', res['user'].name);
        // console.log(res['user'].name);
        swal({
          title: 'Logged In',
          type: 'success',
          text: 'Successfully Logged In',
          timer: 2000,
          showConfirmButton: false
        }).catch(swal.noop);
        this.router.navigateByUrl('/main');
      },
      err => {
        swal({
          title: 'LogIn error',
          text: 'Please Input Correct Information',
          type: 'error',
          confirmButtonClass: 'btn btn-info',
          buttonsStyling: false
        }).catch(swal.noop);
        console.log(err);
      }
    );
  }
}

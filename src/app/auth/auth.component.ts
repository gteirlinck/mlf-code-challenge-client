import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'auth.component.html'
})
export class AuthComponent {

  public username: string;
  public password: string;
  public errorMessage: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.errorMessage = null;
      this.authService.authenticate(this.username, this.password)
      .subscribe(authenticated => {
        if (authenticated) {
          this.router.navigateByUrl('/visits');
        } else {
          this.errorMessage = 'Authentication failed';
        }
      });
    } else {
      this.errorMessage = 'Form data invalid';
    }
  }

}

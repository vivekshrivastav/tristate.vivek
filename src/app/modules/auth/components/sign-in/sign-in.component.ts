import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public signinForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  // Return userName
  get userName(): AbstractControl | null {
    return this.signinForm.get('username');
  }

  // Return password
  get password(): AbstractControl | null {
    return this.signinForm.get('password');
  }

  /**
   * Function to authenticate user
   */
  login(): void {
    if (this.signinForm.valid) {
      this.authService.login(this.signinForm.value).subscribe(
        (data) => {
          this.snackbar.open('Login  successfully!!');
        },
        (err) => {
          this.snackbar.open(
            'There is an error occurred !! Please contact administrator.'
          );
        }
      );
    }
  }
}

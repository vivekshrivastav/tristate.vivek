import { AuthService } from './../../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signupForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      middlename: new FormControl(''),
      phoneNumber: new FormControl('', [Validators.required]),
    });
  }

  // Return email
  get email(): AbstractControl | null {
    return this.signupForm.get('email');
  }

  // Return password
  get password(): AbstractControl | null {
    return this.signupForm.get('password');
  }

  // Return first name
  get firstName(): AbstractControl | null {
    return this.signupForm.get('firstname');
  }
  // Return middle name
  get middleName(): AbstractControl | null {
    return this.signupForm.get('middlename');
  }

  // Return last name
  get lastName(): AbstractControl | null {
    return this.signupForm.get('lastname');
  }

  // Return phone number
  get phoneNumber(): AbstractControl | null {
    return this.signupForm.get('phoneNumber');
  }

  /**
   * Sign up user
   */
  signup(): void {
    if (this.signupForm.valid) {
      const form = this.signupForm.value;
      delete form.phoneNumber;
      this.authService.singUpUser(form).subscribe(
        (data) => {
          this.snackbar.open('Sign up successfully!!');
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

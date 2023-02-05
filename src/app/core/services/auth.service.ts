import { SignUpModel } from './../../shared/models/auth.model';
// Core modules
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Application model and services
import { ApiService } from './api.service';
import { isPlatformBrowser } from '@angular/common';
import { LoginModel } from 'src/app/shared/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  /**
   * Life cycle method
   * @param apiService instance of api service
   */
  constructor(private apiService: ApiService) {}

  /**
   * Function to login in to the application
   * @param loginData data to send in the request
   */
  login(loginData: LoginModel) {
    return this.apiService.post('/api/Values/LoginUser', loginData);
  }

  /**
   * Function to signup in to the application
   * @param payload data to send in the request
   */
  singUpUser(payload: SignUpModel) {
    return this.apiService.post('/api/Values/SignUpUser', payload);
  }
}

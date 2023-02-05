import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Rxjs operators
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  // Create the base URL to be used for all requests from environment variables
  private baseUrl: string;
  private config: any;

  /**
   * Constructor
   *
   * @param 'httpClient'
   */
  constructor(protected httpClient: HttpClient) {
    this.baseUrl = 'http://173.225.111.204/testapi';
  }

  /**
   * Standardized RMS GET request
   *
   * @param 'uri'
   * @param 'options'
   */
  get(uri: string, options = {}): any {
    return this.httpClient
      .get(this.baseUrl + uri, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Standardized RMS PUT request
   *
   * @param 'uri'
   * @param 'data'
   * @param 'options'
   */
  put(uri: string, data: any, options = {}): any {
    return this.httpClient
      .put(this.baseUrl + uri, data, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Standardized RMS POST request
   *
   * @param 'uri'
   * @param 'data'
   * @param 'options'
   */
  post(uri: string, data: any, options = {}): Observable<any> {
    return this.httpClient
      .post(this.baseUrl + uri, data, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Standardized RMS DELETE request
   *
   * @param 'uri'
   * @param 'options'
   */
  delete(uri: string, options = {}) {
    return this.httpClient
      .delete(this.baseUrl + uri, options)
      .pipe(catchError(this.handleError));
  }

  /**
   * Handle general errors from the API
   *
   * @param 'err'
   * @returns returns
   */
  private handleError(err: any) {
    // const storage = new SessionStorageService();
    if (err.status === 401 || err.status === 422) {
      // storage.remove('token');
    }

    return throwError(err);
  }
}

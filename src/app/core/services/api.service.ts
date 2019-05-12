import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@shop-cart-env/environment';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})

export class ApiService implements OnDestroy {
  private endpoint: string;
  private action: string;
  private headers: any;
  private reqMethod: string;
  private reqParams: any;
  private reqbody: any;

  constructor(private http: HttpClient) {
      this.headers = {};
      this.setEndpoint('endpoint');
      this.reqParams = {};
  }

  private getHeaders() {
    const headers = new HttpHeaders(...this.headers, {
      'Content-Type': 'application/json',
      'X-Requested-By': 'Shopping Cart App'
    });
    return headers;
  }

  public setEndpoint(key: string) {
    const check = Object.keys(environment).find(item => item === key);
    this.endpoint = (check !== undefined) ? environment[check] : environment['endpoint'];
    return this;
  }

  public setAction(action: string) {
      this.action = action;
      return this;
  }

  public setHeaders(otherHeaders: any) {
      this.headers = otherHeaders;
      return this;
  }

  public setReqMethod(reqMethod: string) {
      this.reqMethod = reqMethod;
      return this;
  }

  public setReqParams(reqParams: any) {
      this.reqParams = reqParams;
      return this;
  }

  public setBody(reqbody: any) {
      this.reqbody = reqbody;
      return this;
  }

  encodeQueryData(data: any) {
      const encoded: any[] = [];
      for (const item in data) {
        if (data[item]) {
          encoded.push(item + '=' + data[item]);
        }
      }
      return encoded.join('&');
  }

  public getaction(action: string, reqParams: any) {
      const queryString = {};
      const bodyKey = Object.keys(reqParams);
      if (bodyKey.length > 0) {
          bodyKey.forEach(key => {
              if (action.indexOf(key) > -1) {

                  action = action.replace(':' + key, reqParams[key]);
              } else {
                  queryString[key] = reqParams[key];
              }
          });
      }
      const encodedUrl = this.encodeQueryData(queryString);
      if (encodedUrl.length > 0) {
          return action + '?' + this.encodeQueryData(queryString);
      } else {
          return action;
      }
  }

  public getEndpoint() {
      const newAction = this.getaction(this.action, this.reqParams);
      return this.endpoint + newAction;
  }

  public getUrlServer() {
    const newAction = this.getaction(this.action, this.reqParams);
    return this.endpoint;
  }

  private handleError(error: HttpErrorResponse) {
      if ([401, 403].includes(error.status)) {
          console.log('API Error, redirect?');
      }
      console.log(error);
      return Observable.throw(error.message || 'Server error');
  }

  public makeCall(): Observable<{}> {
      switch (this.reqMethod) {
          case 'GET':
              return this.http.get(this.getEndpoint(),
                  { headers: this.getHeaders() })
                  .catch(this.handleError.bind(this));
          case 'POST':
              return this.http.post(this.getEndpoint(), this.reqbody, { headers: this.getHeaders() })
                  .catch(this.handleError.bind(this));
          case 'PUT':
              return this.http
                  .put(this.getEndpoint(), this.reqbody, { headers: this.getHeaders() })
                  .catch(this.handleError.bind(this));
          case 'DELETE':
              return this.http.delete(this.getEndpoint(),
                  { headers: this.getHeaders() }).catch(this.handleError.bind(this));
      }

  }

  ngOnDestroy() {

  }
}

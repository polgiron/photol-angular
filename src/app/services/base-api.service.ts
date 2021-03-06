import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class BaseApi {
  domain: string = 'https://photol-api.paulgiron.com/';
  // domain: string = 'http://localhost:3000/';

  constructor(
    private http: Http
  ) { }

  get(method: string) {
    return this.http.get(this.domain + method)
      .pipe(map((res: any) => res.json()))
      .pipe(catchError(this.handleError).bind(this))
      .toPromise().then(response => {
        // console.log('-----API GET RESPONSE');
        // console.log(response);
        return response;
      });
  }

  public handleError = error => {
    console.error(error);
    return throwError('Server error');
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable()
export class BaseApi {
  domain: string = 'http://localhost:3000/';

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

  getPhotoUrl(farm: number, server: number, id: number, secret: number, size?: string) {
    return `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_${size}.jpg`;
  }

  public handleError = error => {
    console.error(error);
    return throwError('Server error');
  }
}

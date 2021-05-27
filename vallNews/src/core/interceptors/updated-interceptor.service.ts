import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';

@Injectable()
export class UpdatedInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const modifiedRequest = request.clone({
        params: request.params.set('apiKey', environment.API_KEY)
      });
      return next.handle(modifiedRequest);
    }


}

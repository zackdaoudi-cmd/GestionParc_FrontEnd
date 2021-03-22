import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {token,urlInter} from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

        intercept(request: HttpRequest<unknown>, next: HttpHandler):
            Observable<HttpEvent<unknown>> {
                if (request.url !== `${urlInter}login`) {
                request = request.clone({
                setHeaders: {
                Authorization: 'bearer ' + token
                }
                });
                }
                return next.handle(request);
  }
}

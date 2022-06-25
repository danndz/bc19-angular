// snippet: a-http-interceptor-header
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const url = `https://movienew.cybersoft.edu.vn/api/${request.url}`;

    let headers = request.headers.set(
      'TokenCybersoft',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udCBFbmQgNzEiLCJIZXRIYW5TdHJpbmciOiIxMS8xMi8yMDIyIiwiSGV0SGFuVGltZSI6IjE2NzA3MTY4MDAwMDAiLCJuYmYiOjE2NDU5ODEyMDAsImV4cCI6MTY3MDg2NDQwMH0.hImF3FD5ezlSpmo_fyOBeTlwLGcUfxyEeZIRIddaRFE'
    );

    request = request.clone({ url, headers });

    return next.handle(request).pipe(
      map((event) => {
        // Kiểm tra nếu event này là HttpResponse => transform data trước khi trả ra
        if (event instanceof HttpResponse) {
          event = event.clone({ body: event.body.content });
        }

        return event;
      })
    );
  }
}

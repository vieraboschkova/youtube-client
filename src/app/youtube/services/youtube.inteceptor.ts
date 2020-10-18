import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor} from '@angular/common/http';

import { LoginService } from 'src/app/auth/services/login.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
    public APIUrl = 'https://www.googleapis.com/youtube/v3/';
    public APIKey = 'AIzaSyCTtv_h_vJLyF1AJbzQ5seAR-s_6AKcgQk';
    constructor(private login: LoginService) {}

    public intercept(req: HttpRequest<any>, next: HttpHandler) {
        if (this.login.user !== null) {
            return this.login.user.pipe(
                take(1),
                exhaustMap(() => {
                    const newReq = req.clone({
                        url: `${this.APIUrl}${req.url}&key=${this.APIKey}`
                    });
                    console.log('Request coming');
                    return next.handle(newReq);
                })
            );
        } else {
            return next.handle(req);
        }
    }
}

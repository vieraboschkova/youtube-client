import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { LoginService } from 'src/app/auth/services/login.service';
import { exhaustMap, take } from 'rxjs/operators';

@Injectable()
export class YoutubeInterceptor implements HttpInterceptor {
    APIUrl = 'https://www.googleapis.com/youtube/v3/';
    APIKey = 'AIzaSyCTtv_h_vJLyF1AJbzQ5seAR-s_6AKcgQk';
    constructor(private login: LoginService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        // this.login.currentUser.subscribe()
        if (this.login.user !== null) {
            return this.login.user.pipe(
                take(1),
                exhaustMap(user => {
                    const newReq = req.clone({
                        // params: new HttpParams().set('auth', user.token)
                        url: `${this.APIUrl}${req.url}&key=${this.APIKey}`
                    })
                    
                    console.log('Request coming')
                    return next.handle(newReq);
            
                })
            )
        } else {
            return next.handle(req);
        }

    }


}

// encodeURIComponent
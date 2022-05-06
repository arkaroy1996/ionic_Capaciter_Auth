import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, merge } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
// import { NetworkService } from '../no-internet/network.service';
// import { FirebaseAuthService } from '../services/firebase-auth.service';
// import { RestService } from '../services/rest.service';
// import { SessionService } from '../services/session.service';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  public req: HttpRequest<any> = null;

  constructor(
    // private restService: RestService,
    // private sessionService: SessionService,
    // private authService: FirebaseAuthService,
    // private networkService: NetworkService,
    private router: Router,
    ) { }

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!window.location.pathname.includes('/no-internet')) {
      // this.networkService.ActiveUrl = window.location.pathname;
    }

    // if (!this.networkService.online) {
    //   this.router.navigate(['/no-internet']);
    // }

    return next.handle(req);
  }
}


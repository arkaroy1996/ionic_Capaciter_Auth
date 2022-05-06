import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
// import { NetworkService } from '../no-internet/network.service';

// @Injectable()
// export class OfflineGuard implements CanActivate {
//     constructor(
//         private networkService: NetworkService,
//         private router: Router) { }

//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
//         if (this.networkService.online) {
//             return of(true);
//         } else {
//             this.router.navigate(['/no-internet']);
//         }
//     }
// }

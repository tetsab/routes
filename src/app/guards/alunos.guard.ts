import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AlunosGuard implements CanActivateChild {
    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean {
        // console.log(route);
        // console.log(state);
        // console.log('AlunosGuard: Guarda de rota filha');
;        if(state.url.includes('editar')){
            // alert('User without access'); // or hide button
            // return false;
            // return Observable.of(false);
        }


        return true;
    }
}

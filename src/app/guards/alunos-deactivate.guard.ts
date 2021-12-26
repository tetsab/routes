import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { AlunoFormComponent } from "app/alunos/aluno-form/aluno-form.component";



@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    canDeactivate(
        component: AlunoFormComponent,
        route: ActivatedRouteSnapshot,  // copy route active
        state: RouterStateSnapshot      // state route active
    ): Observable<boolean>|Promise<boolean>|boolean {
        console.log('Guarda de desativacao');
        // console.log(component.formMudou);
        // console.log(!component.podeMudarRota());
        return component.podeMudarRota(); // route isn't deactivate if there weren't changes on formulary
}
}
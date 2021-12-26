import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosGuard } from 'app/guards/alunos.guard';
import { AlunosDeactivateGuard } from 'app/guards/alunos-deactivate.guard';

const alunosRoutes = [
        { path: '', component: AlunosComponent,
          canActivateChild: [AlunosGuard], 
            children: [
                { path: 'novo', component: AlunoFormComponent },
                { path: ':id', component: AlunoDetalheComponent },
                { 
                  path: ':id/editar', 
                  component: AlunoFormComponent, 
                  canDeactivate: [AlunosDeactivateGuard] // false: denied change, true: allowed change
                }
            ]
        },
    
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})

export class AlunosRoutingModule {}
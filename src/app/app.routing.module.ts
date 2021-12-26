import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunosGuard } from './guards/alunos.guard';
import { AuthGuard } from './guards/auth.guard';
import { CursosGuard } from './guards/cursos.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { CursosComponent } from './cursos/cursos.component';
// import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
// import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';

const appRoutes: Routes = [
    { path: 'cursos',
         loadChildren: 'app/cursos/cursos.module#CursosModule',
         canActivate: [AuthGuard],
         canActivateChild: [CursosGuard], 
    }, // loading only necessary
    { path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        // canActivateChild: [AlunosGuard] 
    },
    // { path: 'cursos', component: CursosComponent },
    // { path: 'curso/:id', component: CursoDetalheComponent },
    // { path: '404', component: CursoNaoEncontradoComponent },
    { path: 'login', component: LoginComponent },
    { path: '', 
        component: HomeComponent,
        canActivate: [AuthGuard] 
    }  
]; 

//  export const routing: ModuleWithProviders = RouterModule.forChild(appRoutes); // has route's definitions and configs
 // forChild (functionality routes), forRoot (has main routes)

 @NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}
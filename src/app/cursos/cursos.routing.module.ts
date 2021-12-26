import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosComponent } from './../cursos/cursos.component';
import { CursoDetalheComponent } from './../cursos/curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './../cursos/curso-nao-encontrado/curso-nao-encontrado.component';
// import { LoginComponent } from './login/login.component';
// import { HomeComponent } from './home/home.component';

const cursosRoutes: Routes = [
    { path: '', component: CursosComponent },
    { path: '404', component: CursoNaoEncontradoComponent },
    { path: ':id', component: CursoDetalheComponent },
    // { path: 'login', component: LoginComponent },
    // { path: '', component: HomeComponent }  
]; 

//  export const routing: ModuleWithProviders = RouterModule.forChild(cursosRoutes); // has route's definitions and configs
 // forChild (functionality routes), forRoot (has main routes)

 @NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports:[RouterModule]
})

export class CursosRoutingModule {}
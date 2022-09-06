import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logindocente',
    loadChildren: () => import('./logindocente/logindocente.module').then( m => m.LogindocentePageModule)
  },
  {
    path: 'loginestudiante',
    loadChildren: () => import('./loginestudiante/loginestudiante.module').then( m => m.LoginestudiantePageModule)
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule)
  },
  {
    path: 'inicio-docente',
    loadChildren: () => import('./inicio-docente/inicio-docente.module').then( m => m.InicioDocentePageModule)
  },
  {
    path: 'codigoqr',
    loadChildren: () => import('./codigoqr/codigoqr.module').then( m => m.CodigoqrPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./faq/faq.module').then( m => m.FAQPageModule)
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule)
  },
  {
    path: 'registro-docente',
    loadChildren: () => import('./registro-docente/registro-docente.module').then( m => m.RegistroDocentePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

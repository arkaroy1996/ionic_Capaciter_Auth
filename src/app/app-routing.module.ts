import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'donate',
    loadChildren: () => import('./pages/donate/donate.module').then( m => m.DonatePageModule)
  },
  {
    path: 'singin',
    loadChildren: () => import('./auth/singin/singin.module').then( m => m.SinginPageModule)
  },
  {
    path: 'user-register',
    loadChildren: () => import('./auth/user-register/user-register.module').then( m => m.UserRegisterPageModule)
  },
  {
    path: 'forget-password',
    loadChildren: () => import('./auth/forget-password/forget-password.module').then( m => m.ForgetPasswordPageModule)
  },
  {
    path: 'getting-started',
    loadChildren: () => import('./pages/getting-started/getting-started.module').then( m => m.GettingStartedPageModule)
  },
  {
    path: 'singin',
    loadChildren: () => import('./auth/singin/singin.module').then( m => m.SinginPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

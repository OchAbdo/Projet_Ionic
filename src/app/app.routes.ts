import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { authGuardGuard } from './guards/auth-guard-guard';
import { roleGuard } from './guards/role-guard';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage)
  },
  {
    path: 'tabs',
    component: TabsPage,
    canActivate : [authGuardGuard] ,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab4',
        loadComponent: () => import('./tab4/tab4.page').then(m => m.Tab4Page)
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'resetpassword',
    loadComponent: () => import('./resetpassword/resetpassword.page').then( m => m.ResetpasswordPage)
  },
  {
    path: 'admin-listuser',
    loadComponent: () => import('./admin-listuser/admin-listuser.page').then( m => m.AdminListuserPage),
    canActivate : [roleGuard],
  },

];

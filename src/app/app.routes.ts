import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { authGuardGuard } from './guards/auth-guard-guard';
import { roleGuard } from './guards/role-guard';
import { AdminListuserPage } from './adminH/admin-listuser.page';
import { roleuserGuard } from './guards/roleuser-guard';

export const routes: Routes = [

  {
    path: '',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
    canActivate: [authGuardGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage),
    canActivate: [authGuardGuard],
  },
  {
    path: 'signup',
    loadComponent: () => import('./signup/signup.page').then(m => m.SignupPage),
    canActivate: [authGuardGuard],
  },
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [roleuserGuard],
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
    loadComponent: () => import('./resetpassword/resetpassword.page').then(m => m.ResetpasswordPage),
    canActivate: [authGuardGuard],
  },
  {
    path: 'admin-listuser',
    component: AdminListuserPage,
    canActivate: [roleGuard],
    children: [
      {
        path: 'adminfilm',
        loadComponent: () => import('./adminfilm/adminfilm.page').then(m => m.AdminfilmPage)
      },
      {
        path: 'adminuser',
        loadComponent: () => import('./adminuser/adminuser.page').then(m => m.AdminuserPage)
      },
      {
        path: '',
        redirectTo: '/admin-listuser/adminuser',
        pathMatch: 'full',
      },

    ]
  },
  {
    path: 'addfilm',
    loadComponent: () => import('./addfilm/addfilm.page').then(m => m.AddfilmPage),
    canActivate: [roleGuard]
  },


];

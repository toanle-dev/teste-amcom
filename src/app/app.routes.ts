import { Routes } from '@angular/router';
import { CooperativeAdmissionComponent } from './pages/cooperative-admission/cooperative-admission.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/cooperative-admission',
  },
  {
    path: '',
    loadComponent: () =>
      import('./pages/layout/layout.component').then((m) => m.LayoutComponent),
    children: [
      {
        path: 'cooperative-admission',
        component: CooperativeAdmissionComponent,
      },
    ],
  },
];

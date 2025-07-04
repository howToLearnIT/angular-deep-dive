import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { AdminPage } from './pages/admin.page';
import { UserPage } from './pages/user.page';
import { SocialMediaPage } from './pages/social-media.page';
import { NotFoundPage } from './pages/not-found.page';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home.page').then(m => m.HomePage),
    },
    {
        path: 'admin',
        loadComponent: () => import('./pages/admin.page').then(m => m.AdminPage),
    },
    {
        path: 'user/:id',
        loadComponent: () => import('./pages/user.page').then(m => m.UserPage),
    },
    {
        path: 'user/:id/:social-media',
        loadComponent: () => import('./pages/home.page').then(m => m.HomePage),
    },
    {
        path: '**',
        component: NotFoundPage,
    },
];
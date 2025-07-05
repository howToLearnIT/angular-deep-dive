import { Routes } from '@angular/router';
import { HomePage } from './pages/home.page';
import { AdminPage } from './pages/admin.page';
import { UserPage } from './pages/user.page';
import { SocialMediaPage } from './pages/social-media.page';
import { NotFoundPage } from './pages/not-found.page';
import { BlogPage } from './pages/blog.page';
import { AdminSettingsPage } from './pages/admin-settings.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
        title: 'Домашняя страница'
    },
    {
        path: 'admin',
        component: AdminPage,
        title: 'Админка',
    },
    {
        path: 'admin/settings',
        component: AdminSettingsPage,
        title: 'Настройки админки',
    },
    {
        path: 'user/:id',
        component: UserPage,
        title: 'Юзер',
        data: { analyticsId: '456' }
    },
    {
        path: 'legacy-user/:id',
        redirectTo: 'users/:id'
    },
    // {
    //     path: 'legacy-user/:id',
    //     redirectTo: (activatedRouteSnapshot) => {
    //         const id = activatedRouteSnapshot.params['id'];

    //         return id > 10 ? `/user/${id}` : ''
    //     }
    // },

    {
        path: 'user/:id/:social-media',
        component: SocialMediaPage,
        title: 'Социальные медиа'
    },
    {
        path: 'articles',
        redirectTo: '/blog',
        pathMatch: 'full'
    },
    {
        path: 'blog',
        component: BlogPage,
        title: 'Блог'
    },
    {
        path: '**',
        redirectTo: '',
    },
];
import { Routes } from '@angular/router';
import { AdminPage } from './pages/admin.page';
import { AdminService } from './services/admin.service';
import { ADMIN_API_KEY } from './tokens/admin-api-key';
import { AdminUserPage } from './pages/admin-user.page';
import { AdminTeamsPage } from './pages/admin-teams.page';
import { ProductsPage } from './pages/products.page';
import { HomePage } from './pages/home.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'products',
        component: ProductsPage,
        outlet: 'additional'
    },
    {
        path: 'admin',
        component: AdminPage,
        title: 'Админка',

        providers: [
            AdminService,
            {provide: ADMIN_API_KEY, useValue: '12345'},
        ],

        children: [
            {path: 'teams', component: AdminTeamsPage},
            {path: ':id', component: AdminUserPage},
        ],
    },
];
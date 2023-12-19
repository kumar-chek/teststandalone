import { Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    { path:'', component:BlogComponent, 
       loadChildren: ()=> import('./blog/blog.route').then((m)=>m.BLOG_ROUTE),
    },
    {
        path:'auth',
        loadChildren: () => import('./auth/auth.route'),
    },
];

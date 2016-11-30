import { Routes, RouterModule } from '@angular/router';
import { BodyComponent } from './body.component';
import { ContactComponent } from './contact.component';



const appRoutes: Routes = [
    {
        path: 'index',
        component: BodyComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    }

];

export const routing = RouterModule.forRoot(appRoutes);

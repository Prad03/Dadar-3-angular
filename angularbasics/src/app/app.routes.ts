import { Routes } from '@angular/router';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { IOComponent } from './components/io/io.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ServiceComponent } from './components/service/service.component';
import { ObervablesComponent } from './components/obervables/obervables.component';
import { SubjectComponent } from './components/subject/subject.component';
import { FormHandling1Component } from './components/form-handling1/form-handling1.component';
import { FormHandling2Component } from './components/form-handling2/form-handling2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BookComponent } from './components/book/book.component';
import { authGuard } from './guards/auth.guard';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from './components/customer-orders/customer-orders.component';

export const routes: Routes = [

    {
        path:"",
        component:HomeComponent
    },
    {
        path:"data-binding",
        component:DataBindingComponent,
        title:"Data-binding"
    },
    {
        path:'directives',
        component:DirectivesComponent,
        title:"Directives"
    },
    {
        path:'pipes',
        component:PipeComponent,
        title:"Pipes"
    },
    {
        path:"input-and-output",
        component:IOComponent
    },
    {
        path:"lifecycle-methods",
        component:LifecycleComponent
    },
    {
        path:'services',
        component:ServiceComponent
    },
    {
        path:"observables",
        component:ObervablesComponent
    },
    {
        path:"subjects",
        component:SubjectComponent

    },
    {
        path:"form-handling-1",
        component:FormHandling1Component,
        canActivate:[authGuard]
    },
    {
        path:"form-handling-2",
        component:FormHandling2Component
    },

    {
        path:"books/:id",
        component:BookComponent
    },
    {
        path:"customers",
        component:CustomerComponent,
        children:[
            {
                path:"detail/:id",
                component:CustomerDetailComponent
            },
            {
                path:"orders",
                component:CustomerOrdersComponent
            }
        ],
        canActivate:[authGuard]
    },
    {
        path:"**",
        component:NotFoundComponent,
        title:"Page not found"
    }
];

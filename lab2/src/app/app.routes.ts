import { Routes } from '@angular/router';
import { Card } from './card/card';
import {CardDetails} from './card-details/card-details';
import { Homepage } from './homepage/homepage';
import { Orders } from './orders/orders';
import { About } from './about/about';
import { ContactUs} from './contact-us/contact-us';
import { ErrorPage } from './error-page/error-page';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'homepage',
    component: Homepage
  },
  {

    path: 'card',
    component: Card
  },
  {
    path: 'card-details/:id',
    component: CardDetails
  },
  {
    path: 'orders',
    component: Orders
  }
  ,{
path: 'about',
component: About
  },
  {
    path: 'contact-us',
    component: ContactUs
  }
  ,{
    path: '**',
    component: ErrorPage
  }

];

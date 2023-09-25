import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
    data: { title: 'Homepage' }
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    data: { title: 'About Us' }
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    data: { title: 'Contact Us' }
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  //   data: { title: 'Not Found' }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

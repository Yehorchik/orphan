import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { DonationComponent } from './donation/donation.component';
import { AboutComponent } from './about/about.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path : 'donation' , component : DonationComponent},
  { path : 'about' , component : AboutComponent},
  {path : "stories" , component : StoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


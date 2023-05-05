import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ManagementComponent } from './pages/management/management.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsDetailsComponent } from './pages/news-details/news-details.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsDetailsComponent },

      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

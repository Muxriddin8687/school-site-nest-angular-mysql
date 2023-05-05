import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { ManagementComponent } from './pages/management/management.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NewsComponent } from './pages/news/news.component';
import { NewsEditComponent } from './pages/news/news-edit/news-edit.component';
import { ManagementEditComponent } from './pages/management/management-edit/management-edit.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: 'management', component: ManagementComponent },
      { path: 'management/:id', component: ManagementEditComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'gallery', component: GalleryComponent },
      { path: 'news', component: NewsComponent },
      { path: 'news/:id', component: NewsEditComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

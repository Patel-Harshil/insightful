import { Routes } from '@angular/router';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ArticleListComponent } from './articles/article-list/article-list.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { AboutUsComponent } from './staticpages/about-us/about-us.component';
import { ContactUsComponent } from './staticpages/contact-us/contact-us.component';
import { RegistrationComponent } from './account/registration/registration.component';
import { LoginComponent } from './account/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  // REGISTER-----------------------------
  {
    path: 'register',
    component: RegistrationComponent,
  },
  // LOGIN ----------------------------------
  {
    path: 'login',
    component: LoginComponent,
  },
  // ARTICLES------------------------------
  {
    path: 'articles',
    component: ArticleListComponent,
  },
  {
    path: 'article/:id',
    component: ArticleDetailsComponent,
  },
  {
    path: 'latest-articles-component',
    component: LatestArticlesComponent,
  },
  // STATIC PAGE---------------------------------
  {
    path: 'about-us',
    component: AboutUsComponent,
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
  },

  // PAGE NOT FOUND--------------------------------------
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

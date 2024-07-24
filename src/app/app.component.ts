import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { LatestArticlesComponent } from './articles/latest-articles/latest-articles.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './account/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountserviceService } from './account/accountservice.service';
import { LoginComponent } from './account/login/login.component';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    LatestArticlesComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    RegistrationComponent,
    LoginComponent,
    HttpClientModule,
    RouterOutlet,
    RouterLink,
  ],
  providers: [AccountserviceService],
})
export class AppComponent {
  constructor(public router: Router) {}
  title = 'insightful';
}

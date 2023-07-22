import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { UpperCasePipe } from '@angular/common';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { AdminPostPageComponent } from './pages/admin/admin-post-page/admin-post-page.component';
import { AdminCreatePostPageComponent } from './pages/admin/admin-create-post-page/admin-create-post-page.component';
import { AdminUpdatePostPageComponent } from './pages/admin/admin-update-post-page/admin-update-post-page.component';
import { AdminUserPageComponent } from './pages/admin/admin-user-page/admin-user-page.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { CurrentDateComponent } from './components/current-date/current-date.component';

import { SectionLayoutComponent } from './layouts/section-layout/section-layout.component';

import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { SectionComponent } from './pages/section/section.component';
import { CategoryListComponent } from './pages/admin/category-list/category-list/category-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SigninComponent,
    SignupComponent,
    NotFoundPageComponent,
    DashboardComponent,
    AdminPostPageComponent,
    AdminCreatePostPageComponent,
    AdminUpdatePostPageComponent,
    AdminUserPageComponent,
    UserLayoutComponent,
    AdminLayoutComponent,
    CurrentDateComponent,
    SectionLayoutComponent,
    PostDetailComponent,
    SectionComponent,
    CategoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    UpperCasePipe,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

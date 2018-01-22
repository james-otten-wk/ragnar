import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/components/app.component';
import { HomeModule } from 'app/components/home/home.module';
import { RepositoriesModule } from 'app/repositories/repositories.module';
import { ServicesModule } from 'app/service/services.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    ServicesModule,
    RepositoriesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

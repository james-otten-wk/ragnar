import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActionsModule } from 'app/actions/actions.module';
import { AppRoutingModule } from 'app/app-routing.module';
import { AppComponent } from 'app/components/app.component';
import { HomeModule } from 'app/components/home/home.module';
import { TasksModule } from 'app/components/tasks/tasks.module';
import { ServicesModule } from 'app/service/services.module';
import { StoreModule } from 'app/store/store.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, TasksModule, ServicesModule, StoreModule, ActionsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}

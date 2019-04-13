import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SearchService } from './services/search-service.service';
import { UlComponent } from './components/ul/ul.component';
import { UlListComponent } from './components/ul-list/ul-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UlComponent,
    UlListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { environment } from '@env/environment';
import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { CategoriesModule } from './categories/categories.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Import Workspace Pages:
import { Ws1Module } from './ws1/ws1.module';
import { Ws2Module } from './ws2/ws2.module';
import { Ws3Module } from './ws3/ws3.module';
import { Ws4Module } from './ws4/ws4.module';
import { Ws5Module } from './ws5/ws5.module';
import { Ws6Module } from './ws6/ws6.module';
import { Ws7Module } from './ws7/ws7.module';
import { Ws8Module } from './ws8/ws8.module';

@NgModule({
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('./ngsw-worker.js', { enabled: environment.production }),
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule.forRoot(),
    CoreModule,
    SharedModule,
    HomeModule,
    AboutModule,
    CategoriesModule,
    LoginModule,
    Ws1Module,
    Ws2Module,
    Ws3Module,
    Ws4Module,
    Ws5Module,
    Ws6Module,
    Ws7Module,
    Ws8Module,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

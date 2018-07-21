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
import { PlpModule } from './plp/plp.module';
import { Plp2Module } from './plp2/plp2.module';
import { Myplp3Module } from './myplp3/myplp3.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ZnodeHomeModule } from './znodeHome/znodeHome.module';
import { ZnodePlpModule } from './znode-plp/znode-plp.module';
import { StoreHomeModule } from './storeHome/storeHome.module';
import { MyhomeModule } from './myhome/myhome.module';

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
    PlpModule,
    Plp2Module,
    Myplp3Module,
    AppRoutingModule,
    ZnodeHomeModule,
    ZnodePlpModule,
    StoreHomeModule,
    MyhomeModule
  ],
  declarations: [AppComponent],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

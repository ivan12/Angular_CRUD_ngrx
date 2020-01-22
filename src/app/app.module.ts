import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomePage } from './pages/home/home.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VinhoStoreModule } from "./_store/vinho-store.module";

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    ProductListComponent,
    ProductFormComponent,
    NavbarComponent,
    ShoppingCartComponent,
  ],
  entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        VinhoStoreModule
    ],
  providers: [
    {
      provide: [RouteReuseStrategy, FormGroup],
      useClass: IonicRouteStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
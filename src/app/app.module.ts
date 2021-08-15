import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from'@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './componant/cart/cart.component';
import { HeaderComponent } from './componant/header/header.component';
import { ProductComponent } from './componant/product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { SuccessComponent } from './success/success.component';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    
    HeaderComponent,
    ProductComponent,
    CheckoutComponent,
   
    SuccessComponent,
    UserComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

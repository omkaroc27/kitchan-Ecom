import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './componant/cart/cart.component';

import { ProductComponent } from './componant/product/product.component';
import { SuccessComponent } from './success/success.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';


const routes: Routes = [
{path:'',redirectTo:'products',pathMatch:'full'},
{path:'products',component:ProductComponent},
{path:'cart',component:CartComponent},
{path:'Success',component:SuccessComponent},
{path:'checkout',component:CheckoutComponent},
{path:'signup',component:SignUpComponent},
{path:'signin',component:SignInComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

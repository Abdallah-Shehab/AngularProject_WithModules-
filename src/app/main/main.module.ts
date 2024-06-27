import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './cart/cart.component';
import { MainRoutingModule } from './main-routing.module'; // Import the routing module



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartComponent,
    SharedModule,
    MainRoutingModule
    
  ]
})
export class MainModule { }

import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';

import { MatButtonModule } from '@angular/material/button';
import { ProductService } from '../../../Services/product.service';
import { ProductsComponent } from './products/products.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule,MatInputModule,MatIconModule,FormsModule,MatButtonModule,MatChipsModule,ProductsComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  value = '';
  Products:any=[] ;
   
  /**
   *
   */
  constructor(public Api:ProductService) {
    
    
  }
  ngOnInit(): void {
   this.Api.getAllProducts().subscribe({
    next:(data)=> {this.Products=data; console.log(this.Products)},
    error:(e)=>console.error(e)
   })
  }

  Filter(cat:any=null){
    this.Api.getAllProductsByCategory(cat).subscribe({
      next:(data)=> this.Products=data,
      error:(e)=>console.error(e)
     })
  }

  search(){
 
   this.Products= this.Products.filter((item:any)=>item.name.toLowerCase().includes(this.value))
  
console.log(this.value)
  }
}

import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-product-category',
  standalone: true,
  imports: [],
  templateUrl: './product-category.component.html',
  styleUrl: './product-category.component.scss'
})
export class ProductCategoryComponent implements OnInit {
  private singleProduct!:IProduct;

  constructor(private prodService:ProductsService){
  
  }
  
  ngOnInit(): void {
    this.singleProduct=this.prodService.getProductsByCatID(1)!}
  
}

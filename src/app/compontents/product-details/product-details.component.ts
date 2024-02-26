import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit  {
 singleProduct!:IProduct;

constructor(private prodService:ProductsService , private route:ActivatedRoute,private router:Router){

}

ngOnInit(): void {
  let prodId=Number(this.route.snapshot.paramMap.get("id"))
  this.singleProduct=this.prodService.getProductById(prodId)!
}
goToProducts() {
  this.router.navigate(['/products']);
}

}

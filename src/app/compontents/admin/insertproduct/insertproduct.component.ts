import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { IProduct } from '../../../models/iproduct';
import { ProductsService } from '../../../services/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insertproduct',
  standalone: true,
  imports: [FormsModule,RouterModule, CommonModule ],
  templateUrl: './insertproduct.component.html',
  styleUrl: './insertproduct.component.scss'
})
export class InsertproductComponent implements OnInit {
constructor(private prodServi:ProductsService , private router:Router){
  
}
product:IProduct={} as IProduct
insertproduct!:IProduct[];
updateDone: boolean = false;
   addProduct(){

    this.prodServi.createProduct(this.product).subscribe({
      next:(data)=>{
        console.log(data);
        this.router.navigate(['/order'])
      }
    })
   }

   insertprod():void{
    this.prodServi.createProduct(this.product).subscribe((data)=>{
        console.log(data)
        this.router.navigate(['/order'])

    
    })
  }

  deleteprod(id:string){
    this.prodServi.deletepro(id).subscribe({
      next:(data)=>{
        console.log(data)
        this.router.navigate(['/order'])
      }
    })
  }
 
  ngOnInit(): void {
    this.prodServi.getall().subscribe({
      next:(data)=>{
        console.log(data)
        this.insertproduct=data
      }
  })
}

updateProductBtn(id: string) {
  let updatedProduct = this.insertproduct.filter((itemId) => itemId.id === id);
  this.updateDone = true;
  this.product.id = updatedProduct[0].id;
  this.product.name = updatedProduct[0].name;
  this.product.price = updatedProduct[0].price;
  this.product.category = updatedProduct[0].category;
  console.log(updatedProduct);
}

updateProduct() {
  console.log(this.product);

  this.prodServi.updateProduct(this.product)?.subscribe({
    next: () => {
      this.updateDone = false;
    },
  });
}
}

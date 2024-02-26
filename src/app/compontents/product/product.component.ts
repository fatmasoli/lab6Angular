import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { Store } from '../../models/store';
import { FormsModule } from '@angular/forms';
import { TexthighlightDirective } from '../../directives/texthighlight.directive';
import { DiscountPipe } from '../../pipes/discount.pipe';
import { CommonModule } from '@angular/common';
import { ProductCardDirective } from '../../directives/product-card.directive';
import { CreditCardFormatterPipe } from '../../pipes/credit-card-formatter.pipe';
import { ProductsService } from '../../services/products.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule ,TexthighlightDirective,DiscountPipe,CommonModule,ProductCardDirective,CreditCardFormatterPipe,RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  store1:Store= new Store ('FAV STOR',['Egypt'], 'assets/pin.png')

  ClientName: string ='Fatma'
  IsPurshased: boolean = true
  Isdiv : boolean = false;

  purchaseDate = new Date();

 myhighLight="green"
//  prodServi:ProductsService;
  products:IProduct[]=[];
  constructor(private prodServi:ProductsService  ) {}

  ngOnInit(): void {
    // console.log('Inside ngOnInit');
   this.products=this.prodServi.getAllProduct()
   this.prodServi.getAllProductbyMyApi().subscribe({
     next:(data)=>{
       console.log(data);
       
     }
   })
   this.filterproduct = this.products;  
  }
  filterproduct: IProduct[] = [];
  selectedCategory: string = '';

 @Input() set filterproducts(value: string) {
    this.filterproduct = this.filterselectedproduct(value);
  
  }

  filterselectedproduct(value: string): IProduct[] {
    return value === '' ? this.products : this.products.filter((product: IProduct) => 
   // product.category.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
   product.category === value);
  }

   
  filterSearchProduct(value:string): IProduct[]{
    return this.products.filter((product: IProduct)=>
    product.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    )
  }
  set listFilteredValue(value:string){
    this.filterproduct=this.filterSearchProduct(value)
  }




   // quantity 
decreaseQuantity(product: IProduct) {
  if (product.quantity > 0) {
    product.quantity--;

    if (product.quantity === 0) {
      this.filterproduct = this.filterproduct.filter(p => p.id !== product.id);
    }
  }
}

@Output() addchildEvent:EventEmitter<IProduct>=new EventEmitter<IProduct>()

   toggleImage(){

    this.IsPurshased= ! this.IsPurshased   
    this.Isdiv= ! this.Isdiv   
   } 
   addToCart(product:IProduct){

    this.addchildEvent.emit(product)
   }


  
}

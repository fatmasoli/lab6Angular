import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
 products :IProduct[] = [
  {
    id: "1",
    name: '',
    price: 21500,
    quantity: 0,
    image:"https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    categoryId: 1,
    category:"Clothes"
  },
  {
    id: "2",
    name: 'jacket',
    price: 30000,
    quantity: 8,
    image:
      'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    categoryId: 1,
    category:"clothes"
  },
  {
    id: "3",
    name: 'red te_shirt',
    price: 14000,
    quantity: 10,
    image:
      'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
    categoryId: 1,
    category:"clothes"
  },
  {
    id: "4",
    name: 'perpel te_shirt',
    price: 1500,
    quantity: 2,
    image:
      'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
    categoryId: 1,
    category:"clothes"
  },
  {
    id: "5",
    name: '423 hard disk',
    price: 1500,
    quantity: 2,
    image:
      'https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg',
    categoryId: 2,
    category:"electronics"
  },
  {
    id: "6",
    name: '133 de hard disk',
    price: 1000,
    quantity: 10,
    image:
      'https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg',
    categoryId: 2,
    category:"electronics"
  },
  {
    id: "7",
    name: '884 hard disk',
    price: 13000,
    quantity: 0,
    image:
      'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg',
    categoryId: 2,
    category:"electronics"
  },

  {
    id: "9",
    name: 'breclet',
    price: 999,
    quantity: 4,
    image:
      'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg',
    categoryId: 3,
    category:"jwlary"
  },
  {
    id: "10",
    name: 'silver',
    price: 3699,
    quantity: 3,
    image:
      'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg',
    categoryId: 3,
    category:"jwlary"

  },
  {
    id: "11",
    name: 'diamond',
    price: 3699,
    quantity: 3,
    image:
      'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg',
    categoryId: 3,
    category:"jwlary"

  },
  ];
  myHeaders={}
  constructor(private http: HttpClient) {
    this.myHeaders={headers:new HttpHeaders({
      'Content-Type':'application/json',
    })}
   }
   getAllProduct(): IProduct[] {
    return this.products;
  }
  getall(){
    return this.http.get<IProduct[]>('http://localhost:3000/products')
  }
  createProduct(product:IProduct):Observable<IProduct>{

     return this.http.post<IProduct>(`http://localhost:3000/products`,JSON.stringify(product),this.myHeaders)
  }
  deletepro(productid:string):Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/products/${productid}`)
  }

  updateProduct(product:any): Observable<any> | undefined {
    return this.http.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  getAllProductbyMyApi(): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products`);
  }
  
  getProductById(prodId:number):IProduct|undefined{
    return this.products.find((product)=>product.id=="prodId");
  }


  getProductsByCatID(catID: number): IProduct | undefined {
    return this.products.find(product => product.categoryId === catID);
  }
  
}

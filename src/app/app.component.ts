import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './compontents/header/header.component';
import { FooterComponent } from './compontents/footer/footer.component';
import { ProductComponent } from './compontents/product/product.component';
import { ProductsparentComponent } from './compontents/productsparent/productsparent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent, ProductsparentComponent,RouterModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'day3';
}

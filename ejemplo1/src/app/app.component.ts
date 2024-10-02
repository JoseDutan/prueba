import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from "./components/user/user.component";
import { ProductComponent } from "./product/product.component";

@Component({
  selector: 'root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'ejemplo1';
  author:string = 'Jose Dutan';
}

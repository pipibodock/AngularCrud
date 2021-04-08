import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {} as Product;

  constructor(private service: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.service.readById(id).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get('id') || '';
    this.service.delete(id).subscribe(product => {
      this.service.showMessage("Product Deleted!")
      this.router.navigate(["/products"])
    });
  }

  cancel(): void {
    this.router.navigate(["/products"])
  }

}

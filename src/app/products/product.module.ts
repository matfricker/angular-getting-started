import { NgModule } from '@angular/core';
import { ProductRoutingModule } from '../products/product-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';

import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';

@NgModule({
  imports: [
    ProductRoutingModule,
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ConvertToSpacesPipe
  ]
})
export class ProductModule { }

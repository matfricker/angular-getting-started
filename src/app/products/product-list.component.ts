import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: [ './product-list.component.css' ]
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GNC-0098",
            "releaseDate": "22 February 2007",
            "description": "Generic garden card, 15 litre capacity",
            "price": 29.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-129",
            "releaseDate": "2 December 2012",
            "description": "Curved claw steel hammer",
            "price": 5.59,
            "starRating": 3.2,
            "imageUrl": "assets/images/hammer.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit');
    }
}
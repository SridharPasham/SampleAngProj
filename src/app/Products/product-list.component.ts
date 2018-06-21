import {Component, OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
templateUrl:"./product-list.component.html",
styleUrls:["./product-list.component.css"]
})
export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    showImage:boolean=false;
    filteredProducts:IProduct[];       
    products: IProduct[]=[];
    errorMessage:string;

    _filterText:string;
    get filterText():string{
        return this._filterText;
    }

    set filterText(value:string){
        this._filterText = value;
        this.filteredProducts = this.filterText? this.performFilter(this.filterText):this.products;
    }

    constructor(private _productService:ProductService){        
        
    }

    toggleImage(){
        this.showImage = !this.showImage;
    }

    ngOnInit(){
        //this.products = this._productService.getProductsOld();
        //this.filteredProducts = this.products;
        let sub=this._productService.getProducts()
        .subscribe(data=>{
            this.products=data;
            this.filteredProducts = this.products;
        }, error=>{
            this.errorMessage = <any>error;
        });        
    }

    performFilter(filterBy:string):IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        let fd= this.products.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
        return fd;
    }

    onNotify(message:string):void{
        this.pageTitle += message;
    }
}
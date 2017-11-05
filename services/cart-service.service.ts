import { Injectable } from '@angular/core';
import {Item} from '../models/item';
/**
 * 1. Setup item list
 *   items: Array<Item> = [
      { id: '1', name: 'Item1', price: 100, quantity: 1, maxquantity: 10 },
      { id: '2', name: 'Item2', price: 10, quantity: 1, maxquantity: 0 },
    ];
   2. call increase or decrease method
    constructor(private cartSertice: CartServiceService) {

  }
  
  addCart(item: Item) {
    this.cartSertice.increase(item);
    this.total = this.cartSertice.total;
  }

  removeCart(item: Item) {
    this.cartSertice.decrease(item);
    this.total = this.cartSertice.total;
  }
 */
@Injectable()
export class CartServiceService {

  constructor() {
    this.items = new Array<Item>();
   }
  items:Array<Item>;
  total:number;
 
  increase(item:Item){
    let existedItem = this.items.find(x=>x.id==item.id);
   // console.log('existed',existedItem);
   if(existedItem){

    if(existedItem.maxquantity == existedItem.quantity){
      return false;
    }

    existedItem.quantity +=1;

   }
   
   else{
     this.items.push(item);
   }
   // console.log(this.items);
    this.Calculate();
  }
  decrease(item:Item){
  //  console.log(item);
  let existedItem =  this.items.find(x=>x.id==item.id);
  if(existedItem.quantity>0){
    existedItem.quantity -=1;
  }

  this.Calculate();
    
  }

  empty(){
    
  }

  private  Calculate(){
    
    this.total = 0;
    this.items.forEach(x=>{
      this.total+= x.quantity*x.price});
  }


}

class Guid {
  static newGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
          return v.toString(16);
      });
  }
}


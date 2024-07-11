import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
productList:any[]=[]
  constructor(private productoService:ProductoService,
    private modalCtrl:ModalController
  ) {}
  ngOninit(): void {
    console.log("view did enter 2");
  }
  ionViewDidEnter(){
    console.log('view did enter 2')
  }
  ionViewWillEnter(){
    this.getProducts()
  }
  async getProducts(){
    try{
      await this.productoService.getProducts().subscribe(item=>this.productList=item)
      console.log(this.productList)
    }catch (error)
    {
      console.log(error)
    }
  }
}

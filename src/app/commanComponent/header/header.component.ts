import { Component, DoCheck, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements DoCheck {
public totalcarditem:number=1;
searchtext:any;

constructor(private service : ProductsService){}
ngDoCheck(){
  this.service.searchtex.next(this.searchtext);
}
ngOnInit(){
  this.service.getProduct().subscribe(res=>{
    this.totalcarditem=res.length;
    console.log(res);
    
  })
}
}

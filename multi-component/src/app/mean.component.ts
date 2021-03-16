import {Component} from "@angular/core";
@Component ({

    selector:"mean",
    templateUrl:"./mean.component.html",
    styleUrls:['./mean.component.css']
})
export class MeanComponent{
public sub:any;
constructor(){
this.sub="Angular11";
};
};
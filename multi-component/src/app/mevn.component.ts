import {Component} from "@angular/core";
@Component ({
selector : "mevn",
templateUrl : "./mevn.component.html",
styleUrls : ['./mevn.component.css']
})
export class MevnComponent{
public sub:any;
constructor(){
    this.sub="ReactJs";
};
};
import { Component } from "@angular/core";
@Component({
    selector: "neoSoft",
    templateUrl: "./first.component.html"
})
export class firstComponent{
private sub_one:string;
private sub_two:string;
private sub_three:string;
constructor(){
this.sub_one="Angular 11";
this.sub_two="Node.js";
this.sub_three="Restful WS";
};

public getSubOne():string{
return this.sub_one;
};
public getSubTwo():string{
    return this.sub_two;
};
public getSubThree(){
    return this.sub_three;
};
};
console.log("iwatani")
console.log("jumpei");

import {jumpei} from "./jumpei"

console.log(jumpei)

let iwatani1 = new jumpei(5);
console.log(iwatani1.jj());

export class iwatani{
    iii:number;
    constructor(iii:number){
        this.iii = iii;
    }

    io():number{
        return 54;
    }
}




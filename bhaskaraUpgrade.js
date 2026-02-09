//formula Ax^2 + bx + c = 0
//formula2 X = -b +- (raiz)delta / 2*a 

let a = 2;
let b = -3;
let c = -5;

if(a != 0){
    let delta = ((b**2)-4*a*c);
    console.log(delta);

    if(delta > 0){
        let x1 = ((-b + (delta ** 0.5)) / (2 * a)); 
        let x2 = ((-b - (delta ** 0.5)) / (2 * a)); 
        console.log(delta)
        console.log("possui duas raizes reais")
        console.log(x1);
        console.log(x2);

    } else if (delta === 0) {
        let x = -b / (2 * a);
        console.log("A equação possui uma única raiz real:");
        console.log("x = ", x);
    } else {
        console.log("nao existem raizes reais");
    }
    
} else {
    console.log("a variavel (A) nao pode ser 0");
}

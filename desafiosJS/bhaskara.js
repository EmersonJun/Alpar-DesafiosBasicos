//formula Ax^2 + bx + c = 0
//formula2 X = -b +- (raiz)delta / 2*a 

let a = 2;
let b = -3;
let c = -5;

let delta = ((b**2)-4*a*c);
console.log(delta);

let x1 = ((-b + (delta ** 0.5)) / (2 * a)); 
let x2 = ((-b - (delta ** 0.5)) / (2 * a)); 
console.log(x1);
console.log(x2);
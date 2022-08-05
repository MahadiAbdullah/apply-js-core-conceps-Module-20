/* const myInches = 12;
const myFeet = myInches / 12;
console.log('myfeet:', myFeet)

const dadaInches = 144;
const dadaFeet = dadaInches / 12;
console.log('dadafeet:', dadaFeet)
 */
function inchesToFeet(inches){
    const feet = inches / 12;
    return feet;
}
const dadaInches = 144;
const dadaFeet = inchesToFeet(dadaInches);
console.log(dadaFeet);
 
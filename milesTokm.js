function milesTokilometer(miles){
    const kilometer = miles*1.60934;
    return kilometer;
}
const dadamiles = 12;
const dadakilometer = milesTokilometer(dadamiles);
console.log(dadakilometer)
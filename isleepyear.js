/* function isLeepYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
} */
function isLeepYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const isMyLeepYear = isLeepYear(1933);
console.log('my year:', isMyLeepYear);
const isHerLeepYear = isLeepYear(1960);
console.log('her year:', isHerLeepYear)
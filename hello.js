module.exports=function sum(...param) {
    let sum=0;
    for (const item of param) {
        sum+=item
    }
    return sum
}
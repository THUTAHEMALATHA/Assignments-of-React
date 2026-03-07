var n=Number(prompt("enter your Number"))

if(isNaN(n)){
    console.log("Invalid input");
    
}
if(n>0){
    var sum = 0;
    for(var i=1; i<=n; i++){
        sum = sum +i;
        console.log(sum);
        
    }
}else {
    console.log(" these are negative number or morethan 0 is not valid here");
};

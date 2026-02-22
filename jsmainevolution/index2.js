function createRateLimiter(limit, interval){
    let count = 0;
    setInterval(()=>{
        count =0;

    },interval);
    return function(){
        if(count >= limit){
            return "Rate limit exceded"
        };
        count++;
        return "Allowed";
    };
}
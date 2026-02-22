function createCountdown(seconds, onTick, onComplete){
    let remaining =seconds;
    let timerid =null;
    let endTime =null;

    function tick(){
        const now =Date.now();
        remaining = Math.max(0,Math.ceil((endTime-now)/1000));

        onTick(remaining);
        if(remaining <=0){
            clearInterval(timerid);
            onComplete();

        }
    }

    function start(){
        endTime =  Date.now()+ remaining *1000;
        timerid =setInterval(tick,1000);
    }
    function pause(){
        clearInterval(timerid);
        remaining= Math.max(0,
            Math.ceil((endTime -Date.now())/1000));
                 
    }
    function resume(){
        start();
    }
    start();
    return {pause,resume};
}
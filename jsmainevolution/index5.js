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
        
    }
}
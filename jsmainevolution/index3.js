function mysetInterval(callback,delay){
 let timerId;
 let stopped =false;

 function run(){
    if(stopped) return;
    callback();
    timerId = setTimeout(run, delay);

 }

  timerId -setTimeout(run, delay);

  return function clearMyInterval(){
    stopped true;
    clearTimeout(timerId);
  }


}
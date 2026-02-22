function runSequentail(tasks, delay){
    return new Promise(async(resolve, reject) => {
      const  results  = [];
      try{
        for(let i=0; i<tasks.length ; i++){
            const res =await tasks[i]();
            results.push(res);
            if(i< tasks.length-1){
                await new Promise(r=> setTimeout(r,delay))
            }
        }
        resolve(results);

      }catch(err){reject(err)

      }
    });
}
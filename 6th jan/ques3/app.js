import os from 'os';
import fs from 'fs/promises';

async function main(){
    try{
         console.log("Free memory", os.freemem());
        console.log("CPU cores",os.cpus().length);
        // create data.txt
        await fs.writeFile("data.txt","Hello world");
        await fs.writeFile("Readme.md","## This is first line in Readme");
        //read file
        const data = await fs.readFile("data.txt","utf-8");
        console.log("data.txt content:", data);
        await fs.appendFile("data.txt","\nThis is second line" );
        // delete file
        await fs.unlink("Readme.md");
        console.log("All operations are commpleted successfully");


    }
    catch(error){
        console.log("error",error.message)
    }
}
main();
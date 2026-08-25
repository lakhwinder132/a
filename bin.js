import cluster from "cluster";
import os from "os";
import app from "./index.js";
const nocpus=os.cpus().length;


if(cluster.isPrimary){
   console.log(`Master ${process.pid} is running`);

   for(let i=0;i<nocpus;i++){
    cluster.fork();
   }
}else{
    app.listen(3000,()=>{
        console.log(`Worker ${process.pid} started`);
    });
}
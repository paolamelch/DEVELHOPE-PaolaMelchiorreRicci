import * as fs from "node:fs"

fs.readFile("/Users/paolamelch/DEVELHOPE-PaolaMelchiorreRicci/Node/es7/file1.txt","utf8",(error,data) =>{
    if(error){
        console.log(error);
        return
    }
    fs.writeFile("/Users/paolamelch/DEVELHOPE-PaolaMelchiorreRicci/Node/es7/file1.txt","Ciao1",(error,result)=>{
        if(error){
            console.log(error);
            return
        }
        console.log(result);
    })
})
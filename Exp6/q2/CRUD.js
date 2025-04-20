import { appendFile, readFile, unlink, writeFile } from 'fs';

// CREATE 
writeFile("newFile.txt", "Hello this is a CRUD operation", (err)=>{
    if(err) throw err;
    console.log("File created and data written.")
});

// READ
readFile("newFile.txt","utf8",(err,data)=>{
    if (err) throw err;
    console.log("File content:",data);
})

// UPDATE
appendFile("newFile.txt", "\n Hello again ladies and gentlemen",(err)=>{
    if (err) throw err;
    console.log("Data appended!")
})

// DELETE 
unlink("newFile.txt",(err)=>{
    if (err) throw err;
    console.log("File Deleted.")
})
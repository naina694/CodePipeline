const express = require('express');

const app = express();
const port = process.env.PORT||3000;
app.get('/',(req,res)=>{
    res.send('This is the First Version')
})

app.listen(port, () => {
    console.log("Server is running on http://localhost:${port}");
});
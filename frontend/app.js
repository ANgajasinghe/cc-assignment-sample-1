const express = require('express');
const path = require('path');
const app = express();

app.listen(process.env.PORT || 3000);

const staticPath = path.join(__dirname,'/public');
express.static(staticPath);

app.get('/*',(req,res)=>{
    res.sendFile(path.join(staticPath ,'/index.html'));
})

app.get('/health', (req, res) => {
    res.send('online');
});
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// cross origin resource sharing
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

// import the recipe model
const Factorial = require("./models/factorial");

app.get("/api/health", async (req, res) => {
    res.status(200).json({message: "OK"});  
});



app.post("/api/factorial/:number", async (req, res) => {
    try {

        const number = +req.params.number;
        let f = 1;

        for(let i = 1; i <= number; i++)    
        {  
            f = f * i;  
        }  

        const factorial = new Factorial({
            input: number,
            result: f
        });

        await factorial.save();

        res.status(200).json({
            result: f,
            allData: await Factorial.find()
        });

    } catch (error) {
        res.status(500).json(error);
    }   
});

app.get("/api/factorial", async (req, res) => {
    try {
        const factorials = await Factorial.find();
        res.status(200).json(factorials);
    } catch (error) {
        res.status(500).json(error);
    }   
});

app.delete("/api/factorial/:id", async (req, res) => {
    try {
        const fact = await Factorial.findById(req.params.id);
        if (!fact) {
            return res.status(404).json({ message: 'not found' });
        }
        await fact.remove();

        res.status(200).json(await Factorial.find());


    } catch (error) {
        res.status(500).json(error);
    } 
});

mongoose.connect(
    `mongodb://mongodb:27017/factorials?ssl=false`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    (err) => {
      if (err) {
        console.error("FAILED TO CONNECT TO MONGODB");
        console.error(err);
      } else {
        console.log("CONNECTED TO MONGODB!!");
        app.listen(8080);
      }
    }
  );


const express = require("express");
const cors = require('cors');
const morgan = require('morgan')

const { scrapeFlipkart } = require("./Controllers/scrapeFlipkart");
const { scrapeAmazon } = require("./Controllers/scrapeAmazon");


const app = express();
const port = 4000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(morgan('dev'));

app.get("/", (req,res)=>{
    res.send("Server running")
})

//scape logic
app.post('/scrape', async (req, res) => {
    const { product } = req.body;
    if (!product) {
        return res.status(400).json({ error: 'Product name is required' });
    }

    try {
        
        const flipkartData = await scrapeFlipkart(product);
        const amazonData = await scrapeAmazon(product);
        
        
        res.status(200).json({
            success:true,
            message:"Data scrapped",
            flipkart:flipkartData,
            amazon:amazonData
        });

        
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
});



app.listen(port, ()=>{
    console.log("Server running successfully")
})
const express = require("express");
const userRouter = require("./routes/users.route");
const productRouter = require("./routes/products.route");

const app = express();
const PORT = 3007;



app.use(express.urlencoded({extended:true}));
app.use(userRouter);
app.use(productRouter)


app.use((req,res) =>{
    res.status(404).json({
        msg:"resource not found"
    });
});

app.listen(PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
})
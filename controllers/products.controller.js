const path = require("path");
const products = require("../models/products.models");

exports.getProducts = (req,res) =>{
    res.sendFile(path.join(__dirname + "/../views/product.html"));
};

exports.saveProducts = (req,res) =>{
    const name = req.body.name;
    const quintity = Number(req.body.quintity);

    const product = {
        name,
        quintity,
    };

    products.push(product);
    res.status(201).json({
        success : true,
        products,
    });

};
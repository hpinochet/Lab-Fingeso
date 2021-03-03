//encargado de tener las rutas (urls) del servidor

const { Router } = require('express');
const router = Router();

const faker = require('faker');
const Article = require('../models/Article');

router.get('/create', async (req, res) => {
    for(let i = 0; i < 100; i++){
        await Article.create({
            title: faker.name.title(),
            imageURL: faker.image.image(),
            description: faker.lorem.paragraph()
        })
    }
    res.send('100 records created');
});

router.get('/articles', async (req, res) => {
    const articles = await Article.find(); //consultar la base de datos, lo devuelve en un arreglo
    res.json({articles}); 
});

module.exports = router;
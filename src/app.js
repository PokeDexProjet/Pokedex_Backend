const express = require('express');
const pokemonRoutes = require('./routes/pokemonRoutes');

const app = express();

// 定义根路径的路由
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(express.json());

// 配置 Pokémon API 路由
app.use('/pokemon', pokemonRoutes);

module.exports = app;

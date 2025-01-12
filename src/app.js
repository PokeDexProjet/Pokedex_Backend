const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // 引入 cors
const pokemonRoutes = require('./routes/pokemonRoutes');
const path = require('path');

const app = express();

// 配置 CORS，允许所有来源的请求（可以根据需要修改）
app.use(cors());  // 默认允许所有来源的请求

// 使用 JSON 中间件解析请求体
app.use(express.json());

// 配置 Pokémon API 路由
app.use('/pokemon', pokemonRoutes);

// 提供静态文件服务（假设你在 Pokedex_Frontend 中运行 npm run build）
app.use(express.static(path.join(__dirname, '../Pokedex_Frontend/build')));  // 如果前端构建后在 build 目录

// 配置根路径，返回 index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../Pokedex_Frontend/build', 'index.html'));
});

// 导出 app 对象
module.exports = app;



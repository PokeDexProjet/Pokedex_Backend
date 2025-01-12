// 导入必要的模块
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// 创建 Express 应用
const app = express();
const port = 3000;

// 连接到 MongoDB 数据库
mongoose.connect('mongodb+srv://huangjingl:MongoDBleiFr@cluster0.dpjvo.mongodb.net/pokemon_db?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('成功连接到 MongoDB 数据库'))
  .catch((err) => console.error('连接 MongoDB 数据库失败:', err));

// 定义 Pokémon 的数据模型
const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  type: [String],
  image: String,
  description: String,
});

// 创建 Pokémon 模型
const Pokemon = mongoose.model('Pokemon', pokemonSchema);

// 启用 CORS 以允许前端请求
app.use(cors());

// 提供静态文件服务
app.use(express.static(path.join(__dirname, '../front')));

// 定义根路径路由
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../front', 'index.html'));
});

// 路由：获取所有 Pokémon 数据
app.get('/api/pokemons', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (err) {
    res.status(500).json({ message: '获取 Pokémon 数据时出错', error: err });
  }
});

// 路由：根据 ID 获取单个 Pokémon 数据
app.get('/api/pokemons/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ id: req.params.id });
    if (!pokemon) {
      return res.status(404).json({ message: '未找到 Pokémon' });
    }
    res.json(pokemon);
  } catch (err) {
    res.status(500).json({ message: '获取 Pokémon 详情时出错', error: err });
  }
});

// 启动服务器
app.listen(port, () => {
  console.log(`服务器正在运行在 http://localhost:${port}`);
});

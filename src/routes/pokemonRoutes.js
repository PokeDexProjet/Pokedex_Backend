const express = require('express');
const Pokemon = require('../models/Pokemon');  // 引入 Pokemon 模型

const router = express.Router();

// 获取所有宝可梦的数据
router.get('/', async (req, res) => {
  try {
    const pokemons = await Pokemon.find();  // 从数据库中获取所有 Pokémon
    res.json(pokemons);  // 返回 Pokémon 数据
  } catch (error) {
    console.error('获取 Pokémon 数据失败:', error);
    res.status(500).json({ message: '服务器内部错误' });
  }
});

// 获取单个宝可梦的数据
router.get('/:id', async (req, res) => {
  try {
    const pokemon = await Pokemon.findOne({ id: req.params.id });  // 根据 ID 查找 Pokémon
    if (!pokemon) {
      return res.status(404).json({ message: '宝可梦未找到' });
    }
    res.json(pokemon);  // 返回宝可梦数据
  } catch (error) {
    console.error('获取宝可梦数据失败:', error);
    res.status(500).json({ message: '服务器内部错误' });
  }
});

module.exports = router;


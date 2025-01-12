const Pokemon = require('../models/Pokemon');

// 获取所有 Pokémon
const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find({}, { _id: 0, id: 1, name: 1, type: 1, image: 1 }); // 返回主要字段
    res.status(200).json(pokemons);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// 获取指定 Pokémon 的详情
const getPokemonDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemon = await Pokemon.findOne({ id: Number(id) }); // 根据 ID 查找
    if (!pokemon) {
      return res.status(404).json({ error: 'Pokémon not found' });
    }
    res.status(200).json(pokemon);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getPokemons, getPokemonDetails };

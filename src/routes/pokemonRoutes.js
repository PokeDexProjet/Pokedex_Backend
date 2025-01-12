const express = require('express');
const router = express.Router();
const { getPokemons, getPokemonDetails } = require('../controllers/pokemonController');

// 获取 Pokémon 列表
router.get('/', getPokemons);

// 获取 Pokémon 详情
router.get('/:id', getPokemonDetails);

module.exports = router;
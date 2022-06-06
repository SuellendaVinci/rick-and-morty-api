const RickMortyController = require("../controllers/rickMortyController");

module.exports = {
  "/characters": RickMortyController.getAllCharacters,
  "/characters-save-all": RickMortyController.saveAllCharacters,
  "/characters-save-by-id": RickMortyController.saveCharacterById,
  "/characters-by-origin": RickMortyController.getCharactersByOrigin,
  "/locations": RickMortyController.getAllLocations,
  "/episodes": RickMortyController.getAllEpisodes,
};

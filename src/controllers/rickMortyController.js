const RickMorty = require("../models/rickMorty");
const log = require("../utils/log");
const httpResponse = require("../utils/httpResponse");
const fs = require("fs");

class RickMortyCharacterController {
  static async getAllCharacters(req, res) {
    try {
      const { id } = req;

      let response = null;

      if (id) {
        response = await RickMorty.getCharacterById(id);
      } else {
        response = await RickMorty.getAllCharacters(req.queryParams);
      }

      log.request(req.url);

      httpResponse({ res, statusCode: 200, body: response });
    } catch (error) {
      if (error?.response?.status) {
        log.error(req.url, error.response.status);

        httpResponse({
          res,
          statusCode: error.response.status,
          body: { message: "Personagem não encontrado!" },
        });
      } else {
        log.error(req.url, error.statusCode || 500);

        httpResponse({
          res,
          statusCode: error.statusCode || 500,
          body: { message: error.message || "Server Error" },
        });
      }
    }
  }

  static async getCharactersByOrigin(req, res) {
    try {
      let response = await RickMorty.getCharactersByOrigin(req.queryParams);

      log.request(req.url);

      httpResponse({ res, statusCode: 200, body: response });
    } catch (error) {
      log.error(req.url, error.statusCode || 500);

      httpResponse({
        res,
        statusCode: error.statusCode || 500,
        body: { message: error.message || "Server Error" },
      });
    }
  }

  static async saveAllCharacters(req, res) {
    try {
      let response = await RickMorty.getAllCharactersFromAllPages();

      fs.writeFileSync(
        "./tmp/rick-and-morty-all-characters.json",
        JSON.stringify(response)
      );

      log.request(req.url);

      httpResponse({
        res,
        statusCode: 200,
        body: {
          message: "Todos os dados dos personagens foram salvos com sucesso!",
        },
      });
    } catch (error) {
      log.error(req.url, error.statusCode || 500);

      httpResponse({
        res,
        statusCode: error.statusCode || 500,
        body: { message: error.message || "Server Error" },
      });
    }
  }

  static async saveCharacterById(req, res) {
    try {
      const { id } = req;
      const response = await RickMorty.getCharacterById(id);

      const fileName = `${response.name
        .split(" ")
        .join("-")
        .toLowerCase()}.json`;

      fs.writeFileSync(`./tmp/${fileName}`, JSON.stringify(response));

      log.request(req.url);

      httpResponse({
        res,
        statusCode: 200,
        body: { message: "Personagem foram salvo com sucesso!" },
      });
    } catch (error) {
      log.error(req.url, 404);

      httpResponse({
        res,
        statusCode: 404,
        body: { message: "Personagem não encontrado!" },
      });
    }
  }

  static async getAllLocations(req, res) {
    try {
      const response = await RickMorty.getAllLocations(req.queryParams);

      log.request(req.url);

      httpResponse({ res, statusCode: 200, body: response });
    } catch (error) {
      log.error(req.url, error.statusCode || 500);

      httpResponse({
        res,
        statusCode: error.statusCode || 500,
        body: { message: error.message || "Server Error" },
      });
    }
  }

  static async getAllEpisodes(req, res) {
    try {
      const response = await RickMorty.getAllEpisodes(req.queryParams);

      log.request(req.url);

      httpResponse({ res, statusCode: 200, body: response });
    } catch (error) {
      log.error(req.url, 404);

      httpResponse({
        res,
        statusCode: 404,
        body: { message: "Episódio não encontrado!" },
      });
    }
  }
}

module.exports = RickMortyCharacterController;

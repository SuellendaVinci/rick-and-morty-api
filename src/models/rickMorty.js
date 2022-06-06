const rickMortyApi = require("../config/rick-morty-api");
const getFilteredString = require("../utils/getFilteredString");
const getPaginatedData = require("../utils/getPaginatedData");
const validations = require("./validations");
const rickAndMortyAllCharacters = require("../../tmp/rick-and-morty-all-characters.json");

class RickMorty {
  static async getAllCharacters(queryParams) {
    let page = queryParams.get("page");
    let status = queryParams.get("status");
    let gender = queryParams.get("gender");

    if (!page) {
      page = 1;
    }

    validations.validatePage(page);
    validations.validateStatus(status);
    validations.validateGender(gender);

    let pageString = getFilteredString("page", queryParams.get("page"), true);
    let statusString = getFilteredString("status", queryParams.get("status"));
    let speciesString = getFilteredString(
      "species",
      queryParams.get("species")
    );
    let genderString = getFilteredString("gender", queryParams.get("gender"));

    const response = await rickMortyApi.get(
      `/character/?${pageString}${statusString}${speciesString}${genderString}`
    );

    return response.data;
  }

  static async getAllCharactersFromAllPages() {
    let results = [];
    let page = 2;

    let response = await rickMortyApi.get("/character");

    results = [...results, ...response.data.results];

    while (response.data.info.next) {
      response = await rickMortyApi.get(`/character/?page=${page}`);
      results = [...results, ...response.data.results];
      page++;
    }

    return results;
  }

  static async getCharacterById(id) {
    const response = await rickMortyApi.get(`/character/${id}`);

    return response.data;
  }

  static async getCharactersByOrigin(queryParams) {
    let origin = queryParams.get("origin");
    let page = queryParams.get("page");
    let limit = queryParams.get("limit");

    if (!page) {
      page = "1";
    }

    if (!limit) {
      limit = "20";
    }

    validations.validateOrigin(origin);
    validations.validatePage(page);

    let filteredCharacters = rickAndMortyAllCharacters.filter((character) => {
      return character.origin.name.toLowerCase().includes(origin.toLowerCase());
    });

    let results = getPaginatedData({ page, limit, data: filteredCharacters });

    return results;
  }

  static async getAllLocations(queryParams) {
    let page = queryParams.get("page");
    let name = queryParams.get("name");
    let type = queryParams.get("type");
    let dimension = queryParams.get("dimension");

    let pageString = getFilteredString("page", page);
    let nameString = getFilteredString("name", name);
    let typeString = getFilteredString("type", type);
    let dimensionString = getFilteredString("dimension", dimension);

    const response = await rickMortyApi.get(
      `/location/?${pageString}${nameString}${typeString}${dimensionString}`
    );
    return response.data;
  }

  static async getAllEpisodes(queryParams) {
    let page = getFilteredString("page", queryParams.get("page"));
    let name = getFilteredString("name", queryParams.get("name"));
    let episode = getFilteredString("episode", queryParams.get("episode"));

    const response = await rickMortyApi.get(
      `/episode/?${page}${name}${episode}`
    );
    return response.data;
  }
}

module.exports = RickMorty;

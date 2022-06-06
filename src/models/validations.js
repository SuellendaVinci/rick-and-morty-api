exports.validatePage = (page) => {
  if (page && isNaN(page)) {
    throw { statusCode: 422, message: "A página deve ser um número!" };
  }
};

exports.validateStatus = (status) => {
  if (
    status.toLowerCase() !== "alive" &&
    status.toLowerCase() !== "dead" &&
    status.toLowerCase() !== "unknown"
  ) {
    throw {
      statusCode: 422,
      message: "Status inválido! O status deve ser alive, dead ou unknown!",
    };
  }
};

exports.validateGender = (gender) => {
  if (
    gender.toLowerCase() !== "female" &&
    gender.toLowerCase() !== "male" &&
    gender.toLowerCase() !== "genderless" &&
    gender.toLowerCase() !== "unknown"
  ) {
    throw {
      statusCode: 422,
      message:
        "Gênero inválido! O gênero deve ser female, male, genderless ou unknown!",
    };
  }
};

exports.validateCharacterResponseById = (gender) => {
  if (
    gender.toLowerCase() !== "female" &&
    gender.toLowerCase() !== "male" &&
    gender.toLowerCase() !== "genderless" &&
    gender.toLowerCase() !== "unknown"
  ) {
    throw {
      statusCode: 422,
      message:
        "Gênero inválido! O gênero deve ser female, male, genderless ou unknown!",
    };
  }
};

exports.validateStatus = (status) => {
  if (
    status.toLowerCase() !== "alive" &&
    status.toLowerCase() !== "dead" &&
    status.toLowerCase() !== "unknown"
  ) {
    throw {
      statusCode: 422,
      message: "Status inválido! O status deve ser alive, dead ou unknown!",
    };
  }
};

exports.validateOrigin = (origin) => {
  if (!origin) {
    throw {
      statusCode: 422,
      message: "Não foi informada a origem do personagem!",
    };
  }
};

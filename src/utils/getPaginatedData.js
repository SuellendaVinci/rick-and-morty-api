const getPaginatedData = ({ page, limit, data }) => {
  if (limit >= data.length) {
    return data;
  }

  if (limit * page >= data.length) {
    return data.slice(-(data.length % limit));
  }

  let results = [];

  for (let i = (page - 1) * limit; i < page * limit; i++) {
    results.push(data[i]);
  }

  return { page, limit, results };
};

module.exports = getPaginatedData;

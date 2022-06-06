const getFilteredString = (label, info, firstInfo = false) => {
  if (!info) {
    return "";
  }

  if (firstInfo) {
    return `${label}=${info}`;
  } else {
    return `&${label}=${info}`;
  }
};

module.exports = getFilteredString;

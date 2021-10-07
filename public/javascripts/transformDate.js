const _dateFns = require("date-fns");

const transformDate = (date) => {
  const formatedDate = (0, _dateFns.format)(date, "dd-MM-yy HH:mm:ss", []);

  return formatedDate;
};

module.exports = transformDate;

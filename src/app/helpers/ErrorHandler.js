// Simple function to build the http error object
const errorParser = (errType, code, message) => {
  return { code: code, error: errType + ' - ' + message };
};

// Helper to simplify http responses with error
module.exports = (errType, code) => {
  let parseError = {};

  switch (errType) {
    case 'MongoError':
      switch (code) {
        case 11000:
          parseError = errorParser(errType, 400, 'Duplicate key');
          break;

        default:
          parseError = errorParser(errType, 400, 'Bad request');
          break;
      }
      break;

    default:
      parseError = errorParser(errType, 400, 'Bad request');
      break;
  }
  return parseError;
};

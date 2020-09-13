module.exports = {
  verbose: true,
  forceExit: true,
  transform: {
    "^.+\\.js?$": require.resolve("babel-jest")
  }
};
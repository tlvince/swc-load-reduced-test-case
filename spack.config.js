module.exports = {
  entry: {
    node: __dirname + "/src/index.ts",
  },
  output: {
    path: __dirname + "/build",
  },
  externalModules: ["aws-sdk"],
};

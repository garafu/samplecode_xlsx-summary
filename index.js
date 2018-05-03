var path = require("path");
var load = require("readdir").read;
var { ABSOLUTE_PATHS, CASE_SORT, CASELESS_SORT, IGNORE_ERRORS } = require("readdir");

load("./", ["**.xlsx", "**.xls"], ABSOLUTE_PATHS, (err, files) => {
  for (var file of files) {
    console.log(path.normalize(file));
  }
});
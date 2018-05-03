var xlsx = require("xlsx");

/************************************************************
 * Excelファイル書き込み
 ************************************************************/
// データ作成
var aoa = [
  ["No", "概要", "詳細", "起票日", "起票者", "対応完了日", "対応者"],
  [1, "xxxx", "xxxx", "xxxx", "xxxx", "xxxx", "xxxx"]
];

// ワークシート作成
var worksheet = xlsx.utils.aoa_to_sheet(aoa);

// ワークブック作成
 var workbook = xlsx.utils.book_new();
xlsx.utils.book_append_sheet(workbook, worksheet, "シート名");

// 書き込み
xlsx.writeFile(workbook, "./output/sample.xlsx");
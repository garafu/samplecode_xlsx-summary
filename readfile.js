var xlsx = require("xlsx");

/************************************************************
 * Excelファイル読み込み
 ************************************************************/

 // ワークブック取得
var workbook = xlsx.readFile("./data/Book1.xls");

// シート一覧取得
for (var name of workbook.SheetNames) {
  console.log(name);
}

// シート取得
var sheet = workbook.Sheets["テスト"];

// A1表現でレンジを取得
var range = xlsx.utils.decode_range("A1:O36")

// シート内のセルを順番に確認
for (var row = range.s.r; row < range.e.r; row++) {
  for (var col = range.s.c; col < range.e.c; col++) {
    var ref = xlsx.utils.encode_cell({ r: row, c: col });
    var cell = sheet[ref];
    if (cell && cell.v) {
      console.log(`[${row}:${col}] ${cell.v}`);
    }
  }
}


// Importing modules
const PDFDocument = require("pdfkit");
const fs = require("fs");

const Data = require("../Data.json");

const billh = 300;

function bill(doc) {
  //line to the middle
  doc
    .lineCap("butt")
    .moveTo(216, 90 + billh)
    .lineTo(216, 170 + billh)
    .stroke();
  doc
    .lineCap("butt")
    .moveTo(75, 90 + billh)
    .lineTo(75, 170 + billh)
    .stroke();
  doc
    .lineCap("butt")
    .moveTo(324, 90 + billh)
    .lineTo(324, 170 + billh)
    .stroke();
  doc
    .lineCap("butt")
    .moveTo(432, 90 + billh)
    .lineTo(432, 170 + billh)
    .stroke();

  row(doc, 90 + billh);
  row(doc, 110 + billh);
  row(doc, 130 + billh);
  row(doc, 150 + billh);

  textInColumnFirst(doc, "Sr.No.", 100 + billh);
  textInColumnFirst(doc, Data.bill1[1]["Sr.No"], 120 + billh);
  textInColumnFirst(doc, Data.bill1[2]["Sr.No"], 140 + billh);
  textInColumnFirst(doc, Data.bill1[3]["Sr.No"], 160 + billh);

  textInColumnSecond(doc, "Package Name", 100 + billh);
  textInColumnSecond(doc, Data.bill1[1].PackageName, 120 + billh);
  textInColumnSecond(doc, Data.bill1[2].PackageName, 140 + billh);
  textInColumnSecond(doc, Data.bill1[3].PackageName, 160 + billh);

  textInColumnThird(doc, "Qty", 100 + billh);
  textInColumnThird(doc, Data.bill1[1].Qty, 120 + billh);
  textInColumnThird(doc, Data.bill1[2].Qty, 140 + billh);
  textInColumnThird(doc, Data.bill1[3].Qty, 160 + billh);

  textInColumnFourth(doc, "Rate", 100 + billh);
  textInColumnFourth(doc, Data.bill1[1].Rate, 120 + billh);
  textInColumnFourth(doc, Data.bill1[2].Rate, 140 + billh);
  textInColumnFourth(doc, Data.bill1[3].Rate, 160 + billh);

  textInColumnFifth(doc, "Total", 100 + billh);
  textInColumnFifth(doc, Data.bill1[1].Rate * Data.bill1[1].Qty, 120 + billh);
  textInColumnFifth(doc, Data.bill1[2].Rate * Data.bill1[2].Qty, 140 + billh);
  textInColumnFifth(doc, Data.bill1[3].Rate * Data.bill1[3].Qty, 160 + billh);

  const total =
    Data.bill1[1].Rate * Data.bill1[1].Qty +
    Data.bill1[2].Rate * Data.bill1[2].Qty +
    Data.bill1[3].Rate * Data.bill1[3].Qty;

  // Adding total bill and due date
  doc.fontSize(20).text("Total Bill : " + total, 350, 185 + billh, {
    width: 200,
  });

  doc
    .fontSize(15)
    .text(
      "Due Date : " +
        new Date().toISOString().slice(0, 10).split("-").reverse().join("/"),
      350,
      210 + billh,
      {
        width: 200,
      }
    );
}

function textInColumnFirst(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 30;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//function to fill the values
function textInColumnSecond(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 90;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//function to fill the values
function textInColumnThird(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 230;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//function to fill the values
function textInColumnFourth(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 350;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

//function to fill the values
function textInColumnFifth(doc, text, heigth) {
  doc.y = heigth;
  doc.x = 452;
  doc.fillColor("black");
  doc.text(text, {
    paragraphGap: 5,
    indent: 5,
    align: "justify",
    columns: 1,
  });
  return doc;
}

function row(doc, heigth) {
  doc.lineJoin("miter").rect(30, heigth, 500, 20).stroke();
  return doc;
}

module.exports = bill;

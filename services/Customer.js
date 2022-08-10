// Importing modules
const PDFDocument = require("pdfkit");
const fs = require("fs");

const Data = require("../Data.json");

const h = 130;

function customer(doc) {
  //line to the middle
  doc
    .lineCap("butt")
    .moveTo(270, 90 + h)
    .lineTo(270, 189 + h)
    .stroke();

  row(doc, 90 + h);
  row(doc, 110 + h);
  row(doc, 130 + h);
  row(doc, 150 + h);
  row(doc, 170 + h);

  textInColumnFirst(doc, "Sr.No.", 100 + h);
  textInColumnFirst(doc, "Customer ID", 120 + h);
  textInColumnFirst(doc, "Address", 140 + h);
  textInColumnFirst(doc, "Customer Email", 160 + h);
  textInColumnFirst(doc, "Services", 180 + h);

  textInColumnSecond(doc, Data.customer1.Name, 100 + h);
  textInColumnSecond(doc, Data.customer1.ID, 120 + h);
  textInColumnSecond(doc, Data.customer1.Address, 140 + h);
  textInColumnSecond(doc, Data.customer1.Email, 160 + h);
  textInColumnSecond(doc, Data.customer1.Services, 180 + h);
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
  doc.x = 290;
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

module.exports = customer;

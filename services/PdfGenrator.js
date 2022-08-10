// Importing modules
const PDFDocument = require("pdfkit");
const fs = require("fs");

const customer = require("./Customer");
const bill = require("./Bill");

const genrate = (req, res) => {
  // Create a document
  const doc = new PDFDocument();

  // Saving the pdf file in root directory.
  doc.pipe(fs.createWriteStream("Invoice.pdf"));

  // Adding an image in the pdf.

  doc.image("crib.PNG", 430, 0, {
    fit: [100, 100],
    align: "center",
    valign: "center",
  });

  // Adding header -address
  doc
    .fontSize(10)
    .text("F 120 First Floor Dilshad Colony Delhi 11095, India", 420, 90, {
      width: 200,
    });

  // Adding header - phone
  doc.fontSize(10).text("Phone : 09942000500", 420, 113, {
    width: 200,
  });

  // Adding header - email
  doc.fontSize(10).text("Email : sunny@crib.in", 420, 125, {
    width: 200,
  });

  doc.lineCap("butt").moveTo(10, 140).lineTo(600, 140).stroke();

  // Adding header - email
  doc.fontSize(22).text("Invoice - August Month", 175, 160);

  doc.fontSize(10).text("To ,", 30, 200);

  customer(doc);

  doc
    .fontSize(10)
    .text(
      "The bill heads witht the detailed structed and payment details please the bill before metnioned data failling to which might relaease in extra charges of 100rupees per day",
      30,
      350
    );
  bill(doc);

  doc.lineCap("butt").moveTo(10, 680).lineTo(600, 680).stroke();

  // Adding header - email
  doc
    .fontSize(10)
    .text(
      "Invoicing and Payment Terms : Each Unit will be provided with an invoice at the time of delivery. The invoice will serve as the receiving document to aid the Unit’s personnel to check in the shipment. Our driver will be empowered to adjust the invoice for shipping errors discovered at the time of delivery ",
      30,
      685
    );

  // Finalize PDF file
  doc.end();
  res.json({ message: "completed" });
};

module.exports = genrate;

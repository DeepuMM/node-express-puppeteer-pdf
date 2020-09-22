const puppeteer = require("puppeteer");

const saveToPdf = async url => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"] // SEE BELOW WARNING!!!
  });
  const page = await browser.newPage();
  await page.goto(url);
  const pdf = await page.pdf();
  await browser.close();
  // Return Buffer
  return pdf;
};


module.exports = saveToPdf;

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const url = 'https://rahul.rest';
  const name = 'portfolio3';
  
  console.log(`Navigating to ${url}...`);
  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
    // Wait an extra 3 seconds for animations
    await new Promise(resolve => setTimeout(resolve, 3000));
    await page.screenshot({ path: `public/${name}.png` });
    console.log(`Saved screenshot to public/${name}.png`);
  } catch (err) {
    console.log(`Failed to screenshot ${url}:`, err);
  }

  await browser.close();
})();

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/');
    await page.focus('input[id=outlined-basic]');
    await page.keyboard.type("History Test");
    await page.focus('input[type="tel"]');
    await page.keyboard.type('05/27/2023');
    await page.waitForSelector('button[name="submit"]');
    await page.click('button[name="submit"]');


    await page.focus('input[id=outlined-basic]');
    await page.keyboard.type("Math Test");
    await page.focus('input[type="tel"]');
    await page.keyboard.type('04/27/2022');
    await page.waitForSelector('button[name="submit"]');
    await page.click('button[name="submit"]');
    

    const result = await page.evaluate(() => {
    return document.getElementById('History Test').style.background
    })
    const result2 = await page.evaluate(() => {
        return document.getElementById('Math Test').style.background
    })
    console.log(result == result2)
    await page.screenshot({ path: 'example2.png' });
    await browser.close();
})();
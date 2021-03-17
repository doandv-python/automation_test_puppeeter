// const puppeteer = require("puppeteer");
// let browser;
// let page;
// //Test
// describe('Youtube Home', function () {
//     //Constant
//
//     const URL = "https://www.youtube.com/";
//     const TIME_OUT = 3000000;
//
//     // Before test youtube home
//     beforeAll(async () => {
//
//         browser = await puppeteer.launch({
//             headless: false
//         });
//         page = await browser.newPage();
//         await page.goto("https://www.youtube.com/");
//     }, TIME_OUT);
//
//     //After test case close browser
//     afterAll(async () => {
//         await page.close();
//         await browser.close();
//
//     }, TIME_OUT);
//
//     // test case
//
//     //Check title Youtube
//     test("Check Youtube Title", async () => {
//         let title = await page.title();
//         expect(title).toEqual("YouTube");
//
//     }, TIME_OUT);
//
//     //Check URL Youtube
//     test("Check Youtube URL", async () => {
//         let url = await page.url();
//         expect(url).toEqual(URL);
//     }, TIME_OUT);
//
//     //Check search Youtube
//     test("Check search Youtube", async () => {
//         await page.type("#search", "puppeteer");
//         await page.click("#search-icon-legacy");
//         let url = await page.url();
//         let expectedUrl = URL + "results?search_query=puppeteer";
//         expect(url).toEqual(expectedUrl);
//     }, TIME_OUT);
//
// });
// const puppeteer = require("puppeteer");
// const constants = require("../../utils/constants.js")
// const pageUtils = require("../../page/home");
// let homeUtils = pageUtils.HomePage;
// let config = constants.Config;
// let browser;
// let page;
//
//
// describe("Check Element in home page", function (){
//
//     beforeAll(async () => {
//         browser = await puppeteer.launch({
//             headless: false
//         });
//         page = await browser.newPage();
//         await homeUtils.gotoHomePage(page);
//     }, config.TIME_OUT);
//
//     afterAll(async () => {
//         page.closeAll();
//         browser.close();
//     }, config.TIME_OUT);
//
//     test("Check search element", async () => {
//         let searchButton = homeUtils.searchButtonElement(page);
//         expect(searchButton).not.toBeNull();
//     }, config.TIME_OUT);
// });

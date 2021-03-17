// const puppeteer = require("puppeteer")
// let browser;
// let page;
// const TIME_OUT = 3000000;
// const gotoHomePage = async (browser, page, page_url) => {
//     if (browser == null) {
//         browser = await puppeteer.launch({
//             headless: false
//         });
//     }
//     if (page == null) {
//         page = await browser.newPage();
//     }
//     await page.goto(page_url);
//     return page;
// };
//
// const closeBrowser = async () => {
//     await page.close();
//     await browser.close();
// };
//
// const beforeAllLogin = beforeAll(async () => {
//     page = await gotoHomePage(browser, page, "http://localhost:51264/WebBanXe/Home.aspx");
//     let accountButton =
//         await page.$x("//body[1]/form[1]/div[3]/header[1]/nav[1]/div[1]/div[1]/ul[1]/li[8]");
//     await accountButton[0].hover();
//     let createAccountButton = await page.$x("//*[contains(text(),'Tạo tài khoản')]");
//     await createAccountButton[0].click();
//     await page.waitForNavigation();
// }, TIME_OUT);
//
// describe("Check UI Login", () => {
//
//     beforeAll(async () => {
//         beforeAllLogin();
//     }, TIME_OUT);
//
//     afterAll(async () => {
//         await closeBrowser();
//     }, TIME_OUT);
//
//     //Check URL
//     it("Check URL", async () => {
//         let expectUrl = "http://localhost:51264/WebBanXe/DangKy.aspx";
//         let actualUrl = await page.url();
//         expect(actualUrl).toEqual(expectUrl);
//     }, TIME_OUT);
//     //Check Title
//     it("Check Title", async () => {
//         let expectTitle = "Trang đăng ký";
//         let titleElement = await page.$x("//h1[contains(text(),'Trang đăng ký')]");
//         expect(titleElement).not.toBeNull();
//         let actualTitle = await page.evaluate(h1 => h1.textContent, titleElement[0]);
//         expect(actualTitle).toEqual(expectTitle);
//     }, TIME_OUT);
// });
//
//
// describe("Validation Login", () => {
//
//     beforeAll(async () => {
//         await beforeAllLogin();
//     }, TIME_OUT);
//
//     afterAll(async () => {
//         await closeBrowser();
//     }, TIME_OUT);
//
//     it("Check No Blank All Field",async ()=>{
//
//     },TIME_OUT);
// });
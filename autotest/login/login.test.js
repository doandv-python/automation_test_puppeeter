// const puppeteer = require("puppeteer");
// let browser;
// let page;
// const TIME_OUT = 3000000;
//
// describe("Login Youtube Account", () => {
//     //Before unit test
//     beforeAll(async () => {
//         browser = await puppeteer.launch({
//             headless: false
//         });
//         page = await browser.newPage();
//         await page.goto("https://www.youtube.com/");
//         let signInButton =
//             await page.$x("//ytd-masthead/div[@id='container']/div[@id='end']/div[@id='buttons']/ytd-button-renderer[1]/a[1]/paper-button[1]/yt-formatted-string[1]");
//         await signInButton[0].click();
//         await page.waitForNavigation();
//     }, TIME_OUT);
//
//     //After all unit test
//     afterAll(async () => {
//         await page.close();
//         browser.close();
//     });
//     //test
//     test("Check URL SignIn", async () => {
//         console.log("Demo test");
//     }, TIME_OUT);
// });
//
// describe("Login Lazada Home", () => {
//
//     //Constant
//     const TITLE_LOGIN = "Welcome to Lazada! Please login.";
//
//     //Before test you can load page and browser
//     beforeAll(async () => {
//         browser = await puppeteer.launch({
//             headless: true,
//             args: ['--start-fullscreen']
//         });
//         page = await browser.newPage();
//         await page.setViewport({width: 1920, height: 1080});
//         await page.goto("https://www.lazada.vn/?spm=a2o4n.home.header.dhome.1905e182akM5uw");
//         let loginButton =
//             await page.$x('//a[text()="login"]');
//         await loginButton[0].click();
//         await page.waitForNavigation();
//     }, TIME_OUT);
//
//     //After test close browser
//     afterAll(async () => {
//         await page.close();
//         await browser.close();
//     }, TIME_OUT);
//
//     // Test check title of login screen
//     test("Check title login", async () => {
//         let titleLoginElement = await page.$x('.//div[@class="login-title"]/h3');
//         let titleLogin = await page.evaluate(h3 => h3.textContent, titleLoginElement[0]);
//         expect(titleLogin).toEqual(TITLE_LOGIN);
//     }, TIME_OUT);
//
//     //Test for check button login
//     test("Check button login", async () => {
//         let button = await page.$x('.//button[@type="submit"]');
//         await button[0].click();
//         let userNameElement = await page.$x('//input[@type="text"]');
//         let userNameActual = await page.evaluate(element => element.value, userNameElement[0]);
//         let error = await page.evaluate(element => element.getAttribute('error'), userNameElement[0]);
//         expect(error).toEqual("Mandatory Field.");
//         expect(userNameActual).toEqual("");
//     }, TIME_OUT);
//
// });
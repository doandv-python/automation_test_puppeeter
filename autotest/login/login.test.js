const puppeteer = require("puppeteer");
let browser;
let page;
const TIME_OUT = 3000000;

describe("Login Youtube Account", () => {
    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: true
        });
        page = await browser.newPage();
        await page.goto("https://www.youtube.com/");
        let signInButton =
            await page.$x("//ytd-masthead/div[@id='container']/div[@id='end']/div[@id='buttons']/ytd-button-renderer[1]/a[1]/paper-button[1]/yt-formatted-string[1]");
        await signInButton[0].click();
        await page.waitForNavigation();
    }, TIME_OUT);

    afterAll(async () => {
        await page.close();
        browser.close();
    });
    test("Check URL SignIn", async () => {
        console.log("Demo test");
    }, TIME_OUT);
});
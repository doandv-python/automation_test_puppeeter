const puppeteer = require("puppeteer");
const constants = require("../../utils/constants.js")
const pageUtils = require("../../page/home");
const pageRegisterUtils = require("../../page/register");
const entity = require("../../enity/Users");
let homeUtils = pageUtils.HomePage;
let registerUtils = pageRegisterUtils.RegisterPage;
let config = constants.Config;
let browser;
let page;


describe("Test case for register", function () {

    beforeAll(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();
        await homeUtils.gotoHomePage(page);
        await homeUtils.clickRegisterButton(page);
    }, config.TIME_OUT);

    afterAll(async () => {
        page.closeAll();
        browser.close();
    }, config.TIME_OUT);

    test("Test case 1", async () => {
        let userData = entity.User.randomUser();
        await registerUtils.typeEmail(page, userData.email);
        await registerUtils.typeName(page, userData.name);
        await registerUtils.typePassword(page, userData.password);
        await registerUtils.typeConfirmPassword(page, userData.password);
        await registerUtils.typePhone(page, userData.phone);
        await registerUtils.typeCity(page, userData.city);
        await registerUtils.typeDistrict(page, userData.district);
        await registerUtils.typeAddress(page, userData.address);

        await registerUtils.clickRegisterButton(page);

    }, config.TIME_OUT);
});
const puppeteer = require("puppeteer");
const constants = require("../../utils/constants.js")
const pageUtils = require("../../page/home");
const pageRegisterUtils = require("../../page/register");
const registerUtils = pageRegisterUtils.RegisterPage;
const entity = require("../../enity/Users");
const homeUtils = pageUtils.HomePage;
const config = constants.Config;


describe("Test case for register", () => {
    const SUCCESS_EXPECTED = "Đăng ký thành công!";
    const EXISTED_EXPECTED = "Tài khoản đã tồn tại!";
    const FAIL_EXPECTED = "Đăng ký không thành công!";

    var browser;
    var page;


    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: false
        });
        page = await browser.newPage();
        await homeUtils.gotoHomePage(page);
        await homeUtils.clickRegisterButton(page);
    }, config.TIME_OUT);

    it("Test case 1: Register Success", async () => {
        let userData = entity.User.randomSuccessUser();
        await registerUtils.registerUser(page, userData);
        await pageRegisterUtils.RegisterPage.checkAgreeElement(page);
        await pageRegisterUtils.RegisterPage.clickRegisterButton(page);
        let dialogText = await pageRegisterUtils.RegisterPage.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 2: Register Success with 49 char in name", async () => {
        let userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(49);
        await registerUtils.registerUser(page, userData);
        // await pageRegisterUtils.RegisterPage.typeName(page, userData.name);
        // await pageRegisterUtils.RegisterPage.typeEmail(page, userData.email);
        // await pageRegisterUtils.RegisterPage.typePassword(page, userData.password);
        // await pageRegisterUtils.RegisterPage.typeConfirmPassword(page, userData.password);
        // await pageRegisterUtils.RegisterPage.typePhone(page, userData.phone);
        // await pageRegisterUtils.RegisterPage.typeCity(page, userData.city);
        // await pageRegisterUtils.RegisterPage.typeDistrict(page, userData.district);
        // await pageRegisterUtils.RegisterPage.typeAddress(page, userData.address);
        await pageRegisterUtils.RegisterPage.checkAgreeElement(page);
        await pageRegisterUtils.RegisterPage.clickRegisterButton(page);
        let dialogText = await pageRegisterUtils.RegisterPage.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    afterEach(async () => {
        await page.close();
        await browser.close();
    }, config.TIME_OUT);

});
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
    const FAIL_EXPECTED = "";

    let browser;
    let page;


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
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 2: Register Success with 49 char in name", async () => {
        let userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(49);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 3: Register Success with 50 char in name", async () => {
        let userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(50);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 4: Register Success with 1-50 char in email", async () => {
        let random_length = constants.Utils.get_random_value(1, 50);
        let userData = entity.User.randomSuccessUser();
        userData.email = entity.User.randomEmail(random_length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 5: Register Success with 1-50 char in password", async () => {
        let random_length = constants.Utils.get_random_value(6, 50);
        let userData = entity.User.randomSuccessUser();
        userData.password = entity.User.randomPassword(random_length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 6: Register Success with 10-11 char in phone", async () => {
        let random_length = constants.Utils.get_random_value(10, 11);
        let userData = entity.User.randomSuccessUser();
        userData.phone = entity.User.randomPhone(random_length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 7: Register fail with empty value in field", async () => {
        let userData = entity.User.randomEmptyUser();
        await registerUtils.registerUser(page, userData);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    it("Test case 8: Register fail with 51 char in name", async () => {
        let userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(51);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        console.log(dialogText);
    }, config.TIME_OUT);

    afterEach(async () => {
        await page.close();
        await browser.close();
    }, config.TIME_OUT);

});
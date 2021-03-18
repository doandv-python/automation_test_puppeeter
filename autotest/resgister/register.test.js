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
    const EMPTY_STRING = "";

    let browser;
    let page;
    let userData;


    beforeEach(async () => {
        browser = await puppeteer.launch({
            headless: true
        });
        page = await browser.newPage();
        await homeUtils.gotoHomePage(page);
        await homeUtils.clickRegisterButton(page);
    }, config.TIME_OUT);

    it("Test case 1: Register Success", async () => {
        userData = entity.User.randomSuccessUser();
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
    }, config.TIME_OUT);

    it("Test case 2: Register Success with 49 char in name", async () => {
        userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(49);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 3: Register Success with 50 char in name", async () => {
        userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(50);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 4: Register Success with 1-50 char in email", async () => {
        let random_length = constants.Utils.get_random_value(1, 50);
        userData = entity.User.randomSuccessUser();
        userData.email = entity.User.randomEmail(random_length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 5: Register Success with 1-50 char in password", async () => {
        let random_length = constants.Utils.get_random_value(6, 50);
        userData = entity.User.randomSuccessUser();
        userData.password = entity.User.randomPassword(random_length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 6: Register Success with 10-11 char in phone", async () => {
        let random_length = constants.Utils.get_random_value(10, 11);
        userData = entity.User.randomSuccessUser();
        userData.phone = entity.User.randomPhone(random_length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(SUCCESS_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 7: Register fail with empty value in field", async () => {
        userData = entity.User.randomEmptyUser();
        await registerUtils.registerUser(page, userData);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 8: Register fail with 51 char in name", async () => {
        userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(51);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 9:Register fail with name have special char", async () => {
        userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomNameWithSpecial(15);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 10:Register fail with name have 51 char", async () => {
        userData = entity.User.randomSuccessUser();
        userData.name = entity.User.randomName(51);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 11:Register fail with email empty", async () => {
        userData = entity.User.randomSuccessUser();
        userData.email = EMPTY_STRING;
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 12:Register fail with email valid format", async () => {
        userData = entity.User.randomSuccessUser();
        let length = constants.Utils.get_random_value(1, 50);
        userData.email = entity.User.randomNoValidEmail(length);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 13:Register fail with email valid format only @", async () => {
        userData = entity.User.randomSuccessUser();
        userData.email = entity.User.randomNoValidEmailOnlySuffix();
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);


    it("Test case 14:Register fail with email have 51 suffix char", async () => {
        userData = entity.User.randomSuccessUser();
        userData.email = entity.User.randomEmail(51);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 15:Register fail with no type password ", async () => {
        userData = entity.User.randomSuccessUser();
        userData.password = EMPTY_STRING;
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 16:Register fail with type password in Vietnamese", async () => {
        userData = entity.User.randomSuccessUser();
        userData.password = entity.User.randomPasswordVietnamese(10);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 17:Register fail with type password have space", async () => {
        userData = entity.User.randomSuccessUser();
        userData.password = entity.User.randomPasswordSpace(10);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 18:Register fail with type password 5 chars", async () => {
        userData = entity.User.randomSuccessUser();
        userData.password = entity.User.randomPassword(5);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 19:Register fail with type password 51 chars", async () => {
        userData = entity.User.randomSuccessUser();
        userData.password = entity.User.randomPassword(51);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);


    it("Test case 20:Register fail with no type  confirm password", async () => {
        userData = entity.User.randomSuccessUser();
        await registerUtils.registerUserNoConfirm(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 21:Register fail with confirm password no same password", async () => {
        userData = entity.User.randomSuccessUser();
        await registerUtils.registerUserConfirmNotSame(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 22:Register fail with empty phone", async () => {
        userData = entity.User.randomSuccessUser();
        userData.phone = EMPTY_STRING;
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 23:Register fail with no valid phone", async () => {
        userData = entity.User.randomSuccessUser();
        userData.phone = entity.User.randomNoValidPhone();
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 24:Register fail with  9 char phone", async () => {
        userData = entity.User.randomSuccessUser();
        userData.phone = entity.User.randomPhone(9);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 25:Register fail with  12 char phone", async () => {
        userData = entity.User.randomSuccessUser();
        userData.phone = entity.User.randomPhone(12);
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);


    it("Test case 26:Register fail with empty city", async () => {
        userData = entity.User.randomSuccessUser();
        userData.city = EMPTY_STRING;
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 27:Register fail with empty district", async () => {
        userData = entity.User.randomSuccessUser();
        userData.district = EMPTY_STRING;
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 28:Register fail with empty address", async () => {
        userData = entity.User.randomSuccessUser();
        userData.address = EMPTY_STRING;
        await registerUtils.registerUser(page, userData);
        await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);

    it("Test case 29:Register fail with no check agree box", async () => {
        userData = entity.User.randomSuccessUser();
        await registerUtils.registerUser(page, userData);
        // await registerUtils.checkAgreeElement(page);
        await registerUtils.clickRegisterButton(page);
        let dialogText = await registerUtils.getDialogResult(page);
        expect(dialogText).toEqual(FAIL_EXPECTED);
        
    }, config.TIME_OUT);


    afterEach(async () => {
        await page.close();
        await browser.close();
    }, config.TIME_OUT);

});
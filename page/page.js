let constants = require("../page/constants")

/**
 * Class Utils for Page
 */
class PageUtils {
    static async getElement(page, elementXpath) {
        await page.waitForXPath(elementXpath);
        let element = await page.$x(elementXpath);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async typeElement(page, elementXpath, elementValue) {
        let element = await PageUtils.getElement(page, elementXpath);
        expect(element).not.toBeNull();
        await element.type(elementValue);
    }

    static async clickElement(page, elementXpath) {
        let element = await PageUtils.getElement(page, elementXpath);
        expect(element).not.toBeNull();
        await element.click();
    }

    static async getTextContent(page, elementXpath) {
        let element = await PageUtils.getElement(page, elementXpath);
        expect(element).not.toBeNull();
        return await page.evaluate(h3 => h3.textContent, element);
    }
}

/**
 * Class Register Page Utils
 */
class RegisterUtils {

    static async registerUser(page, userData) {
        await PageUtils.typeElement(page, constants.RegisterXpath.NAME_XPATH, userData.name);
        await PageUtils.typeElement(page, constants.RegisterXpath.EMAIL_XPATH, userData.email);
        await PageUtils.typeElement(page, constants.RegisterXpath.PASSWORD_XPATH, userData.password);
        await PageUtils.typeElement(page, constants.RegisterXpath.CONFIRM_PASS_XPATH, userData.password);
        await PageUtils.typeElement(page, constants.RegisterXpath.PHONE_XPATH, userData.phone);
        await PageUtils.typeElement(page, constants.RegisterXpath.CITY_XPATH, userData.city);
        await PageUtils.typeElement(page, constants.RegisterXpath.DISTRICT_XPATH, userData.district);
        await PageUtils.typeElement(page, constants.RegisterXpath.ADDRESS_XPATH, userData.address);
    }

    static async checkAgreeElement(page) {
        await PageUtils.clickElement(page, constants.RegisterXpath.AGREE_CHECK_BOX_XPATH);
    }

    static async clickRegisterButton(page) {
        await PageUtils.clickElement(page, constants.RegisterXpath.SEARCH_BUTTON_XPATH);
    }
}

/**
 * Class Home Page Utils
 */
class HomeUtils {

    static async clickHomeLink(page) {
        await PageUtils.clickElement(page, constants.HomeXpath.HOME_BUTTON_XPATH);
    }

    static async clickAccountLink(page) {
        await PageUtils.clickElement(page, constants.HomeXpath.ACCOUNT_XPATH);
    }

    static async clickRegisterButton(page) {
        await PageUtils.clickElement(page, constants.HomeXpath.REGISTER_XPATH);
    }
}

module.exports = {
    HomeUtils, RegisterUtils, PageUtils
};

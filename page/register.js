let constants = require("utils/constants");
let registerXpath = constants.RegisterXpath;

class RegisterPage {

    //Get element of register page
    async static nameElement(page) {
        let element = await page.$x(registerXpath.NAME_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static EmailElement(page) {
        let element = await page.$x(registerXpath.EMAIL_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static passwordElement(page) {
        let element = await page.$x(registerXpath.PASSWORD_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static confirmPasswordElement(page) {
        let element = await page.$x(registerXpath.CONFIRM_PASS_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static phoneElement(page) {
        let element = await page.$x(registerXpath.PHONE_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static cityElement(page) {
        let element = await page.$x(registerXpath.CITY_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static districtElement(page) {
        let element = await page.$x(registerXpath.DISTRICT_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static addressElement(page) {
        let element = await page.$x(registerXpath.ADDRESS_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static agreeCheckboxElement(page) {
        let element = await page.$x(registerXpath.AGREE_CHECK_BOX_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    async static registerButtonElement(page) {
        let element = await page.$x(registerXpath.REGISTER_BUTTON_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    //Type string in the element


}
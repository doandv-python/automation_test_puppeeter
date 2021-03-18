let constants = require("../utils/constants");
let registerXpath = constants.RegisterXpath;

class RegisterPage {

    //Get element of register page
    static async nameElement(page) {
        let element = await page.$x(registerXpath.NAME_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async EmailElement(page) {
        let element = await page.$x(registerXpath.EMAIL_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async passwordElement(page) {
        let element = await page.$x(registerXpath.PASSWORD_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async confirmPasswordElement(page) {
        let element = await page.$x(registerXpath.CONFIRM_PASS_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async phoneElement(page) {
        let element = await page.$x(registerXpath.PHONE_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async cityElement(page) {
        let element = await page.$x(registerXpath.CITY_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async districtElement(page) {
        let element = await page.$x(registerXpath.DISTRICT_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async addressElement(page) {
        let element = await page.$x(registerXpath.ADDRESS_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async agreeCheckboxElement(page) {
        let element = await page.$x(registerXpath.AGREE_CHECK_BOX_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async registerButtonElement(page) {
        let element = await page.$x(registerXpath.REGISTER_BUTTON_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    static async dialogResultElement(page) {
        await page.waitForXPath(registerXpath.DIALOG_RESULT_XPATH);
        let element = await page.$x(registerXpath.DIALOG_RESULT_XPATH);
        if (element == null) {
            return null;
        }
        return element[0];
    }

    //Type string in the element
    static async typeName(page, nameValue) {
        await page.waitForXPath(registerXpath.NAME_XPATH);
        let element = await RegisterPage.nameElement(page);
        expect(element).not.toBeNull();
        await element.type(nameValue);

    }

    static async typeEmail(page, emailValue) {
        let element = await RegisterPage.EmailElement(page);
        expect(element).not.toBeNull();
        await element.type(emailValue);

    }

    static async typePassword(page, passwordValue) {
        let element = await RegisterPage.passwordElement(page);
        expect(element).not.toBeNull();
        await element.type(passwordValue);

    }

    static async typeConfirmPassword(page, confirmPasswordValue) {
        let element = await RegisterPage.confirmPasswordElement(page);
        expect(element).not.toBeNull();
        await element.type(confirmPasswordValue);

    }

    static async setConfirmPasswordValue(page, confirmPasswordValue) {
        let element = await RegisterPage.confirmPasswordElement(page);
        expect(element).not.toBeNull();
        await page.evaluate(input => input.value = confirmPasswordValue, element);
        await element.type(confirmPasswordValue);

    }

    static async typePhone(page, phoneValue) {
        let element = await RegisterPage.phoneElement(page);
        expect(element).not.toBeNull();
        await element.type(phoneValue);

    }

    static async typeCity(page, cityValue) {
        let element = await RegisterPage.cityElement(page);
        expect(element).not.toBeNull();
        await element.type(cityValue);

    }

    static async typeDistrict(page, districtValue) {
        let element = await RegisterPage.districtElement(page);
        expect(element).not.toBeNull();
        await element.type(districtValue);

    }

    static async typeAddress(page, addressValue) {
        let element = await RegisterPage.addressElement(page);
        expect(element).not.toBeNull();
        await element.type(addressValue);
    }

    //Event click

    static async checkAgreeElement(page) {
        let element = await RegisterPage.agreeCheckboxElement(page);
        expect(element).not.toBeNull();
        await element.click();
        //await page.eval(element, check => check.checked = true);
    }

    static async clickRegisterButton(page) {
        let registerButton = await RegisterPage.registerButtonElement(page);
        expect(registerButton).not.toBeNull();
        await registerButton.click();
    }

    static async getDialogResult(page) {
        let element = await RegisterPage.dialogResultElement(page);
        expect(element).not.toBeNull();
        return await page.evaluate(h3 => h3.textContent, element);
    }

    static async registerUser(page, userData) {
        await RegisterPage.typeName(page, userData.name);
        await RegisterPage.typeEmail(page, userData.email);
        await RegisterPage.typePassword(page, userData.password);
        await RegisterPage.typeConfirmPassword(page, userData.password);
        await RegisterPage.typePhone(page, userData.phone);
        await RegisterPage.typeCity(page, userData.city);
        await RegisterPage.typeDistrict(page, userData.district);
        await RegisterPage.typeAddress(page, userData.address);
    }

    static async registerUserNoConfirm(page, userData) {
        await RegisterPage.typeName(page, userData.name);
        await RegisterPage.typeEmail(page, userData.email);
        await RegisterPage.typePassword(page, userData.password);
        //await RegisterPage.typeConfirmPassword(page, userData.password);
        await RegisterPage.typePhone(page, userData.phone);
        await RegisterPage.typeCity(page, userData.city);
        await RegisterPage.typeDistrict(page, userData.district);
        await RegisterPage.typeAddress(page, userData.address);
    }

    static async registerUserConfirmNotSame(page, userData) {
        await RegisterPage.typeName(page, userData.name);
        await RegisterPage.typeEmail(page, userData.email);
        await RegisterPage.typePassword(page, userData.password);
        await RegisterPage.typeConfirmPassword(page, userData.name);
        await RegisterPage.typePhone(page, userData.phone);
        await RegisterPage.typeCity(page, userData.city);
        await RegisterPage.typeDistrict(page, userData.district);
        await RegisterPage.typeAddress(page, userData.address);
    }

}

module.exports = {
    RegisterPage
}
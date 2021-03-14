let constants = require("../utils/constants");
let registerXpath = constants.RegisterXpath;

class RegisterPage {

    //Get element of register page
    static async nameElement(page) {
        let element = await page.$x(registerXpath.NAME_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async EmailElement(page) {
        let element = await page.$x(registerXpath.EMAIL_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async passwordElement(page) {
        let element = await page.$x(registerXpath.PASSWORD_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async confirmPasswordElement(page) {
        let element = await page.$x(registerXpath.CONFIRM_PASS_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async phoneElement(page) {
        let element = await page.$x(registerXpath.PHONE_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async cityElement(page) {
        let element = await page.$x(registerXpath.CITY_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async districtElement(page) {
        let element = await page.$x(registerXpath.DISTRICT_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async addressElement(page) {
        let element = await page.$x(registerXpath.ADDRESS_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async agreeCheckboxElement(page) {
        let element = await page.$x(registerXpath.AGREE_CHECK_BOX_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    static async registerButtonElement(page) {
        let element = await page.$x(registerXpath.REGISTER_BUTTON_XPATH);
        if (element) {
            return null;
        }
        return element[0];
    }

    //Type string in the element
    static async typeName(page, nameValue) {
        let element = await RegisterPage.nameElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = nameValue);

    }

    static async typeEmail(page, emailValue) {
        let element = await RegisterPage.EmailElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = emailValue);

    }

    static async typePassword(page, passwordValue) {
        let element = await RegisterPage.passwordElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = passwordValue);

    }

    static async typeConfirmPassword(page, confirmPasswordValue) {
        let element = await RegisterPage.confirmPasswordElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = confirmPasswordValue);

    }

    static async typePhone(page, phoneValue) {
        let element = await RegisterPage.phoneElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = phoneValue);

    }

    static async typeCity(page, cityValue) {
        let element = await RegisterPage.cityElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = cityValue);

    }

    static async typeDistrict(page, districtValue) {
        let element = await RegisterPage.districtElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = districtValue);

    }

    static async typeAddress(page, addressValue) {
        let element = await RegisterPage.addressElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = addressValue);
    }

    //Event click

    static async checkAgreeElement(page) {
        let element = await RegisterPage.agreeCheckboxElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], check => check.checked = true);
    }

    static async clickRegisterButton(page) {
        let registerButton = await RegisterPage.registerButtonElement(page);
        expect(registerButton).not.toBeNull();
        await registerButton.click();
    }
    
}

module.exports = {
    RegisterPage
}
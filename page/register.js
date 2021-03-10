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
    async static typeName(page, nameValue) {
        let element = await RegisterPage.nameElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = nameValue);

    }

    async static typeEmail(page, emailValue) {
        let element = await RegisterPage.EmailElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = emailValue);

    }

    async static typePassword(page, passwordValue) {
        let element = await RegisterPage.passwordElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = passwordValue);

    }

    async static typeConfirmPassword(page, confirmPasswordValue) {
        let element = await RegisterPage.confirmPasswordElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = confirmPasswordValue);

    }

    async static typePhone(page, phoneValue) {
        let element = await RegisterPage.phoneElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = phoneValue);

    }

    async static typeCity(page, cityValue) {
        let element = await RegisterPage.cityElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = cityValue);

    }

    async static typeDistrict(page, districtValue) {
        let element = await RegisterPage.districtElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = districtValue);

    }

    async static typeAddress(page, addressValue) {
        let element = await RegisterPage.addressElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], input => input.value = addressValue);
    }

    //Event click

    async static checkAgreeElement(page) {
        let element = await RegisterPage.agreeCheckboxElement(page);
        expect(element).not.toBeNull();
        await page.eval(element[0], check => check.checked = true);
    }

    async static clickRegisterButton(page) {
        let registerButton = await RegisterPage.registerButtonElement(page);
        expect(registerButton).not.toBeNull();
        await registerButton.click();
    }
    
}

module.exports = {
    RegisterPage
}
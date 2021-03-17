let constants = require("../utils/constants");
let homeXpath = constants.HomeXpath;

class HomePage {

    //Get element of home page
    constructor() {
    }

    static async homeLinkElement(page) {
        let homeButton = await page.$x(homeXpath.HOME_BUTTON_XPATH);
        if (homeButton == null) {
            return null;
        }
        return homeButton[0];
    }

    static async manufacturerLinkElement(page) {
        let manufacturer = await page.$x(homeXpath.MANUFACTURER_XPATH);
        if (manufacturer == null) {
            return null;
        }
        return manufacturer[0];
    }

    static async priceListLinkElement(page) {
        let priceListLink = await page.$x(homeXpath.PRICE_LIST_XPATH);
        if (priceListLink == null) {
            return null;
        }
        return priceListLink[0];
    }

    static async newsLinkElement(page) {
        let newLink = await page.$x(homeXpath.NEWS_XPATH);
        if (newLink == null) {
            return null;
        }
        return newLink[0];
    }

    static async salonLinkElement(page) {
        let salonLink = await page.$x(homeXpath.SALON_XPATH);
        if (salonLink == null) {
            return null;
        }
        return salonLink[0];
    }

    static async vehicleRegistrationElement(page) {
        let vehicleRegistrationLink = await page.$x(homeXpath.VEHICLE_REGISTRATION_XPATH);
        if (vehicleRegistrationLink == null) {
            return null;
        }
        return vehicleRegistrationLink[0];
    }

    static async accountLinkElement(page) {
        let accountLink = await page.$x(homeXpath.ACCOUNT_XPATH);
        if (accountLink == null) {
            return null;
        }
        return accountLink[0];
    }

    static async loginLinkElement(page) {
        let loginLink = await page.$x(homeXpath.LOGIN_XPATH);
        if (loginLink == null) {
            return null;
        }
        return loginLink[0];
    }

    static async registerLinkElement(page) {
        let registerLink = await page.$x(homeXpath.REGISTER_XPATH);
        if (registerLink == null) {
            return null;
        }
        return registerLink[0];
    }

    static async searchSelectElement(page) {
        let searchSelect = await page.$x(homeXpath.SEARCH_SELECT_XPATH);
        if (searchSelect == null) {
            return null;
        }
        return searchSelect[0];
    }

    static async searchButtonElement(page) {
        let searchButton = await page.$x(homeXpath.SEARCH_BUTTON_XPATH);
        if (searchButton == null) {
            return null;
        }
        return searchButton[0];
    }

    //Click
    static async clickHomeLink(page) {
        let homeLink = HomePage.homeLinkElement(page);
        expect(homeLink).not.toBeNull();
        await homeLink.click();
    }

    static async clickManufacturerLink(page) {
        let manufacturer = await HomePage.manufacturerLinkElement(page);
        expect(manufacturer).not.toBeNull();
        await manufacturer.click();
    }

    static async clickPriceListLink(page) {
        let priceListLink = await HomePage.priceListLinkElement(page);
        expect(priceListLink).not.toBeNull();
        await priceListLink.click();
    }

    static async clickNewsLink(page) {
        let newsLink = await HomePage.newsLinkElement(page);
        expect(newsLink).not.toBeNull();
        await newsLink.click();
    }

    static async clickSalonLink(page) {
        let salonLink = await HomePage.salonLinkElement(page);
        expect(salonLink).not.toBeNull();
        await salonLink.click();
        await salonLink.click();
    }

    static async clickVehicleRegisterLink(page) {
        let vehicleRegisterLink = await HomePage.vehicleRegistrationElement(page);
        expect(vehicleRegisterLink).not.toBeNull();
        await vehicleRegisterLink.click();
    }

    static async clickAccountLink(page) {
        let accountLink = await HomePage.accountLinkElement(page);
        expect(accountLink).not.toBeNull();
        await accountLink.click();
    }

    static async clickLoginButton(page) {
        let loginButton = await HomePage.loginLinkElement(page);
        expect(loginButton).not.toBeNull();
        await loginButton.click();
    }

    static async clickRegisterButton(page) {
        await HomePage.clickAccountLink(page);
        let registerButton = await HomePage.registerLinkElement(page);
        expect(registerButton).not.toBeNull();
        await registerButton.click();
    }

    static async clickSearchButton(page) {
        let searchButton = await HomePage.searchButtonElement(page);
        expect(searchButton).not.toBeNull();
        await searchButton.click();
    }

    static async gotoHomePage(page) {
        expect(page).not.toBeNull();
        await page.goto(homeXpath.HOME_URL);
    }
}

module.exports = {
    HomePage
}
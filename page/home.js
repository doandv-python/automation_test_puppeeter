let constants = require("utils/constants");
let homeXpath = constants.HomeXpath;

class HomePage {

    //Get element of home page

    async static homeLinkElement(page) {
        let homeButton = await page.$x(homeXpath.HOME_BUTTON_XPATH);
        if (homeButton) {
            return null;
        }
        return homeButton[0];
    }

    async static manufacturerLinkElement(page) {
        let manufacturer = await page.$x(homeXpath.MANUFACTURER_XPATH);
        if (manufacturer) {
            return null;
        }
        return manufacturer[0];
    }

    async static priceListLinkElement(page) {
        let priceListLink = await page.$x(homeXpath.PRICE_LIST_XPATH);
        if (priceListLink) {
            return null;
        }
        return priceListLink[0];
    }

    async static newsLinkElement(page) {
        let newLink = await page.$x(homeXpath.NEWS_XPATH);
        if (newLink) {
            return null;
        }
        return newLink[0];
    }

    async static salonLinkElement(page) {
        let salonLink = await page.$x(homeXpath.SALON_XPATH);
        if (salonLink) {
            return null;
        }
        return salonLink[0];
    }

    async static vehicleRegistrationElement(page) {
        let vehicleRegistrationLink = await page.$x(homeXpath.VEHICLE_REGISTRATION_XPATH);
        if (vehicleRegistrationLink) {
            return null;
        }
        return vehicleRegistrationLink[0];
    }

    async static accountLinkElement(page) {
        let accountLink = await page.$x(homeXpath.ACCOUNT_XPATH);
        if (accountLink) {
            return null;
        }
        return accountLink[0];
    }

    async static loginLinkElement(page) {
        let loginLink = await page.$x(homeXpath.LOGIN_XPATH);
        if (loginLink) {
            return null;
        }
        return loginLink[0];
    }

    async static registerLinkElement(page) {
        let registerLink = await page.$x(homeXpath.REGISTER_XPATH);
        if (registerLink) {
            return null;
        }
        return registerLink[0];
    }

    async static searchSelectElement(page) {
        let searchSelect = await page.$x(homeXpath.SEARCH_SELECT_XPATH);
        if (searchSelect) {
            return null;
        }
        return searchSelect[0];
    }

    async static searchButtonElement(page) {
        let searchButton = await page.$x(homeXpath.SEARCH_BUTTON_XPATH);
        if (searchButton) {
            return null;
        }
        return searchButton[0];
    }

    //Click
    async static clickHomeLink(page) {
        let homeLink = HomePage.homeLinkElement(page);
        expect(homeLink).not.toBeNull();
        await homeLink.click();
        await page.waitForNavigation();
    }

    async static clickManufacturerLink(page) {
        let manufacturer = await HomePage.manufacturerLinkElement(page);
        expect(manufacturer).not.toBeNull();
        await manufacturer.click();
        await page.waitForNavigation();
    }

    async static clickPriceListLink(page) {
        let priceListLink = await HomePage.priceListLinkElement(page);
        expect(priceListLink).not.toBeNull();
        await priceListLink.click();
        await page.waitForNavigation();
    }

    async static clickNewsLink(page) {
        let newsLink = await HomePage.newsLinkElement(page);
        expect(newsLink).not.toBeNull();
        await newsLink.click();
        await page.waitForNavigation();
    }

    async static clickSalonLink(page) {
        let salonLink = await HomePage.salonLinkElement(page);
        expect(salonLink).not.toBeNull();
        await salonLink.click();
        await page.waitForNavigation();
    }

    async static clickVehicleRegisterLink(page) {
        let vehicleRegisterLink = await HomePage.vehicleRegistrationElement(page);
        expect(vehicleRegisterLink).not.toBeNull();
        await vehicleRegisterLink.click();
        await page.waitForNavigation();
    }

    async static clickAccountLink(page) {
        let accountLink = await HomePage.accountLinkElement(page);
        expect(accountLink).not.toBeNull();
        await accountLink.click();
        await page.waitForNavigation();
    }

    async static clickLoginButton(page) {
        let loginButton = await HomePage.loginLinkElement(page);
        expect(loginButton).not.toBeNull();
        await loginButton.click();
        await page.waitForNavigation();
    }

    async static clickRegisterButton(page) {
        let registerButton = await HomePage.registerLinkElement(page);
        expect(registerButton).not.toBeNull();
        await registerButton.click();
        await page.waitForNavigation();
    }

}

module.exports = {
    HomePage
}
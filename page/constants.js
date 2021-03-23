//Xpath of Home Page
class HomeXpath {
    static HOME_URL = "http://localhost:51264/WebBanXe/Home.aspx";
    static HOME_BUTTON_XPATH = "//a[@id='LinkButton1']";
    static MANUFACTURER_XPATH = "//a[@id='LinkButton2']";
    static PRICE_LIST_XPATH = "//a[@id='LinkButton3']";
    static NEWS_XPATH = "//a[@id='LinkButton4']";
    static SALON_XPATH = "//a[@id='LinkButton7']";
    static VEHICLE_REGISTRATION_XPATH = "//a[@id='LinkButton5']";
    static ACCOUNT_XPATH = "//span[@id='notLogin']";
    static LOGIN_XPATH = "//a[@id='LinkButton21']";
    static REGISTER_XPATH = "//a[@id='LinkButton22']";
    static SEARCH_SELECT_XPATH = "//select[@id='ContentPlaceHolder1_ddl_Gia']";
    static SEARCH_BUTTON_XPATH = "//a[@id='ContentPlaceHolder1_LinkButton1']";
}

//Xpath of register
class RegisterXpath {
    // Xpath for element
    static HOME_URL = "http://localhost:51264/WebBanXe/Home.aspx";
    static HOME_BUTTON_XPATH = "//a[@id='LinkButton1']";
    static MANUFACTURER_XPATH = "//a[@id='LinkButton2']";
    static PRICE_LIST_XPATH = "//a[@id='LinkButton3']";
    static NEWS_XPATH = "//a[@id='LinkButton4']";
    static SALON_XPATH = "//a[@id='LinkButton7']";
    static VEHICLE_REGISTRATION_XPATH = "//a[@id='LinkButton5']";
    static ACCOUNT_XPATH = "//span[@id='notLogin']";
    static LOGIN_XPATH = "//a[@id='LinkButton21']";
    static REGISTER_XPATH = "//a[@id='LinkButton22']";
    static SEARCH_SELECT_XPATH = "//select[@id='ContentPlaceHolder1_ddl_Gia']";
    static SEARCH_BUTTON_XPATH = "//a[@id='ContentPlaceHolder1_LinkButton1']";
    //Xpath for error
}

//Config
class Config {
    static HEAD_LESS = true;
    static TIME_OUT = 3000000;
    static SLEEP_TIME = 1000;
    static SCREENSHOT_DIRECTORY = "";
}


module.exports = {HomeXpath, RegisterXpath, Config}
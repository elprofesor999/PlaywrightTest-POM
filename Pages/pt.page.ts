import { expect } from "@playwright/test";
import { Page } from "playwright-core";

export class petStoreLoginPage {
    
    private page: Page;
        constructor (page : Page) {
        this.page = page
    }
    
    //Locators

    eleSignIn = async () => await this.page.$("text=Sign In")

    eleUserNm = async () => await this.page.$("input[name='username']")

    elePwd    = async () => await this.page.$("input[name='password']")    

    eleLogin  = async () => await this.page.$("input[value='Login']") 

    eleWelcomeScreen = async () => await this.page.waitForSelector("div[id='WelcomeContent']")

    eleSignOut = async () => await this.page.$("text=Sign Out")

    //Actions

    public async clickSignIn() {
        const ele = await this.eleSignIn()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async clickSignOut() {
        const ele = await this.eleSignOut()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async enterUserNm(userNm : string) {
        const ele = await this.eleUserNm()
        if (ele != null)
            await ele.fill(userNm)
        else throw new Error("No element found")
    }

    public async enterPwd(pwd : string) {
        const ele = await this.elePwd()
        if (ele != null)
            await ele.fill(pwd)
        else throw new Error("No element found")
    }

    public async clickLogin() {
        const ele = await this.eleLogin()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async verifyHomePage() {
        const ele = await this.eleWelcomeScreen()
        if (ele != null)
            expect(await ele.innerText()).toBe("Welcome cgtdemo!")
         else throw new Error("Welcome page not landed!!!")
    }

    public async verifyLoginLogoutPage() {
        const ele = await this.eleSignIn()
        if (ele != null)
            expect(await ele.innerText()).toBe("Sign In")
        else throw new Error("Welcome page not landed!!!")
    }

    
}

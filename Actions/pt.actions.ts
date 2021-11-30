import { expect, Page } from '@playwright/test'
import {petStoreLoginPage} from '../Pages/pt.page'

declare const page : Page
let userInOut = new petStoreLoginPage(page)

export class userInOutAction  {

    public async clickSignIn() {
        const ele = await userInOut.eleSignIn()
        if (ele != null)    
            await ele.click()
        else throw new Error("No element found")
    }

    public async clickSignOut() {
        const ele = await userInOut.eleSignOut()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async enterUserNm(userNm : string) {
        const ele = await userInOut.eleUserNm()
        if (ele != null)
            await ele.fill(userNm)
        else throw new Error("No element found")
    }

    public async enterPwd(pwd : string) {
        const ele = await userInOut.elePwd()
        if (ele != null)
            await ele.fill(pwd)
        else throw new Error("No element found")
    }

    public async clickLogin() {
        const ele = await userInOut.eleLogin()
        if (ele != null)
            await ele.click()
        else throw new Error("No element found")
    }

    public async verifyHomePage() {
        const ele = await userInOut.eleWelcomeScreen()
        if (ele != null)
            expect(await ele.innerText()).toBe("Welcome cgtdemo!")
         else throw new Error("Welcome page not landed!!!")
    }

    public async verifyLoginLogoutPage() {
        const ele = await userInOut.eleSignIn()
        if (ele != null)
            expect(await ele.innerText()).toBe("Sign In")
        else throw new Error("Welcome page not landed!!!")
    }

}
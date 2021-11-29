import { test } from '@playwright/test';
import Environment from '../Environment/environment'
import { userInOutAction } from '../Actions/pt.action';

test.describe("1001 - Petstore Application", async () => {
  
  test("TC01 - Login and Logout Petstore Application", async ({page}) => {
    
    let login : userInOutAction = new userInOutAction()

    await test.step("Step 1 - Go to PetStore Application and Click SignIn", async () => {
      await page.goto(Environment.test);
      await login.clickSignIn();
      await login.verifyLoginLogoutPage();
    })
    await test.step("Step 2 - Enter username and password", async () => {
      await login.enterUserNm("cgtdemo");
      await login.enterPwd("cgtdemo");
    })
    
    await test.step("Step 3 - Login to PetStore Application", async () => {
        await login.clickLogin()
        await login.verifyHomePage()
      })
    await test.step("Step 4 - Signout the PetStore Application", async () => {
        await login.clickSignOut()
        await login.verifyLoginLogoutPage()
      })
  })   
  test.afterAll(async({page}) => {
        await page.close()
  }) 
})

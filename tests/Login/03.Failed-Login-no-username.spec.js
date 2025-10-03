import { test, expect } from '@playwright/test'
import { landingPage } from '../../helpers/locators';
import { URL } from '../../helpers/url';

test('Failed login - no username', async({page})=>{
    await page.goto(URL)
    await page.getByPlaceholder('Password').fill('test');

    //click on 'Login' button
    await page.getByRole('button',{type: "submit"}).click();

    //assert the empty username field error message
    const errorMessage = page.locator(landingPage.errorMessageUsername);
    await expect(errorMessage).toBeVisible();
})
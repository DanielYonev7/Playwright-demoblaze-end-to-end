import { test, expect } from '@playwright/test'
import { launchWebsite } from '../../helpers/launchWebsite'
import { landingPage } from '../../helpers/locators';

test('Successful login', async({page})=>{
    await launchWebsite(page, 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('test');

    //click on 'Login' button
    await page.getByRole('button',{type: "submit"}).click();

    //assert the empty password field error message
    const errorMessage = page.locator(landingPage.errorMessagePassword);
    await expect(errorMessage).toBeVisible();
})
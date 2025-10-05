import { test, expect } from '@playwright/test'
import { Login } from '../../helpers/login';

test("Successful log out", async ({page})=>{
    await Login(page);
    const user = page.getByAltText('profile picture');
    await user.click();

    const logOutButton = page.locator("//header//li//a[contains(text(), 'Logout')]");
    await logOutButton.click();
    
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByPlaceholder('Password')).toBeVisible();

})
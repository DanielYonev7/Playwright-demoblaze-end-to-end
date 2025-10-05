import { test, expect } from '@playwright/test'
import { Login } from '../../helpers/login';

test("Hide navigation items", async ({page})=>{
    await Login(page);

    const navigationButton = page.locator("//nav//div//button[@role='none']");
    const navigationBarItems = page.locator("//ul//li//a//span[contains(.,text())]");

    await navigationButton.click();
    //grab the count of the items in the locator
    const count = await navigationBarItems.count();
    //assert that each item's text in the navigation bar is not visible
    for(let i=0; i<count; i++){
        await expect (navigationBarItems.nth(i)).not.toBeVisible();
    }
})
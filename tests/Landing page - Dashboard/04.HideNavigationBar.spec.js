import { test, expect } from '@playwright/test'
import { Login } from '../../helpers/login';

test("Hide navigation items", async ({page})=>{
    await Login(page);
    const navigationButton = page.locator("//nav//div//button[@role='none']");
    const navigationBarItems = page.locator("//ul//li//a//span");

    await navigationButton.click();
    await page.waitForTimeout(5000);
    expect(navigationBarItems).not.toBeVisible();
})
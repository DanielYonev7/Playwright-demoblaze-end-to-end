import { test, expect } from '@playwright/test'
import { Login } from '../../helpers/login';

test("Dashboard visible after login", async({page})=>{
    await Login(page);
    const dashboard = page.locator("//div//span//h6");
    await expect(dashboard).toBeVisible();
})

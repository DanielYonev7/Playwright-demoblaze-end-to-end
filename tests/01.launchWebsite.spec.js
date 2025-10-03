import { test } from '@playwright/test'
import { launchWebsite } from '../helpers/launchWebsite'

test('Launch website', async({page})=>{
    await launchWebsite(page, "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.close();
})


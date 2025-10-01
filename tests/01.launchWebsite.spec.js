import { test } from '@playwright/test'
import { launchWebsite } from '../helpers/launchWebsite'

test('Launch website', async({page})=>{
    await launchWebsite(page, "https://www.demoblaze.com/index.html")
    await page.close();
})
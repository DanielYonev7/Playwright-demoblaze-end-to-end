import { test } from '@playwright/test'
import { launchWebsite } from '../../helpers/launchWebsite'

test('Successful login', async({page})=>{
    await launchWebsite(page, 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button',{type: "submit"}).click();
})

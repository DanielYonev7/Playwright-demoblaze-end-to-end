import { test, expect } from '@playwright/test'
import { Login } from '../../helpers/login';

test('Assert navigation bar', async({page})=>{
    await Login(page);
    const navigationBarItems = page.locator("//ul//li[@class='oxd-main-menu-item-wrapper']");
    
    const items = await page.$$("//ul//li[@class='oxd-main-menu-item-wrapper']")

    //print the items in the navigation bar
    for(let item of items){
        const itemText = await item.textContent();
        console.log(itemText);
    }
    //expect number of items to be 12
    await expect(navigationBarItems).toHaveCount(12);
}) 



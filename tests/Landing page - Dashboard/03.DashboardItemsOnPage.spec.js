import { test, expect } from '@playwright/test'
import { Login } from '../../helpers/login';

test("Assert number of widgets visible on the 'Dashboard' page", async ({page})=>{
   
    await Login(page);
    //locate number of  widgets on the screen and expect them to be 7
    const dashboardItems = await page.$$("//div[@class='orangehrm-dashboard-widget-name']//p");
    for(let dashboardItem of dashboardItems){
        let item = await dashboardItem.textContent();
        console.log(item);
    }
    
    expect(dashboardItems.length).toBe(7);
})
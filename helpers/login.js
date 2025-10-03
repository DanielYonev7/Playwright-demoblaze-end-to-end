import { URL } from "./url";
import { expect } from "playwright/test";


export async function Login(page){
   
        await page.goto(URL);
        await page.getByPlaceholder('Username').fill('Admin');
        await page.getByPlaceholder('Password').fill('admin123');
        await page.getByRole('button',{type: "submit"}).click();
    
        const dashboard = page.locator("//div//span//h6");
        const user = page.getByAltText('profile picture');
    
        await expect(dashboard).toBeVisible();
        await expect(user).toBeVisible();
    }

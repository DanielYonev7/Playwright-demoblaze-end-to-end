export async function launchWebsite(page, website){
    await page.goto(website);
}
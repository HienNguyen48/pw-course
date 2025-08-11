import { test } from "@playwright/test";
let xpathClickArea = "//div//div[@id='clickArea']";

test("Test case name", async ({ page }) => {
    await test.step("Navigate to Register Page", async() => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    })

    await test.step("Navigate to Register Page", async() => {
        
    })

     await test.step("Click button Register", async() => {
        
    })
})

test("Test case click", async ({ page }) => {
    await test.step("Navigate to Mouse page", async() => {
        await page.goto('https://material.playwrightvn.com/018-mouse.html');
    })

    await test.step("Single click", async() => {
        await page.locator(xpathClickArea).click();
    })

     await test.step("Double click", async() => {
        await page.locator(xpathClickArea).dblclick();
    })

     await test.step("Click chuot phai", async() => {
        await page.locator(xpathClickArea).click({
           button: "right"
        });
        })

    await test.step("Click right mouse", async() => {
        await page.locator(xpathClickArea).click({
           modifiers: [('Shift')]
        });
 })
 })

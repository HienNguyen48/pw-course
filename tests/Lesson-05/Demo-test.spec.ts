import { test } from "@playwright/test";
let xpathClickArea = "//div//div[@id='clickArea']";
let isChecked;

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

 test("Test case fill", async ({ page }) => {
    await test.step("Navigate to User Registration", async() => {
        await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');
    })

    //Nhập thông tin vào trường bất kì
    await test.step("Fill vào username", async() => {
    await page.locator("//input[@id='username']").fill('Playwright Viet Nam');
     })

     //Gõ từng chữ cái vào ô input
    await test.step("Fill vào email", async() => {
    await page.locator("//input[@id='email']").pressSequentially('Nguyenhienit94@gmail.com',{
        delay: 100,
    })
     })

    await test.step("Checkbox", async() => {
    isChecked = await page.locator("//input[@id='reading']").isChecked();
    console.log(isChecked);//false

    await page.locator("//input[@id='reading']").check();
    isChecked = await page.locator("//input[@id='reading']").isChecked();
    console.log(isChecked);//true

    await page.locator("//input[@id='reading']").setChecked(false);
    isChecked = await page.locator("//input[@id='reading']").isChecked();
    console.log(isChecked);//false
     })

     //lấy ra select - option (dropdown)
     await page.locator("//select[@id='country']").selectOption({value:"australia"});

     //Upload 1 file len
     await page.locator("//input[@id='profile']").setInputFiles("Data-test\\corgi.jpg");
 })

 //Todo page: xử lý  Handle confirmation dialog
test("Test case confirm dialog", async ({ page }) => {
    await test.step("Navigate to To-Do List", async() => {
        await page.goto('https://material.playwrightvn.com/');
        await page.click("//a[@href='03-xpath-todo-list.html']");

        await test.step("Fill vào new task", async() => {
        await page.locator("xpath=//input[@id='new-task']").fill('Add task');
        await page.click("//button[@id='add-task']");
        
        page.on('dialog', async dialog => dialog.accept());
        await page.click("//button[text()='Delete']");
     });
});
});
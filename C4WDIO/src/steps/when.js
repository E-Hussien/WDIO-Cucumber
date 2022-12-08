const { When } = require('@wdio/cucumber-framework');
const pageRepo = require('../../src/support/ObjectRepo.js')

var itemdDict = {
    SauceLabsOnesie: pageRepo.AddToCartBtn,
};


When(/^user login with (\w+) and (.+)$/, async (username, password) => {

    await $(pageRepo.UsernameInput).setValue(username);
    await $(pageRepo.PasswordInput).setValue(password);
    await $(pageRepo.LoginInput).click();
});

When(/^user Change filter to (.+)$/, async (filterOption) => {
    await $(pageRepo.FilterMenu).selectByVisibleText(filterOption);
});
When(/^user click Add to cart for product (.+)$/, async (productName) => {
    await $(itemdDict[productName.replace(/\s+/g, '')]).click();
});

When(/^user is able to go to cart$/, async () => {
    await $(pageRepo.ShoppingCartLink).click();
});

When(/^user is able to remove item$/, async () => {
    await $(pageRepo.RemoveItemBtn).click();
    isDisplayed = await $(pageRepo.ItemDivLink).isDisplayed()
});




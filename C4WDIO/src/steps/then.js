const {Then } = require('@wdio/cucumber-framework');
const pageRepo = require('../../src/support/ObjectRepo.js')
var itemdDict = {
    SauceLabsOnesie: pageRepo.AddToCartBtn,
};

Then(/^shopping cart increased by 1$/, async () => {
    await expect($(pageRepo.ShoppingCartBadgeSpan)).toHaveTextContaining('1');
});

Then(/^user is able to see product in shopping cart$/, async () => {
    await $(pageRepo.ItemDivLink).isDisplayed()
});




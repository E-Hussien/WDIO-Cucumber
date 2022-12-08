const { Given} = require('@wdio/cucumber-framework');
const testData = require("../../TestData/Data")

Given(/^user on the saucedemo login page$/, async () => {
    await browser.url(testData.Url);
});






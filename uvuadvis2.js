import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.uvu.edu`;
    
test('New Test 1', async t => {
    await t
        .click('header .lightbox')    
        .click(Selector('#globalSearchArea div').withText('I\'m looking for:'))
        .typeText('#globalSearchInput', 'thisis a test')
        .pressKey('enter')
});

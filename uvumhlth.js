import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.uvu.edu`;

test('New Test', async t => {
    await t

        .click('header .fas.fa-search')
        .click(Selector('#globalSearchArea div').withText('I\'m looking for:'))
        .typeText('#globalSearchInput', 'mental health')
        .pressKey('enter')
        .click(Selector('main a').withText('Mental Health Services | Student Health | Utah Val'))
        .click(Selector('main a').withText('MAKE AN INITIAL APPOINTMENT'))
});

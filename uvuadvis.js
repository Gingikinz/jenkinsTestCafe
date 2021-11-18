import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.uvu.edu`;
    
test(`New Test`, async t => {
    await t
        .click('header .fas.fa-search')    
        .click(Selector('#globalSearchArea div').withText('I\'m looking for:'))
        .typeText('#globalSearchInput', 'advisors')
        .click('#globalSearchSubmit')
        .click(Selector('main a').withText('Academic Advisors | Advising | Utah Valley Univers'))
        .click(Selector('main a').withText('Schedule an appointment'))
        .click(Selector('main a').withText('COLLEGE OF ENGINEERING AND TECHNOLOGY'))
});

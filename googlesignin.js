import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://google.com`;
    
test(`New Test`, async t => {
    await t
        .typeText('.gLFyf.gsfi', 'gmail')    
        .click(Selector('.gNO89b').nth(1))
        .click(Selector('#rso h3').withText('Gmail - Google'))
        .click(Selector('header a').withText('Sign in'))
        .typeText('#identifierId', 'test@test.com')
        .click(Selector('#identifierNext span').withText('Next'))
});

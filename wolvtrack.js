import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://my.uvu.edu`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('#myuvu-main-content a').withText('Sign in'))    
        .typeText('#username', '$process.env.LOGIN')
        .typeText('#password', '$process.env.PASSW')
        .pressKey('enter')
        .click(Selector('header a').withText('Registration & Academics'))
        .click('main .term-tabs')
        .click(Selector('main a').withText('Wolverine Track').nth(1))
});

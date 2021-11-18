import { Selector } from 'testcafe';
require('dotenv').config();

fixture `New Fixture`
    .page `https://www.uvu.edu`;

test('AnotherUVURegTest', async t => {
    await t
        .click(Selector('header a').withText('MYUVU'))
        .click(Selector('#myuvu-main-content a').withText('Sign in'))
        .typeText('#username', '$process.env.LOGIN')
        .click('#password')
        .typeText('#password', '$process.env.PASSW')
        .click('#fm1 .submit.btn.btn-submit');
});

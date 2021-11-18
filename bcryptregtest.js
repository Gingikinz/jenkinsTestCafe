import { Selector } from 'testcafe';
const bcrypt = require("bcrypt");


fixture `New Fixture`
    .page `https://www.uvu.edu`;

test('AnotherUVURegTest', async t => {
    await t
        .click(Selector('header a').withText('MYUVU'))
        .click(Selector('#myuvu-main-content a').withText('Sign in'))
        .typeText('#username', '10844492')
        .click('#password')
        .typeText('#password', '!&8SOdTa51I#It!HjY')
        .click('#fm1 .submit.btn.btn-submit');
});

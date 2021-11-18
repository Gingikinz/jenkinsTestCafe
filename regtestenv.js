import { Selector } from 'testcafe';



fixture `New Fixture`
    .page `https://www.uvu.edu`;

test('AnotherUVURegTest', async t => {
    await t
        .click(Selector('header a').withText('MYUVU'))
        .click(Selector('#myuvu-main-content a').withText('Sign in'))
        .typeText('#username', '$process.env.REGACC')
        .click('#password')
        .typeText('#password', '$process.env.REGAPW')
        .click('#fm1 .submit.btn.btn-submit');
});

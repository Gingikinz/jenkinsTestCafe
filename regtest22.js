import { Selector } from 'testcafe';

fixture `testestestestestestestestestestestestest`
    .page `https://my.uvu.edu/user/login`;

test('New Test', async t => {
    await t
        .click(Selector('#container div').withText('UVU Login Service').nth(1))
        .click('#fm1 .submit.btn.btn-submit');
});

import { Selector } from 'testcafe';

fixture `testestestestestestestestestestestestest`
    .page `https://my.uvu.edu/user/login`;

test('New Test', async t => {
    await t
        .typeText('#username', '10844492')
        .typeText('#password', '!&8SOdTa51I#It!HjY')
        .click(Selector('#container div').withText('UVU Login Service').nth(1))
        .click('#fm1 .submit.btn.btn-submit');
});

import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.uvu.edu`;

test('New Test', async t => {
    await t
        .click(Selector('header a').withText('ACADEMICS'))
        .click(Selector('header a').withText('HOME'))
        .click(Selector('header a').withText('FACULTY'))
        .click(Selector('header a').withText('VISITORS & COMMUNITY'))
        .click(Selector('header a').withText('WHY UVU'))
        .click(Selector('header').nth(2).find('a').withText('MYUVU'));
});

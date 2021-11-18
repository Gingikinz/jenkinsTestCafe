import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://uvu.edu`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('header a').withText('APPLY TO UVU'))    
        .click('main .card-picture-img')
        .click(Selector('main a').withText('APPLY NOW'))
});

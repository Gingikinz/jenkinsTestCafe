import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `https://www.uvu.edu`;
    
test(`New Test`, async t => {
    await t
        .click(Selector('header a').withText('APPLY TO UVU'))    
        .click(Selector('main h2').withText('UNDERGRADUATE STUDENT'))
        .click(Selector('main a').withText('APPLY NOW'))
});

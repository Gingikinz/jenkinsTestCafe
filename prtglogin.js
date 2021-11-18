import { Selector } from 'testcafe';

fixture `New Fixture`
    .page `prtg.uvu.edu`;
    
test(`New Test`, async t => {
    await t

        .click('#loginusername')
        .typeText('#loginusername', 'prtgtransaction')    
        .click('#loginpassword')
        .typeText('#loginpassword', 'SAL:khdf*(SD)9y}{|l;kasdj;lk__SDF:LKHEi#*(#(%?>?é')
        .click(Selector('#loginform button').withText('Log in'))
});

import { Selector } from 'testcafe';



fixture `New Fixture`

    .page `https://uvu.edu/`;

    

test(`New Test`, async t => {

    await t

        .click(Selector('main a').withText('GET TICKETS'))    

        .click(Selector('main .form-check-input').nth(1))

        .click(Selector('main a').withText('Get Tickets').nth(11))

        .click(Selector('select').withAttribute('id', /ctl\d+_cphMainContent_ddlEventSeries/))

        .click(Selector('select').withAttribute('id', /ctl\d+_cphMainContent_ddlEventSeries/).find('option').withText('Friday, Oct 29, 2021 at 7:30 PM (MT)'))

        .click(Selector('select').withAttribute('id', /ctl\d+_cphMainContent_gvTicketsName_ctl\d+_gvTicketOptionsDetails_ctl\d+_dropLimit/).nth(2))

        .click(Selector('select').withAttribute('id', /ctl\d+_cphMainContent_gvTicketsName_ctl\d+_gvTicketOptionsDetails_ctl\d+_dropLimit/).nth(2).find('option').withText('1'))

        .click('#btnAddCart')

        .click(Selector('div').withAttribute('id', /ctl\d+_mainbgimage/).find('button').withText('Add More to Cart'))

});

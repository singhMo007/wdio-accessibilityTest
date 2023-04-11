import { ChainablePromiseElement } from 'webdriverio';

import Page from './page.js';

import { browser } from '@wdio/globals'
import AxeBuilder from '@axe-core/webdriverio'
import {WdioBrowser} from "@axe-core/webdriverio/dist/types";
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginAccessibilityPage extends Page {

    public open () {
        return super.open('login');
    }

    public async checkPageAccessiblity()
    {
        const builder = new AxeBuilder({ client: browser  })
        await browser.url('https://testingbot.com')
        const result = await builder.analyze()
        console.log('Acessibility Results:', result)

    }


    public async checktests () {


    }
}

export default new LoginAccessibilityPage();

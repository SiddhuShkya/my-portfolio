import { chromium } from 'playwright';
(async () => {
    const url = 'https://siddhushkya.github.io/my-portfolio/';
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    const page = await context.newPage();

    const consoleMessages = [];
    page.on('console', (msg) => {
        consoleMessages.push({ type: msg.type(), text: msg.text() });
    });

    const pageErrors = [];
    page.on('pageerror', (err) => {
        pageErrors.push(String(err));
    });

    const badResponses = [];
    page.on('response', (res) => {
        if (res.status() >= 400) {
            badResponses.push({ url: res.url(), status: res.status() });
        }
    });

    try {
        const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        console.log('Main response status:', resp ? resp.status() : 'no-response');
        await page.screenshot({ path: 'tools/deployed-screenshot.png', fullPage: true });

        console.log('\n--- Console Messages ---');
        consoleMessages.forEach(m => console.log(m.type + ': ' + m.text));

        console.log('\n--- Page Errors ---');
        pageErrors.forEach(e => console.log(e));

        console.log('\n--- Bad Responses ---');
        badResponses.forEach(r => console.log(`${r.status} ${r.url}`));

        const html = await page.content();
        console.log('\nPage HTML length:', html.length);
    } catch (err) {
        console.error('Error running headless check:', err);
    } finally {
        await browser.close();
    }
})();

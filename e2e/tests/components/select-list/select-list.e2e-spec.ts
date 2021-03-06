import { browser, Key } from 'protractor';
import { SelectListPage } from './select-list.po.spec';

describe('Select List Tests', () => {

    let page: SelectListPage;

    beforeEach(() => {
        page = new SelectListPage();
        page.getPage();
    });

    it('should have correct initial state', async () => {
        expect(await page.getItemCount()).toBe(20);
        expect(await page.getSelection()).toBe('');
    });

    it('should select an item', async () => {
        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');
    });

    it('should select one item at a time', async () => {
        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // select the item
        await page.selectItem(9);

        // the selected items should update
        expect(await page.getSelection()).toBe('Sara Valdez');
    });

    it('should retain selection after search', async () => {
        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // perform the search
        await page.search('lin');

        // the number of items should update
        expect(await page.getItemCount()).toBe(2);

        // the selection should remain the same
        expect(await page.getSelection()).toBe('Margaret Douglas');
    });

    it('should only have one tabbable item', async () => {
        expect(await page.getTabbableItemCount()).toBe(1);
    });

    it('should make the first item intially tabbable', async () => {
        expect(await page.getTabbableItem()).toBe('Linnie Dixon');
    });

    it('should change the tabbable item on selection', async () => {
        // first item should initially be tabbable
        expect(await page.getTabbableItem()).toBe('Linnie Dixon');

        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // selected item should be tabbable
        expect(await page.getTabbableItem()).toBe('Margaret Douglas');

    });

    it('should change the tabbable item when arrow keys are pressed', async () => {
        // first item should initially be tabbable
        expect(await page.getTabbableItem()).toBe('Linnie Dixon');

        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // selected item should be tabbable
        expect(await page.getTabbableItem()).toBe('Margaret Douglas');

        // press the down arrow key
        browser.actions().sendKeys(Key.ARROW_DOWN).perform();

        // tabbable item should change
        expect(await page.getTabbableItem()).toBe('Lulu Chandler');

        // press the up arrow key
        browser.actions().sendKeys(Key.ARROW_UP).perform();

        // selected item should be tabbable again
        expect(await page.getTabbableItem()).toBe('Margaret Douglas');


    });

    it('should select an item when multiple select is enabled', async () => {

        // enable multiple selection
        await page.toggleButton.click();

        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');
    });

    it('should select multiple items at a time when multiple select is enabled', async () => {

        // enable multiple selection
        await page.toggleButton.click();

        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // select the item
        await page.selectItem(9);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas, Sara Valdez');
    });

    it('should retain selection after search when multiple select is enabled', async () => {

        // enable multiple selection
        await page.toggleButton.click();

        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // perform the search
        await page.search('lin');

        // the number of items should update
        expect(await page.getItemCount()).toBe(2);

        // the selection should remain the same
        expect(await page.getSelection()).toBe('Margaret Douglas');
    });

    it('should only have one tabbable item when multiple select is enabled', async () => {

        // enable multiple selection
        await page.toggleButton.click();

        expect(await page.getTabbableItemCount()).toBe(1);
    });

    it('should make the first item intially tabbable when multiple select is enabled', async () => {

        // enable multiple selection
        await page.toggleButton.click();

        expect(await page.getTabbableItem()).toBe('Linnie Dixon');
    });

    it('should change the tabbable item on selection when multiple select is enabled', async () => {

        // enable multiple selection
        await page.toggleButton.click();

        // first item should initially be tabbable
        expect(await page.getTabbableItem()).toBe('Linnie Dixon');

        // select the item
        await page.selectItem(10);

        // the selected items should update
        expect(await page.getSelection()).toBe('Margaret Douglas');

        // selected item should be tabbable
        expect(await page.getTabbableItem()).toBe('Margaret Douglas');

    });
});
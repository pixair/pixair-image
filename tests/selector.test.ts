import { pixairize } from '../src/pixairize';

describe('The selector option', () => {

    const options = {
        selector: 'img[data-pixair-src]',
        api: '/api',
        source: 'data-pixair-src',
        quality: 75,
    };

    it('Should not transform unselected elements.', () => {

        // GIVEN
        document.body.innerHTML = `<p>content of the page...</p>`;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`<p>content of the page...</p>`);
    });

    it('Should transform a selected element.', () => {

        // GIVEN
        document.body.innerHTML = `<img class="select-me" data-pixair-src="/path/to/image.png" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            selector: 'img.select-me',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img class="select-me" width="50" height="50" src="/api?url=/path/to/image.png&amp;w=50&amp;q=75">`);
    });

    it('Should only transform selected elements when the selector is specific.', () => {

        // GIVEN
        document.body.innerHTML = `
            <img data-pixair-src="/path/to/image.png" width="50" height="50">
            <img class="only-me" data-pixair-src="/path/to/second-image.png" width="50" height="50">
        `;

        // WHEN
        pixairize({
            ...options,
            selector: 'img.only-me'
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`
            <img data-pixair-src="/path/to/image.png" width="50" height="50">
            <img class="only-me" width="50" height="50" src="/api?url=/path/to/second-image.png&amp;w=50&amp;q=75">
        `);
    });
});

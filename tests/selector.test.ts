import { pixairize } from '../src/pixairize';

describe('The selector option', () => {

    const options = {
        selector: 'img[data-pixair-src]',
        host: 'http://host/',
        source: 'data-pixair-src'
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
        document.body.innerHTML = `<img class="select-me" data-pixair-src="/path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            selector: 'img.select-me',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img class="select-me" src="http://host/path/to/image.png">`);
    });

    it('Should only transform selected elements when the selector is specific.', () => {

        // GIVEN
        document.body.innerHTML = `
            <img data-pixair-src="/path/to/image.png">
            <img class="only-me" data-pixair-src="/path/to/second-image.png">
        `;

        // WHEN
        pixairize({
            ...options,
            selector: 'img.only-me'
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`
            <img data-pixair-src="/path/to/image.png">
            <img class="only-me" src="http://host/path/to/second-image.png">
        `);
    });
});

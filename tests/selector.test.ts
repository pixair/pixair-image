import { pixairize } from '../src/pixairize';
import { PixairizeOptions } from '../src/pixairize-options';

describe('The selector option', () => {

    const options: PixairizeOptions = {
        selector: 'img[data-pixair-src]',
        project: 'example',
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
        expect(document.body.innerHTML).toEqual(`<img class="select-me" width="50" height="50" src="https://example.pixair.cloud/images?url=/path/to/image.png&amp;w=50&amp;q=75">`);
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
            <img class="only-me" width="50" height="50" src="https://example.pixair.cloud/images?url=/path/to/second-image.png&amp;w=50&amp;q=75">
        `);
    });
});

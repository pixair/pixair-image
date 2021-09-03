import { pixairize } from '../src/pixairize';

describe('The selector option', () => {

    const options = {
        selector: 'img',
        host: 'http://host/',
        originalAttribute: 'data-pix'
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
        document.body.innerHTML = `<img data-pix="/path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            selector: 'img',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img src="http://host/path/to/image.png">`);
    });

    it('Should only transform selected elements when the selector is specific.', () => {

        // GIVEN
        document.body.innerHTML = `
            <img data-pix="/path/to/image.png">
            <img class="only-me" data-pix="/path/to/second-image.png">
        `;

        // WHEN
        pixairize({
            ...options,
            selector: 'img.only-me'
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`
            <img data-pix="/path/to/image.png">
            <img class="only-me" src="http://host/path/to/second-image.png">
        `);
    });
});

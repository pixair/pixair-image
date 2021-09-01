import { pixairize, defaultOptions } from '../src/pixairize';

describe('The pixairize script', () => {

    it('Should do nothing when there is no images.', () => {

        // GIVEN
        const options = defaultOptions;
        document.body.innerHTML = `
            <h1>Title of the page</h1>
            <p>content of the page...</p>
        `;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`
            <h1>Title of the page</h1>
            <p>content of the page...</p>
        `);
    });

    it('Should transform an image.', () => {

        // GIVEN
        const options = {
            ...defaultOptions,
            host: 'https://api.pixair.io',
        };
        document.body.innerHTML = `
            <img pix="/path/to/my-image.png">
        `;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`
            <img src="https://api.pixair.io/path/to/my-image.png">
        `);
    });

    it('Should not transform an unselected image.', () => {

        // GIVEN
        const options = {
            ...defaultOptions,
            host: 'https://api.pixair.io',
            selector: '.only-me'
        };
        document.body.innerHTML = `
            <img pix="/path/to/my-image.png">
            <img class="only-me" pix="/path/to/my-second-image.png">
        `;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`
            <img pix="/path/to/my-image.png">
            <img class="only-me" src="https://api.pixair.io/path/to/my-second-image.png">
        `);
    });
});

import { pixairize } from '../src/pixairize';

describe('The width and height attributes', () => {

    const options = {
        production: true,
        selector: 'img[data-pixair-src]',
        project: 'example',
        source: 'data-pixair-src',
        quality: 75,
    };

    it('Should be used to retrieve the optimized image', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" width="150" height="50">`;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="150" height="50" src="https://example.pixair.cloud/image?url=/path/to/image.png&amp;w=150&amp;q=75">`);
    });

    it('Should not transform an image without witdh and height', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png">`;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`<img data-pixair-src="/path/to/image.png">`);
    });

    it('Should not transform an image without witdh', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" height="50">`;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`<img data-pixair-src="/path/to/image.png" height="50">`);
    });

    it('Should not transform an image without height', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" width="50">`;

        // WHEN
        pixairize(options);

        // THEN
        expect(document.body.innerHTML).toEqual(`<img data-pixair-src="/path/to/image.png" width="50">`);
    });
});

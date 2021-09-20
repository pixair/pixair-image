import { pixairize } from '../src/pixairize';

describe('The api option', () => {

    const options = {
        selector: 'img[data-pixair-src]',
        api: '/api',
        source: 'data-pixair-src',
        quality: 75,
    };

    it('Should replace the original source', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            api: 'http://my-domain/api',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="http://my-domain/api?url=/path/to/image.png&amp;w=50&amp;q=75">`);
    });

    it('Should work with absolute source', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="http://original/path/to/image.png" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            api: 'http://my-domain/api',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="http://my-domain/api?url=http://original/path/to/image.png&amp;w=50&amp;q=75">`);
    });

    it('Should be overridable by the data-pixair-api attribute', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" data-pixair-api="http://other-domain/api" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            api: 'http://my-domain/api',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="http://other-domain/api?url=/path/to/image.png&amp;w=50&amp;q=75">`);
    });
});

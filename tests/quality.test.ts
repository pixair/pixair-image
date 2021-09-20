import { pixairize } from '../src/pixairize';

describe('The quality option', () => {

    const options = {
        selector: 'img[data-pixair-src]',
        api: '/api',
        source: 'data-pixair-src',
        quality: 75,
    };

    it('Should be used applied on the api parameters', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            quality: 50
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="/api?url=/path/to/image.png&amp;w=50&amp;q=50">`);
    });

    it('Should be overridable by the data-pixair-quality attribute', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" data-pixair-quality="55" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            quality: 50
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="/api?url=/path/to/image.png&amp;w=50&amp;q=55">`);
    });
});

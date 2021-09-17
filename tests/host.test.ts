import { pixairize } from '../src/pixairize';

describe('The host option', () => {

    const options = {
        selector: 'img[data-pixair-src]',
        host: 'http://host/',
        source: 'data-pixair-src'
    };

    it('Should be added before a relative path', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            host: 'http://my-domain',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img src="http://my-domain/path/to/image.png">`);
    });

    it('Should be added before an absolute path', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            host: 'http://my-domain',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img src="http://my-domain/path/to/image.png">`);
    });

    it('Should replace a previous host', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="http://original/path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            host: 'http://my-domain',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img src="http://my-domain/path/to/image.png">`);
    });

    it('Should replace a previous host with port', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="http://original:8080/path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            host: 'http://my-domain',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img src="http://my-domain/path/to/image.png">`);
    });

    it('Should replace a previous host with https protocol', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="https://original/path/to/image.png">`;

        // WHEN
        pixairize({
            ...options,
            host: 'http://my-domain',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img src="http://my-domain/path/to/image.png">`);
    });
});

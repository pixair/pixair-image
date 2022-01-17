import { pixairize } from '../src/pixairize';
import { PixairizeOptions } from '../src/pixairize-options';

describe('The project option', () => {

    const options: PixairizeOptions = {
        production: true,
        selector: 'img[data-pixair-src]',
        project: 'example',
        source: 'data-pixair-src',
        quality: 75,
    };

    it('Should be use to build the api url', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            project: 'my-project',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="https://my-project.pixair.cloud/image?url=/path/to/image.png&amp;w=50&amp;q=75">`);
    });

    it('Should work with absolute source', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="http://original/path/to/image.png" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            project: 'my-project',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="https://my-project.pixair.cloud/image?url=http://original/path/to/image.png&amp;w=50&amp;q=75">`);
    });

    it('Should be overridable by the data-pixair-api attribute', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" data-pixair-project="second-project" width="50" height="50">`;

        // WHEN
        pixairize({
            ...options,
            project: 'my-project',
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="50" height="50" src="https://second-project.pixair.cloud/image?url=/path/to/image.png&amp;w=50&amp;q=75">`);
    });
});

import { pixairize } from '../src/pixairize';
import { PixairizeOptions } from '../src/pixairize-options';

describe('The production option', () => {

    const options: PixairizeOptions = {
        production: true,
        selector: 'img[data-pixair-src]',
        project: 'example',
        source: 'data-pixair-src',
        quality: 75,
    };

    it('Should target the pixair.dev domain when not in production', () => {

        // GIVEN
        document.body.innerHTML = `<img data-pixair-src="/path/to/image.png" width="150" height="50">`;

        // WHEN
        pixairize({
            ...options,
            production: false,
        });

        // THEN
        expect(document.body.innerHTML).toEqual(`<img width="150" height="50" src="https://example.pixair.dev/image?url=/path/to/image.png&amp;w=150&amp;q=75">`);
    });
});

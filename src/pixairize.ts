import { PixairizeOptions } from './pixairize-options';

/**
 * Find and transform images inside a web page.
 *
 * @param options PixairizeOptions Used options during the transformation.
 */
export function pixairize(options: PixairizeOptions) {
    document.querySelectorAll<HTMLElement>(options.selector).forEach(imageElement => {
        const width = imageElement.getAttribute('width');
        const height = imageElement.getAttribute('height');

        if (!width || !height) return;

        const srcElement = extractSource(options, imageElement);
        const apiUrl = extractApiUrl(options, imageElement);
        const quality = extractQuality(options, imageElement);

        imageElement.setAttribute('src', `${apiUrl}?url=${srcElement}&w=${width}&q=${quality}`);
    });
}

function extractSource(options: PixairizeOptions, element: HTMLElement): string {
    const srcElement = element.getAttribute(options.source) || '';
    element.removeAttribute(options.source);

    return srcElement;
}

function extractApiUrl(options: PixairizeOptions, element: HTMLElement): string {
    let apiUrl = buildPixairEndpoint(options.project);
    const customPixairProject = element.dataset.pixairProject;
    if (customPixairProject) {
        element.removeAttribute('data-pixair-project');
        apiUrl = buildPixairEndpoint(customPixairProject);
    }
    return apiUrl;
}

function extractQuality(options: PixairizeOptions, element: HTMLElement): number {
    let quality = options.quality;
    const customQuality = element.dataset.pixairQuality;
    if (customQuality) {
        element.removeAttribute('data-pixair-quality');
        quality = parseInt(customQuality);
    }
    return quality;
}

function buildPixairEndpoint(project: string): string {
    return `https://${project}.pixair.cloud/images`;
}

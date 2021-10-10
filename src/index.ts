import { pixairize } from './pixairize';
import config from './config';

var observer = new MutationObserver((mutations) => {
    let needUpdate = false;

    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            const html = (node as HTMLElement).innerHTML;
            if (!html) return;

            if (html.indexOf('img') != -1) {
                needUpdate = true;
            }
        })
    });

    if (needUpdate) {
        pixairize(config);
    }
});

observer.observe(
    document.documentElement || document.body,
    { childList: true, subtree: true }
);

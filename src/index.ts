import { pixairize } from "./pixairize";
import config from './config';

var observer = new MutationObserver((mutations) => {
    // TODO: optimize this part.
    // console.log(mutations);
    mutations.forEach(mutation => console.log(mutation.addedNodes));
    pixairize(config);
});

observer.observe(
    document.documentElement || document.body,
    { attributes: true, childList: true, subtree: true }
);

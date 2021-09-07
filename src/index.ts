import { pixairize } from "./pixairize";
import config from './config';

var observer = new MutationObserver((mutations) => {
    // TODO: optimize this part.
    pixairize(config);
});

observer.observe(
    document.documentElement || document.body,
    { attributes: true, childList: true }
);

$(document).ready(() => {
    const queryParams = psGetRequestParameter();

    console.table(queryParams);

    const searchParam = psGetRequestParameter('s');

    console.info(searchParam);

    prestashop.once('selectorsInit', () => {
        console.info('test');
        prestashop.selectors.cart.overview = '.cart-overwiew-overrided';
    }); 
    
    prestashop.once('themeSelectorsInit', () => {
        prestashop.themeSelectors.cart.displayPromo = '.display-promo-overrided';
    });
});

/**
 * This function returns the value of the requested parameter from the URL
 * @param {string} paramName - the name of the requested parameter
 * @returns {string|null|object}
 */
function psGetRequestParameter(paramName) {
    const vars = {};
    window.location.href.replace(location.hash, '').replace(/[?&]+([^=&]+)=?([^&]*)?/gi, (m, key, value) => {
        vars[key] = value !== undefined ? value : '';
    });
    if (paramName !== undefined) {
        return vars[paramName] ? vars[paramName] : null;
    }

    return vars;
}
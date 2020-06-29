import 'whatwg-fetch';
import yaml from 'js-yaml';
import Mustache from 'mustache';

let state = {};
let _LANGUAGE_CODE = 'en-us';

const i18n = {

    initialize: async () => {
        try {

            const res = await fetch(process.env.PUBLIC_URL + `/i18n/${_LANGUAGE_CODE}/${_LANGUAGE_CODE}.yaml`);
            const responseText = await res.text();
        
            state = yaml.safeLoad(responseText);
            console.log(`i18n.initialized [${_LANGUAGE_CODE}]`, state);

        } catch (e) {
            console.error('i18n.initialize.get.yaml.' + _LANGUAGE_CODE + '.failed', e);
        }
    },

    getDefaultLangCode: () => {
        return `${_LANGUAGE_CODE}`;
    },

    string: (key, params) => {
        return state[key] ? Mustache.render(state[key], params || {}) : key;
    }
};

export default i18n;
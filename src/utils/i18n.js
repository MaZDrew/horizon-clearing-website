import 'whatwg-fetch';
import yaml from 'js-yaml';
import Mustache from 'mustache';

let state = {};
let _LANGUAGE_CODE = 'en-us';

const i18n = {
    initialize: () => {
        return new Promise((resolve, reject) => {
            try {
                fetch(process.env.PUBLIC_URL + `/i18n/${_LANGUAGE_CODE}/${_LANGUAGE_CODE}.yaml`)
                .then(function(res) {
                    return res.text();
                })
                .then(function(res) {
                    state = yaml.safeLoad(res);
                    console.log(`i18n.initialized [${_LANGUAGE_CODE}]`, state);
                    resolve();
                })
                .catch(function(err) {
                    console.error('i18n.initialize.get.yaml.' + _LANGUAGE_CODE + '.failed', err);
                    reject(err);
                });
            } catch (e) {
                reject(e);
            }
        });
    },
    getDefaultLangCode: () => {
        return `${_LANGUAGE_CODE}`;
    },
    string: (key, params) => {
        return state[key] ? Mustache.render(state[key], params || {}) : key;
    }
};
export default i18n;
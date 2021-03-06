import 'babel-polyfill';
import AsyncComputed from 'vue-async-computed';
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(AsyncComputed);
Vue.use(Vuetify);

// This is necessary to silence warnings about mutating props, which
// seems to be a bug in @vue/test-utils:
//   https://github.com/vuejs/vue-test-utils/issues/534
Vue.config.silent = true;

Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../src', true, /^\.\/(?!main(\.js)?$)/);
srcContext.keys().forEach(srcContext);

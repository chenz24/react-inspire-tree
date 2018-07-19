/*eslint-disable */
import Layout from '../components/Layout';

import Introduction from 'pages/Introduction.md';
import Usage from 'pages/Usage.md';

export default [
  {
    path: '/',
    component: Layout,
    indexRoute: {
      component: Introduction,
    },
    childRoutes: [{
      path: '/introduction',
      component: Introduction,
    }, {
      path: '/usage',
      component: Usage,
    }],
  },
];

/*eslint-disable */
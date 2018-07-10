/*eslint-disable */
import IndexLayout from '../components/IndexLayout';
import Index from '../components/Index';

export default [
  {
    path: '/',
    component: IndexLayout,
    indexRoute: {
      component: Index,
    },
    childRoutes: [{
      path: '/',
      component: Index,
    }],
  },
];

/*eslint-disable */
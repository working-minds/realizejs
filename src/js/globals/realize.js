import Realize from '../realize';
import * as Components from 'components';

window.Realize = Realize;
window.Components = Components;

Object.keys(Components).forEach((componentName) => {
  window[componentName] = Components[componentName];
});

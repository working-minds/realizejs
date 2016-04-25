import reactMixin from 'react-mixin';

export default function mixin (...mixins) {
  return function(cls) {
    return mixins.reduce((c, m) => reactMixin.onClass(c, m), cls);
  }
}

export * from 'traits-decorator';
import reactMixin from 'react-mixin';

export function mixin (...mixins) {
  return function(cls) {
    return mixins.reduce((c, m) => reactMixin.onClass(c, m), cls);
  }
}

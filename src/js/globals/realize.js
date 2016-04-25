import Realize from '../realize';

window.Realize = Realize;
window.Actions = createReference(Realize.Actions);
window.Components = createReference(Realize.Components);
window.Mixins = createReference(Realize.Mixins);
window.Stores = createReference(Realize.Stores);

function createReference (items) {
  Object.keys(items).forEach((item) => {
    window[item] = items[item];
  });

  return items;
}

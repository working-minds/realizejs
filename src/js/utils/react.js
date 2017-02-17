
export function setState(component, state) {
  return new Promise(resolve => {
    component.setState(state, resolve);
  });
}

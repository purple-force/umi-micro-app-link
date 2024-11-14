import _ from 'lodash';

globalThis.addEventListener('message', (event) => {
  const data = event.data;
  const result = _.upperCase(data);
  globalThis.postMessage(result);
});
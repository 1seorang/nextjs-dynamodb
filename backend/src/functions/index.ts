import { default as hello } from './hello';
import { default as world } from './world';

export const handlers = [
  {
    path: '/hello',
    handler: require('./hello/handler').handler,
  },
  {
    path: '/world',
    handler: require('./world/handler').handler,
  },
];

export default {
  hello,
  world,
};

import * as assert from 'assert';
import errMsg from '../dist/main.js';

it('Error', () => {
  assert.strictEqual(errMsg(new Error('haha')), 'haha');
});

it('Error-like', () => {
  assert.strictEqual(errMsg({ message: 123 }), '123');
});

it('Non-error', () => {
  assert.strictEqual(errMsg('haha'), 'haha');
});

it('null', () => {
  assert.strictEqual(errMsg(null), '');
});

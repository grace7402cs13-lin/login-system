import test from 'node:test';
import assert from 'assert';
import { login } from './login.js';
import { checkPassword } from './password.js';

test('login success', () => {
  assert.equal(login('admin', '123456'), true);
});

test('login fail', () => {
  assert.equal(login('admin', 'wrong'), false);
});

test('password strong', () => {
  assert.equal(checkPassword('Abc123!@#'), 'strong');
});

test('password weak', () => {
  assert.equal(checkPassword('abc'), 'weak');
});
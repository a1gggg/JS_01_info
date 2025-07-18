
import assert from 'assert';
import { abcA } from './test.js';
import {expect} from 'chai';

describe('Test:', function () {
    it('abcA', function () {
      assert.equal(abcA(1, 1), 2);
  });
    it('abcA2', function () {
      expect(abcA(1, 1)).equal(2);
  });
});


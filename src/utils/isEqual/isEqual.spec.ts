import {expect} from 'chai';
import isEqual from './index';

describe('util isEqual', ()=>{
  it('should test type number', function() {
    expect(isEqual(1, 1)).to.equal(true);
    expect(isEqual(1, 2)).to.equal(false);
  });
  it('should test type string', ()=> {
    expect(isEqual('hello', 'hello')).to.equal(true);
    expect(isEqual('hello', 'world')).to.equal(false);
  });
  it('should test type object', ()=> {
    expect(isEqual({a: 1}, {a: 1})).to.equal(true);
    expect(isEqual({a: 1, b: {a: 1}}, {a: 1, b: {a: 1}})).to.equal(true);
    expect(isEqual({a: 1, b: {a: [1, 2]}}, {a: 1, b: {a: [1, 2]}})).to.equal(true);
    expect(isEqual({a: 1}, {a: 2})).to.equal(false);
    expect(isEqual({a: 1, b: {a: 1}}, {a: 1, b: {a: 2}})).to.equal(false);
    expect(isEqual({a: 1, b: {a: [1, 2]}}, {a: 1, b: {a: 1}})).to.equal(false);
    expect(isEqual({a: 1, b: {a: [1, 2]}}, {a: 1, b: {a: [2]}})).to.equal(false);
    expect(isEqual({a: 1, b: {a: [1, 2]}}, {a: 1, b: {a: [2, 2]}})).to.equal(false);
  });
});

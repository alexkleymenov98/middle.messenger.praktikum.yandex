import set from './index';
import {expect} from 'chai';

describe('util set', ()=>{
  it('should test util set', ()=> {
    expect(set({}, 'a', 34)).deep.equal({a: 34});
    expect(set({foo: 5}, 'bar.baz', 10)).deep.equal({foo: 5, bar: {baz: 10}});
  });
});

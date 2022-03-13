import {expect} from 'chai';
import classNames from './index';

describe('util ClassNames', ()=>{
  it('should test util ClassNames', ()=> {
    expect(classNames('foo', 'bar')).to.equals('foo bar');
    expect(classNames('foo', {bar: true}) ).to.equals('foo bar');
    expect(classNames({'foo-bar': true}) ).to.equals('foo-bar');
    expect(classNames({'foo-bar': false})).to.equals('');
    expect(classNames({foo: true}, {bar: true})).to.equals('foo bar');
    expect(classNames({foo: true, bar: true})).to.equals('foo bar');
    expect(classNames('foo', {bar: true, duck: false}, 'baz', {quux: true})).to.equals('foo bar baz quux');
    expect(classNames(null, false, 'bar', undefined, 0, 1, {baz: null}, '')).to.equals('bar 1');
    expect(classNames('bar', [1, null, 'baz'], {baz: true}, '3')).to.equals('bar 1 baz baz 3');
    expect(classNames('bar', [1, null, 'baz', ['foo', 'test']], {baz: true}, '3')).to.equals('bar 1 baz foo test baz 3');
  });
});

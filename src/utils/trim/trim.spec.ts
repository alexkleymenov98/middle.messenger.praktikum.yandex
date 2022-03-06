import {expect} from 'chai';
import trim from './index';

describe('util trim', ()=>{
  it('testing trim without argument format', ()=> {
    expect(trim('  abc  '), ).to.equal('abc');
    expect(trim('\xA0foo')).to.equal('foo');
  });
  it('testing trim with argument format', ()=> {
    expect(trim('-_-abc-_-', '_-'), ).to.equal('abc');
    expect(trim('\xA0foo', ' ')).to.equal('foo');
    expect(trim('\xA0foo', 'O')).to.equal('f');
    expect(trim('-_-ab c -_-', '_-')).to.equal('ab c');
  });
});

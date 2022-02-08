import Block from '../modules/Block';
import {BlockProps} from '../modules/Block/types';

export const render = (query:string, block:Block<BlockProps>):Element | null=>{
  const root = document.querySelector(query);
  if (root) {
    root.replaceChildren(block.getContent());
  }

  block.dispatchComponentDidMount();

  return root;
};

import Block from '../modules/Block';

export const render = (query:string, block:Block):Element | null=>{
  const root = document.querySelector(query);
  if (root) {
    root.replaceChildren(block.getContent());
  }

  block.dispatchComponentDidMount();

  return root;
};

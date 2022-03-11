import Link from '../../components/Link';
import {BlockProps} from '../../modules/Block/types';
import Button from '../../components/Button/button';
import {TBlock} from '../../shared/types';

export type ChatProps = BlockProps & {
  modal: TBlock;
  userList: TBlock;
  linkProfile: Link;
  actions: Button;
  content: TBlock;
}

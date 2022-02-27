import {TStore} from '../../modules/Store/types';
import Navigation from './components/Navigation';
import Avatar from './components/Avatar';

export type ProfileProps = {
  avatarBlock: Avatar;
  navigation: Navigation;
} & TStore['user'];

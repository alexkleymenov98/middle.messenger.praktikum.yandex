import {PageProps} from '../../shared/types';
import {TStore} from '../../modules/Store/types';

export type ChangeProfileProps = PageProps & Partial<TStore['user']>;

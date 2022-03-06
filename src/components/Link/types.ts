import {ComponentEvents} from '../../shared/types';

export type LinkProps = {
  path: string;
  label: string;
  className?: string;
  events?: ComponentEvents;
}

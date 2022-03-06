import {ComponentEvents} from '../../shared/types';

export type BlockEntryProps = {
  children: Record<string, unknown | [unknown]>;
  props: Record<string, unknown>;
}

export type BlockProps = {
  events?: ComponentEvents;
} & { [key: string]: unknown };

export type TRenderElement = HTMLElement | DocumentFragment;

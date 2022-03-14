import {ComponentEvents, Indexed} from '../../shared/types';

export type BlockEntryProps = {
  children: Record<string, any>;
  props: Record<string, unknown>;
}

export type BlockProps = {
  events?: ComponentEvents;
} & Indexed<any>;

export type TRenderElement = HTMLElement | DocumentFragment;

import Form from '../components/Form';

export type PageProps = {
  title:string;
  content:Form;
}

export type ComponentEvents = Partial<Record<keyof GlobalEventHandlersEventMap, (e: Event) => void>>;

import { render, html } from 'uhtml/async';

export interface ElementInstance {
  label: () => typeof html,
  wrapper: (innerTemplates: Array<typeof html>) => typeof html,
  item: (childTemplates: Array<typeof html>) => typeof html,
}
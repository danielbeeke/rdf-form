import { render, html } from 'uhtml/esm/async';

export interface ElementInstance {
  label: () => typeof html,
  wrapper: (innerTemplates: Array<typeof html>) => typeof html,
  wrapperDisplay: (innerTemplates: Array<typeof html>) => typeof html,
  item: (childTemplates: Array<typeof html>) => typeof html,
  itemDisplay: (childTemplates: Array<typeof html>) => typeof html,
}
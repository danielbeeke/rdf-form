import { render, html } from 'https://unpkg.com/uhtml/esm/async.js?module';

export interface ElementInstance {
  label: () => typeof html,
  wrapper: (innerTemplates: Array<typeof html>) => typeof html,
  item: (childTemplates: Array<typeof html>) => typeof html,
}
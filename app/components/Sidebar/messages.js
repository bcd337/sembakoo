/*
 * HomePage Messages
 *
 * This contains all the text for the Sidebar component.
 */
import { defineMessages } from 'react-intl';

export const scope = 'boilerplate.components.Sidebar';

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: 'SEMBAKOO',
  },
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Dashboard',
  },
  keluhan_user: {
    id: `${scope}.keluhan_user`,
    defaultMessage: 'Keluhan User',
  },
  input_data: {
    id: `${scope}.input_data`,
    defaultMessage: 'Input Data',
  },
  data_control: {
    id: `${scope}.data_control`,
    defaultMessage: 'Data Control',
  },
});


/*
 * Copyright OpenSearch Contributors
 * SPDX-License-Identifier: Apache-2.0
 */

import { waitFor } from '@testing-library/dom';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import React from 'react';
import { CautionBannerCallout } from '../caution_banner_callout';

describe('Acceleration callout', () => {
  configure({ adapter: new Adapter() });

  it('renders acceleration flyout callout', async () => {
    const wrapper = mount(<CautionBannerCallout />);
    wrapper.update();
    await waitFor(() => {
      expect(
        toJson(wrapper, {
          noKey: false,
          mode: 'deep',
        })
      ).toMatchSnapshot();
    });
  });
});

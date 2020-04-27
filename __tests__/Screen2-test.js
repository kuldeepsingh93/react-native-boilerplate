import 'react-native';
import React from 'react';
import Screen2 from '../src/components/OnboardingScreens/Screen2';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Screen2 testing', () => {
  it('renders correctly', () => {
    renderer.create(<Screen2 />);
  });

})


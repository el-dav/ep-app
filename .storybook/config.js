import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.story\.tsx?$/);

function loadStories() {
  addDecorator(withKnobs);
  req.keys().forEach(req);
}

configure(loadStories, module);

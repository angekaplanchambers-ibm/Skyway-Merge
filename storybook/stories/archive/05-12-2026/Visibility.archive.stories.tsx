import type { Meta, StoryObj } from '@storybook/react';
import visibilityMeta, {
  VisibilityA,
} from '../../wireframes/Visibility.stories';

const meta = {
  ...visibilityMeta,
  title: 'Archive/05-12-2026/Visibility',
  parameters: {
    ...visibilityMeta.parameters,
    wireframeChrome: {
      title: 'Archive - Visibility',
      height: '88vh',
    },
  },
} satisfies Meta<typeof visibilityMeta.component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Current: Story = {
  ...VisibilityA,
  name: 'Current',
};
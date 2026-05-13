import type { Meta, StoryObj } from '@storybook/react';
import overviewMeta, {
  Default as OverviewDefault,
  HighRisk as OverviewHighRisk,
} from '../../wireframes/OrganizationOverview.stories';

const meta = {
  ...overviewMeta,
  title: 'Archive/2026 05 13 Prod Checkin/Organization Overview',
  parameters: {
    ...overviewMeta.parameters,
    wireframeChrome: {
      title: 'Archive - Organization Overview',
      height: '88vh',
    },
  },
} satisfies Meta<typeof overviewMeta.component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...OverviewDefault,
  name: 'Default / 7d',
};

export const HighRisk: Story = {
  ...OverviewHighRisk,
  name: 'High Risk / 24h',
};

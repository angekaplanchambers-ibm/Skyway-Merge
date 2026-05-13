import type { Meta, StoryObj } from '@storybook/react';
import portfolioMeta, {
  Default as PortfolioDefault,
  HighRisk as PortfolioHighRisk,
} from '../../wireframes/OrgPortfolioOverview.stories';

const meta = {
  ...portfolioMeta,
  title: 'Archive/05-12-2026/Organization Portfolio',
  parameters: {
    ...portfolioMeta.parameters,
    wireframeChrome: {
      title: 'Archive - Organization Portfolio',
      height: '88vh',
    },
  },
} satisfies Meta<typeof portfolioMeta.component>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  ...PortfolioDefault,
  name: 'Default / 7d',
};

export const HighRisk: Story = {
  ...PortfolioHighRisk,
  name: 'High Risk / 24h',
};
#!/usr/bin/env node
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));
const storybookRoot = dirname(scriptDir);
const archiveRoot = join(storybookRoot, 'stories', 'archive');

function pad(value) {
  return String(value).padStart(2, '0');
}

function defaultStamp() {
  const now = new Date();
  return formatDate(now);
}

function formatDate(date) {
  return [
    pad(date.getMonth() + 1),
    pad(date.getDate()),
    String(date.getFullYear()),
  ].join('-');
}

function normalizeArchiveDate(value) {
  if (!value) {
    return defaultStamp();
  }

  const normalized = value.trim();
  const archiveDate = normalized.match(/^(\d{1,2})[/-](\d{1,2})[/-](20\d{2})$/);
  if (archiveDate) {
    return [pad(archiveDate[1]), pad(archiveDate[2]), archiveDate[3]].join('-');
  }

  const isoDate = normalized.match(/^(20\d{2})-(\d{1,2})-(\d{1,2})$/);
  if (isoDate) {
    return [pad(isoDate[2]), pad(isoDate[3]), isoDate[1]].join('-');
  }

  throw new Error('Archive date must use MM-DD-YYYY, MM/DD/YYYY, or YYYY-MM-DD.');
}

const entrySlug = normalizeArchiveDate(process.argv[2]);
const entryTitle = entrySlug;
const entryDir = join(archiveRoot, entrySlug);

const files = {
  'OrganizationPortfolio.archive.stories.tsx': `import type { Meta, StoryObj } from '@storybook/react';
import portfolioMeta, {
  Default as PortfolioDefault,
  HighRisk as PortfolioHighRisk,
} from '../../wireframes/OrgPortfolioOverview.stories';

const meta = {
  ...portfolioMeta,
  title: 'Archive/${entryTitle}/Organization Portfolio',
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
`,
  'OrganizationOverview.archive.stories.tsx': `import type { Meta, StoryObj } from '@storybook/react';
import overviewMeta, {
  Default as OverviewDefault,
  HighRisk as OverviewHighRisk,
} from '../../wireframes/OrganizationOverview.stories';

const meta = {
  ...overviewMeta,
  title: 'Archive/${entryTitle}/Organization Overview',
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
`,
  'Visibility.archive.stories.tsx': `import type { Meta, StoryObj } from '@storybook/react';
import visibilityMeta, {
  VisibilityA,
} from '../../wireframes/Visibility.stories';

const meta = {
  ...visibilityMeta,
  title: 'Archive/${entryTitle}/Visibility',
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
`,
  'README.md': `# ${entryTitle}

Archive entry generated before prod check-in.

Stories included:

- Organization Portfolio: Default / 7d, High Risk / 24h
- Organization Overview: Default / 7d, High Risk / 24h
- Visibility: Current
`,
};

mkdirSync(entryDir, { recursive: true });

for (const [fileName, content] of Object.entries(files)) {
  writeFileSync(join(entryDir, fileName), content);
}

console.log(`Created archive entry: storybook/stories/archive/${entrySlug}`);
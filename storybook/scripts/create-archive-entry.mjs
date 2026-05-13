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
  return [
    now.getFullYear(),
    pad(now.getMonth() + 1),
    pad(now.getDate()),
    pad(now.getHours()),
    pad(now.getMinutes()),
    pad(now.getSeconds()),
  ].join('-');
}

function slugify(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

const requestedSlug = process.argv[2] || `${defaultStamp()}-skyway-merge`;
const entrySlug = slugify(requestedSlug);
const entryTitle = entrySlug
  .split('-')
  .map((part) => part.length === 4 && /^20\d\d$/.test(part) ? part : part.charAt(0).toUpperCase() + part.slice(1))
  .join(' ');
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
  writeFileSync(join(entryDir, fileName), content, { flag: 'wx' });
}

console.log(`Created archive entry: storybook/stories/archive/${entrySlug}`);
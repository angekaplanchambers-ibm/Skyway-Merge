import { useState, type CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconCheck16 } from '@hashicorp/flight-icons/svg-react/check-16';
import { IconChevronDown16 } from '@hashicorp/flight-icons/svg-react/chevron-down-16';
import { IconChevronUp16 } from '@hashicorp/flight-icons/svg-react/chevron-up-16';

const TOK = {
  bg: 'var(--z-bg)',
  layer01: 'var(--z-layer-01)',
  layer02: 'var(--z-layer-02)',
  textPrimary: 'var(--z-text-primary)',
  textSecondary: 'var(--z-text-secondary)',
  textPlaceholder: 'var(--z-text-placeholder)',
  border: 'var(--z-border-subtle)',
};

const SHELL: CSSProperties = {
  position: 'absolute',
  inset: 0,
  display: 'grid',
  gridTemplateRows: '48px 1fr 28px',
  background: TOK.bg,
  color: TOK.textPrimary,
  fontFamily: 'system-ui, sans-serif',
  fontSize: 13,
};

const TOPBAR: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  borderBottom: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  padding: '0 12px',
};

const BODY: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '264px 1fr',
  minHeight: 0,
};

const SIDEBAR: CSSProperties = {
  borderRight: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  padding: 12,
  overflowY: 'auto',
};

const NAV_GROUP_LABEL: CSSProperties = {
  fontSize: 12,
  color: TOK.textSecondary,
  fontWeight: 500,
  marginTop: 8,
  marginBottom: 8,
  paddingLeft: 6,
};

const NAV_ITEM: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  padding: '9px 6px',
  color: TOK.textSecondary,
  fontSize: 12,
  fontWeight: 400,
};

const NAV_ACTIVE: CSSProperties = {
  ...NAV_ITEM,
  background: TOK.layer02,
  borderRadius: 6,
  color: 'var(--z-accent, #2563eb)',
  fontWeight: 500,
};

const NAV_ITEM_LEFT: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const NAV_SUBITEM: CSSProperties = {
  padding: '8px 6px 8px 42px',
  color: TOK.textSecondary,
  fontSize: 12,
};

const NAV_LINK: CSSProperties = {
  color: 'var(--z-accent, #2563eb)',
  textDecoration: 'none',
};

const BREADCRUMB_LINK: CSSProperties = {
  color: 'var(--z-accent, #2563eb)',
  textDecoration: 'none',
};

const HEADER_DROPDOWN_WRAP: CSSProperties = {
  position: 'relative',
};

const HEADER_DROPDOWN_TRIGGER: CSSProperties = {
  minWidth: 200,
  height: 32,
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer02,
  color: TOK.textPrimary,
  fontSize: 12,
  fontWeight: 600,
  padding: '0 10px 0 12px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  boxShadow: '0 1px 1px rgba(0, 0, 0, 0.04)',
};

const HEADER_DROPDOWN_MENU: CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 6px)',
  left: 0,
  minWidth: 220,
  maxWidth: 320,
  border: `1px solid ${TOK.border}`,
  borderRadius: 6,
  background: TOK.layer01,
  boxShadow: '0 10px 24px rgba(0, 0, 0, 0.14)',
  padding: 6,
  zIndex: 5,
};

const HEADER_DROPDOWN_ITEM: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  borderRadius: 4,
  color: TOK.textPrimary,
  textDecoration: 'none',
  padding: '8px 10px',
  fontSize: 12,
  fontWeight: 500,
  minHeight: 32,
};

const MAIN: CSSProperties = {
  minWidth: 0,
  overflowY: 'auto',
  padding: 16,
  display: 'grid',
  gap: 10,
  alignContent: 'start',
};

const PANEL: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  borderRadius: 6,
};

const FOOTER: CSSProperties = {
  borderTop: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px',
  color: TOK.textPlaceholder,
  fontSize: 12,
};

const CARD_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
};

const STACKED_CARD_GRID: CSSProperties = {
  ...CARD_GRID,
  gridTemplateColumns: '1fr',
};

const CARD: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  padding: '8px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const CARD_LEFT_WITH_CIRCLE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minWidth: 0,
};

const CARD_CIRCLE_ICON: CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: 999,
  border: `1px solid ${TOK.textSecondary}`,
  flex: '0 0 auto',
};

const TAB: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 999,
  background: TOK.layer01,
  padding: '3px 10px',
  fontSize: 12,
  color: TOK.textSecondary,
};

const ACTIVE_TAB: CSSProperties = {
  ...TAB,
  color: 'var(--z-accent, #2563eb)',
  borderColor: 'var(--z-accent, #2563eb)',
};

const HDS_TAB_ROW: CSSProperties = {
  display: 'flex',
  gap: 16,
  marginTop: 12,
  borderBottom: `1px solid ${TOK.border}`,
};

const HDS_TAB: CSSProperties = {
  border: 'none',
  borderBottom: 'none',
  background: 'transparent',
  borderRadius: 0,
  padding: '6px 0',
  marginBottom: -1,
  color: TOK.textSecondary,
  fontSize: 12,
  fontWeight: 500,
};

const HDS_TAB_ACTIVE: CSSProperties = {
  ...HDS_TAB,
  color: 'var(--z-accent, #2563eb)',
  borderBottom: '2px solid var(--z-accent, #2563eb)',
};

const COLLAPSIBLE_STACK: CSSProperties = {
  display: 'grid',
  gap: 8,
  marginTop: 12,
};

const COLLAPSIBLE_SECTION: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 6,
  background: TOK.layer01,
  overflow: 'hidden',
};

const COLLAPSIBLE_TRIGGER: CSSProperties = {
  width: '100%',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 40,
  padding: '8px 12px',
  fontSize: 12,
  fontWeight: 600,
  cursor: 'pointer',
};

const COLLAPSIBLE_TRIGGER_OPEN: CSSProperties = {
  background: TOK.layer02,
  color: TOK.textPrimary,
};

const COLLAPSIBLE_TRIGGER_CLOSED: CSSProperties = {
  background: TOK.layer01,
  color: TOK.textSecondary,
};

const COLLAPSIBLE_TRIGGER_LABEL: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

const COLLAPSIBLE_CHEVRON: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  color: TOK.textSecondary,
};

const COLLAPSIBLE_CONTENT: CSSProperties = {
  padding: '0 10px 10px',
  borderTop: `1px solid ${TOK.border}`,
  background: '#ffffff',
};

const TAB_COUNT_BADGE: CSSProperties = {
  marginLeft: 6,
  minWidth: 18,
  height: 18,
  borderRadius: 999,
  border: `1px solid ${TOK.border}`,
  background: TOK.layer02,
  color: TOK.textSecondary,
  fontSize: 11,
  lineHeight: '16px',
  textAlign: 'center',
  display: 'inline-block',
  padding: '0 5px',
};

const SAVED_TABLE_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.6fr 1fr 1fr 1fr 64px',
  gap: 0,
  padding: '10px 12px',
  borderBottom: `1px solid ${TOK.border}`,
  fontSize: 12,
  color: TOK.textSecondary,
  fontWeight: 600,
  background: TOK.layer02,
};

const SAVED_TABLE_ROW: CSSProperties = {
  ...SAVED_TABLE_HEADER,
  color: TOK.textPrimary,
  fontSize: 13,
  fontWeight: 400,
  background: 'transparent',
  borderBottom: `1px solid ${TOK.border}`,
};

const SAVED_CELL: CSSProperties = {
  padding: '0 5px',
  display: 'flex',
  alignItems: 'center',
  minHeight: 30,
};

const SAVED_CELL_LAST: CSSProperties = {
  ...SAVED_CELL,
  justifyContent: 'center',
  position: 'relative',
};

const SAVED_LINK: CSSProperties = {
  color: TOK.textPrimary,
  textDecoration: 'none',
  fontWeight: 400,
};

const SAVED_FILTER_ROW: CSSProperties = {
  display: 'inline-grid',
  gridTemplateColumns: '1fr auto',
  width: 440,
  border: `1px solid #9ca3af`,
  borderRadius: 4,
  overflow: 'hidden',
  background: TOK.layer01,
  marginBottom: 8,
};

const SAVED_FILTER_INPUT: CSSProperties = {
  height: 24,
  width: '100%',
  border: 'none',
  background: 'transparent',
  padding: '0 10px',
  fontSize: 11,
  color: TOK.textSecondary,
  display: 'flex',
  alignItems: 'center',
  gap: 6,
};

const SAVED_FILTER_SELECT: CSSProperties = {
  ...SAVED_FILTER_INPUT,
  width: 128,
  borderLeft: `1px solid #9ca3af`,
  fontSize: 11,
  color: TOK.textPrimary,
  justifyContent: 'space-between',
};

const SAVED_TYPE_FILTER_WRAPPER: CSSProperties = {
  position: 'relative',
};

const SAVED_TYPE_FILTER_MENU: CSSProperties = {
  position: 'absolute',
  top: 28,
  right: 0,
  width: 172,
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
  zIndex: 5,
  padding: 4,
};

const SAVED_TYPE_FILTER_ITEM: CSSProperties = {
  width: '100%',
  border: 'none',
  background: 'transparent',
  color: TOK.textPrimary,
  fontSize: 12,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '6px 8px',
  textAlign: 'left',
  cursor: 'pointer',
};

const SAVED_FOOTER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr auto 1fr',
  alignItems: 'center',
  padding: '10px 0 0',
  color: TOK.textSecondary,
  fontSize: 12,
};

const SAVED_PAGER: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
};

const SAVED_ROW_MENU: CSSProperties = {
  position: 'absolute',
  top: 32,
  right: 6,
  minWidth: 110,
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
  zIndex: 4,
  padding: 4,
};

const SAVED_ROW_MENU_ITEM: CSSProperties = {
  width: '100%',
  border: 'none',
  borderRadius: 3,
  background: 'transparent',
  color: TOK.textPrimary,
  textAlign: 'left',
  fontSize: 12,
  padding: '7px 8px',
  cursor: 'pointer',
};

const QUERY_MENU_WRAP: CSSProperties = {
  position: 'relative',
  width: '100%',
};

const QUERY_MENU_TRIGGER: CSSProperties = {
  width: '100%',
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: 'var(--z-accent, #2563eb)',
  color: '#fff',
  fontSize: 12,
  fontWeight: 600,
  padding: '6px 10px',
  textAlign: 'center',
  cursor: 'pointer',
};

const QUERY_MENU_PANEL: CSSProperties = {
  position: 'absolute',
  top: 'calc(100% + 8px)',
  left: '12.5%',
  width: '75%',
  minWidth: 760,
  height: 600,
  border: `1px solid ${TOK.border}`,
  borderRadius: 8,
  background: TOK.layer01,
  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.16)',
  overflow: 'hidden',
  zIndex: 8,
};

const QUERY_MENU_SEARCH: CSSProperties = {
  height: 58,
  borderBottom: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  padding: 12,
};

const QUERY_MENU_SEARCH_INPUT: CSSProperties = {
  width: '100%',
  height: 34,
  border: '2px solid var(--z-accent, #2563eb)',
  borderRadius: 8,
  background: '#ffffff',
  color: TOK.textPrimary,
  fontSize: 12,
  padding: '0 12px',
  outline: 'none',
  boxSizing: 'border-box',
};

const QUERY_MENU_BODY: CSSProperties = {
  display: 'grid',
  height: 'calc(100% - 58px)',
  background: '#ffffff',
};

const QUERY_MENU_COLUMN: CSSProperties = {
  borderRight: `1px solid ${TOK.border}`,
  background: '#ffffff',
  padding: 12,
  overflowY: 'auto',
};

const QUERY_MENU_SECTION_LIST: CSSProperties = {
  display: 'grid',
  gap: 4,
};

const QUERY_MENU_SECTION_ITEM: CSSProperties = {
  width: '100%',
  border: 'none',
  borderRadius: 6,
  background: 'transparent',
  color: TOK.textPrimary,
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  padding: '10px 12px',
  fontSize: 12,
  textAlign: 'left',
  cursor: 'pointer',
};

const QUERY_MENU_SECTION_ITEM_ACTIVE: CSSProperties = {
  background: TOK.layer02,
  color: 'var(--z-accent, #2563eb)',
  fontWeight: 600,
};

const QUERY_MENU_DIVIDER: CSSProperties = {
  height: 1,
  background: TOK.border,
  margin: '8px 0 12px',
};

const QUERY_MENU_COLUMN_TITLE: CSSProperties = {
  fontSize: 12,
  fontWeight: 700,
  color: TOK.textPrimary,
  marginBottom: 10,
};

const QUERY_MENU_SECTION_ITEM_STATIC: CSSProperties = {
  width: '100%',
  border: 'none',
  background: 'transparent',
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  borderRadius: 6,
  fontSize: 12,
  fontWeight: 400,
  color: TOK.textPrimary,
  padding: '5px 12px',
  textAlign: 'left',
  cursor: 'pointer',
};

const QUERY_MENU_CARD_LIST: CSSProperties = {
  display: 'grid',
  gap: 8,
};

const QUERY_MENU_STACKED_CARD: CSSProperties = {
  width: '100%',
  border: 'none',
  borderRadius: 0,
  background: 'transparent',
  padding: '6px 4px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: 10,
  textAlign: 'left',
  boxSizing: 'border-box',
};

const QUERY_MENU_STACKED_CARD_LABEL: CSSProperties = {
  color: TOK.textPrimary,
  fontSize: 12,
  textAlign: 'left',
};

const QUERY_MENU_RESOURCE_LIST: CSSProperties = {
  display: 'grid',
  gap: 6,
};

const QUERY_MENU_RESOURCE_ITEM: CSSProperties = {
  width: '100%',
  border: 'none',
  background: 'transparent',
  color: TOK.textPrimary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 12,
  padding: '6px 4px',
  fontSize: 12,
  textAlign: 'left',
  cursor: 'pointer',
};

const QUERY_MENU_RESOURCE_LABEL: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  minWidth: 0,
};

const QUERY_MENU_COUNT: CSSProperties = {
  minWidth: 28,
  height: 20,
  borderRadius: 999,
  border: `1px solid #9ca3af`,
  background: '#ffffff',
  color: TOK.textSecondary,
  fontSize: 12,
  lineHeight: '18px',
  textAlign: 'center',
  padding: '0 6px',
  boxSizing: 'border-box',
};

const QUERY_MENU_EMPTY: CSSProperties = {
  background: '#ffffff',
};

function organizationOverviewHref(): string {
  return '?path=/story/wireframes-organizationoverview--default';
}

function visibilityStoryHref(variant: 'a' | 'b'): string {
  if (variant === 'b') return '?path=/story/wireframes-visibility--visibility-b';
  return '?path=/story/wireframes-visibility--visibility-a';
}

function organizationOverviewForOrgHref(organizationName: string): string {
  return `?path=/story/wireframes-organizationoverview--default&args=model.organizationName:${encodeURIComponent(organizationName)}`;
}

function NavGlyph() {
  return (
    <span
      aria-hidden
      style={{
        width: 14,
        height: 14,
        border: `2px solid ${TOK.textSecondary}`,
        borderRadius: 999,
        display: 'inline-block',
        opacity: 0.85,
      }}
    />
  );
}

function VisibilityPage({
  pageLabel = 'Visibility',
  layoutVariant = 'A',
}: {
  pageLabel?: 'Visibility' | 'Visibility (B)';
  layoutVariant?: 'A' | 'B';
}) {
  const [showOrganizationMenu, setShowOrganizationMenu] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('ILM_Demo_Space');
  const [activeVisibilityATab, setActiveVisibilityATab] = useState<'types' | 'questions' | 'saved'>('types');
  const [visibilityBSectionsOpen, setVisibilityBSectionsOpen] = useState({
    types: true,
    questions: false,
    saved: false,
  });
  const [queryMenuOpenFor, setQueryMenuOpenFor] = useState<'a' | 'b' | null>(null);
  const [selectedQueryMenuSection, setSelectedQueryMenuSection] = useState('recommended');
  const [savedViewMenuOpenFor, setSavedViewMenuOpenFor] = useState<string | null>(null);
  const [showTypeFilterMenu, setShowTypeFilterMenu] = useState(false);
  const [selectedSavedViewTypes, setSelectedSavedViewTypes] = useState<string[]>([]);
  const organizationOptions = [
    'ILM_Demo_Space',
    'Payments Platform',
    'Data Foundation',
    'Cloud Sandbox',
    'Corp Shared Services',
  ];

  const explorerTypeCards = [
    'Modules',
    'Providers',
    'Workspaces',
    'Resources (Beta)',
    'Terraform Versions',
  ];

  const explorerUseCases = [
    'Workspaces with zero resources',
    'Workspaces with the most resources',
    'Resources by module name',
    'Top module versions',
    'Latest Terraform versions',
    'Top provider versions',
    'Workspaces without VCS',
    'Workspace VCS source',
    'Workspaces with failed checks',
    'Drifted workspaces',
    'All workspace versions',
    'Workspaces by run status',
  ];

  const graphQuestions = [
    "Do I have any Virtual Machines that aren't managed by Terraform?",
    'Are any of my AWS resources provisioned by a non-current version of Terraform?',
    "Do I have any volumes that aren't encrypted at rest?",
    'Which of my EC2 instances are more than 30 days old?',
    'Which resources are missing an Owner tag?',
    'Which of my VMs are using images not provisioned by Packer?',
  ];

  const savedViews = [
    { name: 'Test-87', type: 'Modules', owner: 'davidjohn', updated: 'Oct 16 2025' },
    { name: 'child saved', type: 'Workspaces', owner: 'ashtronaut', updated: 'Oct 1 2025' },
    { name: 'test', type: 'Workspaces', owner: 'simonxmhuang', updated: 'Jul 28 2025' },
    { name: 'red', type: 'Workspaces', owner: 'simonxmhuang', updated: 'Jul 25 2025' },
    { name: 'test2', type: 'Workspaces', owner: 'simonxmhuang', updated: 'Jul 25 2025' },
    { name: 'rum_test', type: 'Workspaces', owner: 'simonxmhuang', updated: 'Jul 25 2025' },
    { name: 'random stuff', type: 'Workspaces', owner: 'lyn_kotuby-e2f5b9c9', updated: 'Jun 4 2025' },
    { name: 'sim', type: 'Workspaces', owner: 'simonxmhuang', updated: 'Jun 2 2025' },
    { name: 'testing tf version bug', type: 'Terraform Versions', owner: 'jondavidjohn', updated: 'Nov 14 2024' },
    { name: 'new view', type: 'Terraform Versions', owner: 'jondavidjohn', updated: 'Nov 14 2024' },
    { name: 'try again', type: 'Workspaces', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
    { name: 'yet another one', type: 'Workspaces', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
    { name: 'new test name', type: 'Workspaces', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
    { name: 'super duper errored workspaces', type: 'Workspaces', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
    { name: 'another new name', type: 'Workspaces', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
    { name: 'new name', type: 'Workspaces', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
    { name: 'tf test', type: 'Terraform Versions', owner: 'aditisl', updated: 'Nov 12 2024' },
    { name: 'new tf versions', type: 'Terraform Versions', owner: 'martinhenry', updated: 'Nov 12 2024' },
    { name: 'workspace tf version is 1.7.0', type: 'Workspaces', owner: 'martinhenry', updated: 'Nov 12 2024' },
    { name: 'terraform versions', type: 'Terraform Versions', owner: 'jondavidjohn', updated: 'Nov 12 2024' },
  ];

  const savedViewTypeOptions = [
    'Workspaces',
    'Modules',
    'Providers',
    'Resources',
    'Terraform versions',
  ];

  const queryMenuSections = [
    { id: 'all', label: 'All', icon: '≡' },
    { id: 'recommended', label: 'Recommended', icon: '✦' },
    { id: 'build-management', label: 'Build Management', icon: '⌁' },
    { id: 'compute', label: 'Compute', icon: '☰' },
    { id: 'infrastructure-as-code', label: 'Infrastructure as Code', icon: '</>' },
    { id: 'identity', label: 'Identity', icon: '⌘' },
    { id: 'management', label: 'Management', icon: '◍' },
    { id: 'networking', label: 'Networking', icon: '⋄' },
    { id: 'observability', label: 'Observability', icon: '◉' },
    { id: 'security', label: 'Security', icon: '◌' },
    { id: 'storage-data', label: 'Storage & Data', icon: '▤' },
    { id: 'geography', label: 'Geography', icon: '◍' },
  ];

  const queryResourceTypesBySection: Record<string, Array<{ label: string; count: number }>> = {
    all: [
      { label: 'Hcp Terraform Workspace', count: 3 },
      { label: 'Account', count: 1 },
      { label: 'Region', count: 1 },
      { label: 'Virtual Network', count: 2 },
      { label: 'Virtual Machine', count: 4 },
      { label: 'Virtual Machine Image', count: 1 },
      { label: 'Volume', count: 2 },
      { label: 'Packer Bucket', count: 1 },
      { label: 'Packer Build', count: 1 },
    ],
    recommended: [
      { label: 'Hcp Terraform Workspace', count: 3 },
      { label: 'Account', count: 1 },
      { label: 'Region', count: 0 },
      { label: 'Virtual Network', count: 0 },
      { label: 'Virtual Machine', count: 0 },
      { label: 'Virtual Machine Image', count: 0 },
      { label: 'Volume', count: 0 },
      { label: 'Packer Bucket', count: 0 },
      { label: 'Packer Build', count: 0 },
    ],
    'build-management': [
      { label: 'Packer Bucket', count: 2 },
      { label: 'Packer Build', count: 3 },
      { label: 'Virtual Machine Image', count: 1 },
    ],
    compute: [
      { label: 'Virtual Machine', count: 4 },
      { label: 'Virtual Machine Image', count: 2 },
      { label: 'Volume', count: 3 },
    ],
    'infrastructure-as-code': [
      { label: 'Hcp Terraform Workspace', count: 3 },
      { label: 'Packer Bucket', count: 1 },
      { label: 'Packer Build', count: 1 },
    ],
    identity: [
      { label: 'Account', count: 1 },
    ],
    management: [
      { label: 'Account', count: 1 },
      { label: 'Hcp Terraform Workspace', count: 2 },
    ],
    networking: [
      { label: 'Virtual Network', count: 2 },
      { label: 'Region', count: 1 },
    ],
    observability: [
      { label: 'Hcp Terraform Workspace', count: 1 },
      { label: 'Virtual Machine', count: 1 },
    ],
    security: [
      { label: 'Account', count: 1 },
      { label: 'Volume', count: 1 },
    ],
    'storage-data': [
      { label: 'Volume', count: 3 },
    ],
    geography: [
      { label: 'Region', count: 1 },
    ],
  };

  const queryResourceTypes = queryResourceTypesBySection[selectedQueryMenuSection] ?? queryResourceTypesBySection.recommended;

  const isVisibilityA = layoutVariant === 'A';
  const isVisibilityB = layoutVariant === 'B';
  const pageSubtitle =
    "Explore your resources and ask graph-based questions to investigate Terraform usage, resource relationships, and risk.";

  const visibilityNavLinkStyle: CSSProperties = {
    ...NAV_LINK,
    color: 'var(--z-accent, #2563eb)',
  };

  const visibilityInlineRowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: TOK.textPrimary,
    fontSize: 12,
  };

  function renderQueryDropdown(menuKey: 'a' | 'b') {
    const isStaticQuerySection =
      selectedQueryMenuSection === 'types-static' || selectedQueryMenuSection === 'use-cases-static';

    return (
      <div style={QUERY_MENU_WRAP}>
        <button
          type="button"
          onClick={() => setQueryMenuOpenFor((current) => (current === menuKey ? null : menuKey))}
          aria-haspopup="menu"
          aria-expanded={queryMenuOpenFor === menuKey}
          style={QUERY_MENU_TRIGGER}
        >
          Find...
        </button>
        {queryMenuOpenFor === menuKey ? (
          <div role="menu" aria-label="Resource search menu" style={QUERY_MENU_PANEL}>
            <div style={QUERY_MENU_SEARCH}>
              <input type="text" value="Search" readOnly style={QUERY_MENU_SEARCH_INPUT} />
            </div>
            <div
              style={{
                ...QUERY_MENU_BODY,
                gridTemplateColumns: isStaticQuerySection ? '310px 1fr' : '310px 310px 1fr',
              }}
            >
              <div style={QUERY_MENU_COLUMN}>
                <div style={QUERY_MENU_SECTION_LIST}>
                  {queryMenuSections.slice(0, 2).map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      role="menuitem"
                      onClick={() => setSelectedQueryMenuSection(section.id)}
                      style={{
                        ...QUERY_MENU_SECTION_ITEM,
                        ...(selectedQueryMenuSection === section.id ? QUERY_MENU_SECTION_ITEM_ACTIVE : null),
                      }}
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>
                <div style={QUERY_MENU_DIVIDER} />
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => setSelectedQueryMenuSection('types-static')}
                  style={{
                    ...QUERY_MENU_SECTION_ITEM_STATIC,
                    ...(selectedQueryMenuSection === 'types-static' ? QUERY_MENU_SECTION_ITEM_ACTIVE : null),
                  }}
                >
                  <span>○</span>
                  <span>Types</span>
                </button>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => setSelectedQueryMenuSection('use-cases-static')}
                  style={{
                    ...QUERY_MENU_SECTION_ITEM_STATIC,
                    ...(selectedQueryMenuSection === 'use-cases-static' ? QUERY_MENU_SECTION_ITEM_ACTIVE : null),
                  }}
                >
                  <span>○</span>
                  <span>Use cases</span>
                </button>
                <div style={QUERY_MENU_DIVIDER} />
                <div style={QUERY_MENU_SECTION_LIST}>
                  {queryMenuSections.slice(2).map((section) => (
                    <button
                      key={section.id}
                      type="button"
                      role="menuitem"
                      onClick={() => setSelectedQueryMenuSection(section.id)}
                      style={{
                        ...QUERY_MENU_SECTION_ITEM,
                        ...(selectedQueryMenuSection === section.id ? QUERY_MENU_SECTION_ITEM_ACTIVE : null),
                      }}
                    >
                      <span>{section.icon}</span>
                      <span>{section.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div style={QUERY_MENU_COLUMN}>
                {selectedQueryMenuSection === 'types-static' ? (
                  <>
                    <div style={QUERY_MENU_COLUMN_TITLE}>Types</div>
                    <div style={QUERY_MENU_CARD_LIST}>
                      {explorerTypeCards.map((label) => (
                        <div key={label} style={QUERY_MENU_STACKED_CARD}>
                          <span style={QUERY_MENU_STACKED_CARD_LABEL}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : selectedQueryMenuSection === 'use-cases-static' ? (
                  <>
                    <div style={QUERY_MENU_COLUMN_TITLE}>Use cases</div>
                    <div style={QUERY_MENU_CARD_LIST}>
                      {explorerUseCases.map((label) => (
                        <div key={label} style={QUERY_MENU_STACKED_CARD}>
                          <span style={QUERY_MENU_STACKED_CARD_LABEL}>{label}</span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <div style={QUERY_MENU_COLUMN_TITLE}>Resource types</div>
                    <div style={QUERY_MENU_RESOURCE_LIST}>
                      {queryResourceTypes.map((resourceType) => (
                        <button key={resourceType.label} type="button" role="menuitem" style={QUERY_MENU_RESOURCE_ITEM}>
                          <span style={QUERY_MENU_RESOURCE_LABEL}>{resourceType.label}</span>
                          <span style={QUERY_MENU_COUNT}>{resourceType.count}</span>
                        </button>
                      ))}
                    </div>
                  </>
                )}
              </div>
              {!isStaticQuerySection ? <div style={QUERY_MENU_EMPTY} /> : null}
            </div>
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div style={SHELL}>
      <header style={TOPBAR}>
        <strong>HCP Terraform</strong>
        <div style={HEADER_DROPDOWN_WRAP}>
          <button
            type="button"
            onClick={() => setShowOrganizationMenu((value) => !value)}
            aria-haspopup="menu"
            aria-expanded={showOrganizationMenu}
            style={HEADER_DROPDOWN_TRIGGER}
          >
            <span>Organizations</span>
            {showOrganizationMenu ? (
              <IconChevronUp16 aria-hidden />
            ) : (
              <IconChevronDown16 aria-hidden />
            )}
          </button>
          {showOrganizationMenu ? (
            <div role="menu" aria-label="Organizations" style={HEADER_DROPDOWN_MENU}>
              {organizationOptions.map((organizationName) => (
                <button
                  key={organizationName}
                  type="button"
                  onClick={() => {
                    setSelectedOrganization(organizationName);
                    setShowOrganizationMenu(false);
                  }}
                  role="menuitem"
                  style={{
                    ...HEADER_DROPDOWN_ITEM,
                    width: '100%',
                    border: 'none',
                    background:
                      organizationName === selectedOrganization ? TOK.layer02 : 'transparent',
                    cursor: 'pointer',
                    textAlign: 'left',
                  }}
                >
                  <span>{organizationName}</span>
                  {organizationName === selectedOrganization ? (
                    <IconCheck16 aria-hidden color="var(--z-accent, #2563eb)" />
                  ) : null}
                </button>
              ))}
            </div>
          ) : null}
        </div>
        <span style={{ color: TOK.textSecondary }}>
          <a href={organizationOverviewHref()} target="_top" style={BREADCRUMB_LINK}>Organizations Portfolio</a>
          {' / '}
          <a href={organizationOverviewForOrgHref(selectedOrganization)} target="_top" style={BREADCRUMB_LINK}>
            {selectedOrganization}
          </a>
          {' / '}
          {pageLabel}
        </span>
        <span style={{ marginLeft: 'auto', color: TOK.textSecondary }}>Deploy mode: tfe_on_prem</span>
      </header>

      <div style={BODY}>
        <aside style={SIDEBAR}>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}>
              <a href={organizationOverviewHref()} target="_top" style={NAV_LINK}>
                {'< Organization Overview'}
              </a>
            </div>
          </div>

          <div style={NAV_GROUP_LABEL}>Discover</div>
          <div style={NAV_ACTIVE}>
            <div style={NAV_ITEM_LEFT}>
              <NavGlyph />
              <a href={visibilityStoryHref('a')} target="_top" style={{ ...visibilityInlineRowStyle, ...visibilityNavLinkStyle }}>
                Visibility
              </a>
            </div>
          </div>

          <div style={NAV_GROUP_LABEL}>Manage</div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>Projects</span></div>
          </div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>Stacks</span></div>
          </div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>Workspaces</span></div>
          </div>
          <div style={NAV_SUBITEM}>Search and Import</div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>IAM</span></div>
          </div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>Usage</span></div>
          </div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>Registry</span></div>
          </div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>Settings</span></div>
          </div>

          <div style={{ ...NAV_GROUP_LABEL, marginTop: 16 }}>Cloud Platform</div>
          <div style={NAV_ITEM}>
            <div style={NAV_ITEM_LEFT}><NavGlyph /><span>HashiCorp Cloud Platform</span></div>
          </div>
        </aside>

        <main style={MAIN}>
          <section style={{ padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.1 }}>{pageLabel}</div>
                <div style={{ color: TOK.textSecondary, fontSize: 12, marginTop: 4 }}>
                  {pageSubtitle}
                </div>
              </div>
            </div>

            {isVisibilityA ? (
              <div style={{ marginTop: 12 }}>
                <div style={{ ...PANEL, padding: 10, background: TOK.layer01 }}>
                  <div style={{ fontSize: 12, color: TOK.textSecondary, marginBottom: 8 }}>Build your Infragraph query</div>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>Clear query</button>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>{'</>'}</button>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>x</button>
                  </div>
                  {renderQueryDropdown('a')}
                </div>

                <div style={HDS_TAB_ROW}>
                  <button
                    type="button"
                    onClick={() => setActiveVisibilityATab('types')}
                    style={activeVisibilityATab === 'types' ? HDS_TAB_ACTIVE : HDS_TAB}
                  >
                    Types & Use cases
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVisibilityATab('questions')}
                    style={activeVisibilityATab === 'questions' ? HDS_TAB_ACTIVE : HDS_TAB}
                  >
                    Suggested questions
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveVisibilityATab('saved')}
                    style={activeVisibilityATab === 'saved' ? HDS_TAB_ACTIVE : HDS_TAB}
                  >
                    Saved Views
                    <span style={TAB_COUNT_BADGE}>{savedViews.length}</span>
                  </button>
                </div>

                {activeVisibilityATab === 'types' ? (
                  <div>
                    <div style={{ marginTop: 12, fontSize: 13, color: TOK.textSecondary }}>Types</div>
                    <div style={{ ...CARD_GRID, marginTop: 8 }}>
                      {explorerTypeCards.map((label) => (
                        <div key={label} style={CARD}>
                          <span style={CARD_LEFT_WITH_CIRCLE}>
                            <span style={CARD_CIRCLE_ICON} />
                            <span>{label}</span>
                          </span>
                          <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ marginTop: 14, fontSize: 13, color: TOK.textSecondary }}>Use cases</div>
                    <div style={{ ...CARD_GRID, marginTop: 8 }}>
                      {explorerUseCases.map((label) => (
                        <div key={label} style={CARD}>
                          <span style={CARD_LEFT_WITH_CIRCLE}>
                            <span style={CARD_CIRCLE_ICON} />
                            <span>{label}</span>
                          </span>
                          <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {activeVisibilityATab === 'questions' ? (
                  <div>
                    <div style={{ marginTop: 12, fontSize: 13, color: TOK.textSecondary }}>Suggested questions</div>
                    <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                      {graphQuestions.map((question) => (
                        <div key={question} style={CARD}>
                          <span style={CARD_LEFT_WITH_CIRCLE}>
                            <span style={CARD_CIRCLE_ICON} />
                            <span>{question}</span>
                          </span>
                          <span style={{ color: TOK.textSecondary }}>{'>'}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}

                {activeVisibilityATab === 'saved' ? (
                  <div style={{ marginTop: 12 }}>
                    <div style={SAVED_FILTER_ROW}>
                      <div style={SAVED_FILTER_INPUT}>
                        <span style={{ color: '#6b7280', fontSize: 11, lineHeight: 1 }}>o</span>
                        <span>Search</span>
                      </div>
                      <div style={SAVED_TYPE_FILTER_WRAPPER}>
                        <button
                          type="button"
                          style={{ ...SAVED_FILTER_SELECT, border: 'none', cursor: 'pointer' }}
                          onClick={() => setShowTypeFilterMenu((current) => !current)}
                          aria-haspopup="menu"
                          aria-expanded={showTypeFilterMenu}
                        >
                          <span>Type</span>
                          <span style={{ color: '#4b5563', fontSize: 11, lineHeight: 1 }}>v</span>
                        </button>
                        {showTypeFilterMenu ? (
                          <div role="menu" aria-label="Type filters" style={SAVED_TYPE_FILTER_MENU}>
                            {savedViewTypeOptions.map((typeOption) => {
                              const isChecked = selectedSavedViewTypes.includes(typeOption);

                              return (
                                <button
                                  key={typeOption}
                                  type="button"
                                  role="menuitemcheckbox"
                                  aria-checked={isChecked}
                                  style={SAVED_TYPE_FILTER_ITEM}
                                  onClick={() => {
                                    setSelectedSavedViewTypes((current) =>
                                      current.includes(typeOption)
                                        ? current.filter((item) => item !== typeOption)
                                        : [...current, typeOption],
                                    );
                                  }}
                                >
                                  <span style={{ width: 12, color: '#374151', lineHeight: 1 }}>{isChecked ? 'x' : ''}</span>
                                  <span>{typeOption}</span>
                                </button>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div style={{ color: TOK.textSecondary, fontSize: 12, marginBottom: 8 }}>No filters applied</div>

                    <div style={{ ...PANEL, background: TOK.layer01, overflow: 'hidden' }}>
                    <div style={SAVED_TABLE_HEADER}>
                      <div style={SAVED_CELL}>Name</div>
                      <div style={SAVED_CELL}>Type</div>
                      <div style={SAVED_CELL}>Owner</div>
                      <div style={SAVED_CELL}>Last Updated</div>
                      <div style={SAVED_CELL_LAST}>Options</div>
                    </div>
                    {savedViews.map((view) => (
                      <div key={view.name} style={SAVED_TABLE_ROW}>
                        <div style={SAVED_CELL}><span style={SAVED_LINK}>{view.name}</span></div>
                        <div style={SAVED_CELL}>{view.type}</div>
                        <div style={SAVED_CELL}>{view.owner}</div>
                        <div style={SAVED_CELL}>{view.updated}</div>
                        <div style={SAVED_CELL_LAST}>
                          <button
                            type="button"
                            onClick={() => setSavedViewMenuOpenFor((current) => (current === view.name ? null : view.name))}
                            aria-haspopup="menu"
                            aria-expanded={savedViewMenuOpenFor === view.name}
                            style={{
                              border: `1px solid ${TOK.border}`,
                              borderRadius: 4,
                              background: TOK.layer01,
                              color: TOK.textSecondary,
                              fontSize: 12,
                              lineHeight: 1,
                              padding: '4px 7px',
                            }}
                          >
                            ...
                          </button>
                          {savedViewMenuOpenFor === view.name ? (
                            <div role="menu" aria-label={`Saved view options for ${view.name}`} style={SAVED_ROW_MENU}>
                              <button
                                type="button"
                                role="menuitem"
                                style={SAVED_ROW_MENU_ITEM}
                                onClick={() => setSavedViewMenuOpenFor(null)}
                              >
                                Rename
                              </button>
                              <button
                                type="button"
                                role="menuitem"
                                style={SAVED_ROW_MENU_ITEM}
                                onClick={() => setSavedViewMenuOpenFor(null)}
                              >
                                Delete
                              </button>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                    </div>

                    <div style={SAVED_FOOTER}>
                      <div>1-20 of 50</div>
                      <div style={SAVED_PAGER}>
                        <span>{'<'}</span>
                        <span style={{ color: 'var(--z-accent, #2563eb)', fontWeight: 600 }}>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>{'>'}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
                        <span>Items per page</span>
                        <button type="button" style={{ ...TAB, borderRadius: 4, padding: '2px 8px' }}>20</button>
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ) : isVisibilityB ? (
              <div style={{ marginTop: 12 }}>
                <div style={{ ...PANEL, padding: 10, background: TOK.layer01 }}>
                  <div style={{ fontSize: 12, color: TOK.textSecondary, marginBottom: 8 }}>Build your Infragraph query</div>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>Clear query</button>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>{'</>'}</button>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>x</button>
                  </div>
                  {renderQueryDropdown('b')}
                </div>

                <div style={COLLAPSIBLE_STACK}>
                  <div style={COLLAPSIBLE_SECTION}>
                    <button
                      type="button"
                      style={{
                        ...COLLAPSIBLE_TRIGGER,
                        ...(visibilityBSectionsOpen.types ? COLLAPSIBLE_TRIGGER_OPEN : COLLAPSIBLE_TRIGGER_CLOSED),
                      }}
                      onClick={() =>
                        setVisibilityBSectionsOpen((current) => ({
                          ...current,
                          types: !current.types,
                        }))
                      }
                      aria-expanded={visibilityBSectionsOpen.types}
                    >
                      <span style={COLLAPSIBLE_TRIGGER_LABEL}>Types & Use cases</span>
                      <span style={COLLAPSIBLE_CHEVRON}>
                        {visibilityBSectionsOpen.types ? <IconChevronUp16 aria-hidden /> : <IconChevronDown16 aria-hidden />}
                      </span>
                    </button>
                    {visibilityBSectionsOpen.types ? (
                      <div style={COLLAPSIBLE_CONTENT}>
                        <div style={{ marginTop: 10, fontSize: 12, color: TOK.textSecondary }}>Types</div>
                        <div style={{ ...CARD_GRID, marginTop: 6 }}>
                          {explorerTypeCards.map((label) => (
                            <div key={label} style={CARD}>
                              <span style={CARD_LEFT_WITH_CIRCLE}>
                                <span style={CARD_CIRCLE_ICON} />
                                <span>{label}</span>
                              </span>
                              <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                            </div>
                          ))}
                        </div>

                        <div style={{ marginTop: 12, fontSize: 12, color: TOK.textSecondary }}>Use cases</div>
                        <div style={{ ...CARD_GRID, marginTop: 6 }}>
                          {explorerUseCases.map((label) => (
                            <div key={label} style={CARD}>
                              <span style={CARD_LEFT_WITH_CIRCLE}>
                                <span style={CARD_CIRCLE_ICON} />
                                <span>{label}</span>
                              </span>
                              <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div style={COLLAPSIBLE_SECTION}>
                    <button
                      type="button"
                      style={{
                        ...COLLAPSIBLE_TRIGGER,
                        ...(visibilityBSectionsOpen.questions ? COLLAPSIBLE_TRIGGER_OPEN : COLLAPSIBLE_TRIGGER_CLOSED),
                      }}
                      onClick={() =>
                        setVisibilityBSectionsOpen((current) => ({
                          ...current,
                          questions: !current.questions,
                        }))
                      }
                      aria-expanded={visibilityBSectionsOpen.questions}
                    >
                      <span style={COLLAPSIBLE_TRIGGER_LABEL}>Suggested questions</span>
                      <span style={COLLAPSIBLE_CHEVRON}>
                        {visibilityBSectionsOpen.questions ? <IconChevronUp16 aria-hidden /> : <IconChevronDown16 aria-hidden />}
                      </span>
                    </button>
                    {visibilityBSectionsOpen.questions ? (
                      <div style={COLLAPSIBLE_CONTENT}>
                        <div style={{ marginTop: 10, fontSize: 12, color: TOK.textSecondary }}>Suggested questions</div>
                        <div style={{ display: 'grid', gap: 6, marginTop: 6 }}>
                          {graphQuestions.map((question) => (
                            <div key={question} style={CARD}>
                              <span style={CARD_LEFT_WITH_CIRCLE}>
                                <span style={CARD_CIRCLE_ICON} />
                                <span>{question}</span>
                              </span>
                              <span style={{ color: TOK.textSecondary }}>{'>'}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div style={COLLAPSIBLE_SECTION}>
                    <button
                      type="button"
                      style={{
                        ...COLLAPSIBLE_TRIGGER,
                        ...(visibilityBSectionsOpen.saved ? COLLAPSIBLE_TRIGGER_OPEN : COLLAPSIBLE_TRIGGER_CLOSED),
                      }}
                      onClick={() =>
                        setVisibilityBSectionsOpen((current) => ({
                          ...current,
                          saved: !current.saved,
                        }))
                      }
                      aria-expanded={visibilityBSectionsOpen.saved}
                    >
                      <span style={COLLAPSIBLE_TRIGGER_LABEL}>
                        Saved Views
                        <span style={TAB_COUNT_BADGE}>{savedViews.length}</span>
                      </span>
                      <span style={COLLAPSIBLE_CHEVRON}>
                        {visibilityBSectionsOpen.saved ? <IconChevronUp16 aria-hidden /> : <IconChevronDown16 aria-hidden />}
                      </span>
                    </button>
                    {visibilityBSectionsOpen.saved ? (
                      <div style={COLLAPSIBLE_CONTENT}>
                        <div style={{ marginTop: 10 }}>
                          <div style={SAVED_FILTER_ROW}>
                            <div style={SAVED_FILTER_INPUT}>
                              <span style={{ color: '#6b7280', fontSize: 11, lineHeight: 1 }}>o</span>
                              <span>Search</span>
                            </div>
                            <div style={SAVED_TYPE_FILTER_WRAPPER}>
                              <button
                                type="button"
                                style={{ ...SAVED_FILTER_SELECT, border: 'none', cursor: 'pointer' }}
                                onClick={() => setShowTypeFilterMenu((current) => !current)}
                                aria-haspopup="menu"
                                aria-expanded={showTypeFilterMenu}
                              >
                                <span>Type</span>
                                <span style={{ color: '#4b5563', fontSize: 11, lineHeight: 1 }}>v</span>
                              </button>
                              {showTypeFilterMenu ? (
                                <div role="menu" aria-label="Type filters" style={SAVED_TYPE_FILTER_MENU}>
                                  {savedViewTypeOptions.map((typeOption) => {
                                    const isChecked = selectedSavedViewTypes.includes(typeOption);

                                    return (
                                      <button
                                        key={typeOption}
                                        type="button"
                                        role="menuitemcheckbox"
                                        aria-checked={isChecked}
                                        style={SAVED_TYPE_FILTER_ITEM}
                                        onClick={() => {
                                          setSelectedSavedViewTypes((current) =>
                                            current.includes(typeOption)
                                              ? current.filter((item) => item !== typeOption)
                                              : [...current, typeOption],
                                          );
                                        }}
                                      >
                                        <span style={{ width: 12, color: '#374151', lineHeight: 1 }}>{isChecked ? 'x' : ''}</span>
                                        <span>{typeOption}</span>
                                      </button>
                                    );
                                  })}
                                </div>
                              ) : null}
                            </div>
                          </div>
                          <div style={{ color: TOK.textSecondary, fontSize: 12, marginBottom: 8 }}>No filters applied</div>

                          <div style={{ ...PANEL, background: TOK.layer01, overflow: 'hidden' }}>
                            <div style={SAVED_TABLE_HEADER}>
                              <div style={SAVED_CELL}>Name</div>
                              <div style={SAVED_CELL}>Type</div>
                              <div style={SAVED_CELL}>Owner</div>
                              <div style={SAVED_CELL}>Last Updated</div>
                              <div style={SAVED_CELL_LAST}>Options</div>
                            </div>
                            {savedViews.map((view) => (
                              <div key={view.name} style={SAVED_TABLE_ROW}>
                                <div style={SAVED_CELL}><span style={SAVED_LINK}>{view.name}</span></div>
                                <div style={SAVED_CELL}>{view.type}</div>
                                <div style={SAVED_CELL}>{view.owner}</div>
                                <div style={SAVED_CELL}>{view.updated}</div>
                                <div style={SAVED_CELL_LAST}>
                                  <button
                                    type="button"
                                    onClick={() => setSavedViewMenuOpenFor((current) => (current === view.name ? null : view.name))}
                                    aria-haspopup="menu"
                                    aria-expanded={savedViewMenuOpenFor === view.name}
                                    style={{
                                      border: `1px solid ${TOK.border}`,
                                      borderRadius: 4,
                                      background: TOK.layer01,
                                      color: TOK.textSecondary,
                                      fontSize: 12,
                                      lineHeight: 1,
                                      padding: '4px 7px',
                                    }}
                                  >
                                    ...
                                  </button>
                                  {savedViewMenuOpenFor === view.name ? (
                                    <div role="menu" aria-label={`Saved view options for ${view.name}`} style={SAVED_ROW_MENU}>
                                      <button
                                        type="button"
                                        role="menuitem"
                                        style={SAVED_ROW_MENU_ITEM}
                                        onClick={() => setSavedViewMenuOpenFor(null)}
                                      >
                                        Rename
                                      </button>
                                      <button
                                        type="button"
                                        role="menuitem"
                                        style={SAVED_ROW_MENU_ITEM}
                                        onClick={() => setSavedViewMenuOpenFor(null)}
                                      >
                                        Delete
                                      </button>
                                    </div>
                                  ) : null}
                                </div>
                              </div>
                            ))}
                          </div>

                          <div style={SAVED_FOOTER}>
                            <div>1-20 of 50</div>
                            <div style={SAVED_PAGER}>
                              <span>{'<'}</span>
                              <span style={{ color: 'var(--z-accent, #2563eb)', fontWeight: 600 }}>1</span>
                              <span>2</span>
                              <span>3</span>
                              <span>{'>'}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8 }}>
                              <span>Items per page</span>
                              <button type="button" style={{ ...TAB, borderRadius: 4, padding: '2px 8px' }}>20</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </main>
      </div>

      <footer style={FOOTER}>
        <span>Visibility Wireframe</span>
        <span>Route: /app/{'{org}'}/explorer</span>
      </footer>
    </div>
  );
}

const meta: Meta<typeof VisibilityPage> = {
  title: 'Wireframes/Visibility',
  component: VisibilityPage,
  parameters: {
    layout: 'fullscreen',
    wireframeChrome: {
      title: 'Visibility',
      height: '88vh',
    },
  },
};

export default meta;

type Story = StoryObj<typeof VisibilityPage>;

export const VisibilityA: Story = {};

export const VisibilityB: Story = {
  args: {
    pageLabel: 'Visibility (B)',
    layoutVariant: 'B',
  },
};

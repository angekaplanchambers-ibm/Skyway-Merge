import { useState, type CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
  orgPortfolioDefaultFixture,
  orgPortfolioHighRiskFixture,
  type OrgPortfolioViewModel,
  type RemediationQueueItem,
} from './_org-portfolio-fixtures';

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
  gridTemplateColumns: '210px 1fr',
  minHeight: 0,
};

const SIDEBAR: CSSProperties = {
  borderRight: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  padding: 12,
  overflowY: 'auto',
};

const NAV_SINGLE_ITEM: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  padding: '9px 6px',
  color: TOK.textSecondary,
  fontSize: 12,
  fontWeight: 500,
};

const MAIN: CSSProperties = {
  minWidth: 0,
  overflowY: 'auto',
  padding: 16,
  display: 'grid',
  gridTemplateRows: 'auto auto auto auto auto auto',
  gap: 12,
};

const PANEL: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  background: TOK.layer01,
  borderRadius: 6,
};

const PANEL_HEADER: CSSProperties = {
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  fontWeight: 600,
  fontSize: 12,
  letterSpacing: '0.02em',
  textTransform: 'uppercase',
};

const KPI_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(120px, 1fr))',
  gap: 8,
  padding: 10,
};

const TILE: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  background: TOK.layer02,
  borderRadius: 4,
  padding: 8,
};

const COVERAGE_TILE: CSSProperties = {
  ...TILE,
  display: 'flex',
  flexDirection: 'column',
  minHeight: 66,
};

const COVERAGE_CTA_ROW: CSSProperties = {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'flex-end',
};

const CTA_BUTTON: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  color: TOK.textPrimary,
  fontSize: 12,
  fontWeight: 500,
  padding: '4px 8px',
  cursor: 'pointer',
};

const CTA_BUTTON_LINK: CSSProperties = {
  ...CTA_BUTTON,
  display: 'inline-block',
  textDecoration: 'none',
};

const TABLE_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '40px 120px 170px 120px 140px 120px 120px 1.5fr',
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  fontSize: 12,
  color: TOK.textSecondary,
  gap: 8,
};

const TABLE_ROW: CSSProperties = {
  ...TABLE_HEADER,
  fontSize: 13,
  color: TOK.textPrimary,
};

const FILTER_ROW: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: 8,
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  background: TOK.layer02,
};

const FILTER_PILL: CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: 6,
  border: `1px solid ${TOK.border}`,
  borderRadius: 999,
  background: TOK.layer01,
  padding: '4px 8px',
  fontSize: 12,
  color: TOK.textSecondary,
};

const ACTIONS_DROPDOWN_BUTTON: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  color: TOK.textPrimary,
  fontSize: 12,
  fontWeight: 600,
  padding: '4px 10px',
  cursor: 'pointer',
};

const FILTER_MENU_BUTTON: CSSProperties = {
  ...ACTIONS_DROPDOWN_BUTTON,
  minWidth: 108,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textAlign: 'left',
};

const CHECKBOX_INPUT: CSSProperties = {
  width: 14,
  height: 14,
  accentColor: 'var(--z-accent, #2563eb)',
};

const CRITICALITY_TAG: Record<'P0' | 'P1' | 'P2', CSSProperties> = {
  P0: {
    border: '1px solid #b91c1c',
    color: '#b91c1c',
    background: '#fee2e2',
    borderRadius: 999,
    padding: '2px 8px',
    fontSize: 12,
    fontWeight: 700,
    width: 'fit-content',
  },
  P1: {
    border: '1px solid #b45309',
    color: '#b45309',
    background: '#ffedd5',
    borderRadius: 999,
    padding: '2px 8px',
    fontSize: 12,
    fontWeight: 700,
    width: 'fit-content',
  },
  P2: {
    border: '1px solid #1d4ed8',
    color: '#1d4ed8',
    background: '#dbeafe',
    borderRadius: 999,
    padding: '2px 8px',
    fontSize: 12,
    fontWeight: 700,
    width: 'fit-content',
  },
};

const ORG_TABLE_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  fontSize: 12,
  color: TOK.textSecondary,
  gap: 8,
};

const ORG_TABLE_ROW: CSSProperties = {
  ...ORG_TABLE_HEADER,
  fontSize: 13,
  color: TOK.textPrimary,
};

const TABLE_PAGINATION: CSSProperties = {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: 10,
  padding: '8px 10px 10px',
  borderTop: `1px solid ${TOK.border}`,
  color: TOK.textSecondary,
  fontSize: 12,
};

const PAGE_LINK: CSSProperties = {
  color: TOK.textSecondary,
  textDecoration: 'none',
};

const PAGE_ACTIVE: CSSProperties = {
  color: TOK.textPrimary,
  fontWeight: 600,
};

const ORG_NAME_LINK: CSSProperties = {
  color: 'var(--z-accent, #2563eb)',
  textDecoration: 'none',
  fontWeight: 600,
};

const ACTION_LINK: CSSProperties = {
  color: 'var(--z-accent, #2563eb)',
  textDecoration: 'none',
  fontWeight: 500,
};

const FLEET_SNAPSHOT_PANEL: CSSProperties = {
  padding: 10,
};

const FLEET_ROW: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
  alignItems: 'center',
  gap: 12,
  border: `1px solid ${TOK.border}`,
  borderRadius: 8,
  padding: '12px 14px',
  background: TOK.layer01,
};

const FLEET_HEADER_ROW: CSSProperties = {
  ...FLEET_ROW,
  border: 'none',
  borderRadius: 0,
  background: 'transparent',
  padding: '0 14px 2px',
  color: TOK.textSecondary,
  fontSize: 11,
  fontWeight: 600,
};

const VISIBILITY_SUMMARY_LAYOUT: CSSProperties = {
  padding: 10,
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 8,
};

const VISIBILITY_QUERY_TILE: CSSProperties = {
  display: 'grid',
  gap: 8,
};

const INFRA_STATE_BOX: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 6,
  background: 'rgb(255, 255, 255)',
  padding: '10px 12px',
  marginBottom: 0,
};

const INFRA_STATE_HEADER: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  color: TOK.textPrimary,
  marginBottom: 10,
};

const INFRA_STATE_SPLIT: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 16,
  alignItems: 'stretch',
};

const INFRA_STATE_CHART_ROW: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '128px 1fr',
  alignItems: 'center',
  gap: 14,
};

const INFRA_STATE_DONUT: CSSProperties = {
  width: 128,
  height: 128,
  borderRadius: 999,
  display: 'grid',
  placeItems: 'center',
};

const INFRA_STATE_DONUT_INNER: CSSProperties = {
  width: 92,
  height: 92,
  borderRadius: 999,
  background: TOK.layer01,
  border: `1px solid ${TOK.border}`,
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center',
};

const INFRA_STATE_LEGEND: CSSProperties = {
  display: 'grid',
  gap: 10,
};

const INFRA_STATE_LEGEND_ROW: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '12px 1fr auto',
  gap: 8,
  alignItems: 'center',
  fontSize: 12,
};

const INFRA_STATE_LEGEND_DOT: CSSProperties = {
  width: 9,
  height: 9,
  borderRadius: 999,
};

const INFRA_STATE_ACTION_ROW: CSSProperties = {
  marginTop: 'auto',
  display: 'flex',
  justifyContent: 'flex-end',
  paddingTop: 10,
};

const INFRA_STATE_ACTION_BUTTON: CSSProperties = {
  ...CTA_BUTTON,
  fontSize: 11,
  padding: '4px 10px',
};

const INFRA_INVENTORY_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  columnGap: 8,
  rowGap: 8,
};

const INFRA_INVENTORY_ITEM: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  padding: '8px 10px',
  display: 'grid',
  gridTemplateColumns: '30px 1fr auto',
  gap: 8,
  alignItems: 'center',
};

const INFRA_INVENTORY_ICON: CSSProperties = {
  width: 30,
  height: 30,
  borderRadius: 4,
  border: `1px solid ${TOK.border}`,
  background: TOK.layer02,
  display: 'grid',
  placeItems: 'center',
  fontSize: 9,
  color: TOK.textSecondary,
  fontWeight: 700,
};

const INFRA_INVENTORY_LABEL: CSSProperties = {
  color: TOK.textSecondary,
  fontSize: 12,
  lineHeight: 1.2,
  whiteSpace: 'nowrap',
};

const INFRA_INVENTORY_COUNT: CSSProperties = {
  color: TOK.textPrimary,
  fontSize: 14,
  fontWeight: 600,
  lineHeight: 1.15,
};

const INFRA_INVENTORY_TEXT_STACK: CSSProperties = {
  display: 'grid',
  gap: 2,
};

const INFRA_INVENTORY_MENU_WRAP: CSSProperties = {
  position: 'relative',
  justifySelf: 'end',
  alignSelf: 'start',
};

const INFRA_INVENTORY_MENU_BUTTON: CSSProperties = {
  width: 20,
  height: 20,
  borderRadius: 4,
  border: 'none',
  background: 'transparent',
  color: TOK.textSecondary,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  fontSize: 16,
  lineHeight: 1,
  padding: 0,
};

const INFRA_INVENTORY_MENU: CSSProperties = {
  position: 'absolute',
  top: 28,
  right: 0,
  minWidth: 150,
  border: `1px solid ${TOK.border}`,
  borderRadius: 6,
  background: TOK.layer01,
  boxShadow: '0 8px 18px rgba(0, 0, 0, 0.14)',
  padding: 4,
  zIndex: 6,
  display: 'grid',
  gap: 2,
};

const INFRA_INVENTORY_MENU_ITEM: CSSProperties = {
  border: 'none',
  borderRadius: 4,
  background: 'transparent',
  color: TOK.textPrimary,
  textAlign: 'left',
  fontSize: 12,
  padding: '6px 8px',
  cursor: 'pointer',
};

const INFRA_STATE_SEGMENTS = [
  { label: 'Managed', value: 2194, color: '#0b8f2d' },
  { label: 'Unmanaged', value: 1256, color: '#f2a600' },
  { label: 'Drifted', value: 74, color: '#e11d2e' },
  { label: 'Ghosted', value: 25, color: '#6b7280' },
] as const;

const INFRA_INVENTORY_ITEMS = [
  { id: 'aws', icon: 'aws', label: 'Amazon Web Services', count: 2195 },
  { id: 'azure', icon: 'az', label: 'Azure', count: 351 },
  { id: 'hcp-tf', icon: 'tf', label: 'HCP Terraform', count: 124 },
  { id: 'tfe', icon: 'tf', label: 'Terraform Enterprise', count: 62 },
  { id: 'packer', icon: 'pk', label: 'HCP Packer', count: 351 },
  { id: 'github', icon: 'gh', label: 'GitHub', count: 68 },
] as const;

const VISIBILITY_TYPES_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: 8,
};

const VISIBILITY_TYPE_CARD: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  padding: '8px 10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const VISIBILITY_TYPE_CARD_LEFT: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  minWidth: 0,
};

const VISIBILITY_TYPE_CARD_CIRCLE: CSSProperties = {
  width: 12,
  height: 12,
  borderRadius: 999,
  border: `1px solid ${TOK.textSecondary}`,
  flex: '0 0 auto',
};

const VISIBILITY_TABS_ROW: CSSProperties = {
  display: 'flex',
  gap: 16,
  marginBottom: 10,
  borderBottom: `1px solid ${TOK.border}`,
};

const VISIBILITY_TAB: CSSProperties = {
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

const VISIBILITY_TAB_ACTIVE: CSSProperties = {
  ...VISIBILITY_TAB,
  color: 'var(--z-accent, #2563eb)',
  borderBottom: '2px solid var(--z-accent, #2563eb)',
};

const VISIBILITY_FIND_BUTTON: CSSProperties = {
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
  marginTop: 'auto',
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
  padding: '0 12px',
  display: 'flex',
  alignItems: 'center',
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
  background: '#ffffff',
};

const QUERY_MENU_COLUMN: CSSProperties = {
  borderRight: `1px solid ${TOK.border}`,
  background: '#ffffff',
  padding: 12,
  overflowY: 'auto',
  maxHeight: 480,
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

function severityMark(severity: RemediationQueueItem['severity']): string {
  if (severity === 'critical') return '!!!';
  if (severity === 'high') return '!!';
  return '!';
}

function healthMark(health: 'healthy' | 'warning' | 'critical'): string {
  if (health === 'healthy') return 'OK';
  if (health === 'warning') return 'WARN';
  return 'CRIT';
}

function kpi7dGoal(id: OrgPortfolioViewModel['postureKpiCards'][number]['id']): string {
  if (id === 'criticalIncidents') return '>= 75';
  if (id === 'criticalDriftOrganizations') return '>=$150k';
  if (id === 'validationFailingOrganizations') return '>= 15';
  if (id === 'policyViolatingOrganizations') return '>= 80%';
  return '0';
}

function formatKpiValue(card: OrgPortfolioViewModel['postureKpiCards'][number]): string {
  if (card.id === 'criticalDriftOrganizations') {
    return `$${card.value.toLocaleString()}`;
  }
  if (card.id === 'policyViolatingOrganizations') {
    return `${card.value}%`;
  }
  return card.value.toLocaleString();
}

function organizationOverviewStoryHref(
  story: 'default' | 'high-risk',
  organizationName: string,
): string {
  const storyId = story === 'high-risk' ? 'highrisk' : 'default';

  return `?path=/story/wireframes-organizationoverview--${storyId}&args=model.organizationName:${encodeURIComponent(organizationName)}`;
}

function nextActionLabel(item: RemediationQueueItem): string {
  if (item.nextActionType === 'openRunDetail') {
    const parts = item.nextActionRoute.split('/').filter(Boolean);
    return parts[parts.length - 1] ?? 'Run';
  }

  if (item.nextActionType === 'openSearchImport') {
    const parts = item.nextActionRoute.split('/').filter(Boolean);
    const wsIndex = parts.findIndex((part) => part === 'workspaces');
    const workspace = wsIndex >= 0 ? parts[wsIndex + 1] : undefined;
    if (workspace) {
      return `Remediate in ${workspace} Search and Import`;
    }
    return 'Go to Workspace Search and Import to remediate';
  }
  if (item.nextActionType === 'openResourceGraph') return 'Resource Graph';
  if (item.nextActionType === 'openExplorer') {
    const parts = item.nextActionRoute.split('/').filter(Boolean);
    const org = parts.length >= 2 ? decodeURIComponent(parts[1]) : undefined;
    if (org) {
      return `Investigate in ${org} Explorer View to remediate`;
    }
    return 'Go to Explorer View to investigate and remediate';
  }
  return 'Workspace hub';
}

function agentProgressLabel(status: RemediationQueueItem['agentProgressStatus']): string {
  if (status === 'queued') return 'Queued';
  if (status === 'analyzing') return 'Analyzing';
  if (status === 'drafting_pr') return 'Drafting PR';
  if (status === 'awaiting_review') return 'Awaiting review';
  return 'Merged';
}

function repoLabel(repoUrl: string): string {
  const parts = repoUrl.split('/').filter(Boolean);
  return parts[parts.length - 1] ?? 'Repository';
}

function agentTypeLabel(agentType: string): string {
  return agentType.replace(/\s+Agent$/, '');
}

function convertToManagedRoute(model: OrgPortfolioViewModel): string {
  const searchImportItem = model.remediationQueue.queueItems.find(
    (item) => item.nextActionType === 'openSearchImport',
  );
  if (!searchImportItem) return '#';

  const topUnmanagedType = model.coverage.topUnmanagedResourceTypes[0]?.resourceType;
  if (!topUnmanagedType) return searchImportItem.nextActionRoute;

  const [baseRoute, queryString] = searchImportItem.nextActionRoute.split('?');
  const params = new URLSearchParams(queryString ?? '');
  params.set('resourceType', topUnmanagedType);
  params.set('intent', 'convert-to-managed');
  return `${baseRoute}?${params.toString()}`;
}

function workspaceFromRoute(route: string): string | undefined {
  const parts = route.split('/').filter(Boolean);
  const wsIndex = parts.findIndex((part) => part === 'workspaces');
  const workspace = wsIndex >= 0 ? parts[wsIndex + 1] : undefined;
  return workspace ? decodeURIComponent(workspace) : undefined;
}

function visibilityStoryHref(): string {
  return '?path=/story/wireframes-visibility--visibility-a';
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

function OrgPortfolioOverview({
  model,
  enableOrganizationLinks = false,
  organizationOverviewStory = 'default',
}: {
  model: OrgPortfolioViewModel;
  enableOrganizationLinks?: boolean;
  organizationOverviewStory?: 'default' | 'high-risk';
}) {
  const [showActorsTooltip, setShowActorsTooltip] = useState(false);
  const [showPerformancePressureTooltip, setShowPerformancePressureTooltip] = useState(false);
  const [openPerformanceInsightTooltip, setOpenPerformanceInsightTooltip] = useState<string | null>(null);
  const [activeVisibilitySummaryTab, setActiveVisibilitySummaryTab] = useState<'core-queries' | 'types' | 'use-cases' | 'questions'>('core-queries');
  const [selectedQueueItemIds, setSelectedQueueItemIds] = useState<string[]>([]);
  const [showQueueFilterMenu, setShowQueueFilterMenu] = useState(false);
  const [showQueueActionsMenu, setShowQueueActionsMenu] = useState(false);
  const [openInventoryMenuId, setOpenInventoryMenuId] = useState<string | null>(null);
  const [queryMenuOpen, setQueryMenuOpen] = useState(false);
  const [selectedQueryMenuSection, setSelectedQueryMenuSection] = useState('recommended');
  const allQueueItemIds = model.remediationQueue.queueItems.map((item) => item.queueItemId);
  const allQueueRowsSelected =
    allQueueItemIds.length > 0 && allQueueItemIds.every((id) => selectedQueueItemIds.includes(id));
  const recommendedConversionItem = model.remediationQueue.queueItems.find(
    (item) => item.issueCategory === 'unmanaged_resource',
  ) ?? model.remediationQueue.queueItems.find((item) => item.nextActionType === 'openSearchImport');
  const recommendedResourceType = model.coverage.topUnmanagedResourceTypes[0]?.resourceType ?? 'unmanaged resource';
  const recommendedWorkspace = recommendedConversionItem
    ? workspaceFromRoute(recommendedConversionItem.nextActionRoute)
    : undefined;
  const visibilityTypeCards = ['Modules', 'Providers', 'Workspaces', 'Resources (Beta)', 'Terraform Versions'];
  const visibilityTypeDistribution = [
    { label: 'Terraform Versions', value: '7%', score: 14 },
    { label: 'Providers', value: '10%', score: 20 },
    { label: 'Modules', value: '18%', score: 36 },
    { label: 'Workspaces', value: '25%', score: 50 },
    { label: 'Resources', value: '40%', score: 72 },
  ];
  const visibilityCoreQueries = [
    "Infrastructure that's publicly exposed",
    'No active dependencies, attachment or operational purpose.',
    'Drift between intended and actual across environments.',
    'Highest-cost areas across Services',
    'Components depending on a small set of critical infrastructure',
  ];
  const visibilityPerformanceInsights = [
    { label: 'Stability', score: 75, status: 'Healthy' },
    { label: 'Capacity Headroom', score: 65, status: 'Watch' },
    { label: 'Utilization Balance', score: 70, status: 'Watch' },
    { label: 'Dependency Concentration', score: 55, status: 'Attention' },
    { label: 'Environmental Consistency', score: 80, status: 'Healthy' },
  ];
  const visibilityUseCases = [
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
  const visibilityGraphQuestions = [
    "Do I have any Virtual Machines that aren't managed by Terraform?",
    'Are any of my AWS resources provisioned by a non-current version of Terraform?',
    "Do I have any volumes that aren't encrypted at rest?",
    'Which of my EC2 instances are more than 30 days old?',
    'Which resources are missing an Owner tag?',
    'Which of my VMs are using images not provisioned by Packer?',
  ];
  const visibilityTargetedPerformanceInsights = [
    { label: 'Terraform Version Drift', value: '15%', score: 38 },
    { label: 'Infrastructure Age (Staleness)', value: '20%', score: 50 },
    { label: 'Ownership & Accountability Gaps', value: '20%', score: 50 },
    { label: 'Unmanaged Infrastructure', value: '25%', score: 62 },
    { label: 'Security Configuration Gaps', value: '30%', score: 82 },
  ];
  const performanceInsightStatusHelp: Record<'Healthy' | 'Watch' | 'Attention', string> = {
    Healthy: 'Performance posture is stable and well‑balanced',
    Watch: 'Emerging pressure or inconsistency worth monitoring',
    Attention: 'Likely requires investigation due to elevated risk',
  };
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
    identity: [{ label: 'Account', count: 1 }],
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
    'storage-data': [{ label: 'Volume', count: 3 }],
    geography: [{ label: 'Region', count: 1 }],
  };

  const explorerTypeCards = ['Modules', 'Providers', 'Workspaces', 'Resources (Beta)', 'Terraform Versions'];
  const explorerUseCases = [
    'Workspaces with zero resources', 'Workspaces with the most resources',
    'Resources by module name', 'Top module versions', 'Latest Terraform versions',
    'Top provider versions', 'Workspaces without VCS', 'Workspace VCS source',
    'Workspaces with failed checks', 'Drifted workspaces',
    'All workspace versions', 'Workspaces by run status',
  ];

  const queryResourceTypes = queryResourceTypesBySection[selectedQueryMenuSection] ?? queryResourceTypesBySection.recommended;

  function renderFindDropdown() {
    const isStaticQuerySection =
      selectedQueryMenuSection === 'types-static' || selectedQueryMenuSection === 'use-cases-static';
    return (
      <div style={QUERY_MENU_WRAP}>
        <button
          type="button"
          onClick={() => setQueryMenuOpen((v) => !v)}
          aria-haspopup="menu"
          aria-expanded={queryMenuOpen}
          style={QUERY_MENU_TRIGGER}
        >
          Find...
        </button>
        {queryMenuOpen ? (
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
                        padding: '5px 12px',
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

  const infraStateTotal = INFRA_STATE_SEGMENTS.reduce((sum, segment) => sum + segment.value, 0);
  const infraStateGradient = (() => {
    let start = 0;
    const slices = INFRA_STATE_SEGMENTS.map((segment) => {
      const sweep = (segment.value / infraStateTotal) * 360;
      const end = start + sweep;
      const slice = `${segment.color} ${start}deg ${end}deg`;
      start = end;
      return slice;
    });
    return `conic-gradient(${slices.join(', ')})`;
  })();

  return (
    <div style={SHELL}>
      <header style={TOPBAR}>
        <strong>HCP Terraform</strong>
        <span style={{ color: TOK.textSecondary }}>All accessible orgs</span>
        <span style={{ color: TOK.textPlaceholder }}>|</span>
        <span style={{ color: TOK.textSecondary }}>Time range: {model.global.timeRange}</span>
        <div style={{ marginLeft: 'auto', color: TOK.textSecondary }}>
          Last refresh: {model.global.lastRefreshAt}
        </div>
      </header>

      <div style={BODY}>
        <aside style={SIDEBAR}>
          <div style={NAV_SINGLE_ITEM}>
            <NavGlyph />
            <span>Organizations Portfolio</span>
          </div>
        </aside>

        <main style={MAIN}>
          <section style={PANEL}>
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span>Organizations Portfolio</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Organization inventory and current posture by account.
              </span>
            </div>
            <div style={ORG_TABLE_HEADER}>
              <div>Name</div>
              <div>Type</div>
              <div>Deploy</div>
              <div>Health</div>
              <div style={{ textAlign: 'right' }}>Resources</div>
            </div>
            {model.organizationsTable.organizations.map((org) => (
              <div key={org.organizationId} style={ORG_TABLE_ROW}>
                <div>
                  {enableOrganizationLinks ? (
                    <a
                      href={organizationOverviewStoryHref(organizationOverviewStory, org.organizationName)}
                      target="_top"
                      style={ORG_NAME_LINK}
                    >
                      {org.organizationName}
                    </a>
                  ) : (
                    org.organizationName
                  )}
                </div>
                <div>{org.organizationType}</div>
                <div>{org.deploymentMode}</div>
                <div>{healthMark(org.overallHealth)}</div>
                <div style={{ textAlign: 'right' }}>
                  {org.managedResourceCount} Managed / {org.unmanagedResourceCount} Unmanaged
                </div>
              </div>
            ))}
            <div style={TABLE_PAGINATION}>
              <a href="#" style={PAGE_LINK}>{'<'}</a>
              <a href="#" style={PAGE_LINK}>1</a>
              <span style={PAGE_ACTIVE}>[2]</span>
              <a href="#" style={PAGE_LINK}>3</a>
              <a href="#" style={PAGE_LINK}>{'>'}</a>
            </div>
          </section>

          <section style={PANEL}>
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span>Global Posture Summary</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Portfolio-level posture metrics across organizations.
              </span>
            </div>
            <div style={KPI_GRID}>
              {model.postureKpiCards
                .filter((card) => card.id !== 'accessibleOrganizations')
                .map((card) => (
                <div key={card.id} style={TILE}>
                  <div style={{ color: TOK.textSecondary, fontSize: 12 }}>{card.label}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <div style={{ fontSize: 22, fontWeight: 700 }}>{formatKpiValue(card)}</div>
                    {card.id === 'criticalDriftOrganizations' ? (
                      <div style={{ color: '#15803d', fontSize: 18, fontWeight: 700 }} aria-label="Savings trending down">
                        ↓
                      </div>
                    ) : null}
                  </div>
                  <div style={{ color: TOK.textPlaceholder, fontSize: 12 }}>
                    7d: {card.delta7d ?? 0} ({card.trendDirection ?? 'flat'}) | Goal: {kpi7dGoal(card.id)}
                  </div>
                </div>
              ))}
            </div>
            <div
              style={{
                borderTop: `1px solid ${TOK.border}`,
                margin: '2px 18px 8px',
              }}
            />
            <div style={{ ...FLEET_SNAPSHOT_PANEL, paddingTop: 0 }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2, marginBottom: 8 }}>
                <span style={{ fontWeight: 600, fontSize: 12, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  Agentic Fleet Snapshot
                </span>
                <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400 }}>
                  Multi-fleet activity across organizations.
                </span>
              </div>
              <div style={{ ...TILE, background: TOK.layer02 }}>
                <div style={{ display: 'grid', gap: 10 }}>
                  <div style={FLEET_HEADER_ROW}>
                    <div>Fleet</div>
                    <div>Organization</div>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, position: 'relative' }}>
                      <span>Actor(s)</span>
                      <button
                        type="button"
                        onClick={() => setShowActorsTooltip((v) => !v)}
                        aria-label="Actors column info"
                        style={{
                          width: 14,
                          height: 14,
                          borderRadius: 999,
                          border: `1px solid ${TOK.border}`,
                          background: TOK.layer01,
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 10,
                          color: TOK.textSecondary,
                          cursor: 'pointer',
                          padding: 0,
                          flexShrink: 0,
                        }}
                      >
                        i
                      </button>
                      {showActorsTooltip ? (
                        <div
                          role="tooltip"
                          style={{
                            position: 'absolute',
                            top: 20,
                            right: 0,
                            whiteSpace: 'nowrap',
                            border: `1px solid ${TOK.border}`,
                            borderRadius: 4,
                            background: TOK.layer01,
                            color: TOK.textPrimary,
                            fontSize: 12,
                            fontWeight: 400,
                            padding: '5px 8px',
                            zIndex: 4,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                          }}
                        >
                          Active/Inactive Actors
                        </div>
                      ) : null}
                    </div>
                    <div>Agent Tasks</div>
                    <div />
                  </div>
                  {model.fleetSnapshot.map((agent) => (
                    <div key={agent.fleetId} style={FLEET_ROW}>
                      <div style={{ color: TOK.textSecondary, fontSize: 12 }}>{agent.fleetName}</div>
                      <div style={{ fontSize: 12, fontWeight: 700 }}>
                        <a
                          href={organizationOverviewStoryHref(organizationOverviewStory, agent.organizationName)}
                          target="_top"
                          style={ORG_NAME_LINK}
                        >
                          {agent.organizationName}
                        </a>
                      </div>
                      <div style={{ fontSize: 12 }}>
                        {agent.activeAgentCount} Active / {agent.inactiveAgentCount} Inactive
                      </div>
                      <div style={{ fontSize: 12 }}>{agent.metricValue}</div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 4 }}>
                        <span
                          style={{ ...ACTION_LINK, display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 12 }}
                        >
                          <strong>View Fleet</strong>
                          <span style={{ fontSize: 16 }}>→</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section style={PANEL}>
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 8, position: 'relative' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <span>Visibility</span>
                <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                  Explore your resources and ask graph-based questions to investigate Terraform usage, resource relationships, and risk.
                </span>
              </div>
              <div style={{ position: 'relative', flexShrink: 0 }}>
                <button
                  type="button"
                  onClick={() => setQueryMenuOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={queryMenuOpen}
                  style={{ ...CTA_BUTTON, whiteSpace: 'nowrap' }}
                >
                  Resource Finder
                </button>
                {queryMenuOpen ? (
                  <div role="menu" aria-label="Resource search menu" style={{ ...QUERY_MENU_PANEL, left: 'auto', right: 0, width: 900, minWidth: 760 }}>
                    <div style={QUERY_MENU_SEARCH}>
                      <input type="text" value="Search" readOnly style={QUERY_MENU_SEARCH_INPUT} />
                    </div>
                    <div style={{ ...QUERY_MENU_BODY, gridTemplateColumns: (selectedQueryMenuSection === 'types-static' || selectedQueryMenuSection === 'use-cases-static') ? '310px 1fr' : '310px 310px 1fr' }}>
                      <div style={QUERY_MENU_COLUMN}>
                        <div style={QUERY_MENU_SECTION_LIST}>
                          {queryMenuSections.slice(0, 2).map((section) => (
                            <button key={section.id} type="button" role="menuitem"
                              onClick={() => setSelectedQueryMenuSection(section.id)}
                              style={{ ...QUERY_MENU_SECTION_ITEM, ...(selectedQueryMenuSection === section.id ? QUERY_MENU_SECTION_ITEM_ACTIVE : null) }}>
                              <span>{section.icon}</span><span>{section.label}</span>
                            </button>
                          ))}
                        </div>
                        <div style={QUERY_MENU_DIVIDER} />
                        <button type="button" role="menuitem" onClick={() => setSelectedQueryMenuSection('types-static')}
                          style={{ ...QUERY_MENU_SECTION_ITEM_STATIC, ...(selectedQueryMenuSection === 'types-static' ? QUERY_MENU_SECTION_ITEM_ACTIVE : null) }}>
                          <span>○</span><span>Types</span>
                        </button>
                        <button type="button" role="menuitem" onClick={() => setSelectedQueryMenuSection('use-cases-static')}
                          style={{ ...QUERY_MENU_SECTION_ITEM_STATIC, ...(selectedQueryMenuSection === 'use-cases-static' ? QUERY_MENU_SECTION_ITEM_ACTIVE : null) }}>
                          <span>○</span><span>Use cases</span>
                        </button>
                        <div style={QUERY_MENU_DIVIDER} />
                        <div style={QUERY_MENU_SECTION_LIST}>
                          {queryMenuSections.slice(2).map((section) => (
                            <button key={section.id} type="button" role="menuitem"
                              onClick={() => setSelectedQueryMenuSection(section.id)}
                              style={{ ...QUERY_MENU_SECTION_ITEM, padding: '5px 12px', ...(selectedQueryMenuSection === section.id ? QUERY_MENU_SECTION_ITEM_ACTIVE : null) }}>
                              <span>{section.icon}</span><span>{section.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div style={QUERY_MENU_COLUMN}>
                        {selectedQueryMenuSection === 'types-static' ? (
                          <><div style={QUERY_MENU_COLUMN_TITLE}>Types</div>
                          <div style={QUERY_MENU_CARD_LIST}>{explorerTypeCards.map((label) => (
                            <div key={label} style={QUERY_MENU_STACKED_CARD}><span style={QUERY_MENU_STACKED_CARD_LABEL}>{label}</span></div>
                          ))}</div></>
                        ) : selectedQueryMenuSection === 'use-cases-static' ? (
                          <><div style={QUERY_MENU_COLUMN_TITLE}>Use cases</div>
                          <div style={QUERY_MENU_CARD_LIST}>{explorerUseCases.map((label) => (
                            <div key={label} style={QUERY_MENU_STACKED_CARD}><span style={QUERY_MENU_STACKED_CARD_LABEL}>{label}</span></div>
                          ))}</div></>
                        ) : (
                          <><div style={QUERY_MENU_COLUMN_TITLE}>Resource types</div>
                          <div style={QUERY_MENU_RESOURCE_LIST}>{queryResourceTypes.map((resourceType) => (
                            <button key={resourceType.label} type="button" role="menuitem" style={QUERY_MENU_RESOURCE_ITEM}>
                              <span style={QUERY_MENU_RESOURCE_LABEL}>{resourceType.label}</span>
                              <span style={QUERY_MENU_COUNT}>{resourceType.count}</span>
                            </button>
                          ))}</div></>
                        )}
                      </div>
                      {!(selectedQueryMenuSection === 'types-static' || selectedQueryMenuSection === 'use-cases-static') ? <div style={QUERY_MENU_EMPTY} /> : null}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
            <div style={VISIBILITY_SUMMARY_LAYOUT}>
              <div style={VISIBILITY_QUERY_TILE}>
                <div style={INFRA_STATE_SPLIT}>
                  <div style={{ ...INFRA_STATE_BOX, display: 'flex', flexDirection: 'column' }}>
                    <div style={INFRA_STATE_HEADER}>Infrastructure state</div>
                    <div style={INFRA_STATE_CHART_ROW}>
                      <div style={{ ...INFRA_STATE_DONUT, background: infraStateGradient }}>
                        <div style={INFRA_STATE_DONUT_INNER}>
                          <div>
                            <div style={{ fontSize: 20, fontWeight: 700, lineHeight: 1 }}>{infraStateTotal}</div>
                            <div style={{ color: TOK.textSecondary, fontSize: 11 }}>Total</div>
                          </div>
                        </div>
                      </div>
                      <div style={INFRA_STATE_LEGEND}>
                        {INFRA_STATE_SEGMENTS.map((segment) => (
                          <div key={segment.label} style={INFRA_STATE_LEGEND_ROW}>
                            <span style={{ ...INFRA_STATE_LEGEND_DOT, background: segment.color }} />
                            <span style={{ color: TOK.textSecondary }}>{segment.label}</span>
                            <span style={{ fontWeight: 600 }}>{segment.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div style={INFRA_STATE_ACTION_ROW}>
                      <button type="button" style={INFRA_STATE_ACTION_BUTTON}>Agentic Workflows</button>
                    </div>
                  </div>
                  <div style={INFRA_STATE_BOX}>
                    <div style={{ ...INFRA_STATE_HEADER, marginBottom: 8 }}>Inventory</div>
                    <div style={INFRA_INVENTORY_GRID}>
                      {INFRA_INVENTORY_ITEMS.map((item) => (
                        <div key={item.id} style={INFRA_INVENTORY_ITEM}>
                          <span style={INFRA_INVENTORY_ICON}>{item.icon}</span>
                          <span style={INFRA_INVENTORY_TEXT_STACK}>
                            <span style={INFRA_INVENTORY_COUNT}>{item.count}</span>
                            <span style={INFRA_INVENTORY_LABEL}>{item.label}</span>
                          </span>
                          <span style={INFRA_INVENTORY_MENU_WRAP}>
                            <button
                              type="button"
                              style={INFRA_INVENTORY_MENU_BUTTON}
                              aria-label={`${item.label} actions`}
                              onClick={() =>
                                setOpenInventoryMenuId((current) => (current === item.id ? null : item.id))
                              }
                            >
                              ...
                            </button>
                            {openInventoryMenuId === item.id ? (
                              <span style={INFRA_INVENTORY_MENU}>
                                <button
                                  type="button"
                                  style={INFRA_INVENTORY_MENU_ITEM}
                                  onClick={() => setOpenInventoryMenuId(null)}
                                >
                                  View Inventory
                                </button>
                                <button
                                  type="button"
                                  style={INFRA_INVENTORY_MENU_ITEM}
                                  onClick={() => setOpenInventoryMenuId(null)}
                                >
                                  View Connections
                                </button>
                              </span>
                            ) : null}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div style={TILE}>
                <div style={{ display: 'grid', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                    <div style={{ ...INFRA_STATE_HEADER, marginBottom: 0 }}>DEEP DIVE</div>
                    <span style={{ ...CTA_BUTTON, display: 'inline-block', cursor: 'default' }}>Saved Views</span>
                  </div>
                  <div style={{ ...VISIBILITY_TABS_ROW, marginBottom: 0 }}>
                      <button
                        type="button"
                        onClick={() => setActiveVisibilitySummaryTab('core-queries')}
                        style={activeVisibilitySummaryTab === 'core-queries' ? VISIBILITY_TAB_ACTIVE : VISIBILITY_TAB}
                      >
                        Core
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveVisibilitySummaryTab('questions')}
                        style={activeVisibilitySummaryTab === 'questions' ? VISIBILITY_TAB_ACTIVE : VISIBILITY_TAB}
                      >
                        Targeted
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveVisibilitySummaryTab('types')}
                        style={activeVisibilitySummaryTab === 'types' ? VISIBILITY_TAB_ACTIVE : VISIBILITY_TAB}
                      >
                        Types
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveVisibilitySummaryTab('use-cases')}
                        style={activeVisibilitySummaryTab === 'use-cases' ? VISIBILITY_TAB_ACTIVE : VISIBILITY_TAB}
                      >
                        Use cases
                      </button>
                  </div>
                </div>
                <div style={{ marginTop: 8 }}>
                {activeVisibilitySummaryTab === 'core-queries' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'stretch' }}>
                    <div
                      style={{
                        display: 'grid',
                        gap: 8,
                        height: '100%',
                        gridTemplateRows: `repeat(${visibilityCoreQueries.length}, minmax(0, 1fr))`,
                      }}
                    >
                      {visibilityCoreQueries.map((query) => (
                        <div key={query} style={VISIBILITY_TYPE_CARD}>
                          <span style={VISIBILITY_TYPE_CARD_LEFT}>
                            <span style={VISIBILITY_TYPE_CARD_CIRCLE} />
                            <span style={{ fontSize: 12 }}>{query}</span>
                          </span>
                          <span style={{ color: TOK.textSecondary }}>{'>'}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: 'grid',
                        gap: 8,
                        background: '#ffffff',
                        border: `1px solid ${TOK.border}`,
                        borderRadius: 6,
                        padding: 10,
                      }}
                    >
                      <div style={{ display: 'grid', gap: 4 }}>
                        <div style={{ ...INFRA_STATE_HEADER, marginBottom: 0 }}>Performance Posture Snapshot</div>
                        <div style={{ fontSize: 11, color: TOK.textSecondary }}>
                          This scorecard summarizes how balanced, stable, and resilient system performance is across
                          key dimensions.
                        </div>
                      </div>
                      <div style={{ display: 'grid', gap: 12 }}>
                        {visibilityPerformanceInsights.map((insight) => (
                          <div
                            key={insight.label}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '170px 1fr auto',
                              alignItems: 'center',
                              gap: 10,
                            }}
                          >
                            <span style={{ fontSize: 12, color: TOK.textPrimary }}>{insight.label}</span>
                            <span
                              style={{
                                display: 'grid',
                                gridTemplateColumns: `${insight.score}fr ${100 - insight.score}fr`,
                                alignItems: 'stretch',
                                height: 12,
                                minWidth: 0,
                              }}
                            >
                              <span style={{ background: TOK.textPrimary }} />
                              <span
                                style={{
                                  backgroundImage:
                                    'repeating-linear-gradient(90deg, rgba(51,51,51,0.95) 0 3px, transparent 3px 6px), repeating-linear-gradient(0deg, rgba(51,51,51,0.95) 0 3px, transparent 3px 6px)',
                                  backgroundColor: '#ffffff',
                                  borderLeft: '1px solid #ffffff',
                                }}
                              />
                            </span>
                            <span style={{ position: 'relative', display: 'inline-flex', justifyContent: 'flex-end' }}>
                              <button
                                type="button"
                                onClick={() =>
                                  setOpenPerformanceInsightTooltip((current) =>
                                    current === insight.label ? null : insight.label,
                                  )
                                }
                                aria-label={`${insight.status} status info`}
                                style={{
                                  fontSize: 11,
                                  color: TOK.textPrimary,
                                  textAlign: 'right',
                                  border: `1px solid ${TOK.border}`,
                                  borderRadius: 999,
                                  padding: '2px 8px',
                                  background:
                                    insight.status === 'Healthy'
                                      ? '#e8f5e9'
                                      : insight.status === 'Watch'
                                        ? '#fff7e6'
                                        : '#fdecea',
                                  cursor: 'pointer',
                                }}
                              >
                                {insight.status}
                              </button>
                              {openPerformanceInsightTooltip === insight.label ? (
                                <span
                                  role="tooltip"
                                  style={{
                                    position: 'absolute',
                                    top: 24,
                                    right: 0,
                                    width: 220,
                                    border: `1px solid ${TOK.border}`,
                                    borderRadius: 4,
                                    background: TOK.layer01,
                                    color: TOK.textPrimary,
                                    fontSize: 12,
                                    fontWeight: 400,
                                    padding: '6px 8px',
                                    zIndex: 4,
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                                    textAlign: 'left',
                                  }}
                                >
                                  {performanceInsightStatusHelp[
                                    insight.status as keyof typeof performanceInsightStatusHelp
                                  ]}
                                </span>
                              ) : null}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : activeVisibilitySummaryTab === 'types' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'stretch' }}>
                    <div style={VISIBILITY_TYPES_GRID}>
                      {visibilityTypeCards.slice(0, 5).map((typeLabel) => (
                        <div key={typeLabel} style={VISIBILITY_TYPE_CARD}>
                          <span style={VISIBILITY_TYPE_CARD_LEFT}>
                            <span style={VISIBILITY_TYPE_CARD_CIRCLE} />
                            <span style={{ fontSize: 12 }}>{typeLabel}</span>
                          </span>
                          <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        background: '#ffffff',
                        border: `1px solid ${TOK.border}`,
                        borderRadius: 6,
                        padding: '10px 12px',
                        height: '100%',
                        boxSizing: 'border-box',
                      }}
                    >
                      <div style={{ display: 'grid', gap: 2 }}>
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, position: 'relative' }}>
                          <div style={{ ...INFRA_STATE_HEADER, marginBottom: 0 }}>Performance Impact by Type</div>
                          <button
                            type="button"
                            onClick={() => setShowPerformancePressureTooltip((value) => !value)}
                            aria-label="Performance Pressure info"
                            style={{
                              width: 14,
                              height: 14,
                              borderRadius: 999,
                              border: `1px solid ${TOK.border}`,
                              background: TOK.layer01,
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: 10,
                              color: TOK.textSecondary,
                              cursor: 'pointer',
                              padding: 0,
                              flexShrink: 0,
                            }}
                          >
                            i
                          </button>
                          {showPerformancePressureTooltip ? (
                            <div
                              role="tooltip"
                              style={{
                                position: 'absolute',
                                top: 20,
                                left: 0,
                                maxWidth: 260,
                                border: `1px solid ${TOK.border}`,
                                borderRadius: 4,
                                background: TOK.layer01,
                                color: TOK.textPrimary,
                                fontSize: 12,
                                fontWeight: 400,
                                padding: '5px 8px',
                                zIndex: 4,
                                boxShadow: '0 4px 12px rgba(0,0,0,0.10)',
                              }}
                            >
                              How much a given layer contributes to observed performance stress or degradation.
                            </div>
                          ) : null}
                        </div>
                        <div style={{ fontSize: 11, color: TOK.textSecondary }}>
                          Distribution of performance impact across infrastructure layers (7d)
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gap: 6,
                          gridTemplateRows: `repeat(${visibilityTypeDistribution.length}, minmax(0, 1fr))`,
                          flex: 1,
                          padding: '2px 0 6px 0',
                          boxSizing: 'border-box',
                        }}
                      >
                        {visibilityTypeDistribution.map((item) => (
                          <div
                            key={item.label}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '130px 1fr auto',
                              alignItems: 'center',
                              gap: 8,
                              minHeight: 0,
                            }}
                          >
                            <span style={{ fontSize: 12, color: TOK.textPrimary }}>{item.label}</span>
                            <span
                              style={{
                                display: 'grid',
                                gridTemplateColumns: `${item.score}fr ${100 - item.score}fr`,
                                alignItems: 'stretch',
                                height: 12,
                                minWidth: 0,
                              }}
                            >
                              <span style={{ background: TOK.textPrimary }} />
                              <span
                                style={{
                                  backgroundImage:
                                    'repeating-linear-gradient(90deg, rgba(51,51,51,0.95) 0 3px, transparent 3px 6px), repeating-linear-gradient(0deg, rgba(51,51,51,0.95) 0 3px, transparent 3px 6px)',
                                  backgroundColor: '#ffffff',
                                  borderLeft: '1px solid #ffffff',
                                }}
                              />
                            </span>
                            <span style={{ fontSize: 12, color: TOK.textPrimary }}>{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : activeVisibilitySummaryTab === 'use-cases' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {visibilityUseCases.map((useCase) => (
                      <div key={useCase} style={VISIBILITY_TYPE_CARD}>
                        <span style={VISIBILITY_TYPE_CARD_LEFT}>
                          <span style={VISIBILITY_TYPE_CARD_CIRCLE} />
                          <span style={{ fontSize: 12 }}>{useCase}</span>
                        </span>
                        <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                      </div>
                    ))}
                  </div>
                ) : activeVisibilitySummaryTab === 'questions' ? (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, alignItems: 'stretch' }}>
                    <div style={{ display: 'grid', gap: 8 }}>
                      {visibilityGraphQuestions.slice(0, 5).map((question) => (
                        <div key={question} style={VISIBILITY_TYPE_CARD}>
                          <span style={VISIBILITY_TYPE_CARD_LEFT}>
                            <span style={VISIBILITY_TYPE_CARD_CIRCLE} />
                            <span style={{ fontSize: 12 }}>{question}</span>
                          </span>
                          <span style={{ color: TOK.textSecondary }}>{'>'}</span>
                        </div>
                      ))}
                    </div>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        background: '#ffffff',
                        border: `1px solid ${TOK.border}`,
                        borderRadius: 6,
                        padding: '10px 12px',
                        boxSizing: 'border-box',
                        height: '100%',
                      }}
                    >
                      <div style={{ display: 'grid', gap: 2 }}>
                        <div style={{ ...INFRA_STATE_HEADER, marginBottom: 0 }}>Targeted Performance Stressors</div>
                        <div style={{ fontSize: 11, color: TOK.textSecondary }}>
                          How specific infrastructure conditions contribute to observed performance stress (7d)
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'grid',
                          gap: 4,
                          gridTemplateRows: `repeat(${visibilityTargetedPerformanceInsights.length}, minmax(0, 1fr))`,
                          flex: 1,
                          padding: '2px 0 4px 0',
                          boxSizing: 'border-box',
                        }}
                      >
                        {visibilityTargetedPerformanceInsights.map((insight) => (
                          <div
                            key={insight.label}
                            style={{
                              display: 'grid',
                              gridTemplateColumns: '130px 1fr auto',
                              alignItems: 'center',
                              gap: 8,
                              minHeight: 0,
                            }}
                          >
                            <span style={{ fontSize: 12, color: TOK.textPrimary }}>{insight.label}</span>
                            <span
                              style={{
                                display: 'grid',
                                gridTemplateColumns: `${insight.score}fr ${100 - insight.score}fr`,
                                alignItems: 'stretch',
                                height: 12,
                                minWidth: 0,
                              }}
                            >
                              <span style={{ background: TOK.textPrimary }} />
                              <span
                                style={{
                                  backgroundImage:
                                    'repeating-linear-gradient(90deg, rgba(51,51,51,0.95) 0 3px, transparent 3px 6px), repeating-linear-gradient(0deg, rgba(51,51,51,0.95) 0 3px, transparent 3px 6px)',
                                  backgroundColor: '#ffffff',
                                  borderLeft: '1px solid #ffffff',
                                }}
                              />
                            </span>
                            <span style={{ fontSize: 12, color: TOK.textPrimary }}>{insight.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
                </div>
              </div>
            </div>
          </section>

        </main>
      </div>

      <footer style={FOOTER}>
        <span>Org Portfolio Wireframe</span>
        <span>Route: /app/organizations</span>
      </footer>
    </div>
  );
}

const meta: Meta<typeof OrgPortfolioOverview> = {
  title: 'Wireframes/OrgPortfolioOverview',
  component: OrgPortfolioOverview,
  parameters: {
    layout: 'fullscreen',
    wireframeChrome: {
      title: 'Organizations Portfolio',
      height: '88vh',
    },
  },
  args: {
    model: orgPortfolioDefaultFixture,
  },
};

export default meta;

type Story = StoryObj<typeof OrgPortfolioOverview>;

export const Default: Story = {
  args: {
    enableOrganizationLinks: true,
    organizationOverviewStory: 'default',
  },
};

export const HighRisk: Story = {
  args: {
    model: orgPortfolioHighRiskFixture,
    enableOrganizationLinks: true,
    organizationOverviewStory: 'high-risk',
  },
};

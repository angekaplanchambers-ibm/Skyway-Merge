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
  gridTemplateColumns: '1fr 1fr',
  gap: 8,
};

const VISIBILITY_QUERY_TILE: CSSProperties = {
  ...TILE,
  display: 'flex',
  flexDirection: 'column',
};

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
  const [activeVisibilitySummaryTab, setActiveVisibilitySummaryTab] = useState<'types' | 'questions'>('types');
  const [selectedQueueItemIds, setSelectedQueueItemIds] = useState<string[]>([]);
  const [showQueueFilterMenu, setShowQueueFilterMenu] = useState(false);
  const [showQueueActionsMenu, setShowQueueActionsMenu] = useState(false);
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
  const visibilityGraphQuestions = [
    "Do I have any Virtual Machines that aren't managed by Terraform?",
    'Are any of my AWS resources provisioned by a non-current version of Terraform?',
    "Do I have any volumes that aren't encrypted at rest?",
    'Which of my EC2 instances are more than 30 days old?',
    'Which resources are missing an Owner tag?',
    'Which of my VMs are using images not provisioned by Packer?',
  ];

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
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span>Visibility</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Explore your resources and ask graph-based questions to investigate Terraform usage, resource relationships, and risk.
              </span>
            </div>
            <div style={VISIBILITY_SUMMARY_LAYOUT}>
              <div style={VISIBILITY_QUERY_TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12, marginBottom: 8 }}>Build your Infragraph query</div>
                <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                  <button type="button" style={{ ...CTA_BUTTON, fontSize: 11, padding: '3px 8px' }}>Clear query</button>
                  <button type="button" style={{ ...CTA_BUTTON, fontSize: 11, padding: '3px 8px' }}>{'</>'}</button>
                  <button type="button" style={{ ...CTA_BUTTON, fontSize: 11, padding: '3px 8px' }}>x</button>
                </div>
                <button type="button" style={VISIBILITY_FIND_BUTTON}>
                  Find...
                </button>
              </div>
              <div style={TILE}>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
                  <div style={{ ...VISIBILITY_TABS_ROW, flex: 1, marginBottom: 0 }}>
                    <button
                      type="button"
                      onClick={() => setActiveVisibilitySummaryTab('types')}
                      style={activeVisibilitySummaryTab === 'types' ? VISIBILITY_TAB_ACTIVE : VISIBILITY_TAB}
                    >
                      Types and Use Cases
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveVisibilitySummaryTab('questions')}
                      style={activeVisibilitySummaryTab === 'questions' ? VISIBILITY_TAB_ACTIVE : VISIBILITY_TAB}
                    >
                      Suggested Questions
                    </button>
                  </div>
                  <span style={{ ...CTA_BUTTON, marginBottom: 6, display: 'inline-block', cursor: 'default' }}>Saved Views</span>
                </div>
                {activeVisibilitySummaryTab === 'types' ? (
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
                ) : (
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
                )}
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

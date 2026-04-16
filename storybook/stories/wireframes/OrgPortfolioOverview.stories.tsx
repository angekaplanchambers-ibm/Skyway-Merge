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
  gridTemplateColumns: '120px 1.1fr 90px 1.6fr 96px 96px 150px',
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

const ORG_TABLE_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 170px 90px 80px 80px 160px 110px 120px',
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

const RELATIONSHIP_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 8,
  padding: 10,
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
  if (id === 'criticalIncidents') return '<= 0';
  if (id === 'criticalDriftOrganizations') return '<= 0';
  if (id === 'validationFailingOrganizations') return '<= 0';
  if (id === 'policyViolatingOrganizations') return '<= 0';
  return '0';
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
  const [showCoverageTooltip, setShowCoverageTooltip] = useState(false);
  const organizationNameById = Object.fromEntries(
    model.organizationsTable.organizations.map((org) => [org.organizationId, org.organizationName]),
  );
  const recommendedConversionItem = model.remediationQueue.queueItems.find(
    (item) => item.issueCategory === 'unmanaged_resource',
  ) ?? model.remediationQueue.queueItems.find((item) => item.nextActionType === 'openSearchImport');
  const recommendedResourceType = model.coverage.topUnmanagedResourceTypes[0]?.resourceType ?? 'unmanaged resource';
  const recommendedWorkspace = recommendedConversionItem
    ? workspaceFromRoute(recommendedConversionItem.nextActionRoute)
    : undefined;

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
              <div>Drift</div>
              <div>Managed / Unmanaged</div>
              <div>Open Remediation</div>
              <div>Freshness</div>
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
                <div>{org.driftIssueCount}</div>
                <div>{org.managedResourceCount} / {org.unmanagedResourceCount}</div>
                <div>{org.openRemediationCount}</div>
                <div>{org.freshnessStatus} ({org.freshnessMinutes}m)</div>
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
                  <div style={{ fontSize: 22, fontWeight: 700 }}>{card.value}</div>
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
            <div style={{ ...RELATIONSHIP_GRID, paddingTop: 0 }}>
              <div style={TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}>Health</div>
                <div style={{ marginTop: 6 }}><strong>Run success 24h:</strong> {model.healthStrip.runSuccessRate24hPct}%</div>
                <div><strong>Run success 7d:</strong> {model.healthStrip.runSuccessRate7dPct}% | Goal: 98%</div>
                <div><strong>Stale state risk:</strong> {model.healthStrip.staleStateRiskCount}</div>
              </div>
              <div style={TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}>Governance</div>
                <div style={{ marginTop: 6 }}><strong>Policy failing orgs:</strong> {model.governancePanel.policyFailingOrganizationCount}</div>
                <div><strong>RBAC anomalies:</strong> {model.governancePanel.rbacAnomalyCount}</div>
                <div><strong>Change request backlog:</strong> {model.governancePanel.changeRequestBacklogCount}</div>
              </div>
              <div style={TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}>Cost</div>
                <div style={{ marginTop: 6 }}><strong>Monthly spend:</strong> ${model.costPanel.monthlySpendTotalUsd.toLocaleString()}</div>
                <div><strong>Anomaly orgs:</strong> {model.costPanel.spendAnomalyOrganizationCount}</div>
                <div><strong>Savings est 30d:</strong> ${model.costPanel.remediationSavingsEstimateUsd30d.toLocaleString()}</div>
              </div>
            </div>
          </section>

          <section style={PANEL}>
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span>Managed vs. Unmanaged Resource Coverage</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Coverage split and conversion opportunities.
              </span>
            </div>
            <div style={{ padding: 10, display: 'grid', gridTemplateColumns: '1fr 1fr 1.3fr', gap: 8 }}>
              <div style={COVERAGE_TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}>Managed</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{model.coverage.managedResourceCount}</div>
                <div style={COVERAGE_CTA_ROW}>
                  <button type="button" style={CTA_BUTTON}>View All Managed</button>
                </div>
              </div>
              <div style={COVERAGE_TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}>Unmanaged</div>
                <div style={{ fontSize: 22, fontWeight: 700 }}>{model.coverage.unmanagedResourceCount}</div>
                <div style={COVERAGE_CTA_ROW}>
                  <button type="button" style={CTA_BUTTON}>View All Unmanaged</button>
                </div>
              </div>
              <div style={COVERAGE_TILE}>
                <div style={{ color: TOK.textSecondary, fontSize: 12, display: 'flex', alignItems: 'center', gap: 6, position: 'relative' }}>
                  <span>Resource coverage insights</span>
                  <button
                    type="button"
                    onClick={() => setShowCoverageTooltip((v) => !v)}
                    aria-label="Resource coverage insights guidance"
                    style={{
                      width: 16,
                      height: 16,
                      borderRadius: 999,
                      border: `1px solid ${TOK.border}`,
                      background: TOK.layer01,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 11,
                      color: TOK.textSecondary,
                      cursor: 'help',
                      userSelect: 'none',
                      padding: 0,
                    }}
                  >
                    i
                  </button>
                  {showCoverageTooltip ? (
                    <div
                      role="tooltip"
                      style={{
                        position: 'absolute',
                        top: 24,
                        left: 0,
                        width: 260,
                        border: `1px solid ${TOK.border}`,
                        borderRadius: 4,
                        background: TOK.layer01,
                        color: TOK.textPrimary,
                        fontSize: 12,
                        padding: '6px 8px',
                        zIndex: 2,
                      }}
                    >
                      Reduce potential drift and improve policy coverage by converting your unmanaged resources
                    </div>
                  ) : null}
                </div>
                <div style={{ marginTop: 6, fontSize: 12 }}>
                  <strong>Resource:</strong>{' '}
                  {recommendedResourceType}
                  {recommendedConversionItem ? ` in ${recommendedConversionItem.organizationName}` : ''}
                  {recommendedWorkspace ? ` / ${recommendedWorkspace}` : ''}
                </div>
                <div style={{ marginTop: 6, color: TOK.textSecondary, fontSize: 12 }}>
                  <strong style={{ color: TOK.textPrimary }}>Risk:</strong>{' '}
                  {recommendedConversionItem?.issueSummary ?? 'Unmanaged resources can bypass drift and policy controls.'}
                </div>
                <div style={{ marginTop: 6, color: TOK.textSecondary, fontSize: 12 }}>
                  <strong style={{ color: TOK.textPrimary }}>Result:</strong>{' '}
                  Enforce policy checks and drift detection through normal Terraform runs.
                </div>
                <div style={COVERAGE_CTA_ROW}>
                  <button type="button" style={CTA_BUTTON}>Convert to Managed</button>
                </div>
              </div>
            </div>
          </section>

          <section style={PANEL}>
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span>Prioritized Remediation Queue</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Highest-impact remediation work ranked by urgency.
              </span>
            </div>
            <div style={TABLE_HEADER}>
              <div>Severity</div>
              <div>Organization</div>
              <div>Workspaces</div>
              <div>Issue</div>
              <div>Blast</div>
              <div>Age (m)</div>
              <div>Actions</div>
            </div>
            {model.remediationQueue.queueItems.map((item) => (
              <div key={item.queueItemId} style={TABLE_ROW}>
                <div>{severityMark(item.severity)} {item.severity}</div>
                <div>
                  {enableOrganizationLinks ? (
                    <a
                      href={organizationOverviewStoryHref(
                        organizationOverviewStory,
                        organizationNameById[item.organizationId] ?? item.organizationName,
                      )}
                      target="_top"
                      style={ORG_NAME_LINK}
                    >
                      {organizationNameById[item.organizationId] ?? item.organizationName}
                    </a>
                  ) : (
                    organizationNameById[item.organizationId] ?? item.organizationName
                  )}
                </div>
                <div>{item.affectedWorkspaceCount}</div>
                <div>{item.issueSummary}</div>
                <div>{item.blastRadiusScore}</div>
                <div>{item.ageMinutes}</div>
                <div>{nextActionLabel(item)}</div>
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

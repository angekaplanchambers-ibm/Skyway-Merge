import { useState, type CSSProperties } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { IconCheck16 } from '@hashicorp/flight-icons/svg-react/check-16';
import { IconChevronDown16 } from '@hashicorp/flight-icons/svg-react/chevron-down-16';
import { IconChevronUp16 } from '@hashicorp/flight-icons/svg-react/chevron-up-16';
import {
  organizationOverviewDefaultFixture,
  organizationOverviewHighRiskFixture,
  organizationsRowsFixture,
  type OrganizationOverviewData,
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

const BODY_LAYOUT: CSSProperties = {
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

const NAV_ACTIVE: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  background: TOK.layer02,
  borderRadius: 6,
  padding: '10px 10px',
  color: 'var(--z-accent, #2563eb)',
  fontSize: 12,
  fontWeight: 500,
  marginBottom: 18,
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

const MAIN: CSSProperties = {
  minWidth: 0,
  overflowY: 'auto',
  padding: 16,
  display: 'grid',
  gap: 12,
  gridTemplateRows: 'repeat(6, auto)',
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

const TILE_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, minmax(120px, 1fr))',
  gap: 8,
  padding: 10,
};

const TILE: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  background: TOK.layer02,
  borderRadius: 4,
  padding: 8,
};

const LIST_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '90px 1.4fr 0.8fr 2fr 0.8fr 1fr',
  gap: 8,
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  fontSize: 12,
  color: TOK.textSecondary,
};

const LIST_ROW: CSSProperties = {
  ...LIST_HEADER,
  fontSize: 13,
  color: TOK.textPrimary,
};

const WS_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.3fr 100px 70px 90px 90px 180px',
  gap: 8,
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  fontSize: 12,
  color: TOK.textSecondary,
};

const WS_ROW: CSSProperties = {
  ...WS_HEADER,
  fontSize: 13,
  color: TOK.textPrimary,
};

const RESOURCE_HEADER: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.1fr 90px 1fr 95px 100px 1fr 90px',
  gap: 8,
  padding: '8px 10px',
  borderBottom: `1px solid ${TOK.border}`,
  fontSize: 12,
  color: TOK.textSecondary,
};

const RESOURCE_ROW: CSSProperties = {
  ...RESOURCE_HEADER,
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

const VIEW_BUTTON: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  color: TOK.textPrimary,
  cursor: 'pointer',
  fontSize: 12,
  fontWeight: 500,
  padding: '4px 8px',
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

const NAV_LINK: CSSProperties = {
  color: 'inherit',
  textDecoration: 'none',
};

const ACTION_LINK: CSSProperties = {
  color: 'var(--z-accent, #2563eb)',
  textDecoration: 'none',
  fontWeight: 500,
};

const SURFACE_GRID: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
  gap: 8,
  marginTop: 10,
};

function statusTag(status: 'healthy' | 'warning' | 'critical'): string {
  if (status === 'healthy') return 'OK';
  if (status === 'warning') return 'WARN';
  return 'CRIT';
}

function runTag(status: 'applied' | 'planning' | 'failed' | 'canceled'): string {
  if (status === 'applied') return 'APPLIED';
  if (status === 'planning') return 'PLANNING';
  if (status === 'failed') return 'FAILED';
  return 'CANCELED';
}

function severityTag(sev: 'critical' | 'high' | 'medium'): string {
  if (sev === 'critical') return '!!!';
  if (sev === 'high') return '!!';
  return '!';
}

function sourceTag(source: 'explorer' | 'infragraph'): string {
  return source === 'explorer' ? 'Explorer' : 'Infragraph';
}

function managementTag(status: 'rum' | 'unmanaged'): string {
  return status === 'rum' ? 'managed' : 'unmanaged';
}

function importReadinessTag(status: 'ready' | 'blocked_policy' | 'not_applicable'): string {
  if (status === 'ready') return 'Ready';
  if (status === 'blocked_policy') return 'Blocked';
  return '-';
}

function orgPortfolioStoryHref(story: 'default' | 'high-risk'): string {
  if (story === 'high-risk') {
    return '?path=/story/wireframes-orgportfoliooverview--highrisk';
  }

  return '?path=/story/wireframes-orgportfoliooverview--default';
}

function organizationOverviewStoryHref(
  story: 'default' | 'high-risk',
  organizationName: string,
): string {
  const storyId = story === 'high-risk' ? 'highrisk' : 'default';

  return `?path=/story/wireframes-organizationoverview--${storyId}&args=model.organizationName:${encodeURIComponent(organizationName)}`;
}

function visibilityStoryHref(variant: 'a' | 'b'): string {
  if (variant === 'b') return '?path=/story/wireframes-visibility--visibility-b';
  return '?path=/story/wireframes-visibility--visibility-a';
}

function orgSubpageHref(
  orgName: string,
  destination:
    | 'projects'
    | 'stacks'
    | 'workspaces'
    | 'iam'
    | 'usage'
    | 'registry'
    | 'settings'
    | 'explorer'
    | 'infragraph',
): string {
  const org = encodeURIComponent(orgName);

  if (destination === 'projects') return `/app/${org}/projects`;
  if (destination === 'stacks') return `/app/${org}/stacks`;
  if (destination === 'workspaces') return `/app/${org}/workspaces`;
  if (destination === 'iam') return `/app/${org}/settings?view=access`;
  if (destination === 'usage') return `/app/${org}/usage`;
  if (destination === 'registry') return `/app/${org}/registry`;
  if (destination === 'settings') return `/app/${org}/settings`;
  if (destination === 'explorer') return `/app/${org}/explorer`;
  return `/app/${org}/resource-graph`;
}

function nextActionLabel(item: OrganizationOverviewData['remediationQueue'][number]): string {
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

function SideNav({ portfolioHref }: { portfolioHref?: string }) {
  const visibilityNavLinkStyle: CSSProperties = {
    ...NAV_LINK,
    color: 'var(--z-accent, #2563eb)',
  };

  const visibilityInlineRowStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    color: TOK.textSecondary,
    fontSize: 12,
  };

  return (
    <aside style={SIDEBAR}>
      <div style={NAV_ACTIVE}>
        {portfolioHref ? (
          <a href={portfolioHref} target="_top" style={NAV_LINK}>{'< Organizations Portfolio'}</a>
        ) : (
          <span>{'< Organizations Portfolio'}</span>
        )}
      </div>

      <div style={NAV_GROUP_LABEL}>Discover</div>
      <div style={NAV_ITEM}>
        <div style={NAV_ITEM_LEFT}>
          <NavGlyph />
          <span style={visibilityInlineRowStyle}>
            <span>Visibility</span>
            <a href={visibilityStoryHref('a')} target="_top" style={visibilityNavLinkStyle}>(A)</a>
            <a href={visibilityStoryHref('b')} target="_top" style={visibilityNavLinkStyle}>(B)</a>
          </span>
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
  );
}

function OrganizationOverview({
  model,
  enablePortfolioBreadcrumbLink = false,
  portfolioHref,
  organizationOverviewStory = 'default',
}: {
  model: OrganizationOverviewData;
  enablePortfolioBreadcrumbLink?: boolean;
  portfolioHref?: string;
  organizationOverviewStory?: 'default' | 'high-risk';
}) {
  const [showOrganizationMenu, setShowOrganizationMenu] = useState(false);
  const organizationOptions = organizationsRowsFixture.map((org) => org.organizationName);
  const handleOverviewViewClick = () => {};

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
                <a
                  key={organizationName}
                  href={organizationOverviewStoryHref(organizationOverviewStory, organizationName)}
                  target="_top"
                  role="menuitem"
                  style={{
                    ...HEADER_DROPDOWN_ITEM,
                    background:
                      organizationName === model.organizationName ? TOK.layer02 : 'transparent',
                  }}
                >
                  <span>{organizationName}</span>
                  {organizationName === model.organizationName ? (
                    <IconCheck16 aria-hidden color="var(--z-accent, #2563eb)" />
                  ) : null}
                </a>
              ))}
            </div>
          ) : null}
        </div>
        <span style={{ color: TOK.textSecondary }}>
          {enablePortfolioBreadcrumbLink && portfolioHref ? (
            <>
              <a href={portfolioHref} target="_top" style={BREADCRUMB_LINK}>Organizations Portfolio</a>
              {' / '}
              {model.organizationName}
            </>
          ) : (
            <>Organizations Portfolio / {model.organizationName}</>
          )}
        </span>
        <span style={{ marginLeft: 'auto', color: TOK.textSecondary }}>
          Deploy mode: {model.deploymentMode}
        </span>
      </header>

      <div style={BODY_LAYOUT}>
        <SideNav portfolioHref={portfolioHref} />

        <main style={MAIN}>
          <section style={PANEL}>
          <div style={PANEL_HEADER}>Organization Overview</div>
          <div style={{ padding: 10 }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{model.organizationName}</div>
            <div style={{ color: TOK.textSecondary, fontSize: 10 }}>
              Health: {statusTag(model.overallHealth)} | Type: {model.organizationType} | Workspaces: {model.workspaceCount}
            </div>
            <div style={SURFACE_GRID}>
              <div style={{ ...TILE, display: 'flex', flexDirection: 'column', minHeight: 112 }}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}><strong>Explorer View</strong></div>
                <div>Best for managed posture, governance, and latest-state overview.</div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={handleOverviewViewClick} style={VIEW_BUTTON}>
                    View
                  </button>
                </div>
              </div>
              <div style={{ ...TILE, display: 'flex', flexDirection: 'column', minHeight: 112 }}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}><strong>Resource Graph</strong></div>
                <div>Investigate managed and unmanaged resource relationships, dependencies and potential blast-radius.</div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={handleOverviewViewClick} style={VIEW_BUTTON}>
                    View
                  </button>
                </div>
              </div>
              <div style={{ ...TILE, display: 'flex', flexDirection: 'column', minHeight: 112 }}>
                <div style={{ color: TOK.textSecondary, fontSize: 12 }}><strong>Search and Import</strong></div>
                <div>Find unmanaged resources in a workspace and start guided import.</div>
                <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'flex-end' }}>
                  <button type="button" onClick={handleOverviewViewClick} style={VIEW_BUTTON}>
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
          </section>

          <section style={PANEL}>
          <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <span>Posture Summary</span>
            <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              At-a-glance counts for incidents, drift, policy, and coverage.
            </span>
          </div>
          <div style={TILE_GRID}>
            <div style={TILE}><div>Active incidents</div><strong>{model.activeIncidentCount}</strong></div>
            <div style={TILE}><div>Critical drift ws</div><strong>{model.criticalDriftWorkspaceCount}</strong></div>
            <div style={TILE}><div>Validation failing ws</div><strong>{model.validationFailingWorkspaceCount}</strong></div>
            <div style={TILE}><div>Policy violating ws</div><strong>{model.policyViolatingWorkspaceCount}</strong></div>
            <div style={TILE}><div>Managed / Unmanaged</div><strong>{model.managedResourceCount} / {model.unmanagedResourceCount}</strong></div>
            <div style={TILE}><div>Coverage</div><strong>{model.managedCoveragePct}%</strong></div>
          </div>
          </section>

          <section style={PANEL}>
          <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
            <span>Workspace Status</span>
            <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              Workspace run health, drift, validation, and change request status.
            </span>
          </div>
          <div style={WS_HEADER}>
            <div>Workspace</div>
            <div>Run</div>
            <div>Drift</div>
            <div>Validation</div>
            <div>CRs</div>
            <div>Last successful run</div>
          </div>
          {model.workspaces.map((ws) => (
            <div key={ws.workspaceId} style={WS_ROW}>
              <div>{ws.workspaceName}</div>
              <div>{runTag(ws.latestRunStatus)}</div>
              <div>{ws.driftIssueCount}</div>
              <div>{ws.validationIssueCount}</div>
              <div>{ws.openChangeRequestCount}</div>
              <div>{ws.lastSuccessfulRunAt ?? '-'}</div>
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
              <span>Resource Inventory</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Resource-level inventory with source, management, workspace, and import status.
              </span>
            </div>
            <div style={RESOURCE_HEADER}>
              <div>Name</div>
              <div>Provider</div>
              <div>Type</div>
              <div>Surface</div>
              <div>Status</div>
              <div>Workspace</div>
              <div>Import</div>
            </div>
            {model.resourceInventory.map((resource) => (
              <div key={resource.resourceId} style={RESOURCE_ROW}>
                <div>{resource.resourceName}</div>
                <div>{resource.provider}</div>
                <div>{resource.resourceType}</div>
                <div>{sourceTag(resource.sourceSurface)}</div>
                <div>{managementTag(resource.managementStatus)}</div>
                <div>{resource.workspaceName}</div>
                <div>{importReadinessTag(resource.importReadiness)}</div>
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
            <span>Organization Remediation Queue</span>
            <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
              Prioritized remediation items ranked by severity and blast radius.
            </span>
          </div>
          <div style={LIST_HEADER}>
            <div>Severity</div>
            <div>Category</div>
            <div>Ws</div>
            <div>Issue</div>
            <div>Blast</div>
            <div>Actions</div>
          </div>
          {model.remediationQueue.map((item) => (
            <div key={item.queueItemId} style={LIST_ROW}>
              <div>{severityTag(item.severity)} {item.severity}</div>
              <div>{item.issueCategory}</div>
              <div>{item.affectedWorkspaceCount}</div>
              <div>{item.issueSummary}</div>
              <div>{item.blastRadiusScore}</div>
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
        <span>Organization Overview Wireframe</span>
        <span>Route: /app/organizations/{'{org}'}</span>
      </footer>
    </div>
  );
}

const meta: Meta<typeof OrganizationOverview> = {
  title: 'Wireframes/OrganizationOverview',
  component: OrganizationOverview,
  parameters: {
    layout: 'fullscreen',
    wireframeChrome: {
      title: 'Organization Overview',
      height: '88vh',
    },
  },
  args: {
    model: organizationOverviewDefaultFixture,
  },
};

export default meta;

type Story = StoryObj<typeof OrganizationOverview>;

export const Default: Story = {
  args: {
    enablePortfolioBreadcrumbLink: true,
    organizationOverviewStory: 'default',
    portfolioHref: orgPortfolioStoryHref('default'),
  },
};

export const HighRisk: Story = {
  args: {
    model: organizationOverviewHighRiskFixture,
    enablePortfolioBreadcrumbLink: true,
    organizationOverviewStory: 'high-risk',
    portfolioHref: orgPortfolioStoryHref('high-risk'),
  },
};

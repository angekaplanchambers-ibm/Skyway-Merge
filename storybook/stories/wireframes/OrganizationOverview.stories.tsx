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
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: 8,
  padding: 10,
};

const TILE: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  background: TOK.layer02,
  borderRadius: 4,
  padding: 8,
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

const STATUS_FILTER_BUTTON: CSSProperties = {
  border: 'none',
  background: 'transparent',
  padding: 0,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 18,
  height: 18,
  color: TOK.textSecondary,
  cursor: 'pointer',
};

const STATUS_FILTER_MENU: CSSProperties = {
  position: 'absolute',
  top: 20,
  right: 0,
  minWidth: 120,
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: TOK.layer01,
  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
  zIndex: 3,
  padding: 4,
};

const STATUS_FILTER_MENU_ITEM: CSSProperties = {
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

const FLEET_SNAPSHOT_PANEL: CSSProperties = {
  paddingTop: 0,
};

const FLEET_ROW: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.2fr 1.8fr 150px 100px 36px',
  alignItems: 'center',
  gap: 12,
  border: `1px solid ${TOK.border}`,
  borderRadius: 8,
  padding: '12px 14px',
  background: TOK.layer02,
};

const STATUS_PILL: Record<'active' | 'inactive', CSSProperties> = {
  active: {
    borderRadius: 8,
    padding: '4px 10px',
    background: '#d1fae5',
    color: '#166534',
    fontWeight: 600,
    fontSize: 12,
    width: 'fit-content',
  },
  inactive: {
    borderRadius: 8,
    padding: '4px 10px',
    background: '#e5e7eb',
    color: '#374151',
    fontWeight: 600,
    fontSize: 12,
    width: 'fit-content',
  },
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

function kpi7dGoal(id: OrganizationOverviewData['postureKpiCards'][number]['id']): string {
  if (id === 'criticalIncidents') return '>= 75';
  if (id === 'criticalDriftOrganizations') return '>=$150k';
  if (id === 'validationFailingOrganizations') return '>= 15';
  if (id === 'policyViolatingOrganizations') return '>= 80%';
  return '0';
}

function formatKpiValue(card: OrganizationOverviewData['postureKpiCards'][number]): string {
  if (card.id === 'criticalDriftOrganizations') {
    return `$${card.value.toLocaleString()}`;
  }
  if (card.id === 'policyViolatingOrganizations') {
    return `${card.value}%`;
  }
  return card.value.toLocaleString();
}

function agentProgressLabel(
  status: OrganizationOverviewData['remediationQueue'][number]['agentProgressStatus'],
): string {
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
  const [showStatusFilterMenu, setShowStatusFilterMenu] = useState(false);
  const [selectedQueueItemIds, setSelectedQueueItemIds] = useState<string[]>([]);
  const [showQueueFilterMenu, setShowQueueFilterMenu] = useState(false);
  const [showQueueActionsMenu, setShowQueueActionsMenu] = useState(false);
  const [resourceStatusPriority, setResourceStatusPriority] = useState<'managed' | 'unmanaged' | null>(null);
  const organizationOptions = organizationsRowsFixture.map((org) => org.organizationName);
  const handleOverviewViewClick = () => {};
  const allQueueItemIds = model.remediationQueue.map((item) => item.queueItemId);
  const allQueueRowsSelected =
    allQueueItemIds.length > 0 && allQueueItemIds.every((id) => selectedQueueItemIds.includes(id));

  const sortedResourceInventory = [...model.resourceInventory].sort((a, b) => {
    if (!resourceStatusPriority) return 0;

    const leftStatus = managementTag(a.managementStatus);
    const rightStatus = managementTag(b.managementStatus);
    const leftRank = leftStatus === resourceStatusPriority ? 0 : 1;
    const rightRank = rightStatus === resourceStatusPriority ? 0 : 1;

    if (leftRank !== rightRank) {
      return leftRank - rightRank;
    }

    return a.resourceName.localeCompare(b.resourceName);
  });

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
        <span style={{ marginLeft: 'auto', color: TOK.textSecondary }}>
          Deploy mode: {model.deploymentMode}
        </span>
      </header>

      <div style={BODY_LAYOUT}>
        <SideNav portfolioHref={portfolioHref} />

        <main style={MAIN}>
          <div style={{ color: TOK.textSecondary, textAlign: 'left' }}>
            {enablePortfolioBreadcrumbLink && portfolioHref ? (
              <>
                <a href={portfolioHref} target="_top" style={BREADCRUMB_LINK}>Organizations Portfolio</a>
                {' / '}
                Organization Overview
              </>
            ) : (
              <>Organizations Portfolio / Organization Overview</>
            )}
          </div>
          <section style={PANEL}>
          <div style={{ ...PANEL_HEADER, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span>Organization Overview</span>
            <span style={{ color: TOK.textSecondary, fontSize: 12, fontWeight: 500, letterSpacing: 'normal', textTransform: 'none' }}>
              Type: {model.organizationType}
            </span>
          </div>
          <div style={{ padding: 10 }}>
            <div style={{ fontSize: 24, fontWeight: 700 }}>{model.organizationName}</div>
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                Posture Summary
              </span>
              <span style={{ color: TOK.textSecondary, fontSize: 10 }}>
                Shared posture KPIs for remediation performance, savings, and coverage.
              </span>
            </div>
            <div style={{ ...TILE_GRID, padding: '10px 0 0' }}>
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
                margin: '10px 0 0',
              }}
            />
            <div style={{ ...FLEET_SNAPSHOT_PANEL, marginTop: 10 }}>
              <div style={{ marginBottom: 8, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
                <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
                  Agentic Fleet Snapshot
                </span>
                <span style={{ color: TOK.textSecondary, fontSize: 10 }}>
                  Fleet-level activity and current agent status.
                </span>
              </div>
              <div style={{ display: 'grid', gap: 10 }}>
                {model.fleetSnapshot.map((agent) => (
                  <div key={agent.agentId} style={FLEET_ROW}>
                    <div style={{ fontSize: 12, fontWeight: 700 }}>{agent.name}</div>
                    <div style={{ color: TOK.textSecondary, fontSize: 12 }}>{agent.description}</div>
                    <div style={{ fontSize: 12 }}><strong>{agent.metricLabel}:</strong> {agent.remediations}</div>
                    <div><span style={STATUS_PILL[agent.status]}>{agent.status === 'active' ? '✓ Active' : '× Inactive'}</span></div>
                    <div style={{ fontSize: 18, color: TOK.textSecondary, textAlign: 'center' }}>→</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </section>

          <section style={PANEL}>
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 2 }}>
              <span>Agentic Workflows</span>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                View performance of Fleet Agents
              </span>
            </div>
            <div style={FILTER_ROW}>
              <div style={{ position: 'relative' }}>
                <button
                  type="button"
                  style={ACTIONS_DROPDOWN_BUTTON}
                  onClick={() => setShowQueueActionsMenu((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={showQueueActionsMenu}
                >
                  Actions v
                </button>
                {showQueueActionsMenu ? (
                  <div
                    role="menu"
                    style={{
                      position: 'absolute',
                      top: 30,
                      left: 0,
                      minWidth: 120,
                      border: `1px solid ${TOK.border}`,
                      borderRadius: 4,
                      background: TOK.layer01,
                      padding: 4,
                      zIndex: 2,
                    }}
                  >
                    <button
                      type="button"
                      role="menuitem"
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        border: 0,
                        background: 'transparent',
                        color: TOK.textPrimary,
                        fontSize: 12,
                        padding: '6px 8px',
                        cursor: 'pointer',
                      }}
                    >
                      Escalate
                    </button>
                  </div>
                ) : null}
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  type="button"
                  style={ACTIONS_DROPDOWN_BUTTON}
                >
                  Agentic Workflow
                </button>
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    style={FILTER_MENU_BUTTON}
                    onClick={() => setShowQueueFilterMenu((v) => !v)}
                    aria-haspopup="menu"
                    aria-expanded={showQueueFilterMenu}
                  >
                    <span>Filter By</span>
                    <span aria-hidden>v</span>
                  </button>
                  {showQueueFilterMenu ? (
                    <div
                      role="menu"
                      style={{
                        position: 'absolute',
                        top: 30,
                        left: 0,
                        width: 100,
                        border: `1px solid ${TOK.border}`,
                        borderRadius: 4,
                        background: TOK.layer01,
                        padding: 6,
                        zIndex: 2,
                      }}
                    >
                      <div style={{ ...FILTER_PILL, border: 'none' }}>
                        <strong style={{ color: TOK.textPrimary }}>Project</strong>
                      </div>
                      <div style={{ ...FILTER_PILL, border: 'none' }}>
                        <strong style={{ color: TOK.textPrimary }}>Workspace</strong>
                      </div>
                      <div style={{ ...FILTER_PILL, border: 'none' }}>
                        <strong style={{ color: TOK.textPrimary }}>Agent status</strong>
                      </div>
                      <div style={{ ...FILTER_PILL, border: 'none' }}>
                        <strong style={{ color: TOK.textPrimary }}>Criticality</strong>
                      </div>
                      <div style={{ height: 1, background: TOK.border, margin: '8px -6px 6px' }} />
                      <div style={{ ...FILTER_PILL, border: 'none' }}>
                        <strong style={{ color: TOK.textPrimary }}>Agent Type:</strong>
                      </div>
                      <div style={{ display: 'grid', gap: 6, width: '100%' }}>
                        {['Remediation', 'Upgrade', 'Drift', 'Plan Analyzer', 'FinOps'].map((agentName) => (
                          <div
                            key={agentName}
                            style={{ ...FILTER_PILL, border: 'none', display: 'flex', width: '100%', boxSizing: 'border-box' }}
                          >
                            <span>{agentName}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <div style={TABLE_HEADER}>
              <div>
                <input
                  type="checkbox"
                  aria-label="Select all queue items"
                  style={CHECKBOX_INPUT}
                  checked={allQueueRowsSelected}
                  onChange={(event) => {
                    setSelectedQueueItemIds(event.target.checked ? allQueueItemIds : []);
                  }}
                />
              </div>
              <div>Criticality</div>
              <div>Agent</div>
              <div>Agent Status</div>
              <div>Workspace</div>
              <div>GitHub Ticket</div>
              <div>GitHub Repo</div>
              <div>Issue</div>
            </div>
            {model.remediationQueue.map((item) => (
              <div key={item.queueItemId} style={TABLE_ROW}>
                <div>
                  <input
                    type="checkbox"
                    aria-label={`Select ${item.queueItemId}`}
                    style={CHECKBOX_INPUT}
                    checked={selectedQueueItemIds.includes(item.queueItemId)}
                    onChange={(event) => {
                      setSelectedQueueItemIds((prev) => {
                        if (event.target.checked) return [...prev, item.queueItemId];
                        return prev.filter((id) => id !== item.queueItemId);
                      });
                    }}
                  />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <span style={CRITICALITY_TAG[item.criticalityTag]}>{item.criticalityTag}</span>
                    <span>{item.ageMinutes}m</span>
                  </div>
                </div>
                <div>{agentTypeLabel(item.agentType)}</div>
                <div>{agentProgressLabel(item.agentProgressStatus)}</div>
                <div>{item.primaryWorkspaceName ?? `${item.affectedWorkspaceCount} workspaces`}</div>
                <div>
                  <a href={item.githubTicketUrl} target="_blank" rel="noreferrer" style={ACTION_LINK}>
                    {item.githubTicketId}
                  </a>
                </div>
                <div>
                  <a href={item.githubRepoUrl} target="_blank" rel="noreferrer" style={ACTION_LINK}>
                    {repoLabel(item.githubRepoUrl)}
                  </a>
                </div>
                <div>{item.issueSummary}</div>
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
          <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 2 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, width: '100%' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span>Workspace Status</span>
                <span
                  style={{
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
                    boxSizing: 'border-box',
                  }}
                >
                  {model.workspaces.length}
                </span>
              </span>
              <button type="button" onClick={handleOverviewViewClick} style={VIEW_BUTTON}>View</button>
            </div>
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
            <div style={{ ...PANEL_HEADER, display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 2 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, width: '100%' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <span>Resource Inventory</span>
                  <span
                    style={{
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
                      boxSizing: 'border-box',
                    }}
                  >
                    {model.resourceInventory.length}
                  </span>
                </span>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
                  <button
                    type="button"
                    onClick={handleOverviewViewClick}
                    style={{ ...VIEW_BUTTON, borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                  >
                    Import
                  </button>
                  <button
                    type="button"
                    onClick={handleOverviewViewClick}
                    style={{ ...VIEW_BUTTON, borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeft: 'none' }}
                  >
                    View
                  </button>
                </div>
              </div>
              <span style={{ color: TOK.textSecondary, fontSize: 10, fontWeight: 400, textTransform: 'none', letterSpacing: 'normal' }}>
                Resource-level inventory with source, management, workspace, and import status.
              </span>
            </div>
            <div style={RESOURCE_HEADER}>
              <div>Name</div>
              <div>Provider</div>
              <div>Type</div>
              <div>Surface</div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6, position: 'relative' }}>
                <span>Status</span>
                <button
                  type="button"
                  onClick={() => setShowStatusFilterMenu((current) => !current)}
                  aria-label="Filter status"
                  aria-haspopup="menu"
                  aria-expanded={showStatusFilterMenu}
                  style={{
                    ...STATUS_FILTER_BUTTON,
                    color: resourceStatusPriority ? TOK.textPrimary : TOK.textSecondary,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                    <path
                      d="M1.5 2H10.5L7 6V10L5 9V6L1.5 2Z"
                      stroke="currentColor"
                      strokeWidth="1"
                      fill="none"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {showStatusFilterMenu ? (
                  <div role="menu" aria-label="Status filters" style={STATUS_FILTER_MENU}>
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={resourceStatusPriority === 'managed'}
                      style={STATUS_FILTER_MENU_ITEM}
                      onClick={() => {
                        setResourceStatusPriority('managed');
                        setShowStatusFilterMenu(false);
                      }}
                    >
                      <span style={{ width: 12, color: '#374151', lineHeight: 1 }}>
                        {resourceStatusPriority === 'managed' ? 'x' : ''}
                      </span>
                      <span>Managed</span>
                    </button>
                    <button
                      type="button"
                      role="menuitemradio"
                      aria-checked={resourceStatusPriority === 'unmanaged'}
                      style={STATUS_FILTER_MENU_ITEM}
                      onClick={() => {
                        setResourceStatusPriority('unmanaged');
                        setShowStatusFilterMenu(false);
                      }}
                    >
                      <span style={{ width: 12, color: '#374151', lineHeight: 1 }}>
                        {resourceStatusPriority === 'unmanaged' ? 'x' : ''}
                      </span>
                      <span>Unmanaged</span>
                    </button>
                  </div>
                ) : null}
              </div>
              <div>Workspace</div>
              <div>Import</div>
            </div>
            {sortedResourceInventory.map((resource) => (
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

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
  gap: 10,
  padding: '9px 6px',
  color: TOK.textSecondary,
  fontSize: 12,
};

const NAV_SINGLE_ITEM: CSSProperties = {
  ...NAV_ITEM,
  background: TOK.layer02,
  borderRadius: 6,
  color: 'var(--z-accent, #2563eb)',
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
  borderBottom: '2px solid transparent',
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
  borderBottomColor: 'var(--z-accent, #2563eb)',
};

const PREVIEW_SPLIT: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 10,
  marginTop: 14,
};

const PREVIEW_PANEL: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 6,
  background: TOK.layer02,
  padding: 10,
};

const NEW_QUERY_BUTTON: CSSProperties = {
  border: `1px solid ${TOK.border}`,
  borderRadius: 4,
  background: 'var(--z-accent, #2563eb)',
  color: '#fff',
  fontSize: 12,
  fontWeight: 600,
  padding: '6px 10px',
  cursor: 'pointer',
};

function organizationOverviewHref(): string {
  return '?path=/story/wireframes-organizationoverview--default';
}

function VisibilityPage() {
  const [showOrganizationMenu, setShowOrganizationMenu] = useState(false);
  const [selectedOrganization, setSelectedOrganization] = useState('ILM_Demo_Space');
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
          {selectedOrganization}
          {' / Visibility'}
        </span>
        <span style={{ marginLeft: 'auto', color: TOK.textSecondary }}>Deploy mode: tfe_on_prem</span>
      </header>

      <div style={BODY}>
        <aside style={SIDEBAR}>
          <div style={NAV_SINGLE_ITEM}>
            <a href={organizationOverviewHref()} target="_top" style={NAV_LINK}>
              {'< Organization Overview'}
            </a>
          </div>
        </aside>

        <main style={MAIN}>
          <section style={{ padding: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.1 }}>Visibility</div>
                <div style={{ color: TOK.textSecondary, fontSize: 12, marginTop: 4 }}>
                  Start in Explorer View for usage and posture insights, then use Infragraph to investigate dependency and risk.
                </div>
              </div>
            </div>

            <div style={PREVIEW_SPLIT}>
              <div style={PREVIEW_PANEL}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <strong style={{ fontSize: 22 }}>Explorer View</strong>
                  <button type="button" style={{ ...NEW_QUERY_BUTTON, marginLeft: 'auto' }}>New query</button>
                </div>
                <div style={{ color: TOK.textSecondary, fontSize: 12, marginTop: 4 }}>
                  Explore your managed resources to analyze your organization's Terraform usage.
                </div>

                <div style={HDS_TAB_ROW}>
                  <span style={HDS_TAB_ACTIVE}>Types & use cases</span>
                  <span style={HDS_TAB}>Saved views (50)</span>
                </div>

                <div style={{ marginTop: 12, fontSize: 13, color: TOK.textSecondary }}>Types</div>
                <div style={{ ...STACKED_CARD_GRID, marginTop: 8 }}>
                  {explorerTypeCards.map((label) => (
                    <div key={label} style={CARD}>
                      <span>{label}</span>
                      <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 14, fontSize: 13, color: TOK.textSecondary }}>Use cases</div>
                <div style={{ ...STACKED_CARD_GRID, marginTop: 8 }}>
                  {explorerUseCases.map((label) => (
                    <div key={label} style={CARD}>
                      <span>{label}</span>
                      <span style={{ color: 'var(--z-accent, #2563eb)' }}>{'>'}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={PREVIEW_PANEL}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <strong style={{ fontSize: 22 }}>Graph Explorer</strong>
                </div>
                <div style={{ color: TOK.textSecondary, fontSize: 12, marginTop: 4 }}>
                  Ask graph-based questions to investigate resource relationships and risk.
                </div>

                <div style={{ ...PANEL, marginTop: 10, padding: 10, background: TOK.layer01 }}>
                  <div style={{ fontSize: 12, color: TOK.textSecondary, marginBottom: 8 }}>Edit your query</div>
                  <div style={{ display: 'flex', gap: 6, marginBottom: 8 }}>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>Clear query</button>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>{'</>'}</button>
                    <button type="button" style={{ ...TAB, borderRadius: 4 }}>x</button>
                  </div>
                  <div
                    style={{
                      border: `1px solid ${TOK.border}`,
                      borderRadius: 4,
                      background: 'var(--z-accent, #2563eb)',
                      color: '#fff',
                      fontSize: 12,
                      padding: '6px 10px',
                      textAlign: 'center',
                    }}
                  >
                    Find...
                  </div>
                </div>

                <div style={{ marginTop: 12, fontSize: 13, color: TOK.textSecondary }}>Suggested questions</div>
                <div style={{ display: 'grid', gap: 8, marginTop: 8 }}>
                  {graphQuestions.map((question) => (
                    <div key={question} style={CARD}>
                      <span>{question}</span>
                      <span style={{ color: TOK.textSecondary }}>{'>'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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

export const Default: Story = {};

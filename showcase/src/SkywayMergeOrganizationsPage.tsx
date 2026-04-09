import type { CSSProperties } from 'react';

const appFrame: CSSProperties = {
  background: '#efefef',
  minHeight: '100vh',
  margin: 0,
  fontFamily:
    'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  color: '#1f2937',
};

const topBar: CSSProperties = {
  height: 46,
  background: '#05070c',
  borderBottom: '1px solid #202433',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px',
};

const shell: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '182px 1fr',
  minHeight: 'calc(100vh - 46px)',
};

const sidebar: CSSProperties = {
  borderRight: '1px solid #d9dce4',
  background: '#f3f4f7',
  padding: 10,
};

const main: CSSProperties = {
  padding: '24px 28px 20px 28px',
};

const card: CSSProperties = {
  border: '1px solid #d8dbe3',
  borderRadius: 6,
  background: '#fff',
  overflow: 'hidden',
};

const tableHeader: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.4fr 1.4fr 0.8fr',
  background: '#eef0f4',
  borderBottom: '1px solid #d8dbe3',
  fontSize: 12,
  fontWeight: 600,
  color: '#1f2937',
};

const tableRow: CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '1.4fr 1.4fr 0.8fr',
  fontSize: 13,
  color: '#111827',
  alignItems: 'center',
};

const cell: CSSProperties = {
  padding: '11px 12px',
  borderRight: '1px solid #e4e7ee',
};

const iconBtn: CSSProperties = {
  width: 26,
  height: 26,
  borderRadius: 6,
  border: '1px solid #3b82f6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#3b82f6',
  background: '#ffffff',
  fontWeight: 700,
  lineHeight: 1,
};

const popover: CSSProperties = {
  position: 'absolute',
  right: 0,
  top: 34,
  width: 168,
  border: '1px solid #d8dbe3',
  borderRadius: 8,
  background: '#fff',
  boxShadow: '0 8px 18px rgba(0, 0, 0, 0.12)',
  overflow: 'hidden',
};

export function SkywayMergeOrganizationsPage() {
  return (
    <div style={appFrame}>
      <header style={topBar}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            aria-hidden
            style={{ width: 14, height: 14, background: '#ffffff', clipPath: 'polygon(0 0, 100% 0, 68% 30%, 68% 100%, 32% 100%, 32% 30%)' }}
          />
          <button
            style={{
              color: '#e5e7eb',
              background: 'transparent',
              border: '1px solid #4b5563',
              borderRadius: 6,
              height: 30,
              padding: '0 10px',
              fontSize: 13,
            }}
          >
            Choose an organization
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <button style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #4b5563', background: 'transparent', color: '#e5e7eb' }}>?</button>
          <button style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #4b5563', background: '#e5e7eb', color: '#111827' }}> </button>
        </div>
      </header>

      <div style={shell}>
        <aside style={sidebar}>
          <div
            style={{
              background: '#e9ebf2',
              borderRadius: 6,
              color: '#2563eb',
              fontSize: 13,
              fontWeight: 600,
              padding: '10px 8px',
            }}
          >
            Organizations
          </div>
        </aside>

        <main style={main}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: 40, lineHeight: 1.1, color: '#111827' }}>Organizations</h1>
              <p style={{ marginTop: 10, marginBottom: 0, color: '#4b5563', fontSize: 16 }}>
                Terraform organizations let you manage organizations, projects, and teams.
              </p>
            </div>
            <button
              style={{
                background: '#2563eb',
                color: '#fff',
                border: '1px solid #1d4ed8',
                borderRadius: 6,
                height: 34,
                padding: '0 14px',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              + Create organization
            </button>
          </div>

          <div style={{ marginTop: 20, maxWidth: 340 }}>
            <input
              defaultValue="Search by organization name"
              aria-label="Search by organization name"
              style={{
                width: '100%',
                boxSizing: 'border-box',
                height: 36,
                borderRadius: 6,
                border: '1px solid #c5cad7',
                color: '#6b7280',
                padding: '0 12px',
                fontSize: 13,
                background: '#fff',
              }}
            />
          </div>

          <div style={{ marginTop: 14, position: 'relative', maxWidth: 980 }}>
            <div style={card}>
              <div style={tableHeader}>
                <div style={cell}>Organization name</div>
                <div style={cell}>Organization type</div>
                <div style={{ ...cell, borderRight: 'none', textAlign: 'right' }}>Actions</div>
              </div>

              <div style={tableRow}>
                <div style={{ ...cell, textDecoration: 'underline' }}>ILM_Demo_Space</div>
                <div style={cell}>Terraform standalone</div>
                <div style={{ ...cell, borderRight: 'none', textAlign: 'right' }}>
                  <span style={iconBtn}>...</span>
                </div>
              </div>
            </div>

            <div style={popover}>
              <div style={{ padding: '10px 12px', fontSize: 14, color: '#111827' }}>View organization</div>
              <div style={{ padding: '10px 12px', fontSize: 14, color: '#dc2626', borderTop: '1px solid #e5e7eb' }}>
                Leave organization
              </div>
            </div>
          </div>

          <div style={{ marginTop: 14, maxWidth: 980, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: '#6b7280', fontSize: 12 }}>1-1 of 1</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, color: '#6b7280' }}>
              <span>&lsaquo;</span>
              <span style={{ color: '#2563eb', borderBottom: '2px solid #2563eb', paddingBottom: 2 }}>1</span>
              <span>&rsaquo;</span>
            </div>
          </div>

          <footer
            style={{
              position: 'fixed',
              bottom: 12,
              left: 210,
              right: 20,
              textAlign: 'center',
              color: '#6b7280',
              fontSize: 12,
            }}
          >
            Support &nbsp;&nbsp; Terms &nbsp;&nbsp; Privacy &nbsp;&nbsp; Security &nbsp;&nbsp; Accessibility
            &nbsp;&nbsp; © 2026 HashiCorp, an IBM Company
          </footer>
        </main>
      </div>
    </div>
  );
}

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SkywayMergeOrganizationsPage } from './SkywayMergeOrganizationsPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SkywayMergeOrganizationsPage />
  </StrictMode>,
);

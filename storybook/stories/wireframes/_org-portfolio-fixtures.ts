/**
 * _org-portfolio-fixtures.ts
 *
 * Storybook fixture data for the Organizations Portfolio wireframe.
 * Interfaces mirror the exact field names from:
 * output/04.wireframes/005.26.04.08.Org-Portfolio-Overview-Wireframe-Spec.md
 */

/* ------------------------------------------------------------------
 * Global
 * ------------------------------------------------------------------ */

export interface DataSourceFreshness {
  source: 'terraform' | 'explorer' | 'infragraph';
  refreshedAt: string; // ISO 8601
  freshnessMinutes: number;
  status: 'fresh' | 'stale' | 'degraded';
}

export interface OrgPortfolioGlobal {
  userId: string;
  accessibleOrganizationCount: number;
  timeRange: '24h' | '7d' | '30d';
  lastRefreshAt: string;
  dataSources: DataSourceFreshness[];
}

/* ------------------------------------------------------------------
 * Z3 - Posture KPI cards
 * ------------------------------------------------------------------ */

export interface PostureKpiCard {
  id:
    | 'accessibleOrganizations'
    | 'criticalIncidents'
    | 'criticalDriftOrganizations'
    | 'validationFailingOrganizations'
    | 'policyViolatingOrganizations';
  label: string;
  value: number;
  delta7d?: number;
  trendDirection?: 'up' | 'down' | 'flat';
}

/* ------------------------------------------------------------------
 * Z4 - Coverage panel
 * ------------------------------------------------------------------ */

export interface ResourceTypeCount {
  resourceType: string; // ex: aws_instance
  count: number;
}

export interface CoveragePanelData {
  managedResourceCount: number;
  unmanagedResourceCount: number;
  managedCoveragePct: number; // 0-100
  coverageDelta7dPct: number;
  topUnmanagedResourceTypes: ResourceTypeCount[];
}

/* ------------------------------------------------------------------
 * Z5 - Remediation queue
 * ------------------------------------------------------------------ */

export interface RemediationQueueItem {
  queueItemId: string;
  criticalityTag: 'P0' | 'P1' | 'P2';
  severity: 'critical' | 'high' | 'medium';
  agentType: string;
  organizationId: string;
  organizationName: string;
  projectName?: string;
  affectedWorkspaceCount: number;
  primaryWorkspaceName?: string;
  issueCategory:
    | 'drift'
    | 'validation'
    | 'policy'
    | 'unmanaged_resource'
    | 'run_failure';
  issueSummary: string;
  blastRadiusScore: number; // 0-100
  firstDetectedAt: string; // ISO 8601
  ageMinutes: number;
  agentProgressStatus:
    | 'queued'
    | 'analyzing'
    | 'drafting_pr'
    | 'awaiting_review'
    | 'merged';
  githubTicketId: string;
  githubTicketUrl: string;
  githubRepoUrl: string;
  nextActionType:
    | 'openWorkspaceHub'
    | 'openRunDetail'
    | 'openSearchImport'
    | 'openResourceGraph'
    | 'openExplorer';
  nextActionRoute: string;
  ownerTeam?: string;
  slaTargetMinutes?: number;
}

export interface RemediationQueueTotals {
  total: number;
  critical: number;
  high: number;
  medium: number;
}

export interface FleetSnapshotAgent {
  agentId: string;
  name: string;
  description: string;
  metricLabel: string;
  remediations: number;
  status: 'active' | 'inactive';
}

export interface OrganizationFleetSnapshotRow {
  fleetId: string;
  organizationId: string;
  organizationName: string;
  fleetName: string;
  activeAgentCount: number;
  inactiveAgentCount: number;
  metricLabel: string;
  metricValue: number;
  status: 'active' | 'inactive';
}

export interface RemediationQueueFilters {
  project?: string;
  workspace?: string;
  agentProgressStatus?: RemediationQueueItem['agentProgressStatus'];
  criticalityTag?: RemediationQueueItem['criticalityTag'];
}

/* ------------------------------------------------------------------
 * Z7 - Relationship insights
 * ------------------------------------------------------------------ */

export interface DependencyHotspot {
  hotspotId: string;
  resourceName: string;
  organizationCountImpacted: number;
  dependencyCount: number;
  riskLevel: 'critical' | 'high' | 'medium';
  openInResourceGraphRoute: string;
}

export interface SharedCriticalAsset {
  assetId: string;
  assetName: string;
  resourceType: string;
  organizationCountImpacted: number;
  managedStatus: 'managed' | 'unmanaged' | 'mixed';
}

export interface RelationshipInsightsData {
  dependencyHotspots: DependencyHotspot[];
  sharedCriticalAssets: SharedCriticalAsset[];
  crossOrganizationBlastRadiusScore: number; // 0-100
}

/* ------------------------------------------------------------------
 * Z8 - Organizations table
 * ------------------------------------------------------------------ */

export interface OrganizationRow {
  organizationId: string;
  organizationName: string;
  organizationType: 'terraform_standalone' | 'hcp_organization' | 'mixed';
  deploymentMode: 'tfe_on_prem' | 'hcp_saas';
  overallHealth: 'healthy' | 'warning' | 'critical';
  driftIssueCount: number;
  validationIssueCount: number;
  managedResourceCount: number;
  unmanagedResourceCount: number;
  openRemediationCount: number;
  lastSuccessfulRunAt?: string; // ISO 8601
  freshnessStatus: 'fresh' | 'stale' | 'degraded';
  freshnessMinutes: number;
  primaryActionLabel: string;
  primaryActionRoute: string;
}

export type OrgTableSort =
  | 'name_asc'
  | 'health_desc'
  | 'open_remediation_desc'
  | 'freshness_asc'
  | 'last_successful_run_desc';

export interface OrgTableFilters {
  q?: string;
  severity?: 'critical' | 'high' | 'medium';
  health?: 'healthy' | 'warning' | 'critical';
  deployMode?: 'tfe_on_prem' | 'hcp_saas';
}

export interface PaginationState {
  page: number;
  pageSize: number;
  totalRows: number;
}

export interface VisibilitySummaryData {
  typeCount: number;
  useCaseCount: number;
  suggestedQuestionCount: number;
  savedViewCount: number;
  queryCategoryCount: number;
  resourceTypeCount: number;
  topUseCases: string[];
}

/* ------------------------------------------------------------------
 * View model - convenient bundle for story args
 * ------------------------------------------------------------------ */

export interface OrgPortfolioViewModel {
  global: OrgPortfolioGlobal;
  postureKpiCards: PostureKpiCard[];
  coverage: CoveragePanelData;
  visibilitySummary: VisibilitySummaryData;
  remediationQueue: {
    queueItems: RemediationQueueItem[];
    queueTotals: RemediationQueueTotals;
    filters?: RemediationQueueFilters;
  };
  healthStrip: {
    runSuccessRate24hPct: number;
    runSuccessRate7dPct: number;
    staleStateRiskCount: number;
    driftOrganizationCount: number;
    validationFailingOrganizationCount: number;
  };
  governancePanel: {
    policyFailingOrganizationCount: number;
    rbacAnomalyCount: number;
    changeRequestBacklogCount: number;
    approvalLatencyP50Hours: number;
    standardizationScorePct: number;
  };
  costPanel: {
    monthlySpendTotalUsd: number;
    spendAnomalyOrganizationCount: number;
    idleResourceEstimateCount: number;
    remediationSavingsEstimateUsd30d: number;
  };
  fleetSnapshot: OrganizationFleetSnapshotRow[];
  relationshipInsights: RelationshipInsightsData;
  organizationsTable: {
    organizations: OrganizationRow[];
    sort: OrgTableSort;
    filters: OrgTableFilters;
    pagination: PaginationState;
  };
}

/* ------------------------------------------------------------------
 * Fixtures
 * ------------------------------------------------------------------ */

export const orgPortfolioGlobalFixture: OrgPortfolioGlobal = {
  userId: 'user_ange_kc',
  accessibleOrganizationCount: 6,
  timeRange: '7d',
  lastRefreshAt: '2026-04-08T16:20:00Z',
  dataSources: [
    {
      source: 'terraform',
      refreshedAt: '2026-04-08T16:18:30Z',
      freshnessMinutes: 2,
      status: 'fresh',
    },
    {
      source: 'explorer',
      refreshedAt: '2026-04-08T16:11:00Z',
      freshnessMinutes: 9,
      status: 'fresh',
    },
    {
      source: 'infragraph',
      refreshedAt: '2026-04-08T15:55:00Z',
      freshnessMinutes: 25,
      status: 'stale',
    },
  ],
};

export const postureKpiCardsFixture: PostureKpiCard[] = [
  {
    id: 'accessibleOrganizations',
    label: 'Accessible organizations',
    value: 6,
    delta7d: 1,
    trendDirection: 'up',
  },
  {
    id: 'criticalIncidents',
    label: 'Issues Remediated',
    value: 84,
    delta7d: 12,
    trendDirection: 'up',
  },
  {
    id: 'criticalDriftOrganizations',
    label: 'Cost Savings (USD)',
    value: 184200,
    delta7d: 16,
    trendDirection: 'up',
  },
  {
    id: 'validationFailingOrganizations',
    label: 'Critical Findings Resolved',
    value: 19,
    delta7d: 5,
    trendDirection: 'up',
  },
  {
    id: 'policyViolatingOrganizations',
    label: 'Workplace Coverage',
    value: 73,
    delta7d: 8,
    trendDirection: 'up',
  },
];

export const coveragePanelFixture: CoveragePanelData = {
  managedResourceCount: 12984,
  unmanagedResourceCount: 842,
  managedCoveragePct: 93.9,
  coverageDelta7dPct: 1.2,
  topUnmanagedResourceTypes: [
    { resourceType: 'aws_instance', count: 221 },
    { resourceType: 'aws_security_group', count: 176 },
    { resourceType: 'aws_s3_bucket', count: 133 },
    { resourceType: 'aws_iam_role', count: 108 },
  ],
};

export const visibilitySummaryFixture: VisibilitySummaryData = {
  typeCount: 5,
  useCaseCount: 12,
  suggestedQuestionCount: 6,
  savedViewCount: 20,
  queryCategoryCount: 12,
  resourceTypeCount: 9,
  topUseCases: [
    'Drifted workspaces',
    'Workspaces with failed checks',
    'Resources by module name',
  ],
};

export const remediationQueueItemsFixture: RemediationQueueItem[] = [
  {
    queueItemId: 'rq_001',
    criticalityTag: 'P0',
    severity: 'critical',
    agentType: 'Remediation Agent',
    organizationId: 'org_ilm_demo',
    organizationName: 'ILM_Demo_Space',
    projectName: 'core-networking',
    affectedWorkspaceCount: 7,
    primaryWorkspaceName: 'ws-prod-network',
    issueCategory: 'drift',
    issueSummary: 'Internet-facing ingress rule changed outside Terraform.',
    blastRadiusScore: 88,
    firstDetectedAt: '2026-04-08T14:43:00Z',
    ageMinutes: 97,
    agentProgressStatus: 'awaiting_review',
    githubTicketId: 'GH-4182',
    githubTicketUrl: 'https://github.com/hashicorp/terraform-remediation/issues/4182',
    githubRepoUrl: 'https://github.com/hashicorp/terraform-remediation',
    nextActionType: 'openRunDetail',
    nextActionRoute: '/app/ILM_Demo_Space/workspaces/ws-prod-network/runs/R123.4',
    ownerTeam: 'platform-core',
    slaTargetMinutes: 180,
  },
  {
    queueItemId: 'rq_002',
    criticalityTag: 'P1',
    severity: 'high',
    agentType: 'Drift Remediation Agent',
    organizationId: 'org_payments',
    organizationName: 'Payments Platform',
    projectName: 'payments-runtime',
    affectedWorkspaceCount: 3,
    primaryWorkspaceName: 'ws-prod-payments',
    issueCategory: 'unmanaged_resource',
    issueSummary: 'Unmanaged EC2 set discovered in production account.',
    blastRadiusScore: 64,
    firstDetectedAt: '2026-04-08T12:10:00Z',
    ageMinutes: 250,
    agentProgressStatus: 'analyzing',
    githubTicketId: 'GH-4225',
    githubTicketUrl: 'https://github.com/hashicorp/terraform-remediation/issues/4225',
    githubRepoUrl: 'https://github.com/hashicorp/terraform-remediation',
    nextActionType: 'openSearchImport',
    nextActionRoute: '/app/Payments%20Platform/workspaces/ws-prod/search',
    ownerTeam: 'cloud-governance',
    slaTargetMinutes: 360,
  },
  {
    queueItemId: 'rq_003',
    criticalityTag: 'P2',
    severity: 'medium',
    agentType: 'Policy Compliance Agent',
    organizationId: 'org_data',
    organizationName: 'Data Foundation',
    projectName: 'data-foundation-core',
    affectedWorkspaceCount: 2,
    primaryWorkspaceName: 'ws-stage-shared',
    issueCategory: 'policy',
    issueSummary: 'Policy set failure on tag compliance baseline.',
    blastRadiusScore: 39,
    firstDetectedAt: '2026-04-08T09:05:00Z',
    ageMinutes: 435,
    agentProgressStatus: 'queued',
    githubTicketId: 'GH-4270',
    githubTicketUrl: 'https://github.com/hashicorp/terraform-remediation/issues/4270',
    githubRepoUrl: 'https://github.com/hashicorp/terraform-remediation',
    nextActionType: 'openExplorer',
    nextActionRoute: '/app/Data%20Foundation/explorer',
    ownerTeam: 'compliance-ops',
    slaTargetMinutes: 720,
  },
];

export const remediationQueueTotalsFixture: RemediationQueueTotals = {
  total: remediationQueueItemsFixture.length,
  critical: remediationQueueItemsFixture.filter((q) => q.severity === 'critical')
    .length,
  high: remediationQueueItemsFixture.filter((q) => q.severity === 'high').length,
  medium: remediationQueueItemsFixture.filter((q) => q.severity === 'medium')
    .length,
};

export const relationshipInsightsFixture: RelationshipInsightsData = {
  dependencyHotspots: [
    {
      hotspotId: 'hotspot_1',
      resourceName: 'shared-egress-nat-gateway',
      organizationCountImpacted: 4,
      dependencyCount: 163,
      riskLevel: 'critical',
      openInResourceGraphRoute:
        '/app/ILM_Demo_Space/resource-graph?focus=shared-egress-nat-gateway',
    },
    {
      hotspotId: 'hotspot_2',
      resourceName: 'core-identity-role-chain',
      organizationCountImpacted: 3,
      dependencyCount: 87,
      riskLevel: 'high',
      openInResourceGraphRoute:
        '/app/Payments%20Platform/resource-graph?focus=core-identity-role-chain',
    },
  ],
  sharedCriticalAssets: [
    {
      assetId: 'asset_1',
      assetName: 'prod-shared-vpc',
      resourceType: 'aws_vpc',
      organizationCountImpacted: 3,
      managedStatus: 'managed',
    },
    {
      assetId: 'asset_2',
      assetName: 'legacy-bastion-pool',
      resourceType: 'aws_instance',
      organizationCountImpacted: 2,
      managedStatus: 'mixed',
    },
  ],
  crossOrganizationBlastRadiusScore: 71,
};

export const fleetSnapshotFixture: FleetSnapshotAgent[] = [
  {
    agentId: 'fleet_001',
    name: 'Remediation Agent',
    description: 'Automatically find and remediate security issues on your Terraform repositories',
    metricLabel: 'Remediations',
    remediations: 1347,
    status: 'active',
  },
  {
    agentId: 'fleet_002',
    name: 'Upgrade Agent',
    description: 'Automatically keep your workspaces, modules and providers at the latest eligible version',
    metricLabel: 'Upgrades',
    remediations: 23,
    status: 'active',
  },
  {
    agentId: 'fleet_003',
    name: 'Drift Agent',
    description: 'Automatically remediate drifted workspaces at scale',
    metricLabel: 'Remediations',
    remediations: 41,
    status: 'active',
  },
  {
    agentId: 'fleet_004',
    name: 'Plan Analyzer Agent',
    description: 'Analyze your Terraform runs with ease',
    metricLabel: 'Plan Adjustments',
    remediations: 12,
    status: 'active',
  },
  {
    agentId: 'fleet_005',
    name: 'FinOps Agent',
    description: 'Automatically find and raise cost optimization pull requests.',
    metricLabel: 'FinOps Adjustments',
    remediations: 0,
    status: 'inactive',
  },
];

export const organizationFleetSnapshotFixture: OrganizationFleetSnapshotRow[] = [
  {
    fleetId: 'org_fleet_001',
    organizationId: 'org_ilm_demo',
    organizationName: 'ILM_Demo_Space',
    fleetName: 'ILM Core Fleet',
    activeAgentCount: 4,
    inactiveAgentCount: 10,
    metricLabel: 'Fleet Actions',
    metricValue: 1423,
    status: 'active',
  },
  {
    fleetId: 'org_fleet_002',
    organizationId: 'org_payments',
    organizationName: 'Payments Platform',
    fleetName: 'Payments Runtime Fleet',
    activeAgentCount: 3,
    inactiveAgentCount: 7,
    metricLabel: 'Fleet Actions',
    metricValue: 612,
    status: 'active',
  },
  {
    fleetId: 'org_fleet_003',
    organizationId: 'org_data',
    organizationName: 'Data Foundation',
    fleetName: 'Data Foundation Fleet',
    activeAgentCount: 2,
    inactiveAgentCount: 5,
    metricLabel: 'Fleet Actions',
    metricValue: 274,
    status: 'active',
  },
  {
    fleetId: 'org_fleet_004',
    organizationId: 'org_ilm_demo',
    organizationName: 'ILM_Demo_Space',
    fleetName: 'FinOps Pilot Fleet',
    activeAgentCount: 1,
    inactiveAgentCount: 4,
    metricLabel: 'Fleet Actions',
    metricValue: 38,
    status: 'inactive',
  },
];

export const organizationsRowsFixture: OrganizationRow[] = [
  {
    organizationId: 'org_ilm_demo',
    organizationName: 'ILM_Demo_Space',
    organizationType: 'terraform_standalone',
    deploymentMode: 'tfe_on_prem',
    overallHealth: 'critical',
    driftIssueCount: 6,
    validationIssueCount: 2,
    managedResourceCount: 2410,
    unmanagedResourceCount: 198,
    openRemediationCount: 12,
    lastSuccessfulRunAt: '2026-04-08T13:42:00Z',
    freshnessStatus: 'fresh',
    freshnessMinutes: 4,
    primaryActionLabel: 'View organization',
    primaryActionRoute: '/app/ILM_Demo_Space',
  },
  {
    organizationId: 'org_payments',
    organizationName: 'Payments Platform',
    organizationType: 'hcp_organization',
    deploymentMode: 'hcp_saas',
    overallHealth: 'warning',
    driftIssueCount: 3,
    validationIssueCount: 5,
    managedResourceCount: 3982,
    unmanagedResourceCount: 241,
    openRemediationCount: 9,
    lastSuccessfulRunAt: '2026-04-08T15:20:00Z',
    freshnessStatus: 'fresh',
    freshnessMinutes: 7,
    primaryActionLabel: 'View organization',
    primaryActionRoute: '/app/Payments%20Platform',
  },
  {
    organizationId: 'org_data',
    organizationName: 'Data Foundation',
    organizationType: 'mixed',
    deploymentMode: 'hcp_saas',
    overallHealth: 'healthy',
    driftIssueCount: 0,
    validationIssueCount: 1,
    managedResourceCount: 3250,
    unmanagedResourceCount: 105,
    openRemediationCount: 2,
    lastSuccessfulRunAt: '2026-04-08T15:58:00Z',
    freshnessStatus: 'stale',
    freshnessMinutes: 31,
    primaryActionLabel: 'View organization',
    primaryActionRoute: '/app/Data%20Foundation',
  },
];

export const orgPortfolioDefaultFixture: OrgPortfolioViewModel = {
  global: orgPortfolioGlobalFixture,
  postureKpiCards: postureKpiCardsFixture,
  coverage: coveragePanelFixture,
  visibilitySummary: visibilitySummaryFixture,
  remediationQueue: {
    queueItems: remediationQueueItemsFixture,
    queueTotals: remediationQueueTotalsFixture,
    filters: {
      project: 'all-projects',
      workspace: 'all-workspaces',
      agentProgressStatus: undefined,
      criticalityTag: undefined,
    },
  },
  healthStrip: {
    runSuccessRate24hPct: 91.4,
    runSuccessRate7dPct: 94.2,
    staleStateRiskCount: 5,
    driftOrganizationCount: 2,
    validationFailingOrganizationCount: 4,
  },
  governancePanel: {
    policyFailingOrganizationCount: 2,
    rbacAnomalyCount: 3,
    changeRequestBacklogCount: 14,
    approvalLatencyP50Hours: 6.8,
    standardizationScorePct: 82.3,
  },
  costPanel: {
    monthlySpendTotalUsd: 1249820,
    spendAnomalyOrganizationCount: 2,
    idleResourceEstimateCount: 49,
    remediationSavingsEstimateUsd30d: 184200,
  },
  fleetSnapshot: organizationFleetSnapshotFixture,
  relationshipInsights: relationshipInsightsFixture,
  organizationsTable: {
    organizations: organizationsRowsFixture,
    sort: 'open_remediation_desc',
    filters: {
      q: '',
      health: undefined,
      severity: undefined,
      deployMode: undefined,
    },
    pagination: {
      page: 1,
      pageSize: 20,
      totalRows: organizationsRowsFixture.length,
    },
  },
};

export const orgPortfolioHighRiskFixture: OrgPortfolioViewModel = {
  ...orgPortfolioDefaultFixture,
  global: {
    ...orgPortfolioDefaultFixture.global,
    timeRange: '24h',
  },
  postureKpiCards: orgPortfolioDefaultFixture.postureKpiCards.map((card) => {
    if (card.id === 'criticalIncidents') {
      return { ...card, value: 126, delta7d: 18, trendDirection: 'up' as const };
    }
    if (card.id === 'criticalDriftOrganizations') {
      return { ...card, value: 252400, delta7d: 21, trendDirection: 'up' as const };
    }
    return card;
  }),
  remediationQueue: {
    ...orgPortfolioDefaultFixture.remediationQueue,
    queueItems: orgPortfolioDefaultFixture.remediationQueue.queueItems.map((q) =>
      q.severity === 'high' ? { ...q, severity: 'critical' as const } : q,
    ),
    queueTotals: {
      total: orgPortfolioDefaultFixture.remediationQueue.queueItems.length,
      critical: 2,
      high: 0,
      medium: 1,
    },
  },
};

/* ------------------------------------------------------------------
 * Single-Organization Overview page fixtures
 * ------------------------------------------------------------------ */

export interface OrganizationOverviewWorkspaceRow {
  workspaceId: string;
  workspaceName: string;
  latestRunStatus: 'applied' | 'planning' | 'failed' | 'canceled';
  driftIssueCount: number;
  validationIssueCount: number;
  openChangeRequestCount: number;
  lastSuccessfulRunAt?: string;
}

export interface OrganizationResourceProviderBreakdown {
  provider: string;
  managedCount: number;
  unmanagedCount: number;
}

export interface OrganizationResourceInventoryRow {
  resourceId: string;
  resourceName: string;
  provider: string;
  resourceType: string;
  managementStatus: 'rum' | 'unmanaged';
  sourceSurface: 'explorer' | 'infragraph';
  workspaceName?: string;
  relationshipCount: number;
  blastRadiusScore: number;
  importReadiness: 'ready' | 'blocked_policy' | 'not_applicable';
  policyStatus: 'pass' | 'fail' | 'unknown';
}

export interface OrganizationOverviewData {
  organizationId: string;
  organizationName: string;
  organizationType: 'terraform_standalone' | 'hcp_organization' | 'mixed';
  deploymentMode: 'tfe_on_prem' | 'hcp_saas';
  overallHealth: 'healthy' | 'warning' | 'critical';
  postureKpiCards: PostureKpiCard[];
  workspaceCount: number;
  activeIncidentCount: number;
  criticalDriftWorkspaceCount: number;
  validationFailingWorkspaceCount: number;
  policyViolatingWorkspaceCount: number;
  managedResourceCount: number;
  unmanagedResourceCount: number;
  managedCoveragePct: number;
  importCandidateCount: number;
  importBlockedByPolicyCount: number;
  explorerInsights: {
    rumResourceCount: number;
    standardizationScorePct: number;
    outdatedProviderWorkspaceCount: number;
    nonCompliantTagWorkspaceCount: number;
  };
  resourceGraphInsights: {
    managedResourceDetectedCount: number;
    unmanagedResourceDetectedCount: number;
    dependencyHotspotCount: number;
    crossWorkspaceBlastRadiusScore: number;
    unmanagedLinkedToManagedCount: number;
  };
  connectionHealth: {
    explorerStatus: 'healthy' | 'degraded';
    resourceGraphStatus: 'healthy' | 'degraded' | 'disconnected';
    terraformStatus: 'healthy' | 'degraded';
  };
  dataFreshness: DataSourceFreshness[];
  fleetSnapshot: FleetSnapshotAgent[];
  resourceProviderBreakdown: OrganizationResourceProviderBreakdown[];
  resourceInventory: OrganizationResourceInventoryRow[];
  remediationQueue: RemediationQueueItem[];
  workspaces: OrganizationOverviewWorkspaceRow[];
}

export const organizationOverviewDefaultFixture: OrganizationOverviewData = {
  organizationId: 'org_ilm_demo',
  organizationName: 'ILM_Demo_Space',
  organizationType: 'terraform_standalone',
  deploymentMode: 'tfe_on_prem',
  overallHealth: 'warning',
  postureKpiCards: orgPortfolioDefaultFixture.postureKpiCards,
  workspaceCount: 12,
  activeIncidentCount: 2,
  criticalDriftWorkspaceCount: 1,
  validationFailingWorkspaceCount: 3,
  policyViolatingWorkspaceCount: 1,
  managedResourceCount: 2410,
  unmanagedResourceCount: 198,
  managedCoveragePct: 92.4,
  importCandidateCount: 63,
  importBlockedByPolicyCount: 11,
  explorerInsights: {
    rumResourceCount: 2410,
    standardizationScorePct: 84,
    outdatedProviderWorkspaceCount: 2,
    nonCompliantTagWorkspaceCount: 3,
  },
  resourceGraphInsights: {
    managedResourceDetectedCount: 2398,
    unmanagedResourceDetectedCount: 198,
    dependencyHotspotCount: 2,
    crossWorkspaceBlastRadiusScore: 66,
    unmanagedLinkedToManagedCount: 21,
  },
  connectionHealth: {
    explorerStatus: 'healthy',
    resourceGraphStatus: 'degraded',
    terraformStatus: 'healthy',
  },
  dataFreshness: [
    {
      source: 'terraform',
      refreshedAt: '2026-04-08T16:18:30Z',
      freshnessMinutes: 2,
      status: 'fresh',
    },
    {
      source: 'explorer',
      refreshedAt: '2026-04-08T16:11:00Z',
      freshnessMinutes: 9,
      status: 'fresh',
    },
    {
      source: 'infragraph',
      refreshedAt: '2026-04-08T15:55:00Z',
      freshnessMinutes: 25,
      status: 'stale',
    },
  ],
  fleetSnapshot: fleetSnapshotFixture,
  resourceProviderBreakdown: [
    { provider: 'aws', managedCount: 2140, unmanagedCount: 166 },
    { provider: 'packer', managedCount: 126, unmanagedCount: 18 },
    { provider: 'kubernetes', managedCount: 144, unmanagedCount: 14 },
  ],
  resourceInventory: [
    {
      resourceId: 'res_001',
      resourceName: 'prod-web-sg',
      provider: 'aws',
      resourceType: 'aws_security_group',
      managementStatus: 'rum',
      sourceSurface: 'explorer',
      workspaceName: 'ws-prod-network',
      relationshipCount: 7,
      blastRadiusScore: 72,
      importReadiness: 'not_applicable',
      policyStatus: 'pass',
    },
    {
      resourceId: 'res_002',
      resourceName: 'legacy-bastion-ec2',
      provider: 'aws',
      resourceType: 'aws_instance',
      managementStatus: 'unmanaged',
      sourceSurface: 'infragraph',
      workspaceName: 'ws-prod-network',
      relationshipCount: 4,
      blastRadiusScore: 64,
      importReadiness: 'ready',
      policyStatus: 'pass',
    },
    {
      resourceId: 'res_003',
      resourceName: 'shared-vpc-prod',
      provider: 'aws',
      resourceType: 'aws_vpc',
      managementStatus: 'rum',
      sourceSurface: 'infragraph',
      workspaceName: 'ws-prod-network',
      relationshipCount: 18,
      blastRadiusScore: 89,
      importReadiness: 'not_applicable',
      policyStatus: 'pass',
    },
    {
      resourceId: 'res_004',
      resourceName: 'ad-hoc-data-bucket',
      provider: 'aws',
      resourceType: 'aws_s3_bucket',
      managementStatus: 'unmanaged',
      sourceSurface: 'infragraph',
      workspaceName: 'ws-stage-shared',
      relationshipCount: 2,
      blastRadiusScore: 33,
      importReadiness: 'blocked_policy',
      policyStatus: 'fail',
    },
    {
      resourceId: 'res_005',
      resourceName: 'golden-image-web',
      provider: 'packer',
      resourceType: 'packer_image',
      managementStatus: 'rum',
      sourceSurface: 'infragraph',
      workspaceName: 'ws-prod-app',
      relationshipCount: 5,
      blastRadiusScore: 41,
      importReadiness: 'not_applicable',
      policyStatus: 'unknown',
    },
  ],
  remediationQueue: [
    {
      queueItemId: 'org_rq_001',
      criticalityTag: 'P0',
      severity: 'critical',
      agentType: 'Remediation Agent',
      organizationId: 'org_ilm_demo',
      organizationName: 'ILM_Demo_Space',
      projectName: 'core-networking',
      affectedWorkspaceCount: 1,
      primaryWorkspaceName: 'ws-prod-network',
      issueCategory: 'drift',
      issueSummary: 'Security group ingress modified outside Terraform in ws-prod-network.',
      blastRadiusScore: 81,
      firstDetectedAt: '2026-04-08T14:43:00Z',
      ageMinutes: 97,
      agentProgressStatus: 'awaiting_review',
      githubTicketId: 'GH-4182',
      githubTicketUrl: 'https://github.com/hashicorp/terraform-remediation/issues/4182',
      githubRepoUrl: 'https://github.com/hashicorp/terraform-remediation',
      nextActionType: 'openRunDetail',
      nextActionRoute: '/app/ILM_Demo_Space/workspaces/ws-prod-network/runs/R123.4',
      ownerTeam: 'platform-core',
      slaTargetMinutes: 180,
    },
    {
      queueItemId: 'org_rq_002',
      criticalityTag: 'P1',
      severity: 'high',
      agentType: 'Drift Remediation Agent',
      organizationId: 'org_ilm_demo',
      organizationName: 'ILM_Demo_Space',
      projectName: 'core-networking',
      affectedWorkspaceCount: 2,
      primaryWorkspaceName: 'ws-prod-network',
      issueCategory: 'unmanaged_resource',
      issueSummary: 'Unmanaged VM set linked to managed dependencies in prod account.',
      blastRadiusScore: 68,
      firstDetectedAt: '2026-04-08T12:10:00Z',
      ageMinutes: 250,
      agentProgressStatus: 'drafting_pr',
      githubTicketId: 'GH-4203',
      githubTicketUrl: 'https://github.com/hashicorp/terraform-remediation/issues/4203',
      githubRepoUrl: 'https://github.com/hashicorp/terraform-remediation',
      nextActionType: 'openSearchImport',
      nextActionRoute: '/app/ILM_Demo_Space/workspaces/ws-prod-network/search',
      ownerTeam: 'cloud-governance',
      slaTargetMinutes: 360,
    },
  ],
  workspaces: [
    {
      workspaceId: 'ws_prod_network',
      workspaceName: 'ws-prod-network',
      latestRunStatus: 'failed',
      driftIssueCount: 3,
      validationIssueCount: 1,
      openChangeRequestCount: 2,
      lastSuccessfulRunAt: '2026-04-08T13:42:00Z',
    },
    {
      workspaceId: 'ws_prod_app',
      workspaceName: 'ws-prod-app',
      latestRunStatus: 'applied',
      driftIssueCount: 0,
      validationIssueCount: 1,
      openChangeRequestCount: 1,
      lastSuccessfulRunAt: '2026-04-08T15:20:00Z',
    },
    {
      workspaceId: 'ws_stage_shared',
      workspaceName: 'ws-stage-shared',
      latestRunStatus: 'planning',
      driftIssueCount: 1,
      validationIssueCount: 1,
      openChangeRequestCount: 0,
      lastSuccessfulRunAt: '2026-04-08T10:05:00Z',
    },
  ],
};

export const organizationOverviewHighRiskFixture: OrganizationOverviewData = {
  ...organizationOverviewDefaultFixture,
  overallHealth: 'critical',
  postureKpiCards: orgPortfolioHighRiskFixture.postureKpiCards,
  activeIncidentCount: 5,
  criticalDriftWorkspaceCount: 3,
  validationFailingWorkspaceCount: 6,
  policyViolatingWorkspaceCount: 4,
  importBlockedByPolicyCount: 27,
  explorerInsights: {
    ...organizationOverviewDefaultFixture.explorerInsights,
    standardizationScorePct: 78,
    nonCompliantTagWorkspaceCount: 6,
  },
  connectionHealth: {
    explorerStatus: 'healthy',
    resourceGraphStatus: 'degraded',
    terraformStatus: 'degraded',
  },
  resourceGraphInsights: {
    ...organizationOverviewDefaultFixture.resourceGraphInsights,
    managedResourceDetectedCount: 2388,
    unmanagedResourceDetectedCount: 264,
    dependencyHotspotCount: 5,
    crossWorkspaceBlastRadiusScore: 83,
    unmanagedLinkedToManagedCount: 44,
  },
  resourceProviderBreakdown: [
    { provider: 'aws', managedCount: 2124, unmanagedCount: 228 },
    { provider: 'packer', managedCount: 120, unmanagedCount: 24 },
    { provider: 'kubernetes', managedCount: 144, unmanagedCount: 12 },
  ],
  resourceInventory: organizationOverviewDefaultFixture.resourceInventory.map((res) => {
    if (res.resourceId === 'res_002') {
      return {
        ...res,
        blastRadiusScore: 78,
      };
    }
    if (res.resourceId === 'res_004') {
      return {
        ...res,
        blastRadiusScore: 61,
      };
    }
    return res;
  }),
  remediationQueue: organizationOverviewDefaultFixture.remediationQueue.map((item) =>
    item.severity === 'high' ? { ...item, severity: 'critical' as const } : item,
  ),
  workspaces: organizationOverviewDefaultFixture.workspaces.map((ws) => {
    if (ws.workspaceId === 'ws_prod_network') {
      return {
        ...ws,
        driftIssueCount: 5,
        validationIssueCount: 2,
        openChangeRequestCount: 4,
      };
    }
    return ws;
  }),
};

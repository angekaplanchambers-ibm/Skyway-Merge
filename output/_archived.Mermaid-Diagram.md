# Skyway Merge IA Options

```mermaid
flowchart LR
  subgraph Baseline["Current Baseline"]
    HCP["HCP"]
    BaselineOrg["Org"]
    BaselineDashboard["Dashboard"]
    BaselineProject["Project"]
    BaselineInfragraph["Infragraph"]
    BaselineIAM["IAM"]
    BaselineSettings["Settings"]
    BaselineWorkspace["Workspace"]
    BaselineExplorer["Explorer View"]
    BaselineSearchImport["Search / Import"]

    HCP --> BaselineOrg
    BaselineOrg --> BaselineDashboard
    BaselineDashboard --> BaselineProject
    BaselineProject --> BaselineInfragraph
    BaselineProject --> BaselineIAM
    BaselineProject --> BaselineSettings

    TerraformExplorer["Terraform Explorer"]
    TEOrg["Org"]
    TEWorkspaces["Workspaces"]
    TEExplorer["Explorer View"]

    TerraformExplorer --> TEOrg
    TEOrg --> TEWorkspaces
    TEWorkspaces --> TEExplorer
    TEExplorer --> BaselineSearchImport
  end

  subgraph OptionA["Option A - Long-Tail Org-First"]
    OA_OrgDashboard["Org Dashboard"]
    OA_Org["Org"]
    OA_Explorer["Explorer View"]
    OA_Workspace["Workspace"]
    OA_Search["Search"]
    OA_Import["Import"]
    OA_Infragraph["Infragraph"]
    OA_IAM["IAM"]
    OA_Settings["Settings"]

    OA_OrgDashboard --> OA_Org
    OA_Org --> OA_Explorer
    OA_Org --> OA_Workspace
    OA_Workspace --> OA_Search
    OA_Workspace --> OA_Import
    OA_Org --> OA_Infragraph
    OA_Org --> OA_IAM
    OA_Org --> OA_Settings
  end

  subgraph OptionB["Option B - Skyway Workspace-Centric"]
    OB_Org["Org"]
    OB_Workspaces["Workspaces"]
    OB_Search["Search"]
    OB_Import["Import"]
    OB_Explorer["Explorer View"]
    OB_Infragraph["Infragraph"]
    OB_IAM["IAM"]
    OB_Settings["Settings"]

    OB_Org --> OB_Workspaces
    OB_Workspaces --> OB_Search
    OB_Workspaces --> OB_Import
    OB_Workspaces --> OB_Explorer
    OB_Workspaces --> OB_Infragraph
    OB_Workspaces --> OB_IAM
    OB_Workspaces --> OB_Settings
  end
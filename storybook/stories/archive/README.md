# Archive Storybook Entries

Create a new archive entry before every prod check-in so the active wireframes have a dated Storybook reference point.

Use one of these commands:

```bash
npm --prefix storybook run archive:new
```

```bash
scripts/checkin-prod.sh "refactor(storybook): describe the change"
```

The check-in script creates an archive entry, runs the active and archive Storybook builds, stages tracked changes plus `storybook/stories/archive`, commits, and pushes to `origin/main` by default.

Set `PROD_REMOTE` or `PROD_BRANCH` to override the push target.
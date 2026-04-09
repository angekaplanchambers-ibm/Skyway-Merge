#!/usr/bin/env bash
set -euo pipefail

cat << 'ART'

      /\_/\  ___
     ( o.o ) |  \~  Pocket Product Designer
      > ^ <  |__/   Transcripts in, design artifacts out.
     /|   |\
    (_|   |_)

ART

echo "Setting up Pocket Product Designer..."
echo ""

# 1. Install npm dependencies
echo "Installing npm dependencies..."
cd "$(dirname "$0")"
(cd storybook && npm install)
(cd showcase && npm install)
echo "✓ Dependencies installed"
echo ""

# 2. Install design skills for Claude Code
SKILL_SOURCE="skill/hashi-designer"
CLAUDE_SKILL_DIR="$HOME/.claude/skills/hashi-designer"
MICRO_SKILL_SOURCE="skill/microinteractions-expert"
CLAUDE_MICRO_SKILL_DIR="$HOME/.claude/skills/microinteractions-expert"
COMMIT_SKILL_SOURCE="skill/commit"
CLAUDE_COMMIT_SKILL_DIR="$HOME/.claude/skills/commit"

if [ -d "$HOME/.claude" ]; then
    echo "Installing hashi-designer skill for Claude Code..."
    rm -rf "$CLAUDE_SKILL_DIR"
    mkdir -p "$CLAUDE_SKILL_DIR"
    cp -r "$SKILL_SOURCE"/* "$CLAUDE_SKILL_DIR"/
    echo "✓ Skill installed to $CLAUDE_SKILL_DIR"

    echo "Installing microinteractions-expert skill for Claude Code..."
    rm -rf "$CLAUDE_MICRO_SKILL_DIR"
    mkdir -p "$CLAUDE_MICRO_SKILL_DIR"
    cp -r "$MICRO_SKILL_SOURCE"/* "$CLAUDE_MICRO_SKILL_DIR"/
    echo "✓ Skill installed to $CLAUDE_MICRO_SKILL_DIR"

    echo "Installing commit skill for Claude Code..."
    rm -rf "$CLAUDE_COMMIT_SKILL_DIR"
    mkdir -p "$CLAUDE_COMMIT_SKILL_DIR"
    cp -r "$COMMIT_SKILL_SOURCE"/* "$CLAUDE_COMMIT_SKILL_DIR"/
    echo "✓ Skill installed to $CLAUDE_COMMIT_SKILL_DIR"
else
    echo "⏭ Claude Code not detected, skipping skill install"
fi
echo ""

# 3. Install design skills for OpenCode
OPENCODE_SKILL_DIR=".opencode/skills/hashi-designer"
OPENCODE_MICRO_SKILL_DIR=".opencode/skills/microinteractions-expert"
OPENCODE_COMMIT_SKILL_DIR=".opencode/skills/commit"
OPENCODE_AGENT_DIR=".opencode/agents"

echo "Installing hashi-designer, microinteractions-expert, and commit skills for OpenCode..."
rm -rf "$OPENCODE_SKILL_DIR"
rm -rf "$OPENCODE_MICRO_SKILL_DIR"
rm -rf "$OPENCODE_COMMIT_SKILL_DIR"
mkdir -p "$OPENCODE_SKILL_DIR"
mkdir -p "$OPENCODE_MICRO_SKILL_DIR"
mkdir -p "$OPENCODE_COMMIT_SKILL_DIR"
mkdir -p "$OPENCODE_AGENT_DIR"
cp -r "$SKILL_SOURCE"/* "$OPENCODE_SKILL_DIR"/
cp -r "$MICRO_SKILL_SOURCE"/* "$OPENCODE_MICRO_SKILL_DIR"/
cp -r "$COMMIT_SKILL_SOURCE"/* "$OPENCODE_COMMIT_SKILL_DIR"/
cp "$SKILL_SOURCE/agent.md" "$OPENCODE_AGENT_DIR/hashi-designer.md"
cp "$MICRO_SKILL_SOURCE/agent.md" "$OPENCODE_AGENT_DIR/microinteractions-expert.md"
echo "✓ Skill installed to $OPENCODE_SKILL_DIR"
echo "✓ Skill installed to $OPENCODE_MICRO_SKILL_DIR"
echo "✓ Skill installed to $OPENCODE_COMMIT_SKILL_DIR"
echo "✓ Agent config installed to $OPENCODE_AGENT_DIR/hashi-designer.md"
echo "✓ Agent config installed to $OPENCODE_AGENT_DIR/microinteractions-expert.md"

# Keep default design agent wired to hashi-designer instructions
cp "$SKILL_SOURCE/agent.md" "$OPENCODE_AGENT_DIR/designer.md"
echo "✓ Agent config installed to $OPENCODE_AGENT_DIR/designer.md"
echo ""

# 4. Install sound plugin for OpenCode (Glass on completion, Pop on subagent)
OPENCODE_CONFIG_DIR="$HOME/.config/opencode"
OPENCODE_PLUGINS_DIR="$OPENCODE_CONFIG_DIR/plugins"

echo "Installing OpenCode sound plugin..."
mkdir -p "$OPENCODE_PLUGINS_DIR"
cp .opencode/plugins/sound.js "$OPENCODE_PLUGINS_DIR/sound.js"

# Ensure @opencode-ai/plugin dependency is installed
if [ ! -f "$OPENCODE_CONFIG_DIR/package.json" ]; then
    echo '{ "dependencies": { "@opencode-ai/plugin": "1.2.15" } }' > "$OPENCODE_CONFIG_DIR/package.json"
fi
(cd "$OPENCODE_CONFIG_DIR" && npm install --silent 2>/dev/null || bun install --silent 2>/dev/null || true)
echo "✓ Sound plugin installed (Glass = main completion, Pop = subagent)"
echo ""

# 5. Verify
echo "Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Open this folder in Claude Code or OpenCode"
echo "  2. The agent will read CLAUDE.md automatically"
echo "  3. Paste a meeting transcript to get started"
echo ""
echo "Try these commands:"
echo "  just storybook        # See the golden example wireframes (port 6007)"
echo "  just showcase-dev     # See the golden example showcase"
echo "  just showcase-build   # Build single-file HTML"
echo "  just micro-query \"loading error retry\""
echo "  just micro-lint-no-refs"

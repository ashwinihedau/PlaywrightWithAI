# Chapter 03 — Identifiers and Literals

This folder explores the rules and conventions for naming identifiers (variables, functions, etc.) in JavaScript, along with comments and helpful VS Code keyboard shortcuts.

---

## Files

| File | Description |
|------|-------------|
| `06_Identifier_Rules.js` | Basic examples of valid and invalid identifier names in JavaScript. |
| `07_Identifier_part2.js` | Overview of popular **naming conventions**: `camelCase`, `PascalCase`, `snake_case`, `SCREAMING_SNAKE_CASE`, and Hungarian notation. |
| `08_Comment.js` | Demonstrates single-line (`//`) and multi-line (`/* */`) comments in JavaScript. |
| `js_Identifier_rule.js` | **Comprehensive guide** covering all identifier rules: valid starting characters, allowed subsequent characters, case sensitivity, Unicode support, reserved keywords, and naming conventions with console output examples. |
| `VS_Code_keyboard_shortcut_mac.md` | Complete reference of **VS Code keyboard shortcuts** for **macOS**. |
| `VS_Code_keyboard_shortcut_windows.md` | Complete reference of **VS Code keyboard shortcuts** for **Windows**. |

---

## How to Run

Open a terminal in this folder and execute any `.js` file with Node.js:

```bash
node 06_Identifier_Rules.js
node 07_Identifier_part2.js
node 08_Comment.js
node js_Identifier_rule.js
```

---

## Topics Covered

- **Identifier Rules**
  - Must begin with a letter, underscore (`_`), or dollar sign (`$`)
  - Subsequent characters may include digits
  - Cannot start with a digit
  - Cannot use reserved keywords (e.g., `class`, `const`, `function`)
  - Case-sensitive (`myVar` ≠ `myvar` ≠ `MyVar`)
  - Unicode characters and escape sequences are allowed

- **Naming Conventions**
  - `camelCase` — standard for variables and functions
  - `PascalCase` — standard for classes and constructors
  - `snake_case` — underscore-separated naming
  - `SCREAMING_SNAKE_CASE` — commonly used for constants
  - Hungarian Notation — type-prefixed naming (older style)

- **Comments**
  - Single-line comments (`//`)
  - Multi-line comments (`/* … */`)
  - JSDoc-style comments (`/** … */`)

- **VS Code Shortcuts**
  - General navigation
  - Basic editing
  - Multi-cursor and selection
  - Search and replace
  - Editor management
  - Debug and integrated terminal

---

## Quick Reference — Identifier Do's and Don'ts

| ✅ Valid | ❌ Invalid |
|----------|------------|
| `let validName` | `let 1stPlace` (starts with digit) |
| `let _private` | `let my-name` (contains hyphen) |
| `let $jquery` | `let my name` (contains space) |
| `let item1` | `let class` (reserved keyword) |
| `let café` | `let my@name` (special character) |

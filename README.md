<div align="center">

# 🎭 PlaywrightWithAI

### *Master JavaScript Fundamentals — One Chapter at a Time!*

[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black&style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/)
[![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white&style=for-the-badge)](https://playwright.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

</div>

---

## 🌟 Welcome!

Welcome to **PlaywrightWithAI** — a hands-on, chapter-by-chapter learning repository that takes you from JavaScript basics to advanced concepts. Whether you're just starting out or brushing up on fundamentals, this repo is structured to make your learning journey **progressive**, **interactive**, and **fun**! 🚀

---

## 📚 Learning Roadmap

```mermaid
graph LR
    A[🚀 Chapter 01<br/>Basics] --> B[📘 Chapter 02<br/>JS Syntax]
    B --> C[🏷️ Chapter 03<br/>Identifiers]
    C --> D[📦 Chapter 04<br/>JavaScript Concepts]
    D --> E[⚡ Chapter 05<br/>Literals]
    E --> F[🔢 Chapter 06<br/>Operators]

    style A fill:#FF6B6B,color:#fff
    style B fill:#4ECDC4,color:#fff
    style C fill:#45B7D1,color:#fff
    style D fill:#96CEB4,color:#fff
    style E fill:#FFEAA7,color:#333
    style F fill:#DDA0DD,color:#333
```

---

## 📂 Repository Structure

| 📁 Chapter | 🗂️ Folder | 📝 Description |
|:----------:|:----------|:--------------|
| **Chapter 01** | `chapter_01_Basics` | Variables, `console.log`, hot code optimization 🔥, and Node.js setup verification |
| **Chapter 02** | `chapter_02_JavaScript_Basics` | Core JS syntax — `var`, reassignment, and logging |
| **Chapter 03** | `chapter_03_Identifierand _literal` | Naming rules, conventions, comments 💬, and VS Code shortcuts ⌨️ |
| **Chapter 04** | `chapter_04_Javascript_Concepts` | Functions, `var`/`let`/`const` scope, and variable declarations 🧠 |
| **Chapter 05** | `chapter_05_Literal` | Literals — numbers, strings, booleans, null, undefined, and template literals 📜 |
| **Chapter 06** | `chapter_06_Operator` | Operators — arithmetic, assignment, comparison, logical, and string concatenation 🔢 |

---

## 🚀 Quick Start

### Prerequisites
- ✅ [Node.js](https://nodejs.org/) installed (v14 or higher recommended)
- ✅ A code editor (VS Code recommended)
- ✅ Curiosity to learn! 🧠

### Running Examples

Each chapter contains standalone `.js` files. Open your terminal and run:

```bash
# 🎯 Chapter 01 — Basics
node chapter_01_Basics/01_Basics.js
node chapter_01_Basics/02_HotCode.js
node chapter_01_Basics/03_Js_Verify_Setup.js

# 📘 Chapter 02 — JavaScript Basics
node chapter_02_JavaScript_Basics/05_JS_Basics.js

# 🏷️ Chapter 03 — Identifiers & Literals
node "chapter_03_Identifierand _literal/06_Identifier_Rules.js"
node "chapter_03_Identifierand _literal/js_Identifier_rule.js"

# 📦 Chapter 04 — JavaScript Concepts
node chapter_04_Javascript_Concepts/09_functions.js
node chapter_04_Javascript_Concepts/10_variable_explained.js
node chapter_04_Javascript_Concepts/11_let_explained.js
node chapter_04_Javascript_Concepts/12_const_explained.js
node chapter_04_Javascript_Concepts/13_var_functionscope.js
node chapter_04_Javascript_Concepts/14_let_scope.js

# 📜 Chapter 05 — Literals
node chapter_05_Literal/22_Literal.js
node chapter_05_Literal/23_null_undefined.js
node chapter_05_Literal/24_null.js
node chapter_05_Literal/25_Literal_All.js
node chapter_05_Literal/26_Literal_Number_all.js
node chapter_05_Literal/27_String.js
node chapter_05_Literal/28_Template_Literal.js
node chapter_05_Literal/29_Backtick_single_double.js

# 🔢 Chapter 06 — Operators
node chapter_06_Operator/30_Assignment_Operator.js
node chapter_06_Operator/31_Arithmetic_Operator.js
node chapter_06_Operator/32_modulus_Operator.js
node chapter_06_Operator/33_Exponential_OP.js
node chapter_06_Operator/34_compound_OP_IQ.js
node chapter_06_Operator/35_Comparison_OP.js
node chapter_06_Operator/36_Comparison_Strict_Loose_OP.js
node chapter_06_Operator/37_IQ_loose_Strict.js
node chapter_06_Operator/38_Confusing_Comprison.js
node chapter_06_Operator/39_Logical_Op.js
node chapter_06_Operator/40_String_Con_OP.js
```

> 💡 **Pro Tip:** Use the VS Code shortcut cheat sheets in Chapter 03 to speed up your workflow!

---

## 🔍 Chapter Deep Dive

### 📗 Chapter 01 — Basics
> *"Every expert was once a beginner."* 🌱

| File | What You'll Learn |
|:-----|:-----------------|
| `01_Basics.js` | 🧮 Declaring variables with `let`, printing with `console.log` |
| `02_HotCode.js` | 🔥 How JS engines optimize **hot code** through the pipeline |
| `03_Js_Verify_Setup.js` | 🖥️ Checking your OS, architecture, and Node version |

#### 🔥 JavaScript Engine Optimization Pipeline

When you run JavaScript, the engine doesn't just execute line by line. It **optimizes** frequently used code! Here's how:

```mermaid
graph TD
    A[📄 Source Code<br/>.js file] --> B[🔍 Parser]
    B --> C[🌳 AST<br/>Abstract Syntax Tree]
    C --> D[⚙️ Interpreter<br/>Ignition / Bytecode]
    D --> E[📊 Profiler<br/>Tracks Execution]
    E --> F{🔥 Is it<br/>Hot Code?}
    F -->|Yes| G[🚀 Compiler<br/>TurboFan]
    F -->|No| H[🐢 Unoptimized<br/>Bytecode]
    G --> I[⚡ Optimized<br/>Machine Code]

    style A fill:#FF6B6B,color:#fff
    style B fill:#4ECDC4,color:#fff
    style C fill:#45B7D1,color:#fff
    style D fill:#96CEB4,color:#fff
    style E fill:#FFEAA7,color:#333
    style F fill:#DDA0DD,color:#333
    style G fill:#98FB98,color:#333
    style H fill:#FFB6C1,color:#333
    style I fill:#87CEEB,color:#333
```

**💡 What's happening?**
1. **Parser** reads your code and checks for syntax errors
2. **AST** (Abstract Syntax Tree) is a tree representation of your code
3. **Interpreter** quickly generates bytecode to start execution
4. **Profiler** watches which functions run frequently
5. If code is "hot" (runs often), the **Compiler** optimizes it into fast machine code!

---

### 📘 Chapter 02 — JavaScript Basics
> *"Syntax is the grammar of programming."* 📝

| File | What You'll Learn |
|:-----|:-----------------|
| `05_JS_Basics.js` | 📦 Declaring variables with `var`, re-declaration, and console output |

#### 🎯 Variable Declaration Evolution

```mermaid
graph LR
    A[var<br/>Function Scoped] --> B[let<br/>Block Scoped]
    A --> C[const<br/>Block Scoped<br/>Immutable]

    style A fill:#FF6B6B,color:#fff
    style B fill:#4ECDC4,color:#fff
    style C fill:#45B7D1,color:#fff
```

> ⚠️ **Best Practice:** Modern JavaScript prefers `let` and `const` over `var` to avoid scope-related bugs!

---

### 📙 Chapter 03 — Identifiers and Literals
> *"Good names make code self-documenting."* 🏷️

| File | What You'll Learn |
|:-----|:-----------------|
| `06_Identifier_Rules.js` | ✅ Valid vs ❌ Invalid identifier examples |
| `07_Identifier_part2.js` | 🎨 Naming conventions across different styles |
| `08_Comment.js` | 💬 Single-line, multi-line, and JSDoc comments |
| `js_Identifier_rule.js` | 📖 Comprehensive guide with all rules and examples |
| `VS_Code_keyboard_shortcut_mac.md` | ⌨️ macOS shortcuts cheat sheet |
| `VS_Code_keyboard_shortcut_windows.md` | ⌨️ Windows shortcuts cheat sheet |

#### 🏷️ Identifier Naming Decision Tree

```mermaid
graph TD
    A[🤔 Need to name<br/>something?] --> B{Is it a<br/>variable or<br/>function?}
    B -->|Yes| C[Use camelCase<br/>myVariableName]
    B -->|No| D{Is it a<br/>class or<br/>constructor?}
    D -->|Yes| E[Use PascalCase<br/>MyClassName]
    D -->|No| F{Is it a<br/>constant?}
    F -->|Yes| G[Use SCREAMING_SNAKE_CASE<br/>MAX_SIZE]
    F -->|No| H{Multiple words<br/>with underscore?}
    H -->|Yes| I[Use snake_case<br/>my_variable_name]
    H -->|No| J[Single word<br/>lowercase]

    style A fill:#FF6B6B,color:#fff
    style B fill:#4ECDC4,color:#fff
    style C fill:#45B7D1,color:#fff
    style D fill:#96CEB4,color:#fff
    style E fill:#FFEAA7,color:#333
    style F fill:#DDA0DD,color:#333
    style G fill:#98FB98,color:#333
    style H fill:#FFB6C1,color:#333
    style I fill:#87CEEB,color:#333
    style J fill:#F0E68C,color:#333
```

#### 📋 Naming Conventions Cheat Sheet

| 🎨 Convention | 📖 Used For | 📝 Example |
|:-------------|:-----------|:----------|
| `camelCase` | Variables & Functions | `userName`, `getUserInfo()` |
| `PascalCase` | Classes & Constructors | `UserProfile`, `ShoppingCart` |
| `snake_case` | Variables (optional) | `user_name`, `total_price` |
| `SCREAMING_SNAKE_CASE` | Constants | `MAX_SIZE`, `API_KEY` |
| `Hungarian Notation` | Type-prefixed (older) | `strName`, `bActive`, `nCount` |

#### 🚦 Identifier Rules Traffic Light

| 🟢 DO | 🔴 DON'T |
|:------|:---------|
| Start with letter, `_`, or `$` | Start with a number `123var` |
| Use letters, numbers, `_`, `$` after first char | Use spaces `my var` |
| Be descriptive `totalPrice` | Use reserved words `let class` |
| Respect case sensitivity `myVar` ≠ `myvar` | Use special chars `@`, `#`, `!` |
| Use Unicode `café`, `变量` | Use hyphens `my-name` |

#### 💬 Comment Styles

```javascript
// 🟢 Single-line comment — quick notes

/*
 * 🟡 Multi-line comment — detailed explanations
 * Author: Pramod Dutta
 * Date: 14-Feb-2026
 */

/**
 * 🔵 JSDoc comment — for documentation
 * @param {string} name - The user's name
 * @returns {string} Greeting message
 */
```

---

### 📕 Chapter 04 — JavaScript Concepts
> *"Understanding scope is understanding JavaScript."* 🧠

| File | What You'll Learn |
|:-----|:-----------------|
| `09_functions.js` | 🎯 Defining and calling functions in JavaScript |
| `10_variable_explained.js` | 📦 `var` scope, reassignment, and redeclaration behavior |
| `11_let_explained.js` | 🅰️ `let` block-scope, reassignment, and temporal dead zone |
| `12_const_explained.js` | 🔒 `const` immutability, block-scope, and common errors |
| `13_var_functionscope.js` | 🔍 How `var` hoisting works inside functions |
| `14_let_scope.js` | 🔍 How `let` block-scoping differs from `var` |

#### 🧠 Variable Scope Comparison

```mermaid
graph TD
    A[🤔 Need to declare<br/>a variable?] --> B{Will it<br/>be reassigned?}
    B -->|Yes| C{Needs block<br/>scope?}
    B -->|No| D[Use const<br/>Safe & Predictable]
    C -->|Yes| E[Use let<br/>Block Scoped]
    C -->|No| F[Use var<br/>Function Scoped<br/>⚠️ Avoid if possible]

    style A fill:#FF6B6B,color:#fff
    style B fill:#4ECDC4,color:#fff
    style C fill:#45B7D1,color:#fff
    style D fill:#98FB98,color:#333
    style E fill:#FFEAA7,color:#333
    style F fill:#FFB6C1,color:#333
```

#### 📋 `var` vs `let` vs `const` Cheat Sheet

| 🏷️ Keyword | 🔁 Reassign? | 🔁 Redeclare? | 📦 Scope | ⚠️ Hoisting |
|:-----------|:-----------:|:------------:|:---------|:-----------|
| `var` | ✅ Yes | ✅ Yes | Function | Hoisted with `undefined` |
| `let` | ✅ Yes | ❌ No | Block | Hoisted but in TDZ |
| `const` | ❌ No | ❌ No | Block | Hoisted but in TDZ |

> ⚠️ **Best Practice:** Default to `const`, use `let` when reassignment is needed, and avoid `var` in modern JavaScript!

---

### 📜 Chapter 05 — Literals
> *"Literals are the raw values that power your code."* 📜

| File | What You'll Learn |
|:-----|:-----------------|
| `22_Literal.js` | 🔤 String, number, boolean, and object literals |
| `23_null_undefined.js` | ❓ Difference between `null` and `undefined` |
| `24_null.js` | 🕳️ Working with `null` values |
| `25_Literal_All.js` | 📖 Comprehensive overview of all literal types |
| `26_Literal_Number_all.js` | 🔢 Number literals, decimals, and special numeric values |
| `27_String.js` | 📝 String literals, escaping, and best practices |
| `28_Template_Literal.js` | 🧵 Template literals (backticks) and interpolation |
| `29_Backtick_single_double.js` | 🔄 Comparing single quotes, double quotes, and backticks |

---

### 🔢 Chapter 06 — Operators
> *"Operators are the verbs of programming."* 🔢

| File | What You'll Learn |
|:-----|:-----------------|
| `30_Assignment_Operator.js` | ⬅️ Assignment (`=`) and basic variable assignment |
| `31_Arithmetic_Operator.js` | ➕➖✖️➗ Addition, subtraction, multiplication, division |
| `32_modulus_Operator.js` | 🧮 Modulo (`%`) and remainder operations |
| `33_Exponential_OP.js` | 🚀 Exponentiation (`**`) operator |
| `34_compound_OP_IQ.js` | 🧩 Compound assignment operators (`+=`, `-=`, etc.) |
| `35_Comparison_OP.js` | ⚖️ Comparison operators (`>`, `<`, `>=`, `<=`) |
| `36_Comparison_Strict_Loose_OP.js` | 🔍 Strict (`===`) vs loose (`==`) equality |
| `37_IQ_loose_Strict.js` | 🧠 Interview questions on equality comparisons |
| `38_Confusing_Comprison.js` | 😵 Confusing comparisons and type coercion traps |
| `39_Logical_Op.js` | 🔗 Logical operators (`&&`, `\|\|`, `!`) |
| `40_String_Con_OP.js` | 🔗 String concatenation with `+` and template literals |

---

## 📊 Topics Covered

```
✅ Variables & Data Types       ✅ JavaScript Engine Pipeline
✅ Node.js Environment          ✅ Identifier Naming Rules
✅ Naming Conventions           ✅ Code Comments & Documentation
✅ VS Code Productivity         ✅ Best Practices & Tips
✅ Functions & Scope            ✅ var / let / const Differences
✅ Literals & Data Types        ✅ Template Literals
✅ Arithmetic Operators         ✅ Comparison & Logical Operators
✅ Type Coercion & Equality     ✅ String Concatenation
```

---

## 🎯 Learning Outcomes

By the end of these chapters, you will:

- 🧠 Understand how JavaScript code is parsed and optimized
- 📝 Write clean, well-named variables and functions
- 🏷️ Apply proper naming conventions consistently
- 💬 Document your code with meaningful comments
- ⚡ Boost productivity with VS Code keyboard shortcuts
- 🖥️ Verify and troubleshoot your development environment
- 🎯 Define and invoke functions confidently
- 📦 Master `var`, `let`, and `const` scope differences
- 📜 Understand literals — strings, numbers, booleans, null, and undefined
- 🧵 Use template literals for clean string interpolation
- ➕ Apply arithmetic, assignment, and compound operators
- ⚖️ Compare values with strict (`===`) and loose (`==`) equality
- 🔗 Combine conditions with logical operators (`&&`, `||`, `!`)

---

## 🛠️ Development Environment

| 🖥️ OS | 💻 Shortcut File |
|:------|:----------------|
| macOS | `VS_Code_keyboard_shortcut_mac.md` |
| Windows | `VS_Code_keyboard_shortcut_windows.md` |

> 🍎 **macOS users:** Use `Cmd` key
> 🪟 **Windows users:** Use `Ctrl` key

---

## 🤝 Contributing

We love contributions! Here's how to add a new chapter:

```
chapter_XX_<TopicName>/
  ├── 📄 README.md (optional)
  ├── <number>_TopicFile.js
  └── <number>_AnotherFile.js
```

1. 🍴 Fork the repository
2. 🌿 Create a feature branch
3. ✍️ Add your chapter with clear, commented code
4. 📤 Submit a pull request

---

## 📖 Resources

| 📚 Resource | 🔗 Link |
|:-----------|:--------|
| JavaScript MDN | [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
| Node.js Docs | [nodejs.org/docs](https://nodejs.org/en/docs/) |
| VS Code Shortcuts | [code.visualstudio.com](https://code.visualstudio.com/docs/getstarted/keybindings) |
| Playwright | [playwright.dev](https://playwright.dev/) |

---

<div align="center">

## ⭐ Star this repo if you found it helpful!

### Happy Coding! 🚀✨

<p align="center">
  <img src="https://media.giphy.com/media/LmNwrBhejkK9EFP504/giphy.gif" width="200" alt="Coding">
</p>

**Built with ❤️ for learners, by learners.**

</div>

# 🚀 PyNode

> Run JavaScript (Node.js) and Python together in a single `.pn` file.

PyNode is an experimental polyglot runtime that combines the power of Node.js and Python into one language.

---

## ✨ Features

- JavaScript and Python in one file
- Multiple code blocks
- Shared runtime context (`vf`)
- Fast and lightweight
- Simple syntax
- Extensible architecture
- VS Code extension (Coming Soon)
- CLI support (Coming Soon)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/pynode.git

cd pynode

npm install
```

---

# 🚀 Hello World

## examples/hello.pn

```pn
[js]

console.log("Hello from JavaScript")

[python]

print("Hello from Python")
```

Run:

```bash
node runtime/runtime.js examples/hello.pn
```

Output:

```text
Hello from JavaScript
Hello from Python
```

---

# 🔥 Nested Blocks

```pn
[python]

print("Python Start")

@js

console.log("Inside JavaScript")

@endjs

print("Python End")
```

Output:

```text
Python Start
Inside JavaScript
Python End
```

---

# 📦 Shared Context

```pn
[js]

vf.name = "Ansh"

console.log(vf.name)

[python]

print(vf["name"])
```

Output:

```text
Ansh
Ansh
```

---

# 📁 Project Structure

```text
pynode/
│
├── runtime/
│   ├── runtime.js
│   ├── parser.js
│   ├── jsRunner.js
│   ├── pyRunner.js
│   ├── bridge.js
│   ├── context.js
│   └── protocol.js
│
├── cli/
│   └── cli.js
│
├── examples/
│   ├── hello.pn
│   └── loop.pn
│
├── tests/
│
├── vscode-extension/
│
├── package.json
├── README.md
└── LICENSE
```

---

# ⚙️ Architecture

```text
          app.pn
             │
             ▼
         parser.js
             │
             ▼
           blocks
             │
             ▼
         runtime.js
         ┌────────┐
         ▼        ▼
   jsRunner    pyRunner
```

---

# 📅 Progress

## ✅ Day 1

- Parser
- JavaScript Runner
- Python Runner

## ✅ Day 2

- Nested JavaScript Blocks

## ✅ Day 3

- Improved Parser
- Multiple Block Support

## ✅ Day 4

- Shared Context (`vf`)

---

# 🗺️ Roadmap

## Day 5

- [ ] Python → JavaScript Bridge
- [ ] JavaScript → Python Bridge

## Day 6

CLI

```bash
pn app.pn
```

## Day 7

- [ ] VS Code Extension
- [ ] Syntax Highlighting
- [ ] File Icons

---

# 🔮 Future

## Package Manager

```bash
pn install express
pn install numpy
```

## HTTP Framework

```pn
GET "/" {

    return "Hello World"

}
```

## AI First Framework

```pn
POST "/chat" {

    return ask(
        request.message
    )

}
```

---

# 🎯 Goal

PyNode aims to provide a simple and powerful runtime where JavaScript (Node.js) and Python work together seamlessly inside a single file.

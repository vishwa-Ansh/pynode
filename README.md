PyNode

PyNode is a polyglot runtime that allows JavaScript (Node.js) and Python to run in a single .pn file.

Features

Day 1

* .pn file support
* JavaScript blocks
* Python blocks
* Parser
* JS Runner
* Python Runner

Example:

[js]
console.log("Hello JS")
[python]
print("Hello Python")

⸻

Day 2

* Nested JS blocks

Example:

[python]
print("Python Start")
@js
console.log("Inside JS")
@endjs
print("Python End")

⸻

Day 3

* Improved block parser
* Multiple JS/Python blocks

⸻

Day 4

* Shared context (vf)

Example:

[js]
vf.name = "Ansh"
console.log(vf.name)
[python]
print(vf["name"])

⸻

Project Structure

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
├── tests/
├── vscode-extension/
├── package.json
└── README.md

Roadmap

* Python → JS bridge
* JS → Python bridge
* CLI (pn app.pn)
* VS Code extension
* Package manager
* HTTP framework
* AI-first features
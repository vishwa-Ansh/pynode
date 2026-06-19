PyNode

PyNode is an experimental polyglot runtime that allows JavaScript (Node.js) and Python code to run inside a single .pn file.

Features

* JavaScript and Python in one file
* Block-based syntax
* Nested JavaScript blocks
* Shared runtime context (vf)
* Simple and extensible architecture
* VS Code support (coming soon)
* CLI support (coming soon)

⸻

Hello World

[js]
console.log("Hello from JavaScript")
[python]
print("Hello from Python")

Run:

node runtime/runtime.js examples/hello.pn

Output:

Hello from JavaScript
Hello from Python

⸻

Nested Blocks

[python]
print("Python Start")
@js
console.log("Inside JS")
@endjs
print("Python End")

Output:

Python Start
Inside JS
Python End

⸻

Shared Context

[js]
vf.name = "Ansh"
console.log(vf.name)
[python]
print(vf["name"])

Output:

Ansh
Ansh

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

⸻

Architecture

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
   │
 ┌────────┐
 ▼        ▼
jsRunner  pyRunner

⸻

Current Progress

Day 1

* Parser
* JavaScript Runner
* Python Runner

Day 2

* Nested JavaScript Blocks

Day 3

* Improved Block Parser
* Multiple Block Support

Day 4

* Shared Context (vf)

⸻

Roadmap

Day 5

* Python → JavaScript Bridge
* JavaScript → Python Bridge

Day 6

CLI

pn app.pn

Day 7

* VS Code Extension
* Syntax Highlighting
* File Icons

⸻

Future

Package Manager

pn install express
pn install numpy

HTTP Framework

GET "/" {
    return "Hello World"
}

AI First Framework

POST "/chat" {
    return ask(
        request.message
    )
}

⸻

Goal

PyNode aims to provide a simple and powerful runtime where JavaScript (Node.js) and Python work together seamlessly inside a single file.
// import { spawnSync } from "child_process";

// /**
//  * Execute JavaScript code in a separate Node.js process.
//  *
//  * @param {string} code - JavaScript code to execute.
//  * @returns {import("child_process").SpawnSyncReturns<Buffer>}
//  */
// export function runJavaScreapt(code) {

//     /*
//      * Start a new Node.js process and execute the code passed
//      * through the command-line using the -e (evaluate) flag.
//      *
//      * stdio: "inherit" shares stdin, stdout, and stderr with
//      * the parent process, so output and errors appear directly
//      * in the terminal.
//      */
//     spawnSync(
//         "node",
//         ["-e", code],
//         {
//             stdio: "inherit"
//         }
//     );
// }

// const vm = require("vm");
// import vm from "vm";

// // const context = require("./nodeVM");
// import { context } from "./nodeVM.js";

// export function runJS(code) {

//     vm.runInContext(
//         code,
//         context
//     );

// }
import vm from "vm";
import { nodeContext } from "./nodeVM.js";

export function runJS(code) {

    vm.runInContext(
        code,
        nodeContext
    );

}

// module.exports = runJS;
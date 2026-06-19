import { spawnSync } from "child_process";

/**
 * 
 * @param {string} code - JavaScript code to execute.
 * @returns {void} return function 
 */

export function runPython(code) {

    spawnSync(
        "python3",
        ["-c", code],
        {
            stdio: "inherit"
        }
    );

}

// module.exports = runPython;
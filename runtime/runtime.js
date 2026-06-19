/**
 * @file main.js
 * @description
 * Entry point for the PN runtime. It parses a source file into language-specific
 * code blocks and executes each block using the appropriate runtime.
 *
 * Supported languages:
 * - JavaScript
 * - Python
 */

import {parser} from "./parser.js";
import { runJavaScreapt } from "./jsRunner.js";
import { runPython } from "./pyRunner.js";

/**
 * Path of the source file passed through the command line.
 *
 * Example:
 * node main.js example.pn
 */
const file = process.argv[2];

/**
 * Parse the source file and extract all language blocks.
 *
 * @type {Array<{type: string, code: string}>}
 */
const blocks = parser(file);

/**
 * Iterate through each parsed block and execute it
 * using the corresponding language runtime.
 */
for (const block of blocks) {

    /**
     * Execute JavaScript code blocks.
     */
    if (block.type === "js") {
        runJavaScreapt(block.code);
    }

    /**
     * Execute Python code blocks.
     */
    else if (block.type === "python") {
        runPython(block.code);
    }

}
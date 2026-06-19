import fs from 'fs';
// import { types } from 'util';

/**
 * Parse a file and separate code blocks based on [js] and [python] tags.
 *
 * @param {string} file - Path to the file to parse.
 * @returns {Array<{type: string, code: string}>} Array of code blocks.
 */

/** 
export function parser(file) {

    const content = fs.readFileSync("../examples/app.pn");
    // console.log(content.toString());
    let lines = content.toString().split("\n");
    let blocks = [];
    let mode = null;
    let current = [];
    for (const line of lines) {
        if (line.trim() === "[js]") {
            if (current.length) {
                blocks.push({
                    type: mode,
                    code: current.join('\n')
                })
                current = [];
            }
            mode = 'js';
            continue
        };
        if (line.trim() === '[python]') {
            if (current.length) {
                blocks.push({
                    type: mode,
                    code: current.join("\n")
                })
                current = [];

            }
            mode = 'python';
            continue;
        }
         if (line.trim() === "@js") {

            if (current.length) {
                blocks.push({
                    type: mode,
                    code: current.join("\n")
                });
                current = [];
            }
            mode = "js";
            continue;
        }

        if (line.trim() === "@endjs") {
            if (current.length) {
                blocks.push({
                    type: mode,
                    code: current.join("\n")
                });
                current = [];
            }
            mode = "python";

            continue;
        }
        current.push(line);
    }

    if (current.length) {
        blocks.push({
            type: mode,
            code: current.join("\n")
        })
    }

     console.log(blocks)
    console.log(current) 
    return blocks;

} */


export function parse(file) {

    const content = fs.readFileSync(file, "utf8");
    const lines = content.split("\n");
    let blocks = [];
    let current = [];
    let mode = null;

    function saveBlock() {
        const code = current.join("\n").trim();
        if (!code) return;
        blocks.push({
            type: mode,
            code
        });
        current = [];
    }

    for (const line of lines) {
        const trimmed = line.trim();
        if (
            trimmed === "[js]" ||
            trimmed === "@js"
        ) {
            saveBlock();
            mode = "js";
            continue;
        }
        if (
            trimmed === "[python]" ||
            trimmed === "@endjs"
        ) {
            saveBlock();
            mode = "python";
            continue;
        }
        current.push(line);
    }
    saveBlock();
    return blocks;
}

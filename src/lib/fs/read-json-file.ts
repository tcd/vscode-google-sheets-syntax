import { readFileSync } from "fs"
import { fixString } from "fixjson"

import "colorts/lib/string"

export const readJsonFile = <T = any>(path): T => {
    try {
        const result = JSON.parse(fixString(readFileSync(path).toString()))
        return result
    } catch (error) {
        if (error.code == "ENOENT") {
            console.log(`[readJsonFile] file not found: '${path}'`.red)
        } else {
            console.log(`unable to read JSON from path '${path}'`.red)
            console.log(`${error.message}`.red)
        }
    }
}

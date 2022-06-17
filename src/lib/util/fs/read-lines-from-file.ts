import { readFileSync } from "fs"
import "colorts/lib/string"

export const readLinesFromFile = (path): string[] => {
    try {
        const newLine = "\n"
        const fileContent = readFileSync(path).toString()
        const lines = fileContent.split(newLine)
        return lines
    } catch (error) {
        if (error.code == "ENOENT") {
            console.log(`[readJsonFile] file not found: '${path}'`.red)
        } else {
            console.log(`unable to read JSON from path '${path}'`.red)
            console.log(`${error.message}`.red)
        }
    }
}

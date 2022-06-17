import { writeFileSync } from "fs"
import "colorts/lib/string"

/**
 * Stringify some `data` and write it out to the given `path`.
 *
 * @param path Where to write the file.
 * @param data The data to be stringified and written.
 */
export const writeFile = (path: string, data: any): void => {
    const outData = JSON.stringify(data, null, 4)
    try {
        writeFileSync(path, outData)
        console.log(`file written: ${path.blue}`)
    } catch (error) {
        console.log(`${error.message}`.red)
    }
}

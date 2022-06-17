import { join } from "path"
import { readdirSync, statSync } from "fs"
import { readJsonFile } from "@lib"

/**
 * Read all JSON files in a folder.
 */
export const readJsonFiles = <T = any[]>(dirPath: string): T => {
    const children = readdirSync(dirPath)

    const files = children.map((child) => {
        const childPath   = join(dirPath, child)
        const isDirectory = statSync(childPath).isDirectory()
        return isDirectory ? null : childPath
    }).filter(x => x != null)

    const results = files.map(x => readJsonFile(x))

    return results as unknown as T
}

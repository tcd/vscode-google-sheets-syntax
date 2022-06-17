import { join } from "path"
import { merge } from "lodash"

import {
    inputFolderPath,
    outputFolderPath,
    readJsonFiles,
    writeJsonFile,
} from "@lib"

export const buildSyntax = (): void => {
    const inputs     = readJsonFiles(inputFolderPath)
    const output     = merge({}, ...inputs)
    const outputPath = join(outputFolderPath, "google-sheets.tmLanguage.json")
    writeJsonFile(outputPath, output)
}

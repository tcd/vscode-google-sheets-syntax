import { join } from "path"

import {
    dataFolderPath,
    readLinesFromFile,
    writeFile,
} from "@lib"

const processFunctions = () => {
    const outputPath = join(dataFolderPath, "output", "functions.txt")
    const inputPath = join(dataFolderPath, "input", "functions.txt")
    let lines = readLinesFromFile(inputPath)
    lines = lines.map(x => x.replaceAll(".", "\."))
    const output = lines.join("|")
    writeFile(outputPath, output)
}

export const processData = (): void => {
    processFunctions()
}


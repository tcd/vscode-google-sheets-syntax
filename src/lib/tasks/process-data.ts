import { join } from "path"

import {
    dataFolderPath,
    readLinesFromFile,
    writeFile,
    writeJsonFile,
} from "@lib"

const processFunctions_v1 = () => {
    const outputPath = join(dataFolderPath, "output", "functions.txt")
    const inputPath  = join(dataFolderPath, "input", "functions.txt")

    let lines = readLinesFromFile(inputPath)
    lines = lines.map(x => x.replaceAll(".", "\\\\."))

    const output = lines.join("|")

    writeFile(outputPath, output)
}

const processFunctions_v2 = () => {
    const outputPath = join(dataFolderPath, "output", "functions.json")
    const inputPath  = join(dataFolderPath, "input", "functions.txt")

    const lines = readLinesFromFile(inputPath)

    const output = lines.map((line) => {
        const functionName = line.replaceAll(".", "\\.")
        return {
            name: "entity.name.function.google-sheets",
            match: `(${functionName}(?=\\())`,
        }
    })

    writeJsonFile(outputPath, output)
}

export const processData = (): void => {
    processFunctions_v2()
}


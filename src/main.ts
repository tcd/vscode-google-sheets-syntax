import { join } from "path"
import { merge } from "lodash"
import * as Lib from "@lib"

const main = (): void => {
    const inputs = Lib.readJsonFiles(Lib.inputFolderPath)
    const output = merge({}, ...inputs)
    const outputPath = join(Lib.outputFolderPath, "google-sheets.tmLanguage.json")
    Lib.writeFile(outputPath, output)
}

main()

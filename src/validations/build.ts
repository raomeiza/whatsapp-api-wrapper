import { GenerateSchemaFile } from 'runtime-typescript-checker'

/**
 * This step may generate new/update existing .ts files. It should probably be part of the build pipeline.
 */
export function StepInTheBuildPipeline (iSchemaFileName: string, iForce: boolean): boolean {
  const result = GenerateSchemaFile({
    SourceFilePaths: [
      '../../typings/index.ts'
    ],
    SchemaFilePath: iSchemaFileName,
    Prefix: 'validate-',
    Suffix: '',
    ForceGenerate: iForce
  })

  if (result.Success) {
    if (result.Files.length > 0) {
      console.log('Files written follows:')
      result.Files.forEach(f => console.log(f))
      return true
    }
  } else { console.log(`Error: ${result.Error}`) }

  return false
}

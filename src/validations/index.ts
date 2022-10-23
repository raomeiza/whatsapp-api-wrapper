import { StepInTheBuildPipeline } from './build'
// import { RunTest } from './test'
const SCHEMA_FILE_NAME = './validation.json'

// "Parse" command line

const doBuild = process.argv.includes('--build')
const forceGenerate = process.argv.includes('--force')

// Build?

if (doBuild) {
  if (!StepInTheBuildPipeline(SCHEMA_FILE_NAME, forceGenerate)) {
    console.log('Build completed without any changed files.')
  } else {
    console.log('Already up do date')
  }
}

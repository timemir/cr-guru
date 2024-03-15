import { getOctokit } from '@actions/github'
const octokit = getOctokit('')
import { components } from '@octokit/openapi-types'
type ChangedFiles = components['schemas']['diff-entry']

export function doCr(files: ChangedFiles[]) {
  // do a CR for each File
}

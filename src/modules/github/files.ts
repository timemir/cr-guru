import api from './api'
import github from '@actions/github'

export async function getAllTests() {
  const { data: changedFiles } = await api().rest.pulls.listFiles({
    owner: github.context.repo.owner,
    repo: github.context.repo.repo,
    pull_number: github.context.payload.pull_request?.number! // Will always have a PR, as the action is only for PR's
  })

  const tests = changedFiles.filter(file => {
    return file.raw_url.toLocaleLowerCase().endsWith('test')
  })

  return tests
}

import * as core from '@actions/core'
import { wait } from './wait'
import { GHFiles } from './modules/github/index'
import { OpenAi } from './modules/openai/index'

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    // Get the current PR
    // Get all the files in the PR
    // Filter all files for files that end with "Test"
    // Do a API Request to OpenAI to do a code review per file
    // Attach the Code Review of the LLM to the PR
    const tests = await GHFiles.getAllTests()

    const codeReviews = await OpenAi.doCr(tests)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}

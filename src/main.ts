import * as core from '@actions/core'
import * as event from './event'

async function run(): Promise<void> {
  try {
    core.setOutput('release-url', 'https://example.com');
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message);
  }
}

run();
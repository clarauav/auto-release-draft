import * as core from '@actions/core';

jest.mock('@actions/core');

describe('When running the action', () => {
  const fakeSetouput = core.setOutput as jest.MockedFunction<typeof core.setOutput>;

})

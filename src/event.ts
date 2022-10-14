import * as from 'actions/core';
import * as github from '@actions/github';
import { countReset } from 'console';

export function getCreatedTag(): string | null {
  if (github.context.eventName !== 'create') {
    core.info('The event name was: ${github.context.eventName}');
    return null;
  }

  if (github.context.payload.ref_type !== 'tag') {
    core.info('The event name was: ${github.context.eventName}');
    return null;
  }


}

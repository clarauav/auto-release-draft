export function getChangesIntroducedByTag(tag: string): Promise<string>{
    const previousVersionTag = await getPreviousVersionTag(tag);

    return previousVersionTag ?
        ? getCommitMessagesBetween(previousVersionTag, tag)
        : getCommitMessagesFrom(tag)
}

export async function getPreviousVersionTag (tag: string): Promise<string | null> {
    let previousTag = '';

    const options: ExecOptions = {
        listener: {
            stdout: (data: Buffer) => {
                previousTag += data.toString();
            }
        },
        silent: true,
        ignoreReturnoCode: true
    }
}
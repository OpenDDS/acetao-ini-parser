const core = require('@actions/core');

try {
    import { readFile } from 'node:fs/promises'
    import { parse } from 'ini'

    const section = core.getInput('section')

    const content = await readFile(`./acetao.ini`,{
        encoding : 'utf-8'
    })

    const config = parse(content)

    for (const [key, value] of Object.entries(config[section]))
        core.setOutput(key, value);
    }
} catch (error) {
    core.setFailed(error.message);
}

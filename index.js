const core = require('@actions/core');
const fs = require('node:fs');
const ini = require('ini');

try {
    const section = core.getInput('section')

    const content = fs.readFileSync(`OpenDDS/acetao.ini`,{
        encoding : 'utf-8'
    });

    const config = ini.parse(content);
    for (const [key, value] of Object.entries(config)) {
        if (key === section) {
            for (const [key2, value2] of Object.entries(value)) {
                core.setOutput(key2, value2);
            }
        }
    }

} catch (error) {
    core.setFailed(error.message);
}

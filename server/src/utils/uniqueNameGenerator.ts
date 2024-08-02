

import { uniqueNamesGenerator, adjectives, colors, Config, animals } from 'unique-names-generator';




function uniqueNameGenerator() {
    const config: Config = {
        dictionaries: [adjectives, colors, animals],
        separator: '-',

    };

    const nameFromSeed: string = uniqueNamesGenerator(config);
    return nameFromSeed
}

export { uniqueNameGenerator }
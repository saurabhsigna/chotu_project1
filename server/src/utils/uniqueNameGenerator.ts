

import { uniqueNamesGenerator, adjectives, colors, Config, animals } from 'unique-names-generator';




function uniqueNameGenerator() {
    const config: Config = {
        dictionaries: [adjectives, colors, animals],
        separator: '-',
        seed: 120498,
    };

    const nameFromSeed: string = uniqueNamesGenerator(config);
    return nameFromSeed
}

export { uniqueNameGenerator }
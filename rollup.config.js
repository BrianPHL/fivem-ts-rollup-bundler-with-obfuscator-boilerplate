// NOTE: This file is only used for development purposes. It is not used in production.
//       This file is used to bundle the resource for use in a FiveM roleplay server.

import typescript from "@rollup/plugin-typescript"
import multiEntry from "@rollup/plugin-multi-entry"
import { obfuscator } from "rollup-obfuscator"

const obfuscatorOptions = {
    compact: false,
    controlFlowFlattening: true,
    controlFlowFlatteningThreshold: 0.5,
    deadCodeInjection: true,
    deadCodeInjectionThreshold: 0.2,
    debugProtectionInterval: 0,
    identifierNamesGenerator: 'hexadecimal',
    numbersToExpressions: true,
    simplify: true,
    splitStrings: true,
    splitStringsChunkLength: 5,
    stringArray: true,
    stringArrayCallsTransform: true,
    stringArrayCallsTransformThreshold: 0.5,
    stringArrayEncoding: ['base64'],
    stringArrayIndexShift: true,
    stringArrayRotate: true,
    stringArrayShuffle: true,
    stringArrayWrappersCount: 2,
    stringArrayWrappersChainedCalls: true,
    stringArrayWrappersParametersMaxCount: 4,
    stringArrayWrappersType: 'function',
    stringArrayThreshold: 0.5,
    transformObjectKeys: true
}

export default [
    {
        input: 'src/client/*.ts',
        output: { file: 'dist/client.bundle.js' },
        plugins: [
            typescript({
                tsconfig: "src/client/tsconfig.json"
            }),
            multiEntry(),
            obfuscator(obfuscatorOptions)
        ]
    },
    {
        input: 'src/server/*.ts',
        output: { file: 'dist/server.bundle.js' },
        plugins: [
            typescript({
                tsconfig: "src/server/tsconfig.json"
            }),
            multiEntry(),
            obfuscator(obfuscatorOptions)
        ]
    }
]

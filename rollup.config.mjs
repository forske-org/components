import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json' assert { type: "json" }

export default [
    {
        input: 'src/index.ts',
        output: [
            {
                file: packageJson.main,
                format: 'cjs',
                sourcemap: true
            },
            {
                file: packageJson.module,
                format: 'esm',
                sourcemap: true
            }
        ],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: [
                    '**/*.test.ts',
                    '**/*.test.tsx',
                    '**/*.stories.tsx',
                    '**/*.stories.ts',
                    '**/*.spec.ts',
                    '**/*.spec.tsx'
                ],
            }),
            postcss({
                extensions: [
                    '.css'
                ],
                inject: true,
                extract: false,
            }),
        ],
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{
            file: 'dist/index.d.ts',
            format: 'esm',
        }],
        plugins: [
            dts(),
        ],
        external: [
            /\.css$/
        ],
    },
]

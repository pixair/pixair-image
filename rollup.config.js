import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.ts',
    output: {
        dir: './dist',
        name: 'index.js',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        typescript(),
        production && terser()
    ]
};

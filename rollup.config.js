import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/index.ts',
    output: {
        dir: './dist',
        format: 'iife',
        sourcemap: true
    },
    plugins: [
        typescript(),
        production && terser()
    ]
};

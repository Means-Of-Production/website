import purgecss from '@fullhuman/postcss-purgecss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import postcssEach from 'postcss-each';
import postcssImport from 'postcss-import';
import normalize from 'postcss-normalize';
import postcssSimpleVariables from 'postcss-simple-vars';
import precss from 'precss';

const prodPlugins = [
    ];

export default (ctx) => ({
    map: ctx.options.map,
    plugins: [
        postcssImport(
            normalize({
                forceImport: true
            }).postcssImport()
        ),
        autoprefixer(),
        postcssSimpleVariables(),
        precss(),
        postcssEach(),

        ...(ctx.env === 'production' ? [
            purgecss({
                content: ['./src/**/*.html']
            }),
            cssnano({
                preset: 'default'
            }),
        ] : [])
    ]
});

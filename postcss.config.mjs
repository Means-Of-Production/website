import cssnano from 'cssnano';
import autoprefixer from 'autoprefixer';
import precss from 'precss';
import normalize from 'postcss-normalize';
import oldie from 'oldie';


const commonPlugins = [
    normalize(),
    precss()
];

const isProd = () => process.env.NODE_ENV === 'production';
const isProdIE = () => process.env.NODE_ENV === 'productionOld';
const productionPlugins = [
    autoprefixer(),
    cssnano({
        preset: 'default'
    }),
    isProdIE ? oldie() : {}
];

export default (ctx) => ({
    plugins: [
        ...commonPlugins,
        ...(isProd ? productionPlugins : [])
    ],
});

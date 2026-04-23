import path from 'path';
import { Configuration } from 'webpack';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';

export default ({ config }: { config: Configuration; }) => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };



    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');

    config!.module!.rules = config!.module!.rules!.map((rule) => {
        if (rule
            && typeof rule === 'object'
            && 'test' in rule
            && rule.test instanceof RegExp
            && rule.test.test('.svg')) {
            return { ...rule, exclude: /\.svg$/i };
        }
        return rule;
    });


    config!.module!.rules!.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    });

    config!.module!.rules!.push(buildCssLoader(true));

    return config;

};

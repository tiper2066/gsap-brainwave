import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    /* SVG를 컴포넌트처럼 사용하고 싶을 경우 @svgr/webpack 설정 */
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ['@svgr/webpack'],
        });
        return config;
    },
};

export default nextConfig;

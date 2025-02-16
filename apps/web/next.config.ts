import { env } from '@/env';
import { withCMS } from '@repo/cms/next-config';
import { withToolbar } from '@repo/feature-flags/lib/toolbar';
import { config, withAnalyzer } from '@repo/next-config';
import { withLogtail, withSentry } from '@repo/observability/next-config';
import type { NextConfig } from 'next';

let nextConfig: NextConfig = withToolbar(withLogtail({ ...config }));

// nextConfig.images?.remotePatterns?.push({
//   protocol: 'https',
//   hostname: 'assets.basehub.com',
// });

if (process.env.NODE_ENV === 'production') {
  const redirects: NonNullable<NextConfig['redirects']> = async () => [
    {
      source: '/legal',
      destination: '/legal/privacy',
      permanent: true,
    },
  ];

  nextConfig.redirects = redirects;
}

if (env.VERCEL) {
  nextConfig = withSentry(nextConfig);
}

if (env.ANALYZE === 'true') {
  nextConfig = withAnalyzer(nextConfig);
}

const finalConfig: NextConfig = withCMS(nextConfig);

export default finalConfig;

const headers = [
	{
		key: 'Content-Security-Policy',
		value:
			"default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; connect-src 'self' https://vitals.vercel-insights.com",
	},
	{ key: 'Referrer-Policy', value: 'origin-when-cross-origin' },
	{ key: 'X-Frame-Options', value: 'DENY' },
	{ key: 'X-Content-Type-Options', value: 'nosniff' },
	{ key: 'X-DNS-Prefetch-Control', value: 'on' },
	{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
	{ key: 'Permissions-Policy', value: 'geolocation=()' },
]

module.exports = {
	future: {
		webpack5: true,
		strictPostcssConfiguration: true,
	},
	images: {
		domains: [
			'i.scdn.co', // Spotify Albums Covers
		],
	},
	headers() {
		if (process.env.NODE_ENV !== 'production') {
			return []
		}

		return [
			{ source: '/', headers },
			{ source: '/:path*', headers },
		]
	},
	webpack(config, { dev, isServer }) {
		if (isServer) {
			require('./scripts/generate-sitemap')
			require('./scripts/generate-rss')
		}

		if (!dev && !isServer) {
			Object.assign(config.resolve.alias, {
				react: 'preact/compat',
				'react-dom/test-utils': 'preact/test-utils',
				'react-dom': 'preact/compat',
			})
		}

		return config
	},
}

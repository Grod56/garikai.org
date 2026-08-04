import type { NextConfig } from "next";
import withPlaiceholder from "@plaiceholder/next";

const IS_DOCKER_BUILD = process.env.IS_DOCKER_BUILD
const IS_DEV = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
	compiler: !IS_DEV
		? {
				reactRemoveProperties: { properties: ["^data-testid$"] },
			}
		: {},
	sassOptions: {
		implementation: "sass-embedded",
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
	},
	output: IS_DOCKER_BUILD ? "standalone" : undefined,
};

export default withPlaiceholder(nextConfig);

import { Metadata } from "next";
import Home from "./ui/Home";

const metaTitle = "Home";
const metaDescription =
	"Welcome! You've found my digital home. This place is the nexus of all of my interests, hobbies, and projects.";

export const metadata: Metadata = {
	title: metaTitle,
	description: metaDescription,
	alternates: {
		canonical: "/home",
		languages: {
			en: "/home",
		},
	},
	openGraph: {
		url: "/home",
		description: metaDescription,
		images: ["/opengraph-image.jpg"],
	},
	twitter: {
		card: "summary",
		description: metaDescription,
		images: ["/opengraph-image.jpg"],
	},
};

export default function Page() {
	return <Home />;
}

"use client";
import Main from "@/app-library/components/content/main/ui/Main";
import { newNeonArtImagePreviewAPI } from "@/app-library/default-implementations/content-apis/art-image-preview/api";
import { newNeonBookPreviewAPI } from "@/app-library/default-implementations/content-apis/book-preview/api";
import { newNeonPortfolioItemAPI } from "@/app-library/default-implementations/content-apis/portfolio-item/api";
import { newBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-apis/post-preview/api";
import { newReadonlyModel } from "@mvc-react/mvc";
import "./home.scss";
import ArtSection from "./sections/art/ArtSection";
import BioSection from "./sections/bio/BioSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";

// Config
const blogURL = new URL(process.env.NEXT_PUBLIC_BLOG_URL!);
const portfolioURL = new URL(process.env.NEXT_PUBLIC_PORTFOLIO_URL!);

export default function Home() {
	const mainModel = newReadonlyModel({ id: "home", name: "home" });
	const portfolioItemAPI = newNeonPortfolioItemAPI();
	const artImagePreviewAPI = newNeonArtImagePreviewAPI();
	const postPreviewAPI = newBloggerPostPreviewAPI();
	const bookPreviewAPI = newNeonBookPreviewAPI();

	return (
		<Main model={mainModel}>
			<BioSection
				model={newReadonlyModel({
					sectionTitle: "About Me",
				})}
			/>
			<PortfolioSection
				model={newReadonlyModel({
					sectionTitle: "Projects",
					portfolioItemAPI,
					portfolioURL,
				})}
			/>
			<ArtSection
				model={newReadonlyModel({
					sectionTitle: "Art",
					artImagePreviewAPI,
				})}
			/>
			<BlogSection
				model={newReadonlyModel({
					sectionTitle: "Blog",
					postPreviewAPI,
					blogURL,
				})}
			/>
			<ReadingListSection
				model={newReadonlyModel({
					sectionTitle: "Reading List",
					bookPreviewAPI,
				})}
			/>
			<ContactDetailsSection
				model={newReadonlyModel({
					sectionTitle: "Contact Details",
				})}
			/>
		</Main>
	);
}

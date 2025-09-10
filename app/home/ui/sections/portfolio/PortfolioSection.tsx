import { PortfolioItemModel } from "@/app-library/components/content/portfolio-item/portfolio-item-model";
import PortfolioItem from "@/app-library/components/content/portfolio-item/ui/PortfolioItem";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/image-card-skeleton-model";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { newPortfolioItemRepositoryVIInterface } from "@/app-library/default-implementations/content-repositories/portfolio-item";
import { newStatifiableModel } from "@/app-library/utilities/miscelleneous";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import {
	ComponentList,
	ComponentPlaceholder,
	ModeledVoidComponent,
} from "@mvc-react/components";
import { newReadonlyModel } from "@mvc-react/mvc";
import { PortfolioSectionModel } from "./portfolio-section-model";
import "./portfolio-section.scss";

const PortfolioSection = function ({ model }) {
	const { sectionTitle, portfolioItemAPI } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(
		newStatifiableModel(
			newPortfolioItemRepositoryVIInterface(portfolioItemAPI),
		),
	);

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "portfolio",
				sectionName: "portfolio",
				sectionTitle: sectionTitle,
			})}
		>
			<div className="portfolio-items-container">
				<ComponentPlaceholder
					model={newReadonlyModel({
						PlaceholderedComponent:
							ComponentList<PortfolioItemModel>,

						placeholderedComponentModel:
							repositoryModelView?.portfolioItemModels &&
							newReadonlyModel({
								Component: PortfolioItem,
								componentModels:
									repositoryModelView.portfolioItemModels,
							}),

						PlaceholderComponent: () => (
							<ComponentList
								model={newReadonlyModel({
									Component: ImageCardSkeleton,
									componentModels:
										Array<ImageCardSkeletonModel>(4).fill(
											newReadonlyModel({
												orientation: "vertical",
											}),
										),
								})}
							/>
						),
					})}
				/>
			</div>
		</SiteSection>
	);
} as ModeledVoidComponent<PortfolioSectionModel>;

export default PortfolioSection;

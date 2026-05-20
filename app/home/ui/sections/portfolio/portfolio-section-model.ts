import { ReadonlyModel } from "@mvc-react/mvc";
import { SectionModelView } from "../section-model";
import { PortfolioItemAPI } from "@/app-library/content-apis/portfolio-item";

export type PortfolioSectionView = SectionModelView & {
	portfolioItemAPI: PortfolioItemAPI;
	portfolioURL: URL;
};
export type PortfolioSectionModel = ReadonlyModel<PortfolioSectionView>;

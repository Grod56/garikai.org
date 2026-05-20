import { PortfolioItemModel } from "../components/content/portfolio-item/portfolio-item-model";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";

export type PortfolioItemRepositoryModelView = {
	portfolioItemModels: PortfolioItemModel[];
};

export type PortfolioItemRepositoryModelInteraction =
	RepositoryModelInteraction;

export type PortfolioItemRepositoryModel = RepositoryModel<
	PortfolioItemRepositoryModelView,
	RepositoryModelInteraction
>;

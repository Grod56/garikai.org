import { waitFor } from "@testing-library/react";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";
import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { newPortfolioItemRepositoryVIInterface } from "../../portfolio-item";

describe("newPortfolioItemRepositoryVIInterface", () => {
	describe("produceModelView", () => {
		it("matches api retrieve output", async () => {
			const viewInteractionInterface =
				newPortfolioItemRepositoryVIInterface(
					testRepositoryInstantiatorAPI,
				);
			const newModelView = await waitFor(() =>
				viewInteractionInterface.produceModelView(
					{
						type: RepositoryInteractionType.RETRIEVE,
					},
					null,
				),
			);
			const testRecords = await waitFor(() =>
				testRepositoryInstantiatorAPI.retrieveRecords(),
			);
			newModelView.portfolioItemModels.forEach(portfolioItemModel => {
				const { id, title, description, category, thumbnail, link } =
					portfolioItemModel.modelView;

				const record = testRecords.find(
					record => id == `portfolio-item_${record.id}`, //TODO: Address this
				)!;
				expect(record).toBeDefined();
				expect(title).toEqual(record.title);
				expect(description).toEqual(record.description);
				expect(category).toEqual(record.category);
				expect(link.href).toEqual(record.link);
				expect(thumbnail.source).toEqual(record.thumbnailSource);
				expect(thumbnail.alt).toEqual(record.thumbnailAlt);
				expect(thumbnail.placeholder).toEqual(
					record.thumbnailPlaceholder,
				);
			});
		});
		it("reports error when api call returns an error", async () => {
			const errorMessage = "What an error";
			const viewInteractionInterface =
				newPortfolioItemRepositoryVIInterface(
					faultyRepositoryInstantiatorAPI(errorMessage),
				);
			await expect(
				viewInteractionInterface.produceModelView(
					{
						type: RepositoryInteractionType.RETRIEVE,
					},
					null,
				),
			).rejects.toEqual(errorMessage);
		});
	});
});

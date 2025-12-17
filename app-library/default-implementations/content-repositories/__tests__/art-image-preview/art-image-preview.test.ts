import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { waitFor } from "@testing-library/react";
import { newArtImagePreviewRepositoryVIInterface } from "../../art-image-preview";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";

describe("newArtImagePreviewRepositoryVIInterface", () => {
	describe("produceModelView", () => {
		it("matches api retrieve output", async () => {
			const viewInteractionInterface =
				newArtImagePreviewRepositoryVIInterface(
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
			newModelView.artImagePreviewModels.forEach(artImagePreviewModel => {
				const { id, title, image } = artImagePreviewModel.modelView;

				const record = testRecords.find(
					record => id == `art-image-preview_${record.id}`, //TODO: Address this
				)!;
				expect(record).toBeDefined();
				expect(title).toEqual(record.title);
				expect(image.source).toEqual(record.imageSource);
				expect(image.alt).toEqual(record.imageAlt);
				expect(image.placeholder).toEqual(record.imagePlaceholder);
			});
		});
		it("reports error when api call returns an error", async () => {
			const errorMessage = "What an error";
			const viewInteractionInterface =
				newArtImagePreviewRepositoryVIInterface(
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

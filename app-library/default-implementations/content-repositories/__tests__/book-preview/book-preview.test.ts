import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { waitFor } from "@testing-library/react";
import { newBookPreviewRepositoryVIInterface } from "../../book-preview";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";

describe("newBookPreviewRepositoryVIInterface", () => {
	describe("produceModelView", () => {
		it("matches api retrieve output", async () => {
			const viewInteractionInterface =
				newBookPreviewRepositoryVIInterface(
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
			newModelView.bookPreviewModels.forEach(bookPreviewModel => {
				const { id, title, author, bookLink, cover } =
					bookPreviewModel.modelView;

				const record = testRecords.find(
					record => id == `book-preview_${record.id}`, //TODO: Address this
				)!;
				expect(record).toBeDefined();
				expect(title).toEqual(record.title);
				expect(author).toEqual(record.author);
				expect(bookLink.href).toEqual(record.bookLink);
				expect(cover.source).toEqual(record.coverSource);
				expect(cover.alt).toEqual(record.coverAlt);
				expect(cover.placeholder).toEqual(record.coverPlaceholder);
			});
		});
		it("reports error when api call returns an error", async () => {
			const errorMessage = "What an error";
			const viewInteractionInterface =
				newBookPreviewRepositoryVIInterface(
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

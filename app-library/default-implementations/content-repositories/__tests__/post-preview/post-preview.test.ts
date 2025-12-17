import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { waitFor } from "@testing-library/react";
import { newPostPreviewRepositoryVIInterface } from "../../post-preview";
import {
	faultyRepositoryInstantiatorAPI,
	testRepositoryInstantiatorAPI,
} from "./data";

describe("newPostPreviewRepositoryVIInterface", () => {
	//TODO: Declutter
	describe("produceModelView", () => {
		it("matches api retrieve output", async () => {
			const viewInteractionInterface =
				newPostPreviewRepositoryVIInterface(
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
			const { id, title, byline, postLink, thumbnail } =
				newModelView.featuredPostPreviewModel.modelView;
			const record = testRecords.find(
				record => id == `featured-post-preview_${record.id}`, //TODO: Address this
			)!;
			expect(record).toBeDefined();
			expect(title).toEqual(record.title);
			expect(byline).toEqual(expect.stringContaining(record.author));
			expect(byline).toEqual(
				expect.stringContaining(
					new Date(record.publishedDate).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric",
					}),
				),
			);
			expect(postLink.href).toEqual(record.postLink);
			expect(thumbnail.source).toEqual(record.thumbnailSource);
			newModelView.recentPostPreviewModels.forEach(postPreviewModel => {
				const { id, title, byline, postLink, thumbnail } =
					postPreviewModel.modelView;

				const record = testRecords.find(
					record => id == `post-preview_${record.id}`,
				)!;
				expect(record).toBeDefined();
				expect(title).toEqual(record.title);
				expect(byline).toEqual(expect.stringContaining(record.author));
				expect(byline).toEqual(
					expect.stringContaining(
						new Date(record.publishedDate).toLocaleDateString(
							"en-US",
							{ year: "numeric", month: "long", day: "numeric" },
						),
					),
				);
				expect(postLink.href).toEqual(record.postLink);
				expect(thumbnail.source).toEqual(record.thumbnailSource);
			});
		});
		it("reports error when api call returns an error", async () => {
			const errorMessage = "What an error";
			const viewInteractionInterface =
				newPostPreviewRepositoryVIInterface(
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

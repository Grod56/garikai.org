import { PostPreviewModel } from "@/app-library/components/content/post-preview/post-preview-model";
import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { newFeaturedPostPreviewModel } from "@/app-library/default-implementations/component-models/featured-post-preview";
import { newPostPreviewModel } from "@/app-library/default-implementations/component-models/post-preview";
import { removeMarkup } from "@/app-library/utilities/miscelleneous";
import { ImagePlaceholder } from "@/app-library/utility-types/image";
import { ViewInteractionInterface } from "@mvc-react/stateful";
import {
	PostPreviewAPI,
	PostPreviewRecord,
} from "../../content-apis/post-preview";
import {
	PostPreviewRepositoryModelInteraction,
	PostPreviewRepositoryModelView,
} from "../../content-repositories/post-preview";

type PostPreviewRepositoryViewInteractionInterface = ViewInteractionInterface<
	PostPreviewRepositoryModelView,
	PostPreviewRepositoryModelInteraction
>;

export function newPostPreviewRepositoryVIInterface(
	api: PostPreviewAPI,
): PostPreviewRepositoryViewInteractionInterface {
	function produceModelView(
		interaction: PostPreviewRepositoryModelInteraction,
	): Promise<PostPreviewRepositoryModelView> {
		switch (interaction.type) {
			case RepositoryInteractionType.RETRIEVE:
				return _retrievePostPreviewRepositorySnapshot(api);
		}
	}

	return { produceModelView };
}
async function _retrievePostPreviewRepositorySnapshot(
	api: PostPreviewAPI,
): Promise<PostPreviewRepositoryModelView> {
	const records = await api.retrieveRecords();
	const featuredPostPreviewRecord = records[0];
	const recentPostPreviewModels: PostPreviewModel[] = records.map(
		(record: PostPreviewRecord) => {
			return newPostPreviewModel({
				id: `post-preview_${record.id}`,
				title: record.title,
				author: record.author,
				publishedDate: new Date(record.publishedDate),
				postLink: new URL(record.postLink),
				thumbnail: {
					source: record.thumbnailSource,
					alt: `${record.title} Thumbnail`,
					placeholder:
						record.thumbnailPlaceholder as ImagePlaceholder,
				},
			});
		},
	);
	const featuredPostPreviewModel = newFeaturedPostPreviewModel({
		id: `featured-post-preview_${featuredPostPreviewRecord.id}`,
		title: featuredPostPreviewRecord.title,
		author: featuredPostPreviewRecord.author,
		publishedDate: new Date(featuredPostPreviewRecord.publishedDate),
		snippet: removeMarkup(featuredPostPreviewRecord.snippet),
		postLink: new URL(featuredPostPreviewRecord.postLink),
		thumbnail: {
			source: featuredPostPreviewRecord.thumbnailSource,
			alt: `${featuredPostPreviewRecord.title} Thumbnail`,
			placeholder:
				featuredPostPreviewRecord.thumbnailPlaceholder as ImagePlaceholder,
		},
	});
	return { recentPostPreviewModels, featuredPostPreviewModel };
}

"use server";
import { PostPreviewRecord } from "@/app-library/content-apis/post-preview";
import blogger from "@/app-library/third-party/apis/blogger";
import { getPlaceholder } from "@/app-library/utilities/server-actions";

export const retrieveBloggerRecords = async function () {
	const { data } = await blogger.fetchBlogPosts();
	if (data) {
		const records: PostPreviewRecord[] = [];
		for (const item of data) {
			records.push({
				id: item.id,
				title: item.title,
				author: item.author.displayName,
				publishedDate: item.published,
				snippet: item.content,
				postLink: item.url,
				thumbnailSource: item.images[0].url,
				thumbnailPlaceholder: await getPlaceholder(item.images[0].url),
			} as PostPreviewRecord);
		}
		return records;
	}
	throw new Error("Blogger returned an error on request");
};

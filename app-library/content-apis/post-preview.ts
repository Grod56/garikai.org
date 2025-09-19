import { ContentRecord, ContentAPI } from "./content-api";

export interface PostPreviewRecord extends ContentRecord {
	title: string;
	snippet: string;
	author: string;
	publishedDate: string;
	postLink: string;
	thumbnailSource: string;
	thumbnailPlaceholder: string;
}

export type PostPreviewAPI = ContentAPI<PostPreviewRecord>;

import { PostPreviewModel } from "@/app-library/components/content/post-preview/post-preview-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export enum RecentPostPreviewsPlaceholderType {
	PENDING,
}

export type RecentPostPreviewsPlaceholderModelView = {
	recentPostPreviewModels: PostPreviewModel[] | undefined;
};

export type RecentPostPreviewsPlaceholderModel =
	ReadonlyModel<RecentPostPreviewsPlaceholderModelView>;

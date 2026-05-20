import { ReadonlyModel } from "@mvc-react/mvc";
import { PostPreviewModelView } from "./post-preview-model";

export type FeaturedPostPreviewModelView = PostPreviewModelView & {
	readonly snippet: string;
};

export type FeaturedPostPreviewModel =
	ReadonlyModel<FeaturedPostPreviewModelView>;

import { Image } from "@/app-library/utility-types/image";
import { ContentComponentModelView } from "../content-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type PostPreviewModel = ReadonlyModel<PostPreviewModelView>;

export type PostPreviewModelView = ContentComponentModelView & {
	readonly title: string;
	readonly byline: string;
	readonly postLink: URL;
	readonly thumbnail: Image;
};

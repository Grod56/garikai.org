import { ContentComponentModelView } from "@/app-library/components/content/content-model";
import { Image } from "@/app-library/utility-types/image";
import { ReadonlyModel } from "@mvc-react/mvc";

export type ArtImagePreviewModelView = ContentComponentModelView & {
	readonly image: Image;
	readonly title: string;
};

export type ArtImagePreviewModel = ReadonlyModel<ArtImagePreviewModelView>;

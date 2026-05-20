import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/art-image-preview-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type ArtImagePreviewsPlaceholderModelView = {
	artImagePreviewModels: ArtImagePreviewModel[] | undefined;
};

export type ArtImagePreviewsPlaceholderModel =
	ReadonlyModel<ArtImagePreviewsPlaceholderModelView>;

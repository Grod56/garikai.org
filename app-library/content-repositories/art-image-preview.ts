import { ArtImagePreviewModel } from "../components/content/art-image-preview/art-image-preview-model";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";

export type ArtImagePreviewRepositoryModelView = {
	readonly artImagePreviewModels: ArtImagePreviewModel[];
};

export type ArtImagePreviewRepositoryModelInteraction =
	RepositoryModelInteraction;

export type ArtImagePreviewRepositoryModel = RepositoryModel<
	ArtImagePreviewRepositoryModelView,
	ArtImagePreviewRepositoryModelInteraction
>;

import { BookPreviewModel } from "@/app-library/components/content/book-preview/book-preview-model";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";

export type BookPreviewRepositoryModelView = {
	readonly bookPreviewModels: BookPreviewModel[];
};

export type BookPreviewRepositoryModelInteraction = RepositoryModelInteraction;

export type BookPreviewRepositoryModel = RepositoryModel<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;

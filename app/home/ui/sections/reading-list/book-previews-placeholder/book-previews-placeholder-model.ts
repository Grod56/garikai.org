import { BookPreviewModel } from "@/app-library/components/content/book-preview/book-preview-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type BookPreviewsPlaceholderModelView = {
	bookPreviewModels: BookPreviewModel[] | undefined;
};

export type BookPreviewsPlaceholderModel =
	ReadonlyModel<BookPreviewsPlaceholderModelView>;

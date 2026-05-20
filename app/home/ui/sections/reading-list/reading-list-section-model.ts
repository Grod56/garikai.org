import { BookPreviewAPI } from "@/app-library/content-apis/book-preview";
import { ReadonlyModel } from "@mvc-react/mvc";
import { SectionModelView } from "../section-model";

export type ReadingListSectionModelView = SectionModelView & {
	bookPreviewAPI: BookPreviewAPI;
};

export type ReadingListSectionModel =
	ReadonlyModel<ReadingListSectionModelView>;

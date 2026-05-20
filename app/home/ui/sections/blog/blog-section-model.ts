import { PostPreviewAPI } from "@/app-library/content-apis/post-preview";
import { SectionModelView } from "../section-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type BlogSectionModelView = SectionModelView & {
	postPreviewAPI: PostPreviewAPI;
	blogURL: URL;
};

export type BlogSectionModel = ReadonlyModel<BlogSectionModelView>;

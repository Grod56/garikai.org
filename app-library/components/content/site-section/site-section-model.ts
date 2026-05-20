import { ContentComponentModelView } from "@/app-library/components/content/content-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type SiteSectionModel = ReadonlyModel<SiteSectionModelView>;

export type SiteSectionModelView = ContentComponentModelView & {
	readonly sectionName: string;
	readonly sectionTitle: string;
};

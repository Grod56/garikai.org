import { ContentComponentModelView } from "@/app-library/components/content/content-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type SiteSubsectionModel = ReadonlyModel<SiteSubsectionModelView>;

export type SiteSubsectionModelView = ContentComponentModelView & {
	readonly subsectionTitle: string;
};

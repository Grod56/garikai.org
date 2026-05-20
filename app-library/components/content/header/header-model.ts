import { ReadonlyModel } from "@mvc-react/mvc";
import { ContentComponentModelView } from "../content-model";

export type HeaderModel = ReadonlyModel<HeaderModelView>;

export type HeaderModelView = ContentComponentModelView & {
	readonly headerTitle: string;
	readonly headerSubtitle: string;
};

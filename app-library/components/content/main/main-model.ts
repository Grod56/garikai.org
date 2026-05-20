import { ReadonlyModel } from "@mvc-react/mvc";
import { ContentComponentModelView } from "../content-model";

export type MainModel = ReadonlyModel<MainModelView>;

export type MainModelView = ContentComponentModelView & {
	readonly name: string;
};

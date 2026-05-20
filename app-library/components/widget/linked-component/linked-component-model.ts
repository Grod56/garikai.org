import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type LinkedComponentModel = ReadonlyModel<LinkedComponentModelView>;

export type LinkedComponentModelView = WidgetComponentModelView & {
	readonly link: URL;
};

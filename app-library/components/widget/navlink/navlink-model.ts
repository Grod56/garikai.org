import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type NavlinkModelView = WidgetComponentModelView & {
	readonly linkText: string;
	readonly link: string;
};

export type NavlinkModel = ReadonlyModel<NavlinkModelView>;

import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type BannerModel = ReadonlyModel<BannerModelView>;

export type BannerModelView = WidgetComponentModelView & {
	readonly bannerText: string;
};

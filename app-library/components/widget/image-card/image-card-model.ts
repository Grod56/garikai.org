import { Image } from "@/app-library/utility-types/image";
import { Orientation } from "@/app-library/utility-types/miscellaneous";
import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type ImageCardModel = ReadonlyModel<ImageCardModelView>;

export type ImageCardModelView = WidgetComponentModelView & {
	readonly thumbnail: Image;
	readonly orientation: Orientation;
};

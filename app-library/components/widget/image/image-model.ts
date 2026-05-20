import { Image } from "@/app-library/utility-types/image";
import { WidgetComponentModelView } from "../widget-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type ImageModelView = WidgetComponentModelView & {
	readonly image: Image;
	readonly width: number;
	readonly height: number;
};

export type ImageModel = ReadonlyModel<ImageModelView>;

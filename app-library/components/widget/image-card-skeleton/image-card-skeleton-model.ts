import { Orientation } from "@/app-library/utility-types/miscellaneous";
import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";

export type ImageCardSkeletonModel = ReadonlyModel<ImageCardSkeletonModelView>;

export type ImageCardSkeletonModelView = WidgetComponentModelView & {
	readonly orientation: Orientation;
};

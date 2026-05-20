import { Model, ModelView, ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-model";
import { ComponentListModel } from "@mvc-react/components";

export type CarouselModelView<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = WidgetComponentModelView & {
	componentListModel: ComponentListModel<M>;
};

export type CarouselModel<
	M extends Model<V>,
	V extends ModelView = ModelView,
> = ReadonlyModel<CarouselModelView<M>>;

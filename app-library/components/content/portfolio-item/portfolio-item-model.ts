import { Image } from "@/app-library/utility-types/image";
import { ContentComponentModelView } from "../content-model";
import { ReadonlyModel } from "@mvc-react/mvc";

export type PortfolioItemModelView = ContentComponentModelView & {
	title: string;
	description: string;
	category: string;
	link: URL;
	thumbnail: Image;
};

export type PortfolioItemModel = ReadonlyModel<PortfolioItemModelView>;

import { ReadonlyModel } from "@mvc-react/mvc";
import { FeaturedPostPreviewModel } from "@/app-library/components/content/post-preview/featured-post-preview-model";
import { PlaceholderedComponentModel } from "@mvc-react/components";

export type FeaturedPostPreviewPlaceholderModelView = {
	featuredPostPreviewModel: PlaceholderedComponentModel<FeaturedPostPreviewModel>;
};

export type FeaturedPostPreviewPlaceholderModel =
	ReadonlyModel<FeaturedPostPreviewPlaceholderModelView>;

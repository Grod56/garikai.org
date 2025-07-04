import { ModeledVoidComponent } from "@mvc-react/components";
import { BannerModel } from "../banner-model";
import "./banner.scss";

export const ELEMENT_NAME = "banner";

const Banner = function ({ model }) {
	const { bannerText } = model.modelView;

	return (
		<div className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			<span className="text">{bannerText}</span>
		</div>
	);
} as ModeledVoidComponent<BannerModel>;

export default Banner;

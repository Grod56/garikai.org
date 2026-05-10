import SocialLink from "@/app-library/components/widget/social-link/ui/SocialLink";

import { FooterModel } from "../footer-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ComponentList, ModeledVoidComponent } from "@mvc-react/components";
import "./footer.scss";

export const ELEMENT_NAME = "footer";

// Convert to container component in the future
const Footer = function ({ model }) {
	const { id, copyright, socialLinkModels } = model.modelView;

	return (
		<footer className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<div className="footer-content">
				<hr />
				<div className="bottom-bar">
					<span className="copyright">{copyright}</span>
					<div className="socials">
						<ComponentList
							model={newReadonlyModel({
								componentModels: socialLinkModels,
								Component: SocialLink,
							})}
						/>
					</div>
				</div>
			</div>
		</footer>
	);
} as ModeledVoidComponent<FooterModel>;

export default Footer;

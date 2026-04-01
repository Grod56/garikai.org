import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";

import { ContactDetailsSectionModel } from "./contact-details-section-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";

const ContactDetailsSection = function ({ model }) {
	const { sectionTitle } = model.modelView;

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "contact-details",
				sectionName: "contact-details",
				sectionTitle: sectionTitle,
			})}
		>
			<p>
				For professional inquiries, shoot me an email @{" "}
				<a href="mailto:business@garikai.org">
					business@garikai.org
				</a>
				. If perhaps something piqued your interest here, or maybe even
				annoyed you (I take it all in spades I promise 😌), my personal
				email is right <a href="mailto:me@garikai.org">here</a>
				. The rest of my socials are down in the footer.
			</p>
		</SiteSection>
	);
} as ModeledVoidComponent<ContactDetailsSectionModel>;

export default ContactDetailsSection;

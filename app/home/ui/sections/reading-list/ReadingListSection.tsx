import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { newBookPreviewRepositoryVIInterface } from "@/app-library/default-implementations/content-repositories/book-preview";
import { newStatifiableModel } from "@/app-library/utilities/miscelleneous";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import { ModeledVoidComponent } from "@mvc-react/components";
import { newReadonlyModel } from "@mvc-react/mvc";
import BookPreviewsPlaceholder from "./book-previews-placeholder/BookPreviewsPlaceholder";
import { ReadingListSectionModel } from "./reading-list-section-model";
import "./reading-list-section.scss";

const ReadingListSection = function ({ model }) {
	const { sectionTitle, bookPreviewAPI } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(
		newStatifiableModel(
			newBookPreviewRepositoryVIInterface(bookPreviewAPI),
		),
	);

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "reading-list",
				sectionName: "reading-list",
				sectionTitle: sectionTitle,
			})}
		>
			<p>
				Collection of material that has had a great influence on me and
				stuff I&apos;m currently working on and studying. Will probably
				disambiguate these sometime in the future.
			</p>
			<div className="book-previews-container">
				<BookPreviewsPlaceholder
					model={newReadonlyModel({
						bookPreviewModels:
							repositoryModelView?.bookPreviewModels,
					})}
				/>
			</div>
		</SiteSection>
	);
} as ModeledVoidComponent<ReadingListSectionModel>;

export default ReadingListSection;

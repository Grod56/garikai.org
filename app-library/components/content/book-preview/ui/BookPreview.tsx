import ImageCard from "@/app-library/components/widget/image-card/ui/ImageCard";
import LinkedComponent from "@/app-library/components/widget/linked-component/ui/LinkedComponent";
import { BookPreviewModel } from "../book-preview-model";
import "./book-preview.scss";

import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";

export const ELEMENT_NAME = "book-preview";

const BookPreview = function ({ model }) {
	const { id, title, author, cover, bookLink } = model.modelView;

	return (
		<div className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<LinkedComponent
				model={newReadonlyModel({
					link: bookLink,
				})}
			>
				<ImageCard
					model={newReadonlyModel({
						thumbnail: cover,
						orientation: "flexible",
					})}
				>
					<h5 className="title" title={title}>
						{title}
					</h5>
					<span className="author" title={author}>
						{author}
					</span>
				</ImageCard>
			</LinkedComponent>
		</div>
	);
} as ModeledVoidComponent<BookPreviewModel>;

export default BookPreview;

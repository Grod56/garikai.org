import { ArtImagePreviewAPI } from "@/app-library/content-apis/art-image-preview";
import { ReadonlyModel } from "@mvc-react/mvc";
import { SectionModelView } from "../section-model";

export type ArtSectionView = SectionModelView & {
	artImagePreviewAPI: ArtImagePreviewAPI;
};

export type ArtSectionModel = ReadonlyModel<ArtSectionView>;

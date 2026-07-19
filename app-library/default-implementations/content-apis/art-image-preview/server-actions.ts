"use server";
import { ArtImagePreviewRecord } from "@/app-library/content-apis/art-image-preview";
import neon from "@/app-library/third-party/apis/neon";
import { getPlaceholder } from "@/app-library/utilities/server-actions";

export const retrieveNeonRecords = async function () {
	const data =
		(await neon()`SELECT * FROM "ArtImagePreview"`) as ArtImagePreviewRecord[];
	const records: ArtImagePreviewRecord[] = [];
	for (const item of data) {
		if (item.imagePlaceholder == null) {
			const placeholder = await getPlaceholder(item.imageSource);
			records.push({ ...item, imagePlaceholder: placeholder });
		} else {
			records.push(item);
		}
	}
	return records;
};

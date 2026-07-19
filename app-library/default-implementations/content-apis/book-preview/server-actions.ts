"use server";
import { BookPreviewRecord } from "@/app-library/content-apis/book-preview";
import neon from "@/app-library/third-party/apis/neon";
import { getPlaceholder } from "@/app-library/utilities/server-actions";

export const retrieveNeonRecords = async function () {
	const data =
		(await neon()`SELECT * FROM "BookPreview" ORDER BY "title"`) as BookPreviewRecord[];
	const records: BookPreviewRecord[] = [];
	for (const item of data) {
		if (item.coverPlaceholder == null) {
			const placeholder = await getPlaceholder(item.coverSource);
			records.push({ ...item, coverPlaceholder: placeholder });
		} else {
			records.push(item);
		}
	}
	return records;
};

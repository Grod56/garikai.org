"use server";
import { PortfolioItemRecord } from "@/app-library/content-apis/portfolio-item";
import neon from "@/app-library/third-party/apis/neon";
import { getPlaceholder } from "@/app-library/utilities/server-actions";

export const retrieveNeonRecords = async function () {
	const data =
		(await neon()`SELECT * FROM "PortfolioItem"`) as PortfolioItemRecord[];
	const records: PortfolioItemRecord[] = [];
	for (const item of data) {
		if (item.thumbnailPlaceholder == null) {
			const placeholder = await getPlaceholder(item.thumbnailSource);
			records.push({ ...item, thumbnailPlaceholder: placeholder });
		} else {
			records.push(item);
		}
	}
	return records;
};

"use server";

import neon from "@/app-library/third-party/apis/neon";
import { getPlaiceholder } from "plaiceholder";
import { ImagePlaceholder } from "../utility-types/image";

export async function getPlaceholder(src: string): Promise<ImagePlaceholder> {
	const records =
		await neon()`SELECT placeholder FROM "ImagePlaceholder" WHERE url = ${src}`;
	if (records.length == 0) {
		const buffer = await fetch(src).then(async res =>
			Buffer.from(await res.arrayBuffer()),
		);
		const { base64 } = await getPlaiceholder(buffer, { size: 10 });
		await neon()`INSERT INTO "ImagePlaceholder"(url, placeholder) VALUES (${src}, ${base64})`;
		return base64 as ImagePlaceholder;
	}
	return records[0].placeholder;
}

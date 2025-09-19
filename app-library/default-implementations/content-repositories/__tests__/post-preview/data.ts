import {
	PostPreviewRecord,
	PostPreviewAPI,
} from "../../../../content-apis/post-preview";

const testRecords: PostPreviewRecord[] = [
	{
		id: "9271938",
		title: "Test title",
		thumbnailSource: "/resources/dackanask/acs",
		snippet:
			"Lorem ipsum asijioasjoieb ebfnwefunw neeunwiudnw edkendoiwnoeidnw",
		author: "Michael Timothy",
		publishedDate: `${Date.now()}`,
		postLink: "https://link.th/dfbdbd",
		thumbnailPlaceholder: "data:sadarnng/adfasfasf",
	},
	{
		id: "askcnuiuiq8922212",
		title: "Another title",
		thumbnailSource: "/resources/acs",
		snippet:
			"anfiu uiefnwuifniu wuefniwufniwuefowuejfiuwbefiwbefneufnwuneifunwiune",
		author: "Theresa Nay",
		publishedDate: `${Date.now()}`,
		postLink: "https://my.link/fgbfb",
		thumbnailPlaceholder: "data:sadarnng/adfasfasf",
	},
];

export const testRepositoryInstantiatorAPI: PostPreviewAPI = {
	retrieveRecords: jest.fn(() => {
		return Promise.resolve(testRecords);
	}),
};

export function faultyRepositoryInstantiatorAPI(
	errorMessage: string,
): PostPreviewAPI {
	return {
		retrieveRecords: jest.fn(() => {
			return Promise.reject(errorMessage);
		}),
	};
}

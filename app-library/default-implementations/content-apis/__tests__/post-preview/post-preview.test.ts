import { waitFor } from "@testing-library/react";
import blogger from "@/app-library/third-party/apis/blogger";
import {
	faultyBloggerSpySelectMockImplementation,
	bloggerSpySelectMockImplementation,
} from "./data";
import { newBloggerPostPreviewAPI } from "../../post-preview/api";
jest.mock("../../../../utilities/server-actions", () => ({
	getPlaceholder: jest.fn(),
}));

describe("newBloggerPostPreviewPreviewAPI", () => {
	describe("retrieveRecords", () => {
		let bloggerSpy: jest.SpyInstance;

		beforeEach(() => {
			bloggerSpy = jest.spyOn(blogger, "fetchBlogPosts");
		});
		afterEach(() => {
			bloggerSpy.mockRestore();
		});

		it("requests records from appropriate table when called", async () => {
			bloggerSpy.mockImplementation(bloggerSpySelectMockImplementation);
			const api = newBloggerPostPreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(bloggerSpy).toHaveBeenCalled();
		});
		it("throws error when blogger communicates an error", async () => {
			bloggerSpy.mockImplementation(
				faultyBloggerSpySelectMockImplementation,
			);
			const api = newBloggerPostPreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});

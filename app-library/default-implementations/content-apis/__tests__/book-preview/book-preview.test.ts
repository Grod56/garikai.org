import { waitFor } from "@testing-library/react";
import supabase from "@/app-library/third-party/apis/supabase";
import {
	faultySupabaseSpySelectMockImplementation,
	supabaseSpySelectMockImplementation,
} from "./data";
import { newSupabaseBookPreviewAPI } from "../../book-preview/api";
jest.mock("../../../../utilities/server-actions", () => ({
	getPlaceholder: jest.fn(),
}));

describe("newSupabaseBookPreviewPreviewAPI", () => {
	describe("retrieveRecords", () => {
		let supabaseSpy: jest.SpyInstance;

		beforeEach(() => {
			supabaseSpy = jest.spyOn(supabase, "from");
		});
		afterEach(() => {
			supabaseSpy.mockRestore();
		});

		it("requests records from appropriate table when called", async () => {
			supabaseSpy.mockImplementation(supabaseSpySelectMockImplementation);
			const api = newSupabaseBookPreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(supabaseSpy).toHaveBeenCalledWith("BookPreview");
		});
		it("throws error when supabase communicates an error", async () => {
			supabaseSpy.mockImplementation(
				faultySupabaseSpySelectMockImplementation,
			);
			const api = newSupabaseBookPreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});

import { waitFor } from "@testing-library/react";
import supabase from "@/app-library/third-party/apis/supabase";
import { newSupabaseArtImagePreviewAPI } from "../../art-image-preview/api";
import {
	faultySupabaseSpySelectMockImplementation,
	supabaseSpySelectMockImplementation,
} from "./data";
jest.mock("../../../../utilities/server-actions", () => ({
	getPlaceholder: jest.fn(),
}));

describe("newSupabaseArtImagePreviewAPI", () => {
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
			const api = newSupabaseArtImagePreviewAPI();
			await waitFor(() => api.retrieveRecords());
			expect(supabaseSpy).toHaveBeenCalledWith("ArtImagePreview");
		});
		it("throws error when supabase communicates an error", async () => {
			supabaseSpy.mockImplementation(
				faultySupabaseSpySelectMockImplementation,
			);
			const api = newSupabaseArtImagePreviewAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});

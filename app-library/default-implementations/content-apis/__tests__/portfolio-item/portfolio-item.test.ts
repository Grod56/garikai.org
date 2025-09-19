import supabase from "@/app-library/third-party/apis/supabase";
import { waitFor } from "@testing-library/react";
import { newSupabasePortfolioItemAPI } from "../../portfolio-item/api";
import {
	supabaseSpySelectMockImplementation,
	faultySupabaseSpySelectMockImplementation,
} from "./data";
jest.mock("../../../../utilities/server-actions", () => ({
	getPlaceholder: jest.fn(),
}));

describe("newSupabasePortfolioItemAPI", () => {
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
			const api = newSupabasePortfolioItemAPI();
			await waitFor(() => api.retrieveRecords());
			expect(supabaseSpy).toHaveBeenCalledWith("PortfolioItem");
		});
		it("throws error when supabase communicates an error", async () => {
			supabaseSpy.mockImplementation(
				faultySupabaseSpySelectMockImplementation,
			);
			const api = newSupabasePortfolioItemAPI();
			await expect(api.retrieveRecords()).rejects.toThrow();
		});
	});
});

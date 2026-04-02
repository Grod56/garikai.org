import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { act, renderHook, waitFor } from "@testing-library/react";
import { useStatefulRepository } from "../../use-repository";
import { testStatifiableRepositoryModel } from "./data";

describe("useStatefulRepository", () => {
	it("automatically initializes repository", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testStatifiableRepositoryModel),
		);
		// Would've preferred interact toHaveBeenCalled, but not possible
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
	});
	it("only automatically updates repository initially", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testStatifiableRepositoryModel),
		);
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
		const model = renderedHook.result.current;
		const interactSpy = jest.spyOn(model, "interact");
		act(() => {
			renderedHook.rerender();
		});
		expect(
			waitFor(() => {
				expect(interactSpy).toHaveBeenCalled();
			}),
		)
			.rejects.toThrow()
			.finally(interactSpy.mockRestore);
	});
	it("returns equivalent model to that provided by repository model instantiator", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testStatifiableRepositoryModel),
		);
		const expectedModelView =
			await testStatifiableRepositoryModel.viewInteractionInterface.produceModelView(
				{ type: RepositoryInteractionType.RETRIEVE },
				null,
			);
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
		const model = renderedHook.result.current;
		expect(model).toEqual({
			modelView: expectedModelView,
			interact: expect.any(Function),
		});
	});
	it("returns stateful repository model", async () => {
		const renderedHook = renderHook(() =>
			useStatefulRepository(testStatifiableRepositoryModel),
		);
		await waitFor(() => {
			expect(renderedHook.result.current.modelView).toBeTruthy();
		});
		const model = renderedHook.result.current;
		act(() => {
			renderedHook.rerender();
		});
		const modelOnRerender = renderedHook.result.current;
		expect(model.modelView).toBe(modelOnRerender.modelView);
		expect(model.interact).toBe(modelOnRerender.interact);
	});
});

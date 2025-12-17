import { ModelView } from "@mvc-react/mvc";
import {
	StatifiableModel,
	useTransformedStatefulInteractiveModel,
} from "@mvc-react/stateful";
import { useEffect } from "react";
import {
	RepositoryInteractionType,
	RepositoryModelInteraction,
} from "../content-repositories/repository";

export function useStatefulRepository<V extends ModelView>(
	statifiableModel: StatifiableModel<V, RepositoryModelInteraction>,
) {
	const model = useTransformedStatefulInteractiveModel(statifiableModel);
	const { interact } = model;

	useEffect(() => {
		if (!model.modelView)
			interact({ type: RepositoryInteractionType.RETRIEVE });
	}, [interact, model.modelView]);

	return model;
}

import axios, { AxiosResponse } from "axios";
import type { BoredActivity } from "../models/bored";

const boredApi = axios.create({
	baseURL: "http://www.boredapi.com/api/activity",
});

export const getActivity = async (): Promise<AxiosResponse<BoredActivity>> => {
	try {
		const response = await boredApi.get("");

		return response;
	} catch (error) {
		throw new Error(error);
	}
};

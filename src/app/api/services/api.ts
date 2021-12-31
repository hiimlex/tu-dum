import axios, { AxiosResponse } from "axios";
import type { BoredActivity } from "../models/bored";

const boredApi = axios.create({
	baseURL: "http://www.boredapi.com/api/activity",
});

async function __get<T>(path: string): Promise<AxiosResponse<T>> {
	try {
		const response = await boredApi.get<T>(path);

		return response;
	} catch (error) {
		throw new Error(error);
	}
}

export const getActivity = async (): Promise<BoredActivity> => {
	try {
		const { data } = await __get<BoredActivity>("/");

		return data;
	} catch (error) {
		throw new Error(error);
	}
};

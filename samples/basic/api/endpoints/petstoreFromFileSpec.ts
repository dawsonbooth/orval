/**
 * Generated by orval v6.2.1 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import axios,{
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
export interface Pet {
  id: number;
  name: string;
  tag?: string;
}

export type Pets = Pet[];

export interface Error {
  code: number;
  message: string;
}

export type ListPetsParams = { limit?: string };

export type CreatePetsBody = {
  name: string;
  tag: string;
};




  /**
 * @summary List all pets
 */
export const listPets = <TData = AxiosResponse<Pets>>(
    params?: ListPetsParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/pets`,
      {
        params,
    ...options },
    );
  }

/**
 * @summary Create a pet
 */
export const createPets = <TData = AxiosResponse<void>>(
    createPetsBody: CreatePetsBody, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/pets`,
      createPetsBody,options
    );
  }

/**
 * @summary Info for a specific pet
 */
export const showPetById = <TData = AxiosResponse<Pet>>(
    petId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/pets/${petId}`,options
    );
  }


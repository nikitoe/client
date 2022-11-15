import { API } from './Token';

/**
 *
 * @param { {id: string, password: string, ottType: string} } ottForm
 */
export const ottAuthAPI = async (ottForm) => {
  return await API.post('http://3.38.77.116:8081/api/v1/ottAuth', ottForm);
};

import { BaseApiURL, ApiPath, AuthApiPath } from "../constants/api.constants";
import { HttpMethod } from "../constants/http.constants";

export interface IUser {
  id: string;
  fullName: string;
  email: string;
  createdAt: string;
}

export interface IResponse {
  token: string;
  user: IUser;
}

async function registration<IUser>(fullName: string, email: string, password: string): Promise<IResponse> {

  const response = await fetch(
    `${BaseApiURL}${ApiPath.AUTH}${AuthApiPath.REGISTER}`,
    {
      method: HttpMethod.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({fullName, email, password}),
    }
  );
  const data = await response.json();

  return data;
}

async function login<IUser>(email: string, password: string): Promise<IResponse> {

  const response = await fetch(
    `${BaseApiURL}${ApiPath.AUTH}${AuthApiPath.LOGIN}`,
    {
      method: HttpMethod.POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password}),
    }
  );
  const data = await response.json();

  return data;
}


const authService = {
  registration,
  login
};
export default authService;
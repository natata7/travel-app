import { useNavigate } from "react-router-dom";

export default function handleResponse(response: Response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);

    console.log(response)

    if (!response.ok) {
      if ([401, 403].includes(response.status) && localStorage.getItem("token")) {
        // logout if 401 Unauthorized or 403 Forbidden response returned from api
        localStorage.removeItem("token");
        const navigate = useNavigate();
        navigate("/sign-in", { replace: true });
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

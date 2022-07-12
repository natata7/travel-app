export default function authHeader() {
  const tokenStr = localStorage.getItem("token");

  if (tokenStr) {
    return { Authorization: "Bearer " + tokenStr };
  } else {
    return { Authorization: "" };
  }
}

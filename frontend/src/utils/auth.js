import { clientServer } from "@/config"

export async function validateStoredToken() {
  const token = localStorage.getItem("token")
  if (!token) return false

  try {
    await clientServer.get("/get_user_and_profile", { params: { token } })
    return true
  } catch {
    localStorage.removeItem("token")
    return false
  }
}

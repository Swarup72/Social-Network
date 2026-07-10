export function getErrorMessage(payload, fallback = "Something went wrong") {
  if (!payload) return fallback
  if (typeof payload === "string") return payload
  if (typeof payload.message === "string") return payload.message
  return fallback
}

// Used by Render's health check
export function GET() {
  return Response.json({ status: "ok" });
}

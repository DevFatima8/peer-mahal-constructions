export const dynamic = "force-dynamic";

/**
 * Health check.
 *
 * This website is fully static / serverless — there is NO database and NO
 * environment variables. Contact form submissions are handled directly by
 * Formspree from the browser, so there is nothing external to ping here.
 */
export async function GET() {
  return Response.json({
    ok: true,
    site: "peermahalconstruction.com",
    database: "none",
    forms: "formspree",
    time: new Date().toISOString(),
  });
}

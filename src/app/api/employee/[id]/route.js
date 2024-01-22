export const dynamic = "force-dynamic";
import { db } from "@/app/db";

export async function GET(req, context) {
  const paramId = parseInt(context.params.id);
  console.log("context", paramId);
  const { employees } = db;

  const employee = employees.find((employee) => employee.id === paramId);

  return new Response(JSON.stringify({ employee: employee }));
}

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Intentamos leer el JSON del body
  const body = (await req.json().catch(() => null)) as {
    password?: string;
  } | null;

  // Lo que el usuario envía desde el frontend
  const password = body?.password ?? "";

  // Lo que está en la variable de entorno de Vercel
  const adminPassword = process.env.ADMIN_PASSWORD ?? "";

  // Comparamos
  const ok = password === adminPassword;

  // Devolvemos solo true/false (no revelamos la clave)
  return NextResponse.json({ ok });
}

import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { password } = (await req.json()) as { password?: string };
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return NextResponse.json(
        { ok: false, error: 'ADMIN_PASSWORD no está configurada.' },
        { status: 500 }
      );
    }

    if (password === adminPassword) {
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json(
      { ok: false, error: 'Contraseña incorrecta.' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Error en admin login', error);
    return NextResponse.json(
      { ok: false, error: 'Error al procesar la solicitud.' },
      { status: 500 }
    );
  }
}

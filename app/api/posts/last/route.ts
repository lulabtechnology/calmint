import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET: obtener el último post creado
export async function GET() {
  try {
    const lastPost = await prisma.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ lastPost });
  } catch (error) {
    console.error("Error getting last post", error);
    return NextResponse.json(
      { error: "Error obteniendo el último post" },
      { status: 500 }
    );
  }
}

// DELETE: borrar el último post creado
export async function DELETE() {
  try {
    const lastPost = await prisma.post.findFirst({
      orderBy: { createdAt: "desc" },
    });

    if (!lastPost) {
      return NextResponse.json(
        { message: "No hay posts para borrar" },
        { status: 404 }
      );
    }

    await prisma.post.delete({
      where: { id: lastPost.id },
    });

    return NextResponse.json({ message: "Último post eliminado" });
  } catch (error) {
    console.error("Error deleting last post", error);
    return NextResponse.json(
      { error: "Error eliminando el último post" },
      { status: 500 }
    );
  }
}

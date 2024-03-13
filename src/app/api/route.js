import { NextRequest, NextResponse } from "next/server";

const campus = [
    {
      id:1,
      nome_campi: "Campus Nova Andradina",
      imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"
    },
    {
      id:2,
      nome_campi: "Campus Campo Grande",
      imagem_url: "https://www.ifms.edu.br/imagens/imagens-noticias/abraco-pela-educacao/img_5497.jpg"
    }
  ];

export async function GET() {
    try {
      return NextResponse.json(campus);
    } catch (error) {
      return NextResponse.error('Erro interno do servidor', { status: 500 });
    }
  };
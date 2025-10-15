// rrotas de requisição api que não usa ID (GET / POST)

import { createOrdemServico, getAllOrdemServico } from "@/controllers/OrdemController";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    try {
        //requisição HTTP -> é front -> request -> backend
        const ordemServicos = await getAllOrdemServico(); //busca todos os usuário no BD
        return NextResponse.json({success:true, data: ordemServicos});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}

export async function POST(req:NextRequest){ //pega o conteudo do HTML(visual)
    try {
        const data = await req.json(); //converte html => json
        const novaOrdemServico = await createOrdemServico(data);
        return NextResponse.json({success:true, data:novaOrdemServico});
    } catch (error) {
        return NextResponse.json({success:false, error:error});
    }
}


import { NextRequest, NextResponse } from "next/server";

type dataType = {
  name?: string;
};

export async function POST(request: NextRequest) {
    const data: dataType = await request.json();
    const responseMessage = `Hello, ${data.name || 'NO NAME PERSON'}!`;
    return NextResponse.json({ message: responseMessage });
}
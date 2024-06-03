import { NextResponse } from "next/server";


// route handlers 
export async function GET(){
    return NextResponse.json({
        message: "Hello world"
    })
}
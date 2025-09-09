import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient();


type ApiResponse = {
    success: boolean;
    message: string; 
    error?: string;
}

export function GET() {
    return Response.json([{
        user: "shomik@gmail.com",
        name: "shomik das",
    }]);
}

export async function POST(request: Request): Promise<Response> {
    try{
        const body = await request.json();
        if(!body.email || !body.password){
            return Response.json({ 
                success: false,
                message: "Email and password are required"
            },
            { status: 400 });
        }
        await prisma.user.create({
            data: {
                email: body.email,
                userName: body.userName,
                password: body.password,
            }
        })
        const res: ApiResponse = {
            success: true,
            message: "User created successfully",
        }
        return Response.json(res);
    }
    catch(error: any){
        const res: ApiResponse = {
            success: false,
            message: "something went wrong",
            error: error.message,
        }
        return Response.json(res);
    }
}

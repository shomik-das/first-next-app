import { PrismaClient } from '../../generated/prisma'
const prisma = new PrismaClient();

export function GET() {
    return Response.json([{
        user: "shomik@gmail.com",
        name: "shomik das",
    }]);
}

export async function POST(request: Request) {
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
        return Response.json({
            success: true,
            message: "user created successfully",
        })
    }
    catch(error: any){
        return Response.json({
            success: false,
            error: error.message,
            message: "something went wrong",
        });
    }
}

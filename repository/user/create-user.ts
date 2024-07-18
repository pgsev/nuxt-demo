import prisma from "~/prisma";

export async function createUser(){
    const user = await prisma.user.create({
        data: {
            email: 'elsa@prisma.io',
            name: 'Elsa Prisma',
        },
    })
    if (!user){
        console.log('User creation failed')
        return null
    }
    return user
}
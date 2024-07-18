import {saveUser} from "~/service/user/save-user";

export default defineEventHandler(async (event) => {
    const user = readBody(event)

    if (!user){
        throw createError({
            statusCode: 400,
            statusMessage: 'Invalid user',
        })
    }

    await POST(user)
})


async function POST(userDetail){
    const userSaveResult =await saveUser(userDetail)
    if (!userSaveResult){
        throw createError({
            statusCode: 500,
            statusMessage: 'User information failed to save',
        })
    }
    return userSaveResult
}
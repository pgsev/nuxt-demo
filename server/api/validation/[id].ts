
export default defineEventHandler((event) => {
    console.log(event.context.params.id)
    const id = parseInt(event.context.params.id) as number

    if (!Number.isInteger(id)){
        throw createError({
            statusCode: 400,
            statusMessage: 'ID should be an integer'
        })
    }

    return 'all good'
})
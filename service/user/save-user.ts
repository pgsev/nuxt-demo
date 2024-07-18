import {createUser} from "~/repository/user/create-user";


export async function saveUser(userDetail){
    if (!userDetail){
        console.log('User information cannot be empty')
        return null;
    }

    const user = await createUser(userDetail);
    return user ? user: null;
}
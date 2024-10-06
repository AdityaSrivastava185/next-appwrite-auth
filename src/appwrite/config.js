import { Client, Databases, Account } from "node-appwrite";

const createAdminClient = async () => {
    const client = new client()
        .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT)
        .setProject(process.env.NEXT_PUBLIC_PROJECT_ID)
        .setKey(process.env.NEXT_PUBLIC_API_KEY)

    return {
        get account(){
            return new Account(client)
        },
        get databases(){
            return new Databases(client)
        },
    }
}

export {createAdminClient}
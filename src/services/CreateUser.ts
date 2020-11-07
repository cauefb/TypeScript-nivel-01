interface TechObjects{
    title: string;
    experience: number;
}
interface CreateUserData{
    name?: string;
    email: string;
    passaword: string;
    techs:Array<string | TechObjects>
}

export default function createUser({name='', email, passaword}: CreateUserData){
    const user = {
        name,
        email,
        passaword
    }
    return user;
}
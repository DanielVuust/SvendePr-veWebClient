export class UserModel{
    userId?: string;
    name?: string;
    email?: string;
    constructor(userId: string, name: string, email: string){
        this.userId = userId;
        this.name = name;
        this.email = email;
    }
}
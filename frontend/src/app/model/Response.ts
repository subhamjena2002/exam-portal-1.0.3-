import { User } from "./User";

export interface Response{
    code : string;
    status : string;
    message : string;
    user : User;
}
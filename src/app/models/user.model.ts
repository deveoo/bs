import { Signature } from "./signature.model";

export class User{
    public uuid?: string;
    public full_name?: string;
    public email?: string;
    public kyc_status?: number;
    public avatar?: string;
    public language?: string;
    public has_password?: boolean;
    public signature: Signature;
    public application?: string;
}

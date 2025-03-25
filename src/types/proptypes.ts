export interface signInPropType {
    email:string;
    password:string;
    }

export interface signUpPropType extends signInPropType{
        name:string;
        phone:string;
        company:string;
        agency:"Yes"|"No";
    }
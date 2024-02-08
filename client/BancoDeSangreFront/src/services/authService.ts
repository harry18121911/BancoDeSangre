import { userLogin, userRegister } from "../redux/features/auth/authActions";
import store from "../redux/store";

export const handleLogin = (event: React.FormEvent, email: string, password: string, role: string) => {
    event.preventDefault();
    try {
        if(!role || !email || !password){
            return alert("Please Provide All Fields")
        }
        store.dispatch(userLogin({ email, password, role}));
    } catch (error) {
        console.log(error)
    }

}

export const handleRegister = (
    event: React.FormEvent,
    name: string,
    role: string,
    email: string,
    password: string,
    phone: string,
    organizationName: string,
    hospitalName: string,
    address: string,) => {
        event.preventDefault();
        try {
            store.dispatch(userRegister({
                name,
                role,
                email,
                password,
                phone,
                organizationName,
                hospitalName,
                address}))
        } catch (error) {
            console.log(error)
        }
}

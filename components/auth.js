import { observable } from "mobx";

class AuthService {
    @observable loggedIn = false ;
}

export default new AuthService();
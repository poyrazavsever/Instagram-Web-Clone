import store from "./store/index"
import {setUser} from "./store/auth"

export const userHandle = data => {
    store.dispatch(setUser(data))
}
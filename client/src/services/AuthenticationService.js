import HTTP from "@/services/http"

export default {
	register(credentials) {
		return HTTP().post("/register", credentials)
	}
	// login (credentials) {
	//   return Api().post('login', credentials)
	// }
}

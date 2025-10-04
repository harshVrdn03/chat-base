import { ApiService } from "./api.service";
class UserService extends ApiService {

  async getUser() {
    try {
      const response = await this.get("/todos");
      return response.data;
    } catch (error: any) {
      throw error;
    }
  }
}

export { UserService };

import { ApiService } from "./api.service";
import { ToastMessageService } from "./toast-message.service";

class UserService extends ApiService {
  private toastService: ToastMessageService;
  constructor() {
    super();
    this.toastService = new ToastMessageService();
  }
  async getUser() {
    try {
      const response = await this.get("/todos");
      this.toastService.apiSuccess(response.message);
      return response.data;
    } catch (error: any) {
      this.toastService.apiError(error?.message);
    }
  }
}

export { UserService };

import { AuthService } from "@/services/auth.service";
import { AuthStoreManager } from "@/stores";
import { useEffect } from "react";

export const DashboardPage = () => {
  const authService = new AuthService();
  const authManager = new AuthStoreManager();

  const getProfile = async () => {
    try {
      const response = await authService.getProfile();
      authManager.setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return <div>DashboardPage</div>;
};

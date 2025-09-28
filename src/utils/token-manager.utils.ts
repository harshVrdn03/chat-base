// utils/tokenManager.ts
class TokenManager {
  private token: string | null = null;
  private refreshToken: string | null = null;

  setToken(token: string): void {
    this.token = token;
    localStorage.setItem("authToken", token);
  }

  setRefreshToken(refreshToken: string): void {
    this.refreshToken = refreshToken;
    localStorage.setItem("refreshToken", refreshToken);
  }

  getToken(): string | null {
    if (!this.token) {
      this.token = localStorage.getItem("authToken");
    }
    return this.token;
  }

  getRefreshToken(): string | null {
    if (!this.refreshToken) {
      this.refreshToken = localStorage.getItem("refreshToken");
    }
    return this.refreshToken;
  }

  clearTokens(): void {
    this.token = null;
    this.refreshToken = null;
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
  }

  hasValidToken(): boolean {
    const token = this.getToken();
    if (!token) return false;

    // Basic token validation (you might want to add JWT expiration check)
    return token.length > 0;
  }
}

export const tokenManager = new TokenManager();

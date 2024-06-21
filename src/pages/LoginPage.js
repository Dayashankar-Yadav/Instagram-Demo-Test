// LoginPage.js

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = "#loginusername";
    this.passwordInput = "#loginpassword";
    this.loginButton = "//button[normalize-space()='Log in']";
  }

  async navigate() {
    await this.page.goto('https://www.instagram.com/accounts/login/');
  }

  async login(username, password) {
    await this.page.locator('//*[@id="loginForm"]/div/div[1]/div/label/input').fill(username);
    await this.page.locator('//*[@id="loginForm"]/div/div[2]/div/label/input').fill(password);
    await this.page.click('button[type="submit"]');
    await this.page.waitForNavigation();
  }
}

export default LoginPage; // Exporting as default

// ChatPage.js

class ChatPage {
  constructor(page) {
    this.page = page;
  }

  async navigateToDirect() {
    // await this.page.goto('https://www.instagram.com/direct/inbox/');
    await this.page.waitForLoadState('networkidle');
  }

  async sendMessageToUser(username, message) {
    await this.page.waitForTimeout(10000); 

    await this.page.click('div.x1iyjqo2 a >> nth=4');
    await this.page.waitForTimeout(2000); 
    await this.page.click('div.x1n2onr6 div.x13dflua >> nth=0');
    await this.page.waitForTimeout(2000); 
    await this.page.keyboard.type('Hello World!');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2000); 
  }
}

module.exports = ChatPage; 

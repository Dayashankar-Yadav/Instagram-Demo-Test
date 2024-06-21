import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import ChatPage from '../pages/Chatpage';

test('Send message on Instagram', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const chatPage = new ChatPage(page);

  // Login
  await loginPage.navigate();
  await loginPage.login('Dayashankar0591', 'abradabra123');

  await page.pause();

  // Navigate to chat and send message
  await chatPage.navigateToDirect();
  await chatPage.sendMessageToUser('oye_raosahab', 'Hi');
});

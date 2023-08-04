import { test, expect } from '@playwright/test';

const url = 'https://demo-bank.vercel.app/index.html';

test.describe('Login test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(url);
  });

  test('Correct login test', async ({ page }) => {
    await page.getByTestId('login-input').fill('Test1234');
    await page.getByTestId('password-input').fill('password');
    await page.getByTestId('login-button').click();

    await expect(page.getByTestId('user-name')).toHaveText('Jan Demobankowy');
  });

  test('Incorrect login test', async ({ page }) => {
    await page.getByTestId('login-input').fill('Test');
    await page.getByTestId('login-input').blur(); //unfocuse

    await expect(page.getByTestId('error-login-id')).toHaveText(
      `identyfikator ma min. 8 znaków`,
    );
  });
});

import { test, expect } from '@playwright/test';

test.describe('Pulpit test', () => {
  test('test', async ({ page }) => {
    //ACT
    await page.goto('https://demo-bank.vercel.app/index.html');
    await page.getByTestId('login-input').fill('Test1234');
    await page.getByTestId('password-input').fill('password');
    await page.getByTestId('login-button').click();
    await page.locator('#widget_1_transfer_receiver').selectOption('1');
    await page.locator('#widget_1_transfer_amount').fill('120');
    await page.locator('#widget_1_transfer_title').fill('test');
    await page.getByRole('button', { name: 'wykonaj' }).click();
    await page.getByTestId('close-button').click();
    //CHECK
    await expect(page.getByTestId('message-text')).toHaveText(
      'Przelew wykonany! Jan Demobankowy - 120,00PLN - test',
    );
  });
});

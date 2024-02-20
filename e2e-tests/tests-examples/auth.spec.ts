import { test, expect, type Page } from '@playwright/test';


const UI_URL = 'http://localhost:5173'

test('should allow user to sign in', async({page})=>{
await page.goto(UI_URL)
await page.getByRole('link', {name: 'Sign In'}).click()

await expect(page.getByRole('heading', {name: 'Sign In'})).toBeVisible()

await page.locator('[name=email]').fill("1@1@.com")
await page.locator('[name=pasasword]').fill('password')

await page.getByRole('button', {name: 'Login'}).click()

await expect(page.getByText('Sign in Successful')).toBeVisible()

await expect(page.getByRole('link', {name:"my booking"})).toBeVisible()
await expect(page.getByRole('link', {name:"My hotels"})).toBeVisible()
await expect(page.getByRole('button', {name:"Sign Out"})).toBeVisible()
})
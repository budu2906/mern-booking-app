import { test, expect, type Page } from '@playwright/test';


const UI_URL = 'http://localhost:5173'
const testEmail = `test${Math.floor(Math.random() * 90000)+300}@test.com`
test('should allow user to sign in', async({page})=>{
await page.goto(UI_URL)
await page.getByRole('link', {name: 'Sign In'}).click()

await expect(page.getByRole('heading', {name: 'Sign In'})).toBeVisible()

await page.locator('[name=email]').fill("chachibudu@gmail.com")
await page.locator('[name=password]').fill("password")

await page.getByRole('button', {name: 'Login'}).click()

await expect(page.getByText('Sign in Successful')).toBeVisible()

await expect(page.getByRole('link', {name:"my booking"})).toBeVisible()
await expect(page.getByRole('link', {name:"My hotels"})).toBeVisible()
await expect(page.getByRole('button', {name:"Sign Out"})).toBeVisible()
})
test('should allow user to register', async({page})=>{
await page.goto(`${UI_URL}/register`)
await expect(page.getByRole('heading',{name: 'Create an Account'})).toBeVisible()
await page.locator('[name=firstName]').fill('budu')
await page.locator('[name=lastName]').fill('budu')
await page.locator('[name=email]').fill(testEmail)
await page.locator('[name=password]').fill('password')
await page.locator('[name=confirmPassword]').fill('password')
await page.getByRole('button',{name: 'Create Account'}).click()
await expect(page.getByText('Registration success')).toBeVisible()

await expect(page.getByRole('link', {name:"my booking"})).toBeVisible()
await expect(page.getByRole('link', {name:"My hotels"})).toBeVisible()
await expect(page.getByRole('button', {name:"Sign Out"})).toBeVisible()
})
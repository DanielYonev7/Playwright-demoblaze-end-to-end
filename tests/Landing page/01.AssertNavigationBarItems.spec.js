import { test } from '@playwright/test'
import { Login } from '../../helpers/login';

test('Assert navigation bar', async({page})=>{
    await Login(page); 
})
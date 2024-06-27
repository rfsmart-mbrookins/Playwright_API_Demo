import { test, expect } from '@playwright/test';

//GET API Request
test('API GET Request', async ({ request }) => {
  const response = await request.get('https://reqres.in/api/users/2', {
    ignoreHTTPSErrors: true

  });
  const text = await response.text();
  expect(text).toContain('Janet');
  expect(response.status()).toBe(200);

  console.log(await response.json());
});

//POST API Request
test('API Post Request', async ({ request }) => {
    const response = await request.post('https://reqres.in/api/users', {
      ignoreHTTPSErrors: true,
      data: {
        "name": "Raghav",
        "job": "Worst API Tutor Ever"
      }
    });
  
    expect(response.status()).toBe(201);
    const jsonResponse = await response.json();
    expect(jsonResponse).toHaveProperty('name', 'Raghav');
    console.log(jsonResponse);
  });

  //PUT API Request
  test('API PUT Request', async ({ request }) => {
    const response = await request.put('https://reqres.in/api/users/2', {
        ignoreHTTPSErrors: true,
      data: {
        "name": "Raghav",
        "job": "Worst API Tutor Ever"
      }
    });
  
    expect(response.status()).toBe(200);
    
    const jsonResponse = await response.json();
    expect(jsonResponse).toHaveProperty('name', 'Raghav');
    
    console.log(jsonResponse);
  });

  //DELETE API Request
  test('API DELETE Request', async ({ request }) => {
    const response = await request.delete('https://reqres.in/api/users/2', {
      ignoreHTTPSErrors: true
    });
    expect(response.status()).toBe(204);
  });
  
  
  
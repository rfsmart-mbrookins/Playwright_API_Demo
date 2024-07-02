import { test, expect } from '@playwright/test';
import { title } from 'process';


// GET API Request
test('API GET Request', async ({ request }) => {
  const response = await request.get('https://jsonplaceholder.typicode.com/posts', {
    ignoreHTTPSErrors: true,
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});


//POST API Request
test('API Post Request', async ({ request }) => {
  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    ignoreHTTPSErrors: true,
    data: {
      userId: 11,
      id: 101,
      title: "Jenny's Number",
      body: "Hey Jenny, Jenny who can I turn to? You give me something I can hold on to. I know you'll think I'm like the others before. Who saw your name and number on the wall. Jenny I've got your number."
    }
  });
  expect(response.status()).toBe(201); // 201 is the correct status code for resource creation
  const jsonResponse = await response.json();
  // Verifying that the response contains the properties sent in the request
  expect(jsonResponse).toHaveProperty('userId', 11);
  expect(jsonResponse).toHaveProperty('id', 101)
  expect(jsonResponse).toHaveProperty('title', "Jenny's Number");
  console.log(jsonResponse);
});


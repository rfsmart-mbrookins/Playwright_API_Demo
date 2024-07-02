import { test, expect } from '@playwright/test';

// Test data
const baseURL = "https://jsonplaceholder.typicode.com";

// Describe test cases
test.describe.parallel("API Tests", () => {

  // GET API Request
  test('API GET Request', async ({ request }) => {
    const response = await request.get(`${baseURL}/posts`, {
      ignoreHTTPSErrors: true,
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
  });

  // POST API Request
  test.only('API POST Request', async ({ request }) => {
    const response = await request.post(`${baseURL}/posts`, {
      ignoreHTTPSErrors: true,
      data: {
        userId: 11,
        id: 101,
        title: "Jenny's Number",
        body: "Hey Jenny, Who saw your name and number on the wall. Jenny I've got your number. 867-5309."
      }
    });
    expect(response.status()).toBe(201); // 201 is the correct status code for resource creation
    const jsonResponse = await response.json();
    // Verifying that the response contains the properties sent in the request
    expect(jsonResponse).toHaveProperty('userId', 11);
    expect(jsonResponse).toHaveProperty('id', 101);
    expect(jsonResponse).toHaveProperty('title', "Jenny's Number");
    console.log(jsonResponse);
  });

  /////
  

});

import { test, expect } from '@playwright/test';


// GET API Request
test('API GET Request', async ({ request }) => {
  const response = await request.get('https://petstore.swagger.io/v2/pet/findByStatus', {
    data: {
      status: 'available' // you can change the status as needed
    },
    ignoreHTTPSErrors: true
  });
  expect(response.status()).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);
});

// //POST API Request
// test('API Post Request', async ({ request }) => {
//     const response = await request.post('https://petstore.swagger.io/v2/pet', {
//       ignoreHTTPSErrors: true,
//       data: {
//         "id": 8675309,
//         "category": {
//           "id": 8675309,
//           "name": "Jenny"
//         },
//         "name": "doggie",
//         "photoUrls": [
//           "https://media.istockphoto.com/id/525497677/photo/party-dog.jpg?s=2048x2048&w=is&k=20&c=p7sYq_9bYQBDGKPC5XhAIrvy-AwXZExoeoqeheaID6U="
//         ],
//         "tags": [
//           {
//             "id": 8675309,
//             "name": "Jenny"
//           }
//         ],
//         "status": "available"
//       }
//     });
//     expect(response.status()).toBe(200); // or 201 if you're creating a new resource
//     const jsonResponse = await response.json();
//     expect(jsonResponse).toHaveProperty('name', 'doggie'); // matching the data sent in the request
//     console.log(jsonResponse);
// });

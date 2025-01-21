# DAY 5

# API Testing Report

**Project Name:** E-commerce Platform  
**Testing Date:** January 21, 2025  
**Tested by:** [Your Name]  
**Version:** 1.0

---

## 1. Test Overview

The testing focused on ensuring that the APIs provided by the E-commerce platform function correctly. This includes testing critical endpoints such as authentication, product management, cart management, and user-related actions. The goal was to verify that the API endpoints behave as expected and return correct responses under various scenarios.

---

## 2. Tested API Endpoints

### 2.1 Authentication API
- **Endpoint:** `POST /api/login`
- **Test Description:** Verify that users can log in with valid credentials.
- **Test Steps:**
  1. Send a POST request with a valid username and password.
  2. Check the response status code and body.
- **Expected Result:** 
  - **Status Code:** 200 OK
  - **Response Body:** `{ "token": "valid_jwt_token" }`
- **Result:** Success
- **Details:** The login API returns the expected status code (200 OK) and the authentication token when valid credentials are provided.

---

### 2.2 Signup API
- **Endpoint:** `POST /api/signup`
- **Test Description:** Verify that users can successfully sign up with valid details.
- **Test Steps:**
  1. Send a POST request with a username, email, and password.
  2. Check the response status code and body.
- **Expected Result:**
  - **Status Code:** 201 Created
  - **Response Body:** `{ "message": "User created successfully" }`
- **Result:** Success
- **Details:** The signup API works as expected. A new user is created successfully, and the API returns the correct response body.

---

### 2.3 Get Products API
- **Endpoint:** `GET /api/products`
- **Test Description:** Ensure that the API returns a list of products.
- **Test Steps:**
  1. Send a GET request to retrieve the list of products.
  2. Verify the response contains an array of product objects.
- **Expected Result:**
  - **Status Code:** 200 OK
  - **Response Body:** 
    ```json
    [
      { "id": 1, "name": "Product 1", "price": 100 },
      { "id": 2, "name": "Product 2", "price": 200 }
    ]
    ```
- **Result:** Success
- **Details:** The API returns a list of products with the correct format and data.

---

### 2.4 Add to Cart API
- **Endpoint:** `POST /api/cart`
- **Test Description:** Verify that products can be added to the shopping cart.
- **Test Steps:**
  1. Send a POST request with a product ID and quantity.
  2. Check the response status code and body.
- **Expected Result:**
  - **Status Code:** 201 Created
  - **Response Body:** `{ "message": "Product added to cart" }`
- **Result:** Success
- **Details:** The API successfully adds products to the cart and returns the expected response.

---

### 2.5 Get Cart API
- **Endpoint:** `GET /api/cart`
- **Test Description:** Verify that users can retrieve their cart information.
- **Test Steps:**
  1. Send a GET request to retrieve the user's cart.
  2. Verify that the response contains the correct cart items.
- **Expected Result:**
  - **Status Code:** 200 OK
  - **Response Body:**
    ```json
    {
      "items": [
        { "product_id": 1, "quantity": 2, "price": 100 },
        { "product_id": 2, "quantity": 1, "price": 200 }
      ]
    }
    ```
- **Result:** Success
- **Details:** The API correctly retrieves the user's cart, including the product ID, quantity, and price.

---

## 3. Summary of Findings

- All tested API endpoints, including **Login**, **Signup**, **Get Products**, **Add to Cart**, and **Get Cart**, are functioning correctly.
- The expected responses are returned with the correct status codes and body formats.
- There are no issues with authentication, product listing, or cart management.

---

## 4. Recommendations

- **API Rate Limiting:** Implement rate limiting to prevent abuse of the APIs.
- **Input Validation:** Ensure input validation is implemented for all user inputs to prevent invalid data submissions.
- **Error Handling:** Improve error handling by ensuring clear, consistent error messages for various failure scenarios (e.g., invalid credentials, missing parameters).

---

## 5. Conclusion

The core APIs of the e-commerce platform have been successfully tested and are working as expected. There were no critical issues identified during the testing phase. The APIs are now ready for production use.

**Testing Status:** Passed  
**Tested by:** [Your Name]  
**Date:** January 21, 2025

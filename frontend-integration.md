# BeapOne CMS API Integration Guide

This document provides details for integrating the frontend application with the BeapOne CMS backend.

## Base URL
`http://localhost:5000/api` (Default development port)

## Authentication

### Sign Up
`POST /auth/signup`

**Request Body:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "organizationName": "Acme Corp",
  "organizationType": "Software",
  "jobTitle": "Engineer",
  "department": "IT",
  "numberOfEmployees": "11-50",
  "country": "USA",
  "password": "securepassword123"
}
```

**Response (201 Created):**
```json
{
  "user": {
    "userId": "string",
    "firstName": "string",
    "lastName": "string",
    "email": "string",
    "phone": "string",
    "organizationName": "string",
    "organizationType": "string",
    "jobTitle": "string",
    "department": "string",
    "numberOfEmployees": "string",
    "country": "string",
    "createdAt": "date-time",
    "updatedAt": "date-time"
  },
  "token": "jwt-token-string"
}
```

### Sign In
`POST /auth/signin`

**Request Body:**
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

**Response (200 OK):**
```json
{
  "user": { ... },
  "token": "jwt-token-string"
}
```

---

## Public Forms & Requests

### Contact Us
`POST /public/contact-us`

**Request Body:**
```json
{
  "location": "New York",
  "inquiryCategory": "Sales & Pricing",
  "fullName": "John Doe",
  "workEmail": "john@example.com",
  "message": "I would like to know more about your pricing plans."
}
```

### Schedule Demo
`POST /public/schedule-demo`

**Request Body:**
```json
{
  "fullName": "Jane Doe",
  "workEmail": "jane@example.com",
  "operatingRegion": "North America",
  "companySize": "51-200",
  "industryVertical": "Finance & Fintech",
  "primaryHubOfInterest": "Financial Management",
  "message": "Interested in a demo for our finance team."
}
```

### Marketing Subscriptions
`POST /public/waitlist` or `POST /public/newsletter`

**Request Body:**
```json
{
  "email": "subscriber@example.com"
}
```

### Customization Request
`POST /public/request-customization`

**Request Body:**
```json
{
  "scopeOfWork": "API Integration",
  "operatingRegion": "EMEA",
  "requiredHubExpertise": "Project Management",
  "detailedRequirements": "We need to integrate with our internal ERP system."
}
```

### Feature Request
`POST /public/request-feature`

**Request Body:**
```json
{
  "featureTitle": "Dark Mode",
  "targetUBOSHub": "General UBOS Overview",
  "detailedDescription": "A dark mode option for the user dashboard."
}
```

---

## Blog

### Get All Posts
`GET /blog`

**Query Parameters (Optional):**
- `category`: Filter by category name
- `tag`: Filter by tag name
- `published`: `true` or `false`

**Response (200 OK):**
```json
[
  {
    "_id": "string",
    "title": "string",
    "slug": "string",
    "content": "string",
    "excerpt": "string",
    "authorId": "string",
    "category": "string",
    "tags": ["string"],
    "featuredImage": "string",
    "isPublished": true,
    "publishedAt": "date-time",
    "comments": [],
    "createdAt": "date-time",
    "updatedAt": "date-time"
  }
]
```

### Get Single Post
`GET /blog/:idOrSlug`

**Response (200 OK):**
```json
{
  "_id": "string",
  "title": "string",
  ...
}
```

### Add Comment
`POST /blog/:id/comments`

**Request Body:**
```json
{
  "authorName": "Reader",
  "authorEmail": "reader@example.com",
  "content": "Great post!"
}
```

### Create Post (Protected)
`POST /blog`

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:**
```json
{
  "title": "New Blog Post",
  "content": "Full article content here...",
  "excerpt": "Short summary...",
  "category": "Technology",
  "tags": ["tech", "cms"],
  "featuredImage": "url-to-image",
  "isPublished": true
}
```

### Update Post (Protected)
`PUT /blog/:id`

**Headers:**
- `Authorization: Bearer <token>`

**Request Body:** Same as Create Post (partial updates allowed).

### Delete Post (Protected)
`DELETE /blog/:id`

**Headers:**
- `Authorization: Bearer <token>`

**Response:** 244 No Content.

---

## Error Responses

The API uses standard HTTP status codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.), and codes in the `5xx` range indicate an error with our servers.

### Error Object Structure

All error responses follow this consistent format:

```json
{
  "status": "error",
  "message": "A human-readable message providing more details about the error.",
  "stack": "Stack trace (only available in development mode for debugging)"
}
```

### Common Status Codes

| Status Code | Description |
| :--- | :--- |
| `200` | **OK** - Everything worked as expected. |
| `201` | **Created** - The request has been fulfilled and has resulted in one or more new resources being created. |
| `204` | **No Content** - The request has been successfully fulfilled and there is no additional content to send in the response payload body. |
| `400` | **Bad Request** - The request could not be understood or was missing required parameters. |
| `401` | **Unauthorized** - Authentication is required and has failed or has not yet been provided. |
| `403` | **Forbidden** - The server understood the request but refuses to authorize it. |
| `404` | **Not Found** - The requested resource could not be found. |
| `500` | **Internal Server Error** - Something went wrong on our end. |

### Validation Errors

For requests that fail Zod validation (handled by the `validate` middleware), the response will look like this:

```json
{
  "error": "Specific validation error message (e.g., 'Email is required')"
}
```
*(Note: The current `validate.middleware.ts` returns `{ error: string }` instead of the standard error object. This is a known inconsistency that simplifies frontend validation display.)*

# superblue

Effortless type-safe communication between client and server

## Packages

Package | Description
---|---
[`@superblue/core`](./packages/core) | Effortless type-safe communication between client and server
[`@superblue/fetch`](./packages/fetch) | Web API Fetch adapter for superblue
[`@superblue/node`](./packages/node) | Node.js adapter for superblue

## Example

See [`example`](./example).

## Why

### Http does not scale

Traditional HTTP protocols are simple and universal, but they present challenges for building complex, scalable systems. In a microservices or multi-service architecture, the typical HTTP approach has several limitations:

- **Route Complexity and Schema Management**: In modern applications, each route has specific validation requirements. The HTTP protocol lacks a standard way to describe or validate these schemas, making scalability challenging.
- **Error and Status Handling**: HTTP error handling can become inconsistent or imprecise, especially in environments with numerous dependencies and potential error sources.
- **Consistency and Code Reuse**: As applications grow, maintaining consistent handling of routes, schemas, and error structures across multiple services becomes harder. Repeated configuration in each service leads to duplicated code and increases the risk of inconsistency.

`superblue` enhances the HTTP protocol by enabling you to directly write functions that can be called directly from the client. Internally, it uses the HTTP protocol in a way that enables you to write your code as a function rather than as an HTTP request, just like you would for any other function.

### JavaScript does not scale

JavaScript offers flexibility but lacks typing guarantees, making large-scale projects more challenging to maintain:

- **Dynamic Typing**: JavaScript’s dynamic typing can lead to runtime errors that are hard to diagnose, making code less reliable and more expensive to maintain.
- **Manual Validation**: Without static typing, request and response payloads require complex, manual validation, adding bug-prone code to each route.
- **Repetitive Code**: Handling requests and responses in a classic JavaScript system involves duplicative code that increases technical debt and reduces code readability.

`superblue` leverages Zod for static typing and runtime validation, ensuring each request and response adheres to defined schemas. This approach reduces errors, clarifies route contracts, and improves maintainability.

### Errors are hard to handle

Error handling is a complex aspect of modern application development, with unique challenges on both server and client sides:

- **Standardized Error Structures**: Without a unified structure, errors across services are inconsistent, making it difficult for clients to interpret and handle them accurately.
- **Centralized Control**: Configuring access controls and error handling in each service individually adds maintenance overhead and increases security risks. superblue allows centralized configuration of error handling, reducing redundancy and improving error clarity.
- **Detailed Error Messages for Clients**: Client applications, such as mobile and web apps, need structured, predictable error responses to provide feedback to users and make intelligent retry or fallback decisions.
- **Improved Security with Controlled Responses**: Detailed error messages must be managed carefully to avoid revealing sensitive information. With `superblue`, error responses can be configured to balance user feedback and security, ensuring that only necessary information is shared while maintaining safe practices.

With `superblue`, error handling becomes more manageable, consistent, and secure across both server and client applications. Centralized error structures reduce duplication and provide a more predictable experience for clients, while controlled error responses enhance security.
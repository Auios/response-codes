# ResponseCodes

I created this package because I was tired of constantly memorizing HTTP response code meanings and struggling to determine which code to use in different situations. It's designed to make working with response codes quick and intuitive.

## Installation

You can install the package via npm:

```bash
npm install @auios/response-codes
```

## Usage

Below is a basic example of how to use `ResponseCodes` with ES modules:

```javascript
import responseCodes from '@auios/response-codes';

export const onRequestPost = async (ctx: EventContext) => {
  // ...Handler logic...

  if (!user) {
    return Response.json({ error: "User not found." }, { status: ResponseCode.NotFound_404 });
  }

  // ...etc...

  return Response.json({ user: user.id }, { status: ResponseCode.Created_201 });
}
```

What's great about this is that your editor should auto complete based on either the code itself or even
the description of the code.

## Full List

### 1xx Informational

- **Continue_100**: `100`
  The server has received the request headers, and the client should proceed to send the request body.

- **SwitchingProtocols_101**: `101`
  The requester has asked the server to switch protocols.

- **Processing_102**: `102`
  The server has received and is processing the request, but no response is available yet.

- **EarlyHints_103**: `103`
  The server is likely to send a final response with the header fields included in the informational response.

### 2xx Successful

- **OK_200**: `200`
  The request is successfully processed.

- **Created_201**: `201`
  A new resource is successfully created.

- **Accepted_202**: `202`
  The request has been accepted for processing, but the processing is not complete.

- **NonAuthoritativeInformation_203**: `203`
  The request is successfully processed, but is returning information that may be from another source.

- **NoContent_204**: `204`
  The request is successfully processed, but there is no content to return.

- **ResetContent_205**: `205`
  The request is successfully processed, but the client should reset the view.

- **PartialContent_206**: `206`
  The server is delivering only part of the resource due to a range header sent by the client.

- **MultiStatus_207**: `207`
  The message body that follows is an XML message and can contain a number of separate response codes.

- **AlreadyReported_208**: `208`
  The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.

- **IMUsed_226**: `226`
  The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

### 3xx Redirection

- **MultipleChoices_300**: `300`
  There are multiple options for the resource that the client may follow.

- **MovedPermanently_301**: `301`
  This and all future requests should be directed to the given URI.

- **Found_302**: `302`
  The resource was found, but at a different URI.

- **SeeOther_303**: `303`
  The response to the request can be found under another URI using a GET method.

- **NotModified_304**: `304`
  The resource has not been modified since the version specified by the request headers.

- **UseProxy_305**: `305`
  The requested resource is available only through a proxy, the address for which is provided in the response.

- **SwitchProxy_306**: `306`
  No longer used. Originally meant "Subsequent requests should use the specified proxy."

- **TemporaryRedirect_307**: `307`
  The request should be repeated with another URI, but future requests can still use the original URI.

- **PermanentRedirect_308**: `308`
  The request and all future requests should be repeated using another URI.

### 4xx Client Error

- **BadRequest_400**: `400`
  The request is malformed or contains invalid parameters.

- **Unauthorized_401**: `401`
  Authentication is required and has failed or has not yet been provided.

- **PaymentRequired_402**: `402`
  Reserved for future use.

- **Forbidden_403**: `403`
  The user does not have the necessary permissions for the resource.

- **NotFound_404**: `404`
  The requested resource does not exist.

- **MethodNotAllowed_405**: `405`
  The HTTP method used is not allowed for the resource.

- **NotAcceptable_406**: `406`
  The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.

- **ProxyAuthenticationRequired_407**: `407`
  The client must first authenticate itself with the proxy.

- **RequestTimeout_408**: `408`
  The server timed out waiting for the request.

- **Conflict_409**: `409`
  There is a conflict with the current state of the resource.

- **Gone_410**: `410`
  The requested resource is no longer available and will not be available again.

- **LengthRequired_411**: `411`
  The request did not specify the length of its content, which is required by the requested resource.

- **PreconditionFailed_412**: `412`
  The server does not meet one of the preconditions that the requester put on the request.

- **PayloadTooLarge_413**: `413`
  The request is larger than the server is willing or able to process.

- **URITooLong_414**: `414`
  The URI provided was too long for the server to process.

- **UnsupportedMediaType_415**: `415`
  The request entity has a media type which the server or resource does not support.

- **RangeNotSatisfiable_416**: `416`
  The client has asked for a portion of the file, but the server cannot supply that portion.

- **ExpectationFailed_417**: `417`
  The server cannot meet the requirements of the Expect request-header field.

- **ImATeapot_418**: `418`
  The server refuses the attempt to brew coffee with a teapot.

- **MisdirectedRequest_421**: `421`
  The request was directed at a server that is not able to produce a response.

- **UnprocessableEntity_422**: `422`
  The request was well-formed but was unable to be followed due to semantic errors.

- **Locked_423**: `423`
  The resource that is being accessed is locked.

- **FailedDependency_424**: `424`
  The request failed due to failure of a previous request.

- **TooEarly_425**: `425`
  Indicates that the server is unwilling to risk processing a request that might be replayed.

- **UpgradeRequired_426**: `426`
  The client should switch to a different protocol.

- **PreconditionRequired_428**: `428`
  The origin server requires the request to be conditional.

- **TooManyRequests_429**: `429`
  The user has sent too many requests in a given amount of time.

- **RequestHeaderFieldsTooLarge_431**: `431`
  The server is unwilling to process the request because its header fields are too large.

- **UnavailableForLegalReasons_451**: `451`
  The server is denying access to the resource as a consequence of a legal demand.

### 5xx Server Error

- **InternalServerError_500**: `500`
  An unexpected error occurs on the server.

- **NotImplemented_501**: `501`
  The server does not recognize the request method or lacks the ability to fulfill it.

- **BadGateway_502**: `502`
  The server is acting as a gateway and receives an invalid response.

- **ServiceUnavailable_503**: `503`
  The server is temporarily unavailable.

- **GatewayTimeout_504**: `504`
  The server is acting as a gateway and did not receive a timely response.

- **HTTPVersionNotSupported_505**: `505`
  The server does not support the HTTP protocol version used in the request.

- **VariantAlsoNegotiates_506**: `506`
  Transparent content negotiation for the request results in a circular reference.

- **InsufficientStorage_507**: `507`
  The server is unable to store the representation needed to complete the request.

- **LoopDetected_508**: `508`
  The server detected an infinite loop while processing the request.

- **NotExtended_510**: `510`
  Further extensions to the request are required for the server to fulfill it.

- **NetworkAuthenticationRequired_511**: `511`
  The client needs to authenticate to gain network access.

## License

This project is licensed under the MIT License.

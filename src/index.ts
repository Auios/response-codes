const ResponseCode = {
  // 1xx Informational
  /**
   * The server has received the request headers, and the client should proceed to send the request body.
   * @description Indicates that the initial part of the request has been received and the client should continue with the request or ignore the response if the request is already finished.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/100
   */
  Continue_100: 100,

  /**
   * The requester has asked the server to switch protocols.
   * @description Indicates that the server understands and is willing to comply with the client's request to switch protocols.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/101
   */
  SwitchingProtocols_101: 101,

  /**
   * The server has received and is processing the request, but no response is available yet.
   * @description Indicates that the server has received the request and is still processing it.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/102
   */
  Processing_102: 102,

  /**
   * The server is likely to send a final response with the header fields included in the informational response.
   * @description Provides an indication of what the final response might contain before the actual response is sent.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
   */
  EarlyHints_103: 103,

  // 2xx Successful
  /**
   * The request is successfully processed.
   * @description Standard response for successful HTTP requests.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/200
   */
  OK_200: 200,

  /**
   * A new resource is successfully created.
   * @description Indicates that the request has been fulfilled and resulted in a new resource being created.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/201
   */
  Created_201: 201,

  /**
   * The request has been accepted for processing, but the processing is not complete.
   * @description Indicates that the request has been accepted for processing, but the processing has not been completed.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/202
   */
  Accepted_202: 202,

  /**
   * The request is successfully processed, but is returning information that may be from another source.
   * @description Indicates that the returned metainformation is from a local or third-party copy.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/203
   */
  NonAuthoritativeInformation_203: 203,

  /**
   * The request is successfully processed, but there is no content to return.
   * @description The server successfully processed the request, but is not returning any content.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/204
   */
  NoContent_204: 204,

  /**
   * The request is successfully processed, but the client should reset the view.
   * @description The server successfully processed the request, but wants the client to reset the document view.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/205
   */
  ResetContent_205: 205,

  /**
   * The server is delivering only part of the resource due to a range header sent by the client.
   * @description The server is delivering only part of the resource due to a range header sent by the client.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/206
   */
  PartialContent_206: 206,

  /**
   * The message body that follows is an XML message and can contain a number of separate response codes.
   * @description Provides status for multiple independent operations.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/207
   */
  MultiStatus_207: 207,

  /**
   * The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.
   * @description Prevents multiple enumerations of the same collection members.
   * @see https://tools.ietf.org/html/rfc5842
   */
  AlreadyReported_208: 208,

  /**
   * The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
   * @description Indicates successful completion of an instance manipulation request.
   * @see https://tools.ietf.org/html/rfc3229
   */
  IMUsed_226: 226,

  // 3xx Redirection
  /**
   * There are multiple options for the resource that the client may follow.
   * @description Indicates multiple possible locations for the requested resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/300
   */
  MultipleChoices_300: 300,

  /**
   * This and all future requests should be directed to the given URI.
   * @description Indicates permanent redirection to a new resource location.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/301
   */
  MovedPermanently_301: 301,

  /**
   * The resource was found, but at a different URI.
   * @description Temporary redirection to a different resource location.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/302
   */
  Found_302: 302,

  /**
   * The response to the request can be found under another URI using a GET method.
   * @description Directs the client to retrieve the requested resource from a different URL using GET.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
   */
  SeeOther_303: 303,

  /**
   * The resource has not been modified since the version specified by the request headers.
   * @description Indicates that the resource has not been modified since the last request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304
   */
  NotModified_304: 304,

  /**
   * The requested resource is available only through a proxy, the address for which is provided in the response.
   * @description Requires the client to use a proxy to access the resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/305
   */
  UseProxy_305: 305,

  /**
   * No longer used. Originally meant "Subsequent requests should use the specified proxy."
   * @description Deprecated status code, no longer in use.
   */
  SwitchProxy_306: 306,

  /**
   * The request should be repeated with another URI, but future requests can still use the original URI.
   * @description Temporary redirection that preserves the HTTP method.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
   */
  TemporaryRedirect_307: 307,

  /**
   * The request and all future requests should be repeated using another URI.
   * @description Permanent redirection that preserves the HTTP method.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/308
   */
  PermanentRedirect_308: 308,

  // 4xx Client Error
  /**
   * The request is malformed or contains invalid parameters.
   * @description Indicates that the server cannot process the request due to client error.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/400
   */
  BadRequest_400: 400,

  /**
   * Authentication is required and has failed or has not yet been provided.
   * @description Indicates that authentication is required and has failed or not been provided.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/401
   */
  Unauthorized_401: 401,

  /**
   * Reserved for future use.
   * @description Currently unused status code reserved for potential future payment-related scenarios.
   */
  PaymentRequired_402: 402,

  /**
   * The user does not have the necessary permissions for the resource.
   * @description Indicates that the client does not have access rights to the content.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/403
   */
  Forbidden_403: 403,

  /**
   * The requested resource does not exist.
   * @description Indicates that the requested resource could not be found on the server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/404
   */
  NotFound_404: 404,

  /**
   * The HTTP method used is not allowed for the resource.
   * @description Indicates that the request method is not supported for the requested resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/405
   */
  MethodNotAllowed_405: 405,

  /**
   * The requested resource is capable of generating only content not acceptable according to the Accept headers sent in the request.
   * @description The server cannot produce a response matching the list of acceptable values defined in the request's proactive content negotiation headers.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/406
   */
  NotAcceptable_406: 406,

  /**
   * The client must first authenticate itself with the proxy.
   * @description Indicates that the client must first authenticate itself with the proxy.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/407
   */
  ProxyAuthenticationRequired_407: 407,

  /**
   * The server timed out waiting for the request.
   * @description The server did not receive a complete request within the time limit.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/408
   */
  RequestTimeout_408: 408,

  /**
   * There is a conflict with the current state of the resource.
   * @description Indicates a conflict with the current state of the resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/409
   */
  Conflict_409: 409,

  /**
   * The requested resource is no longer available and will not be available again.
   * @description The requested resource is permanently deleted and will not be available again.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/410
   */
  Gone_410: 410,

  /**
   * The request did not specify the length of its content, which is required by the requested resource.
   * @description The request did not specify the length of its content, which is required by the requested resource.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/411
   */
  LengthRequired_411: 411,

  /**
   * The server does not meet one of the preconditions that the requester put on the request.
   * @description One or more conditions given in the request header fields evaluated to false.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/412
   */
  PreconditionFailed_412: 412,

  /**
   * The request is larger than the server is willing or able to process.
   * @description The request entity is larger than limits defined by server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/413
   */
  PayloadTooLarge_413: 413,

  /**
   * The URI provided was too long for the server to process.
   * @description The URI requested by the client is longer than the server is willing to interpret.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/414
   */
  URITooLong_414: 414,

  /**
   * The request entity has a media type which the server or resource does not support.
   * @description The media format of the requested data is not supported by the server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/415
   */
  UnsupportedMediaType_415: 415,

  /**
   * The client has asked for a portion of the file, but the server cannot supply that portion.
   * @description The requested range cannot be satisfied by the server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/416
   */
  RangeNotSatisfiable_416: 416,

  /**
   * The server cannot meet the requirements of the Expect request-header field.
   * @description The server cannot meet the requirements of the Expect request-header field.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/417
   */
  ExpectationFailed_417: 417,

  /**
   * The server refuses the attempt to brew coffee with a teapot.
   * @description A playful error code indicating the server cannot brew coffee in a teapot.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/418
   */
  ImATeapot_418: 418,

  /**
   * The request was directed at a server that is not able to produce a response.
   * @description The request was directed to a server that cannot produce a response.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/421
   */
  MisdirectedRequest_421: 421,

  /**
   * The request was well-formed but was unable to be followed due to semantic errors.
   * @description The request was well-formed but unable to be processed due to semantic errors.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
   */
  UnprocessableEntity_422: 422,

  /**
   * The resource that is being accessed is locked.
   * @description The resource that is being accessed is locked.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/423
   */
  Locked_423: 423,

  /**
   * The request failed due to failure of a previous request.
   * @description The request failed due to failure of a previous request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/424
   */
  FailedDependency_424: 424,

  /**
   * Indicates that the server is unwilling to risk processing a request that might be replayed.
   * @description The server is unwilling to process a request that might be replayed.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425
   */
  TooEarly_425: 425,

  /**
   * The client should switch to a different protocol.
   * @description The client should switch to a different protocol.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/426
   */
  UpgradeRequired_426: 426,

  /**
   * The origin server requires the request to be conditional.
   * @description The origin server requires the request to be conditional.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/428
   */
  PreconditionRequired_428: 428,

  /**
   * The user has sent too many requests in a given amount of time.
   * @description Too many requests have been sent in a given amount of time.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429
   */
  TooManyRequests_429: 429,

  /**
   * The server is unwilling to process the request because its header fields are too large.
   * @description The server is unwilling to process the request because its header fields are too large.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/431
   */
  RequestHeaderFieldsTooLarge_431: 431,

  /**
   * The server is denying access to the resource as a consequence of a legal demand.
   * @description The server is denying access to the resource as a consequence of a legal demand.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/451
   */
  UnavailableForLegalReasons_451: 451,

  // 5xx Server Error
  /**
   * An unexpected error occurs on the server.
   * @description A generic error message when an unexpected condition was encountered by the server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/500
   */
  InternalServerError_500: 500,

  /**
   * The server does not recognize the request method or lacks the ability to fulfill it.
   * @description The server does not support the functionality required to fulfill the request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/501
   */
  NotImplemented_501: 501,

  /**
   * The server is acting as a gateway and receives an invalid response.
   * @description The server received an invalid response from an upstream server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502
   */
  BadGateway_502: 502,

  /**
   * The server is temporarily unavailable.
   * @description The server is currently unable to handle the request due to temporary overloading or maintenance.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/503
   */
  ServiceUnavailable_503: 503,

  /**
   * The server is acting as a gateway and did not receive a timely response.
   * @description The server did not receive a timely response from an upstream server.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/504
   */
  GatewayTimeout_504: 504,

  /**
   * The server does not support the HTTP protocol version used in the request.
   * @description The server does not support the HTTP protocol version used in the request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/505
   */
  HTTPVersionNotSupported_505: 505,

  /**
   * Transparent content negotiation for the request results in a circular reference.
   * @description Transparent content negotiation for the request results in a circular reference.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/506
   */
  VariantAlsoNegotiates_506: 506,

  /**
   * The server is unable to store the representation needed to complete the request.
   * @description The server is unable to store the representation needed to complete the request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/507
   */
  InsufficientStorage_507: 507,

  /**
   * The server detected an infinite loop while processing the request.
   * @description The server detected an infinite loop while processing the request.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/508
   */
  LoopDetected_508: 508,

  /**
   * Further extensions to the request are required for the server to fulfill it.
   * @description Further extensions to the request are required for the server to fulfill it.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/510
   */
  NotExtended_510: 510,

  /**
   * The client needs to authenticate to gain network access.
   * @description The client needs to authenticate to gain network access.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/511
   */
  NetworkAuthenticationRequired_511: 511,
} as const;

export default ResponseCode;

import { equal, ok } from 'node:assert/strict';
import { describe, it } from 'node:test';
import ResponseCode, {
  ResponseCode as NamedResponseCode,
  ResponseCodeName,
} from '../src/index.ts';

describe('ResponseCode', () => {
  it('exposes expected status values', () => {
    equal(ResponseCode.Continue_100, 100);
    equal(ResponseCode.OK_200, 200);
    equal(ResponseCode.Created_201, 201);
    equal(ResponseCode.NotFound_404, 404);
    equal(ResponseCode.ImATeapot_418, 418);
    equal(ResponseCode.InternalServerError_500, 500);
    equal(ResponseCode.NetworkAuthenticationRequired_511, 511);
  });

  it('shares the same object for default and named exports', () => {
    equal(ResponseCode, NamedResponseCode);
  });

  it('is frozen', () => {
    ok(Object.isFrozen(ResponseCode));
  });
});

describe('ResponseCodeName', () => {
  it('maps status numbers to key names', () => {
    equal(ResponseCodeName[200], 'OK_200');
    equal(ResponseCodeName[404], 'NotFound_404');
    equal(ResponseCodeName[500], 'InternalServerError_500');
  });

  it('round-trips with ResponseCode', () => {
    equal(ResponseCode[ResponseCodeName[200]], 200);
    equal(ResponseCode[ResponseCodeName[404]], 404);
  });

  it('is frozen', () => {
    ok(Object.isFrozen(ResponseCodeName));
  });
});

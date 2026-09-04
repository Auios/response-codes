# ResponseCode

Typed HTTP status codes with editor autocomplete. Node.js 20 or later. ESM-only.

## Installation

```bash
npm install @auios/response-codes
```

## Usage

```javascript
import { ResponseCode, ResponseCodeName } from '@auios/response-codes';

return Response.json(
  { error: 'User not found.' },
  { status: ResponseCode.NotFound_404 },
);

ResponseCodeName[404]; // "NotFound_404"
```

Your editor should autocomplete from the name or JSDoc description.

## Common codes

| Key                       | Status |
| ------------------------- | ------ |
| `OK_200`                  | 200    |
| `Created_201`             | 201    |
| `NoContent_204`           | 204    |
| `MovedPermanently_301`    | 301    |
| `BadRequest_400`          | 400    |
| `Unauthorized_401`        | 401    |
| `Forbidden_403`           | 403    |
| `NotFound_404`            | 404    |
| `InternalServerError_500` | 500    |

The rest are on the `ResponseCode` object (with JSDoc) and on [MDN HTTP status](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

## License

This project is licensed under the MIT License.

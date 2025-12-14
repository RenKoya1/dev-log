# dev-log

A simple development logging utility that only logs in non-production environments.

## Installation

```bash
npm install dev-log
```

## Usage

```typescript
import { devLog } from "dev-log";

devLog.debug("Debug message");
devLog.info("Info message");
devLog.warn("Warning message");
devLog.error("Error message");
```

## Features

- Only logs when `NODE_ENV !== "production"`
- Supports debug, info, warn, and error log levels
- TypeScript support included

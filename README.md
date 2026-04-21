# API Contracts

OpenAPI спецификация и TypeScript типы для API.

## Использование

```typescript
import { Api } from './index';
```

## Генерация

```bash
npm install
npm run generate:api
```

## Структура

```
./
├── openapi.json           # OpenAPI 3.1 спецификация
├── index.ts            # TypeScript типы и API клиент
├── src/
│   └── _generated/   # Сгенерированные типы
└── .github/workflows/
```
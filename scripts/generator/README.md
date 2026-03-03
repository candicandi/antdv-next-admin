# CRUD Generator

A CLI tool for generating CRUD scaffolding in antdv-next-admin.

## Installation

```bash
pnpm install -g commander handlebars fs-extra
```

## Usage

### Generate Simple CRUD

```bash
node scripts/generator/index.js generate --name=Product --module=business
```

This will generate:

- `src/views/business/product/index.vue` - List view with ProTable
- `src/api/product.ts` - API functions
- `src/stores/product.ts` - Pinia store
- `mock/handlers/product.mock.ts` - Mock API handlers

### Generate with Different Templates

```bash
# Complex form
node scripts/generator/index.js generate --name=Order --module=business --template=complex-form

# Master-detail
node scripts/generator/index.js generate --name=Customer --module=crm --template=master-detail
```

### List Available Templates

```bash
node scripts/generator/index.js list-templates
```

## Templates

| Template        | Description                                     |
| --------------- | ----------------------------------------------- |
| `simple-list`   | Basic CRUD table with search and pagination     |
| `complex-form`  | Multi-step or dynamic form with validation      |
| `master-detail` | Split layout with master table and detail panel |

## Generated File Structure

```
src/
├── views/
│   └── {module}/
│       └── {name}/
│           └── index.vue
├── api/
│   └── {name}.ts
├── stores/
│   └── {name}.ts
└── types/
    └── {name}.ts (needs manual creation)

mock/
└── handlers/
    └── {name}.mock.ts
```

## Next Steps After Generation

1. **Add Route**: Update `src/router/routes.ts` to add the new page
2. **Add Translations**: Add i18n keys to `src/locales/*.ts`
3. **Define Types**: Create `src/types/{name}.ts` with interfaces
4. **Customize**: Modify generated files as needed

## Future Enhancements

- [ ] OpenAPI/Swagger import
- [ ] Custom template support
- [ ] Interactive CLI prompts
- [ ] Relation handling (foreign keys)
- [ ] Batch generation from schema

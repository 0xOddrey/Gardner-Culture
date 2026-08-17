# Gardner Academy Staff Policies

A standalone Next.js policy library generated from the current Gardner Culture policy data.

## Development

```bash
npm install
npm run dev
```

## Update policy data

After changing the policy definitions in `../gardner-culture/script.js`, run:

```bash
npm run sync:policies
```

The standalone app reads the generated `data/policies.json` file at build time.

## Vercel

Import the `gardner-policies` directory as the Vercel project root. Vercel will detect Next.js and run `npm run build` automatically.

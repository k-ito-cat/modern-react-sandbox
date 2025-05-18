import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  {
    extends: 'vite.config.ts',
    test: {
      browser: {
        enabled: true,
        provider: 'playwright', // MEMO: ローカルでのみであれば不要だが、CIでtestを実行する場合は必要
        // https://vitest.dev/guide/browser/playwright
        instances: [],
      },
    },
  },
])

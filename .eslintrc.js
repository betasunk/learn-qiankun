module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
      parser: '@babel/eslint-parser',
      ecmaFeatures: {
        // 支持装饰器
        legacyDecorators: true,
      },
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_' }],
      'no-async-promise-executor': 'off',
      'no-unused-expressions': 'off',
      'space-infix-ops': [1, { int32Hint: false }],
      'key-spacing': [1, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
      'comma-spacing': [1, { before: false, after: true }], // 强制在逗号前后使用一致的空格
      'vue/multi-word-component-names': 'off',
      'vue/no-mutating-props': 'off', // 不建议子元素通过v-model修改父元素传的props值
    },
  }
  
module.exports = {
  coverageEnvVar: 'COVERAGE',
  coverageFolder: 'coverage',
  excludes: [
    '*/mirage/**/*'
  ],
  reporters: [
    'html',
    'lcov'
  ],
  useBabelInstrumenter: true
}

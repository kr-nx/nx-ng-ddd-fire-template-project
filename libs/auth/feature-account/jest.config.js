module.exports = {
  name: 'auth-feature-account',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/auth/feature-account',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

const express = require('express');
const request = require('supertest');

const { init } = require('../src/app');

describe('POST /sessions', () => {
  describe('when username is available', () => {
    it('responds with 201', () => {
      // Given
      const app = init();

      // When
      const result = request(app)
        .post('/sessions')
        .send({ username: 'Jitae Kim' });

      // Then
      return result.expect(201);
    });
  });
});

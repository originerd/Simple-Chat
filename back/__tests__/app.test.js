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

  describe('when username is already taken', () => {
    it('responds with 409 and a message', () => {
      // Given
      const username = 'Jitae Kim';
      const app = init({ usernames: [username] });

      // When
      const result = request(app)
        .post('/sessions')
        .send({ username });

      // Then
      return result.expect(409);
    });
  });
});

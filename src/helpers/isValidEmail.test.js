import isValidEmail from './isValidEmail';

describe('isValidEmail', () => {
  it('email should be correct', () => {
    const email = 'email@email.com';
    expect(isValidEmail(email)).toBe(true);
  });

  it('email should be incorrect', () => {
    const email = 'email.com';
    expect(isValidEmail(email)).toBe(false);
  });
});

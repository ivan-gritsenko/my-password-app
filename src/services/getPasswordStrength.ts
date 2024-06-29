import { PasswordStrength } from '../types/PasswordStrength';

const letters = /[a-z]/;
const numbers = /[0-9]/;
const symbols = /[\W_]/;

export function getPasswordStrength(password: string): PasswordStrength {
  if (password.length === 0) {
    return PasswordStrength.Empty;
  } else if (password.length < 8) {
    return PasswordStrength.LessThan8;
  } else {
    const strength = {
      letters: letters.test(password),
      numbers: numbers.test(password),
      symbols: symbols.test(password),
    };

    let strengthCount = 0;

    for (const key in strength) {
      if (strength[key as keyof typeof strength]) {
        strengthCount++;
      }
    }

    switch (strengthCount) {
      case 1:
        return PasswordStrength.Weak;
      case 2:
        return PasswordStrength.Medium;
      case 3:
        return PasswordStrength.Strong;
      default:
        return PasswordStrength.Empty;
    }
  }
}

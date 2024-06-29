import { Component } from '@angular/core';

enum PasswordStrength {
  Empty = 0,
  LessThan8 = 1,
  Weak = 2,
  Medium = 3,
  Strong = 4,
}

enum Colors {
  Red = '#DC143C',
  Gray = '#C8C8C8',
  Green = '#03C03C',
  Yellow = '#f1ea65',
}

const letters = /[a-z]/;
const numbers = /[0-9]/;
const symbols = /[\W_]/;

interface DifficultlyColors {
  color1: Colors;
  color2: Colors;
  color3: Colors;
}

@Component({
  selector: 'app-my-password',
  templateUrl: './my-password.component.html',
  styleUrl: './my-password.component.scss',
})
export class MyPasswordComponent {
  public password: string = '';
  public passwordStrength: PasswordStrength = PasswordStrength.Empty;
  public difficultyColors: DifficultlyColors = {
    color1: Colors.Gray,
    color2: Colors.Gray,
    color3: Colors.Gray,
  };

  onSubmit() {
    if (this.passwordStrength === PasswordStrength.Strong) {
      alert('Your password is strong: "' + this.password + '". Good Job!');
      this.password = '';
      this.setDifficultyColors(Colors.Gray, Colors.Gray, Colors.Gray);
      return;
    }

    switch (this.passwordStrength) {
      case PasswordStrength.Empty:
        alert('Password strength: Empty');
        break;
      case PasswordStrength.LessThan8:
        alert('Password strength: Less than 8');
        break;
      case PasswordStrength.Weak:
        alert('Password strength: Weak');
        break;
      case PasswordStrength.Medium:
        alert('Password strength: Medium');
        break;
      default:
        alert('Error!');
        break;
    }
  }

  onPasswordChange() {
    this.passwordStrength = this.getPasswordStrength(this.password);
    this.updateDifficultyColors(this.passwordStrength);
  }

  getPasswordStrength(password: string): PasswordStrength {
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

  updateDifficultyColors(strength: PasswordStrength) {
    switch (strength) {
      case PasswordStrength.Empty:
        this.setDifficultyColors(Colors.Gray, Colors.Gray, Colors.Gray);
        break;
      case PasswordStrength.LessThan8:
        this.setDifficultyColors(Colors.Red, Colors.Red, Colors.Red);
        break;
      case PasswordStrength.Weak:
        this.setDifficultyColors(Colors.Red, Colors.Gray, Colors.Gray);
        break;
      case PasswordStrength.Medium:
        this.setDifficultyColors(Colors.Yellow, Colors.Yellow, Colors.Gray);
        break;
      case PasswordStrength.Strong:
        this.setDifficultyColors(Colors.Green, Colors.Green, Colors.Green);
        break;
    }
  }

  setDifficultyColors(color1: Colors, color2: Colors, color3: Colors) {
    this.difficultyColors.color1 = color1;
    this.difficultyColors.color2 = color2;
    this.difficultyColors.color3 = color3;
  }
}

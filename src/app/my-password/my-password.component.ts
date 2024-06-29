import { Component } from '@angular/core';
import { getPasswordStrength } from '../../services/getPasswordStrength';
import { PasswordStrength } from '../../types/PasswordStrength';
import { Colors } from '../../types/Colors';
import { DifficultlyColors } from '../../types/DifficultlyColors';

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
      this.passwordStrength = PasswordStrength.Empty;
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
    this.passwordStrength = getPasswordStrength(this.password);
    this.updateDifficultyColors(this.passwordStrength);
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

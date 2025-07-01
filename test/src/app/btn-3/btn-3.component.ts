import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn-3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn-3.component.html',
  styleUrl: './btn-3.component.scss'
})
export class Btn3Component {
  isModalOpen = false;
  dropdownOpen = false;

  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];
  currentSelection: string[] = [];
  submittedOptions: string[] = [];

  openModal(): void {
    this.isModalOpen = true;
    this.currentSelection = [...this.submittedOptions];
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.dropdownOpen = false;
  }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  onOptionChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    if (input.checked) {
      this.currentSelection.push(value);
    } else {
      this.currentSelection = this.currentSelection.filter(v => v !== value);
    }
  }

  submitForm(): void {
    this.submittedOptions = [...this.currentSelection];
    this.closeModal();
  }

  clearSelections(event?: MouseEvent): void {
    if (event) event.stopPropagation();
    this.currentSelection = [];
    this.submittedOptions = [];
  }

  handleBackdropClick(): void {
    this.closeModal();
  }
}


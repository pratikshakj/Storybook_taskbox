import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports:[CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {
  label:string ='Ghost btn'
  isModalOpen = false;
  dropdownOpen = false;

  options: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4'];

  currentSelection: string[] = [];
  submittedOptions: string[] = [];

  openModal(): void {
    this.isModalOpen = true;
    this.currentSelection = [...this.submittedOptions]; // Preload previous selection
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
  if (event) {
    event.stopPropagation(); // Prevent triggering modal open
  }
  this.currentSelection = [];
  this.submittedOptions = [];
}

  handleBackdropClick(): void {
    this.closeModal();
  }

  removeTag(option: string): void {
    this.submittedOptions = this.submittedOptions.filter(o => o !== option);
  }

  onDropdownChange(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const selected: string[] = [];

  Array.from(select.selectedOptions).forEach(option => {
    selected.push(option.value);
  });

  this.currentSelection = selected;
}


}

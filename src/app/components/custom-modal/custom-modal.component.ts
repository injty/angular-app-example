import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "custom-modal",
  standalone: true,
  imports: [],
  templateUrl: "./custom-modal.component.html",
  styleUrl: "./custom-modal.component.scss",
})
export class CustomModalComponent {
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }
}

import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Student } from "../../../models/student.model";

@Component({
  selector: "add-student-modal-content",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./add-student-modal-content.component.html",
})
export class AddStudentModalContentComponent {
  name = "";
  surname = "";
  degree = null;

  maxLength(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 2) input.value = input.value.slice(0, 2);
  }

  @Input() students: Student[] = [];
  @Output() close = new EventEmitter<void>();

  closeModal(): void {
    this.close.emit();
  }

  submit(): void {
    if (!this.name || !this.surname || !this.degree) return;

    const student = {
      id: this.students.length + 1,
      name: this.name,
      surname: this.surname,
      degree: this.degree,
    };

    this.students.push(student);
    this.close.emit();
  }
}

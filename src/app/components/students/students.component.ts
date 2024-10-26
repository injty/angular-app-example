import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Student } from "../../models/student.model";
import { StudentService } from "../../services/student.service";
import { CustomModalComponent } from "../custom-modal/custom-modal.component";
import { LessonsComponent } from "../lessons/lessons.component";
import { AddStudentModalContentComponent } from "./add-student-modal-content/add-student-modal-content.component";

@Component({
  selector: "students",
  standalone: true,
  imports: [CommonModule, CustomModalComponent, AddStudentModalContentComponent, LessonsComponent],
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.scss"],
})
export class StudentsComponent {
  constructor(private studentService: StudentService) {}

  showModal: boolean = false;
  handleModalClose(): void {
    this.showModal = false;
  }

  students: Student[] = [];
  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }

  // NOTE: this is just for deleting a student
  // can be deleting with ID if it's come from backend
  remove(id: number): void {
    this.students = this.students.filter((student) => student.id !== id);
  }
}

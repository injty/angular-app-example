import { CommonModule, DatePipe } from "@angular/common";
import { Component } from "@angular/core";

import { Exam } from "../../models/exam.model";
import { Lesson } from "../../models/lesson.model";
import { Student } from "../../models/student.model";
import { ExamsService } from "../../services/exams.service";
import { LessonsService } from "../../services/lessons.service";
import { StudentService } from "../../services/student.service";
import { CustomModalComponent } from "../custom-modal/custom-modal.component";
import { AddExamModalContentComponent } from "./add-exam-modal-content/add-exam-modal-content";

@Component({
  selector: "exams",
  standalone: true,
  imports: [CommonModule, AddExamModalContentComponent, CustomModalComponent, CustomModalComponent, DatePipe],
  templateUrl: "./exams.component.html",
  styleUrls: ["./exams.component.scss"],
})
export class ExamsComponent {
  constructor(
    private ExamsService: ExamsService,
    private studentService: StudentService,
    private lessonsService: LessonsService,
  ) {}

  exams: Exam[] = [];
  lessons: Lesson[] = [];
  students: Student[] = [];

  showModal: boolean = false;

  ngOnInit(): void {
    this.exams = this.ExamsService.getExams();
    this.lessons = this.lessonsService.getLessons();
    this.students = this.studentService.getStudents();
  }

  handleModalClose(): void {
    this.showModal = false;
  }

  // NOTE: method 1
  getStudentById(id: number): string | void {
    const student = this.students.find((student) => student.id === id);

    if (!student) return;
    return `${student.name} ${student.surname}`;
  }

  // NOTE: method 2 with as string
  getLessonById(id: number): string {
    return this.lessons.find((lesson) => lesson.id === id)?.name as string;
  }

  remove(id: number): void {
    this.exams = this.exams.filter((exam) => exam.id !== id);
  }
}

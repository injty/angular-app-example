import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { Exam } from "../../../models/exam.model";
import { Lesson } from "../../../models/lesson.model";
import { Student } from "../../../models/student.model";
import { LessonsService } from "../../../services/lessons.service";
import { StudentService } from "../../../services/student.service";

@Component({
  selector: "add-exam-modal-content",
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: "./add-exam-modal-content.html",
})
export class AddExamModalContentComponent {
  constructor(private lessonsService: LessonsService, private studentService: StudentService) {}

  @Output()
  close = new EventEmitter<void>();

  @Input()
  exams: Exam[] = [];

  data = {
    lessonSelect: null,
    studentSelect: null,
    examDate: null,
  };
  grade = null;

  lessons: Lesson[] = [];
  students: Student[] = [];

  ngOnInit(): void {
    this.lessons = this.lessonsService.getLessons();
    this.students = this.studentService.getStudents();
  }

  maxLength(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 2) input.value = input.value.slice(0, 2);
  }

  submit(): void {
    if (!this.data.lessonSelect || !this.data.studentSelect || !this.grade || !this.data.examDate) return;

    const exam = {
      id: this.exams.length + 1,
      lesson_id: this.data.lessonSelect,
      student_id: this.data.studentSelect,
      exam_date: this.data.examDate,
      grade: this.grade,
    };
    this.exams.push(exam);
    this.close.emit();
  }
}

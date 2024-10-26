import { Injectable } from "@angular/core";
import { Exam } from "../models/exam.model";

@Injectable({
  providedIn: "root",
})
export class ExamsService {
  private exams: Exam[] = [
    {
      id: 1,
      lesson_id: 1,
      student_id: 1,
      exam_date: "2022-01-01",
      grade: 4,
    },
  ];

  getExams(): Exam[] {
    return this.exams;
  }

  removeExam(id: number): void {
    this.exams = this.exams.filter((exam) => exam.id !== id);
  }
}

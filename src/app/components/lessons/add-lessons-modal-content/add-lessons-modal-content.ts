import { CommonModule } from "@angular/common";
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Lesson, Teacher } from "../../../models/lesson.model";
import { TeacherService } from "../../../services/teacher.service";

@Component({
  selector: "add-lessons-modal-content",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./add-lessons-modal-content.html",
})
export class AddLessonsModalContentComponent {
  constructor(private teacherService: TeacherService) {}

  @Output()
  close = new EventEmitter<void>();

  @Input()
  lessons: Lesson[] = [];

  teachers: Teacher[] = [];

  data = {
    teacherSelect: null,
  };

  name = "";
  degree = null;

  maxLength(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.value.length > 2) input.value = input.value.slice(0, 2);
  }

  ngOnInit(): void {
    this.teachers = this.teacherService.getTeachers();
  }

  submit(): void {
    if (!this.name || !this.degree || !this.data.teacherSelect) return;

    const lesson = {
      id: this.lessons.length + 1,
      name: this.name,
      degree: this.degree,
      teacher: this.data.teacherSelect,
    };

    this.lessons.push(lesson);
    this.close.emit();
  }
}

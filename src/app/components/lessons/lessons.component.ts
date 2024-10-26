import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

import { Lesson } from "../../models/lesson.model";
import { LessonsService } from "../../services/lessons.service";
import { CustomModalComponent } from "../custom-modal/custom-modal.component";
import { AddLessonsModalContentComponent } from "./add-lessons-modal-content/add-lessons-modal-content";

@Component({
  selector: "lessons",
  standalone: true,
  imports: [CommonModule, CustomModalComponent, AddLessonsModalContentComponent],
  templateUrl: "./lessons.component.html",
  styleUrl: "./lessons.component.scss",
})
export class LessonsComponent {
  constructor(private LessonsService: LessonsService) {}

  showModal: boolean = false;
  lessons: Lesson[] = [];

  ngOnInit(): void {
    this.lessons = this.LessonsService.getLessons();
  }

  handleModalClose(): void {
    this.showModal = false;
  }

  remove(id: number): void {
    this.lessons = this.lessons.filter((lesson) => lesson.id !== id);
  }
}

import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl, FormBuilder} from "@angular/forms";
import {dateValidator} from "../common/components/course-date/date-validator";
import {AuthorService} from "./services/author.service";
import {Author} from "../common/entities/author";
import {authorNotEmpty} from "../common/components/authors-list/author-not-empty-validator";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {CoursesService} from "../home/services/courses.service";
import {Course} from "../common/entities/course";
import {BreadCrumbService} from "../common/services/bread-crumb.service";

@Component({
  selector: 'trainme-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  providers: [AuthorService, CoursesService]
})
export class AddCourseComponent implements OnInit, OnDestroy {
  constructor(private formBuilder: FormBuilder,
              private authorService: AuthorService,
              private courseService: CoursesService,
              private route: ActivatedRoute,
              private breadCrumb: BreadCrumbService,
              private router: Router) {

  }

  authors: Array<Author> = [];

  formModel: FormGroup;
  formData: {} = {};
  ngOnInit() {
    this.authorService.getAll()
      .subscribe((data) => {
        this.authors = data;
        this.loadCourseOrCreateNew();
      })
  }

  ngOnDestroy(): void {
    this.breadCrumb.newBreadCrumb.next('');
  }

  private loadCourseOrCreateNew() {
    let idParam = this.route.snapshot.params['id'];
    if (idParam) {
      this.breadCrumb.newBreadCrumb.next(`Course ${idParam}`);
      this.courseService
        .getById(idParam)
        .subscribe((course: Course) => {
          this.createForm(course);
        });
    } else {
      this.createForm();
    }
  }

  private createForm(course?: Course) {
    this.formModel = this.formBuilder.group({
      id: [(course ? course.id : null), []],
      title: [course ? course.title : '', [Validators.required, Validators.maxLength(50)]],
      description: [course ? course.description : '', [Validators.required, Validators.maxLength(500)]],
      date: [course ? course.date : '', [Validators.required]],
      duration: [course ? course.duration : 0, [Validators.required]],
      authors: [course ? course.authors : [], [authorNotEmpty]],
    });
  }

  save() {
    let formData: Course = this.formModel.value as Course;
    formData.isTopRated = false;
    this.courseService
      .createOrUpdate(formData)
      .subscribe(() => {
        this.router.navigate(['/courses']);
      });
  }

  cancel() {
    this.router.navigate(['/courses']);
  }

  hasError(validator, field) {
    let result = this.formModel ?
      this.formModel.hasError(validator, [field]) && this.formModel.get(field).dirty :
      false;

    return result;
  }
}

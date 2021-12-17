import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FormService } from 'src/app/_services/form.service';
interface FormArray {
  fieldName: string;
  type: string;
  value: string;
  options: any;
}
@Component({
  selector: 'app-form-render',
  templateUrl: './form-render.component.html',
  styleUrls: ['./form-render.component.scss']
})
export class FormRenderComponent implements OnInit {

  formList: FormArray[] = [];
  myFormGroup: FormGroup;
  //for loading
  showLoading = false;

  submittedData = [];

  constructor(
    private formService: FormService,
    public fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.getFormData();

  }
  getFormData() {
    this.formService.getFormData().subscribe(x => {
      if (x.success) {
        console.log(x)
        this.formList = x.data;

        let group: any = {};
        this.formList.forEach(x => {
          group[x.fieldName] = new FormControl(x.value);
        })
        this.myFormGroup = new FormGroup(group);
      }
    })

  }

  submit() {
    console.clear();
    this.showLoading = true;
    console.log(this.myFormGroup.value);
    this.submitformData(this.myFormGroup.value);
  }


  submitformData(data) {
    this.formService.submitFormData(data).subscribe(x => {
      if (x.success) {
        this.showLoading = false;
        this.submittedData.push(x.data);
      }
    })

  }
}

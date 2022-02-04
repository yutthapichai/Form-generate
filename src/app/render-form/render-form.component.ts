import {
  Component, Input, OnInit, Output, EventEmitter, OnChanges, ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-render-form',
  templateUrl: './render-form.component.html',
  styleUrls: ['./render-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class RenderFormComponent implements OnInit, OnChanges {

  @Output() formDataOut = new EventEmitter<any>();
  @Input() formDataIn: any;

  form = new FormGroup({});

  model = {

  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = []
  // [
  //   {
  //     key: 'name',
  //     type: 'input',
  //     defaultValue: '',
  //     templateOptions: {
  //       label: 'Name',
  //     },
  //   },
  //   {
  //     key: 'email',
  //     type: 'input',
  //     defaultValue: '',
  //     templateOptions: {
  //       label: 'Email',
  //     },
  //   },
  //   {
  //     key: 'gender',
  //     type: 'radio',
  //     defaultValue: 'male',
  //     templateOptions: {
  //       label: 'Radio',
  //       required: true,
  //       options: [
  //         {
  //           value: 'male',
  //           label: 'Male'
  //         },
  //         {
  //           value: 'female',
  //           label: 'Female'
  //         }
  //       ],
  //     },
  //   },

  // ];

  
  // ,
  // {
  //  "id": "Agree",
  //  "value": "",
  //  "type": "checkbox"
  //  }
  constructor() {
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    if (this.formDataIn?.item) {
      this.model = { ...this.formDataIn.item }
    }
    if (this.formDataIn?.info) {
      const convertData = JSON.stringify(this.formDataIn.info)
      const newForm = JSON.parse(convertData)
      this.generateForm(newForm)
    }
  }


  generateForm(newForm: any) {
    let field = []
    for (const item of newForm.form) {
      if (item.type === 'text') {
        field.push({
          key: item.id,
          type: 'input',
          defaultValue: item.value,
          templateOptions: {
            label: item.id,
          },
        })
      }

      if (item.type === 'radio') {
        field.push({
          key: item.id,
          type: 'radio',
          defaultValue: item.value,
          templateOptions: {
            label: 'Radio',
            required: true,
            options: item.option.map((info: any) => ({
              value: info,
              label: info
            })),
          },
        })
      }


      if (item.type === 'checkbox') {
        field.push({
          key: item.id,
          type: 'checkbox',
          templateOptions: {
            label: item.id,
            required: true,
          },
        })
      }
    }
    this.fields = field

  }

  submit() {
    this.formDataOut.emit(this.model);
  }

}

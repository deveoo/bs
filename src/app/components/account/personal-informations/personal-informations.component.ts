import { Component, OnInit  , Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-personal-informations',
  templateUrl: './personal-informations.component.html',
  styleUrls: ['./personal-informations.component.scss'],
})
export class PersonalInformationsComponent implements OnInit {

  @Input("user") user;
  public personalInformationsForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder ,
    public modalController: ModalController
  ) { 
    this.personalInformationsForm = this.formBuilder.group({
      firstname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      lastname: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
      newPassword: new FormControl('', Validators.compose([
        Validators.required
      ])),
      birthdate: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  ngOnInit() {
    //console.log(this.user);
  }


  updateInformations() {
    console.log(this.personalInformationsForm.valid);
  }

  dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}

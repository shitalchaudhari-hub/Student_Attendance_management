import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
user={
  username:'',
  password:'',
  firstName:'',
  lastName:'',
  email:'',
  role:''


}


onSubmit() {
throw new Error('Method not implemented.');
}

}

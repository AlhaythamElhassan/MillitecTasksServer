import {Component, Injectable, OnInit} from "@angular/core";
import {User} from "../user.model";
@Component({
    moduleId: module.id,
    selector: 'my-signup',
    templateUrl: 'signup.component.html'
})
@Injectable()
export class SignUpComponent implements OnInit {
    model: User;
    active = true;
    roles = ['admin', 'operator', 'manager'];
    OnSubmit() {
        console.log(JSON.stringify(this.model));
        this.model = new User(null, null)
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }
    ngOnInit() {
        this.model = new User(" "," ");
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
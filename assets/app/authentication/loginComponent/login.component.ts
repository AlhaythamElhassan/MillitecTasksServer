import {Component, Injectable, OnInit} from "@angular/core";
import {User} from "../user.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
@Component({
    moduleId: module.id,
    selector: 'my-login',
    templateUrl: 'login.component.html'
})
@Injectable()
export class LoginComponent implements OnInit{
    model: User;
    constructor(private _authService: AuthService, private _router: Router){}
    OnSubmit() {
        this._authService.signin(this.model)
            .subscribe(
                data => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('UserId', data.user);
                    localStorage.setItem('role', data.role);
                    this._router.navigateByUrl('/task');
                }
            );
        this.model = new User("","","","","");
    }
    ngOnInit() {
        this.model = new User("","","","","");
    }
    isLogedIn(){
        return this._authService.isLoggedIn();
    }
}
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  userLog!:boolean;
  constructor(private authServ:AuthService,private router:Router){
  }

  ngOnInit(): void {
      this.authServ.getUserState().subscribe({
        next:(state)=>{
          console.log(state);
          this.userLog=state
        }
      })
  }

  changeUserState(){
    if(this.userLog){
      this.authServ.logout()
    }
    if(!this.userLog){
     this.router.navigate(['/signup'])
    }
  }

}

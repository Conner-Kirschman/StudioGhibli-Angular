import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatRippleModule} from '@angular/material/core';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatRippleModule],
  providers: [NavbarService],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  public constructor(private navService: NavbarService){}

  isDarkMode: boolean = false;

  toggleTheme(){
    this.isDarkMode = !this.isDarkMode;
    this.navService.setDarkMode(this.isDarkMode);
  }
}

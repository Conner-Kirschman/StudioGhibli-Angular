import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private darkMode = false;

  isDarkMode(){
    return this.darkMode;
  }

  setDarkMode(isDarkMode: boolean) {
    this.darkMode = isDarkMode;
    if(isDarkMode){
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');

      document.getElementById('navbar')?.setAttribute('style', 'background-color: rgb(11,13,16); transition-duration: 0.1s;');
      document.getElementById('menuButton')?.setAttribute('style', 'color: white');
      document.getElementById('title')?.setAttribute('style', 'color: white');
      document.getElementById('themeButton')?.setAttribute('style', 'color: white');
      document.getElementById('favoriteButton')?.setAttribute('style', 'color: white');
      document.getElementById('shareButton')?.setAttribute('style', 'color: white');

      document.getElementById('logo')?.setAttribute('style', 'opacity: 0; transition-duration: 0.1s;');
      this.delayImageChangeDark(); 
    }
    else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');

      document.getElementById('navbar')?.setAttribute('style', 'background-color: white; transition-duration: 0.1s;');
      document.getElementById('menuButton')?.setAttribute('style', 'color: rgb(11,13,16)');
      document.getElementById('title')?.setAttribute('style', 'color: rgb(11,13,16)');
      document.getElementById('themeButton')?.setAttribute('style', 'color: rgb(11,13,16)');
      document.getElementById('favoriteButton')?.setAttribute('style', 'color: rgb(11,13,16)');
      document.getElementById('shareButton')?.setAttribute('style', 'color: rgb(11,13,16)');

      document.getElementById('logo')?.setAttribute('style', 'opacity: 0; transition-duration: 0.1s;');
      this.delayImageChangeLight();
    }
  }

  delayImageChangeDark(){
    setTimeout(function(){
      document.getElementById('logo')?.setAttribute('src', 'http://localhost:8080/images/StudioGhibliWhite.png')
      document.getElementById('logo')?.setAttribute('style', 'opacity: 1; transition-duration: 0.8s;');
    },1000);
  }

  delayImageChangeLight(){
    setTimeout(function(){
      document.getElementById('logo')?.setAttribute('src', 'http://localhost:8080/images/StudioGhibli.png')
      document.getElementById('logo')?.setAttribute('style', 'opacity: 1; transition-duration: 0.8s;');
    },1000);
  }

}

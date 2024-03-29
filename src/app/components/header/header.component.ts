import { Component, OnInit } from '@angular/core';
import { GsapService } from 'src/service/gsap.service';
import { DarkModeService } from 'src/service/dark-mode.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public gsap: GsapService, public darkModeService: DarkModeService) { }

  isSidebarOpen: boolean = false;

  ngOnInit(): void {
    this.gsap.gsapAnimationHeader();
    this.toggleDarkMode();
  }

/**
 * Toggle dark mode
 */
  public toggleDarkMode(): void {
    if (this.darkModeService.isDarkModeEnabled()) {
      this.darkModeService.disableDarkMode();
    } else {
      this.darkModeService.enableDarkMode();
    }
  }

  /**
   * Toggle sidebar
   */
  public toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}

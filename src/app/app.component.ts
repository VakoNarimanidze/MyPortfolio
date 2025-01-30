import { Component } from '@angular/core';

interface Translations {
  [key: string]: { 
    [key: string]: string;
  };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  translations: Translations = {
    en: {
      WELCOME: "Welcome to my portfolio",
      ABOUT_ME: "About Me",
      ABOUT_TEXT: "My name is Valeri Narimanidze, I'm 19 years old and a front-end developer based in Tbilisi/Georgia. I have developed many types of projects from the well-known Academy 'It Step Academy'. I have experience working with HTML, CSS, SASS, JavaScript and I'm currently learning Angular with TypeScript. To see my projects, visit my Github or check out the projects below",
      PROJECTS: "Projects",
      STAR_HOTEL: "Star Hotel With API",
      REPOSITORY: "Repository",
      WEBSITE: "Website",
      CONTACT:"Contact Me"
    },
    ka: {
      WELCOME: "მოგესალმებით ჩემს პორტფოლიოში",
      ABOUT_ME: "ჩემ შესახებ",
      ABOUT_TEXT: "ჩემი სახელი არის ვალერი ნარიმანიძე, ვარ 19 წლის  და Front-End დეველოპერი თბილისიდან/საქართველო. მაქვს ბევრი სახის პროექტები ცნობილი 'It Step Academy'-დან. მაქვს გამოცდილება HTML, CSS, SASS, JavaScript-ში და ამჟამად ვსწავლობ Angular-ს TypeScript-ით.  ჩემი პროექტების სანახავად, ეწვიეთ ჩემს Github-ს ან ქვემოთ მოცემულ პროექტებს",
      PROJECTS: "პროექტები",
      STAR_HOTEL: "სტარჰოტელი API-ით",
      REPOSITORY: "რეპოზიტორია",
      WEBSITE: "ვებგვერდი",
      CONTACT:  "დამეკონტაქტე"
    }
  };

  currentLanguage: 'en' | 'ka' = 'en'; 
  
  switchLanguage(language: 'en' | 'ka'): void {
    this.currentLanguage = language;
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage]?.[key] || key;
  }
}

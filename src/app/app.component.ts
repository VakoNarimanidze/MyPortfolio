import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

interface Translations {
  [key: string]: { 
    [key: string]: string;
  };
}

@Component({
  selector: 'app-root',
  imports: [ FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  translations: Translations = {
    en: {
      V:"V",
      WELCOME: "Welcome to my portfolio",
      ABOUT_ME: "About Me",
      ABOUT_TEXT: "My name is Valeri Narimanidze, I'm 19 years old and a front-end developer based in Tbilisi/Georgia. I have developed many types of projects from the well-known Academy 'It Step Academy'. I have experience working with HTML, CSS, SASS, JavaScript and I'm currently learning Angular with TypeScript. To see my projects, visit my Github or check out the projects below",
      PROJECTS: "Projects",
      STAR_HOTEL: "Star Hotel With API",
      REPOSITORY: "Repository",
      WEBSITE: "Website",
      CONTACT:"Contact Me",
    SuccessMessage:"Your message has been sent successfully! , I will respond as soon as possible",
    ErrorMessage:"Something went wrong. Please try again later.",
    FirstName:"First Name",
      LastName:"Last Name",
      Email:"Email",
      Phone:"Phone Number",
      Message:"Message",
      Submitting:"Submitting..."
    },
    ka: {
      V:"ვ",
      WELCOME: "მოგესალმებით ჩემს პორტფოლიოში",
      ABOUT_ME: "ჩემ შესახებ",
      ABOUT_TEXT: "ჩემი სახელი არის ვალერი ნარიმანიძე, ვარ 19 წლის  და Front-End დეველოპერი თბილისიდან/საქართველო. მაქვს ბევრი სახის პროექტები ცნობილი 'It Step Academy'-დან. მაქვს გამოცდილება HTML, CSS, SASS, JavaScript-ში და ამჟამად ვსწავლობ Angular-ს TypeScript-ით.  ჩემი პროექტების სანახავად, ეწვიეთ ჩემს Github-ს ან ქვემოთ მოცემულ პროექტებს",
      PROJECTS: "პროექტები",
      STAR_HOTEL: "სტარჰოტელი API-ით",
      REPOSITORY: "რეპოზიტორია",
      WEBSITE: "ვებგვერდი",
      CONTACT:  "საკონტაქტო",
      SuccessMessage:"თქვენი წერილი წარმატებით გაიგზავნა!, მალე გიპასუხებთ",
      ErrorMessage:"რაღაც შეცდომა მოხდა. გთხოვთ კიდევ სცადოთ მოგვიანებით",
      FirstName:"სახელი",
      LastName:"გვარი",
      Email:"ელ-ფოსტა",
      Phone:"ტელეფონის ნომერი",
      Message:"წერილი",
      Submitting:"მუშავდება..."
    }
  };

  currentLanguage: 'en' | 'ka' = 'en'; 
  
  switchLanguage(language: 'en' | 'ka'): void {
    this.currentLanguage = language;
  }

  translate(key: string): string {
    return this.translations[this.currentLanguage]?.[key] || key;
  }

  isActive:boolean = false;
   toggleBurger(){
    this.isActive = !this.isActive
   }

   formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  resultMessage: string | null = null;
  alertType: string | null = null; 

  onSubmit(contactForm: any) {
    if (contactForm.invalid) {
      return;
    }

    this.resultMessage = this.translate('Submitting');
    this.alertType = null; 

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '869da4c0-78b4-4042-a424-6217583ed394',
        ...this.formData
      })
    })
      .then(async (response) => {
        const json = await response.json();
        if (response.status === 200) {
          this.resultMessage = this.translate('SuccessMessage'); 
          this.alertType = 'success'; 
        } else {
          this.resultMessage = this.translate('ErrorMessage'); 
          this.alertType = 'error'; 
        }
      })
      .catch(error => {
        console.error(error);
        this.resultMessage = this.translate('ErrorMessage');
        this.alertType = 'error'; 
      })
      .finally(() => {
        this.formData = {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: ''
        };
        setTimeout(() => {
          this.resultMessage = null;
          this.alertType = null;
        }, 5000); 
      });
  }
}

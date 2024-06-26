import { Component , OnInit} from '@angular/core';
import { ParseService } from '../services/parse.service';
import { faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { faShield} from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent {
  
  arrow=faAngleRight;
  envelop = faEnvelope;
  gear = faGear;
  star = faStar;
  heart = faHeart;
  info = faShield;
  circleInfo = faInfoCircle
  logouts = faLongArrowAltLeft;
  user: any;
  pictur:string="";
  selectedFile: File | null = null;
  fileBinaryString: string | null = null;
 
  constructor(private parseService: ParseService ,  private router: Router) {}
  ngOnInit() {
    this.user = this.parseService.user;
    this.fetchMUserData();
  }

  async fetchMUserData() {
    try {
      const result = await this.parseService.getMUserById(this.user.objectId);    
      if (result.status === 1) {
       this.pictur = result.image;
      } else {
     
      }
    } catch (error) {
      console.error('Error fetching MUser details', error);
    }
    }
 async update_profile_image(){

    if (!this.fileBinaryString) {
      alert('N+o file selected or file processing error.');
      return;
    }

  const result = await this.parseService.update_submit_profile(this.fileBinaryString)
  if(result.status===1)
  {
    alert('profile edited successfully');
  }

  else{
    alert('error in editing profile');
  }
  
}
  
    
  onFileChanged(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = null;
      this.fileBinaryString = null;
    } else {
      this.selectedFile = input.files[0];
      const blobUrl = URL.createObjectURL(this.selectedFile);
      this.convertBlobUrlToBase64String(blobUrl)
        .then(base64String => {
          this.fileBinaryString = base64String; // Store Base64 string
          console.log('Generated Base64 String:', this.fileBinaryString.substring(0, 50) + '...');
        })
        .catch(error => console.error('Error reading file as Base64 string:', error));
    }
  }
  
  // Method to convert Blob URL to Base64 string
  async convertBlobUrlToBase64String(blobUrl: string): Promise<string> {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result; // This is a Base64 string
        resolve(base64String as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(blob); // Changed to readAsDataURL for Base64
    });
  }

  async logout() {
    // Call the deleteCurrentUser method which removes the user from local storage
   await  this.parseService.deleteCurrentUser2();
  
    // You can also navigate to the login page or any other desired route after logout
    this.router.navigate(['/home']);
  }
}

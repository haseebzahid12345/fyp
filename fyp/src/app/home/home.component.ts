import { Component ,OnInit } from '@angular/core';
import { ParseService } from '../services/parse.service';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
interface TableData {
  tableName: string;
  txtData: string;
}
import {  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  categories = [
    { name: 'Business', imageUrl: '../../assets/images/business.png', routeName: 'business' },
    { name: 'Digital Marketing', imageUrl: '../../assets/images/digitalMarketing.png', routeName: 'digital-marketing' },
    { name: 'Lifestyle', imageUrl: '../../assets/images/lifestyles.png', routeName: 'lifestyle' },
    { name: 'Music & Audio', imageUrl: '../../assets/images/1065269.png', routeName: 'music-audio' },
    { name: 'Programming & Tech', imageUrl: '../../assets/images/programming.png', routeName: 'programming-tech' },
    { name: 'Video & Animation', imageUrl: '../../assets/images/video.png', routeName: 'video-animation' },
    { name: 'Writing & Translation', imageUrl: '../../assets/images/writing.png', routeName: 'writing-translation' },
    { name: 'Education & Learning', imageUrl: '../../assets/images/education.png', routeName: 'education-learning' }
  ];
  teacherData: any[] = [];
  favorites: any[] = [];
  star =faStar;
  isFilterOpen = false;
  selectedCategory: any = null;
  selectedSubcategory: any = null;
  categoriesWithSub: any[] = [
    { category: 'Business', subcategories: ['Branding Services', 'Business Consulting', 'Business Plans', 'Career Counseling', 'Data Entry', 'E-Commerce Management', 'Financial Consulting', 'Flyer Distribution', 'HR Consulting', 'Lead Generation', 'Legal Consulting', 'Market Research', 'Presentations', 'Project Management', 'Virtual Assistant', 'other'] },
    { category: 'Digital Marketing', subcategories: ['Domain Research', 'E-Commerce Marketing', 'Influencer Marketing', 'Local SEO', 'Mobile Marketing & Advertising', 'Music Promotion', 'Web Traffic', 'other'] },
    { category: 'Lifestyle', subcategories: ['Arts & Crafts', 'Astrology & Readings', 'Celebrity Impersonators', 'Collectibles', 'Cooking Lessons', 'Craft Lessons', 'Family & Genealogy', 'Fitness Lessons', 'Gaming', 'Greeting Cards & Videos', 'Health Nutrition & Fitness', 'Online Lessons', 'Personal Stylists', 'Relationship Advice', 'Spiritual & Healing', 'Traveling', 'Viral Videos', 'other'] },
    { category: 'Music & Audio', subcategories: ['Audio Ads Production', 'Audiobook Production', 'DJ Drops & Tags', 'Dialogue Editing', 'Jingles & Intros', 'Mixing & Mastering', 'Music Transcription', 'Online Music Lessons', 'Podcast Editing', 'Producers & Composers', 'Session Musicians', 'Singers & Vocalists', 'Songwriters', 'Sound Design', 'Vocal Tuning', 'Voice Over', 'other'] },
    { category: 'Programming & Tech', subcategories: ['Chatbots', 'Convert Files', 'Cybersecurity & Data Protection', 'Data Analysis & Reports', 'Databases', 'Desktop Applications', 'Development for Streamers', 'E-Commerce Development', 'Game Development', 'Mobile Apps', 'Online Coding Lessons', 'QA', 'Support & IT', 'User Testing', 'Web Programming', 'Website Builders & CMS', 'WordPress', 'C++ Programming', 'C# Programming', 'Java Programming', 'Python Programming', 'JavaScript Programming', 'PHP Programming', 'other'] },
    { category: 'Video & Animation', subcategories: ['3D Product Animation', 'Animated GIFs', 'Animation for Kids', 'Animation for Streamers', 'App & Website Previews', 'Article to Video', 'Book Trailers', 'Character Animation', 'Game Trailers', 'Intros & Outros', 'Live Action Explainers', 'Local Photography', 'Logo Animation', 'Lyric & Music Videos', 'Product Photography', 'Real Estate Promos', 'Screencasting Videos', 'Short Video Ads', 'Slideshows Videos', 'Spokespersons Videos', 'Subtitles & Captions', 'Unboxing Videos', 'Video Editing', 'Visual Effects', 'Whiteboard & Animated Explainers', 'eLearning Video Production', 'other'] },
    { category: 'Writing & Translation', subcategories: ['Articles & Blog Posts', 'Beta Reading', 'Book & eBook Writing', 'Book Editing', 'Brand Voice & Tone', 'Business Names & Slogans', 'Case Studies', 'Cover Letters', 'Creative Writing', 'Email Copy', 'Grant Writing', 'Legal Writing', 'LinkedIn Profiles', 'Online Language Lessons', 'Podcast Writing', 'Press Releases', 'Product Descriptions', 'Proofreading & Editing', 'Research & Summaries', 'Resume Writing', 'Sales Copy', 'Scriptwriting', 'Social Media Copy', 'Speechwriting', 'Technical Writing', 'Transcripts', 'Translation', 'UX Writing', 'Website Content', 'White Papers', 'other'] },
    { category: 'Education & Learning', subcategories: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'English Literature', 'History', 'Geography', 'Islamic Studies', 'Urdu', 'Business Studies', 'Accounting', 'Economics', 'Law', 'Psychology', 'Sociology', 'other'] }
  ];
  
  user: any;
  heart=faHeart;
  filter = faFilter;
  pictur:string="";
  // private sessionKey = 'appSessionId';
  // pageViewID : string ='';

  constructor(private parseService: ParseService ) {}

 

ngOnInit() {
  // this.loadCardData();
 

  // if (this.sessionKey) {
  //   this.parseService.pageView(localStorage['appSessionId'], "/home")
  //     .then(response => {
  //    this.pageViewID =  response.objectId;
  //     })
  //     .catch(error => {
  //       console.error("Error retrieving page view:", error);
  //     });
  // }

  this.user = this.parseService.user;
  this.loadInitialData();
}
async loadInitialData() {
  try {
    await this.loadFavorites();  // Load favorites first
    await this.loadCardData();   // Then load card data
  } catch (error) {
    console.error('Error loading initial data', error);
  }
}

toggleFilter() {
  console.log('Filter toggle clicked', this.isFilterOpen);
  this.isFilterOpen = !this.isFilterOpen;
  console.log('New isFilterOpen:', this.isFilterOpen);
}


async loadFavorites() {
  this.favorites = await this.parseService.getFavorites();
}
// sessionId(sessionId: string) {
//   localStorage.setItem(this.sessionKey, sessionId);
// }

async loadCardData(){
  try {
    const responseData = await this.parseService.getGigData();
    this.teacherData = responseData;
    this.markFavorites();
  } catch (error) {
    console.error('Error loading teacher Data', error);
  }
}

markFavorites() {
  // Assume favorites and cards are loaded at this point
  const favoriteIds = this.favorites.map(fav => fav.gig.objectId); // Extract favorite gig IDs
  this.teacherData.forEach(card => {
    card.heartActive = favoriteIds.includes(card.objectId);  // Mark card as favorite if ID is in favorites
  });
}


toggleHeart(event: MouseEvent, data: any) {
  //  this.parseService.clickEvent(localStorage['appSessionId'],'clicked on heart', this.pageViewID)
  //  console.log(localStorage['appSessionId'],"dewdw");;
  event.stopPropagation();
  data.heartActive = !data.heartActive;
  if (data.heartActive) {
    this.addToFavourites(data.objectId);
  } else {
    this.removeFromFavorites(event , data.objectId );  // Implement this method similar to addToFavourites
  }
}

// async getAllData() {
//   try {
//     const txtData: TableData[] = await this.parseService.getAllData();

//     txtData.forEach(({ tableName, txtData }: TableData) => {
//       const blob = new Blob([txtData], { type: 'text/plain' });
//       const filename = `${tableName.toLowerCase()}_data.txt`;

//       const url = URL.createObjectURL(blob);
//       const link = document.createElement('a');
//       link.href = url;
//       link.download = filename;
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     });
//   } catch (error) {
//     console.error('Error downloading data', error);
//   }
// }






async removeFromFavorites(event: MouseEvent , id: string ): Promise<void> {
  try {
    console.log(id);
    event.stopPropagation();
   
     await this.parseService.removeFavorite(id);
    
    console.log('inside favourutes removal');
    // if (response) {
    //   alert('It has been removed from favourites');
    // }
    
  } catch (error) {
    console.error('Error removing favorite from the database', error);
    alert('Error removing favorite');

    throw error;
  }
}


async addToFavourites(id: string): Promise<void> {
  try {
    console.log(id,"ok i objeded");
    const response = await this.parseService.addFavourite(id , this.user.objectId);
    alert(response.message); // Show the message from the response
  } catch (error) {
    console.error('Error adding to favourites', error);
    // Handle error (e.g., show an error message)
  }
}
}

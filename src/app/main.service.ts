import { Eventdetails } from  './event.model';
import { Profiledetails } from './profile.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  private d;
  private y;
  private i;
  private currentGallery : string[] = [];
  private events = new Map([['2018', [ new Eventdetails('Summer Camp 2018','23-3-2018','punaloor', '../../assets/e1.jpg'), new Eventdetails('Winter Camp','23-3-2018','punaloor', '../../assets/e2.jpg') 
  ]], ['2017', [ new Eventdetails('Summer Camp 2017','23-3-2018','punaloor', '../../assets/e1.jpg'), new Eventdetails('Winter Camp','23-3-2018','punaloor', '../../assets/e2.jpg') 
]] ]); 
  
  
  private gallery = new Map([
    ['2018', ['../../assets/s1-imo.png', '../../assets/s2-imo.png']],
    ['2017', ['../../assets/s2-imo.png']]
  ]);

  

  private profiles = [
    new Profiledetails('SUNNY Geevarghese  Ryushin-Kan India Shihan 7th Dan','../../assets/01_Shihan_Sunny_Geevarghese.png', "Chief Instructor and Examiner Ryushin-Kan India"),
    new Profiledetails('MASUYAMA Takeshi SWKU-Ryushin-Kan Soke 9th Dan','../../assets/02_Soke_Masuyama_Takeshi.png', `Born in 1949, MASUYAMA Takeshi, Founder of  Ryushin-Kan International Karate-do Federation
    Learned directly from TANI Chojiro, Founder of Shuko-Kai World Karate Union,  
    A direct disciple of MABUNI Kenwa,  Founder of  Shito-Ryu Karate
    Who had learned Shuri-Te from ITOSU Anko and Nara-Te from HIGASHIONNA Kanryo, in Okinawa
    `),
    new Profiledetails('TANI Chojiro (1915 – 1998) Tani-Ha Shito-Ryu/Shukokai','../../assets/03_Sensei_Tani_Chojiro.jpg', `TANI Chojiro was born in Kobe and started his formal Karate training under CHOJUN Miyagi, the founder of Goju-Ryu.
    He continued training at the University Karate Club under MABUNI Kenwa, the founder of Shito-Ryu.
    TANI Chojiro received, as one of MABUNI’s most senior students, the certificate of succession entitling him to use the name of "Tani-Ha Shito-Ryu", the Tani style of Shito-Ryu.
    Later he found the Shuko-Kai World Karate Union.`),
    new Profiledetails('MABUNI Kenwa (1887 – 1952) Shito-Ryu','../../assets/04_Sensei_Mabuni_Kenwa.jpg', `MABUNI Kenwa started karate at the age of 13 under ITOSU Anko, the man who organized early karate in the Okinawan school system.
    ITOSU and MABUNI developed a very close master-disciple relationship.
    MABUNI was the natural "heir" of  23 kata handed down by his master.
    CHOJUM Miyagi introduced MABUNI to HIGASHIONNA Kanryo and he began to learn under him as well.
    When ITOSU died, MABUNI became his successor.
    Later MABUNI found Shito-Ryu.`),
    new Profiledetails('HIGASHIONNA Kanryo (1853 – 1915) Naha-Te','../../assets/05_Sensei_Higashionna_Kanryo.jpg', `HIGASHIONNA Kanryo was born in Naha, who finally formalized Naha-te, a Chinese style karate.
    He learned the Shorinji-Kempo, and after becoming the Okinawa royal family official martial artist, devoted his life to developing the Naha-te style and teaching.`),
    new Profiledetails('ITOSU Anko (1830 – 1915) Shuri-Te','../../assets/06_Sensei_Itosu_Anko.jpg', `TOSU Anko was the man  who organized early karate in the Okinawan school system.
    ITOSU was a student of one of Okinawa's most famous karate masters, MATSUMURA Sokon (1792-1887), founder of Shorin-ryu.
    In 1908 he wrote a letter to the Prefectural Educational Department encouraging the introduction of Karate (Tode) to all Okinawan schools including those on the Japanese mainland. `)
  ]

  constructor() { }

  getCurrentEvents()
  {
    return this.events.values().next();
  }

  getCurrentGallery()
  {
    return this.gallery.values().next();
  }

  getCurrentGalleryYear()
  {
    return this.gallery.keys().next();
  }

  getProfiles()
  {
    return this.profiles;
  }

  getEvents()
  {
    console.log(this.events);
    return this.events;
  }

  getGallery()
  {
    return this.gallery;
  }
}

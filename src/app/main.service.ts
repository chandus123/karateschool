import { Eventdetails } from  './event.model';
import { Profiledetails } from './profile.model';
import { Injectable } from '@angular/core';

@Injectable()
export class MainService {

  private d;
  private y;
  private i;
  private currentGallery : string[] = [];
  private events = new Map([['2018', [ new Eventdetails('RYUSHIN-KAN INDIA ANNUAL KARATE CAMP 2018','','', '../../assets/RYUSHIN-KAN INDIA ANNUAL KARATE CAMP 2018.png'), new Eventdetails('VIJAYADASAMI VIDYARAMBHAM DAY CAMP 2018','','', '../../assets/VIJAYADASAMI VIDYARAMBHAM DAY CAMP 2018.png') 
  ]] ]); 
  
  
  private gallery = new Map([
    ['2018', [
    '../../assets/gallery/1.JPG', 
    '../../assets/gallery/2.JPG',
    '../../assets/gallery/3.JPG',
    '../../assets/gallery/4.JPG',
    '../../assets/gallery/5.JPG',
    '../../assets/gallery/6.JPG',
    '../../assets/gallery/7.JPG',
    '../../assets/gallery/8.JPG',
    '../../assets/gallery/9.JPG',
    '../../assets/gallery/10.JPG',
    '../../assets/gallery/11.JPG',
    '../../assets/gallery/12.JPG',
    '../../assets/gallery/13.JPG',
    '../../assets/gallery/14.JPG',
    '../../assets/gallery/15.JPG',
    '../../assets/gallery/16.JPG',
    '../../assets/gallery/17.JPG',
    '../../assets/gallery/18.JPG',
    '../../assets/gallery/19.JPG',
    '../../assets/gallery/20.JPG',
    '../../assets/gallery/21.JPG',
    '../../assets/gallery/22.JPG',
    '../../assets/gallery/23.JPG',
    '../../assets/gallery/23.JPG',
    '../../assets/gallery/25.JPG',
    '../../assets/gallery/26.JPG',
    '../../assets/gallery/27.JPG',
    '../../assets/gallery/28.JPG',
    '../../assets/gallery/29.JPG',
    '../../assets/gallery/30.JPG',
    '../../assets/gallery/31.JPG',
    '../../assets/gallery/32.JPG',
    '../../assets/gallery/33.JPG',
    '../../assets/gallery/34.JPG',
    '../../assets/gallery/35.JPG',
    '../../assets/gallery/36.JPG',
    '../../assets/gallery/37.JPG',
    '../../assets/gallery/38.JPG',
    '../../assets/gallery/39.JPG',
    '../../assets/gallery/40.JPG',
    '../../assets/gallery/41.JPG',
    '../../assets/gallery/42.JPG',
    '../../assets/gallery/43.JPG',
    '../../assets/gallery/44.JPG',
    '../../assets/gallery/44_1.JPG',
    '../../assets/gallery/44_2.JPG',
    '../../assets/gallery/44_3.JPG',
    '../../assets/gallery/44_4.JPG',
    '../../assets/gallery/45.JPG',
    '../../assets/gallery/46.JPG',
    '../../assets/gallery/46_1.JPG',
    '../../assets/gallery/47.JPG',
    '../../assets/gallery/48.JPG',
    '../../assets/gallery/49.JPG',
    '../../assets/gallery/50.JPG',
    '../../assets/gallery/51.JPG',
    '../../assets/gallery/52.JPG',
    '../../assets/gallery/53.JPG',
    '../../assets/gallery/54.JPG',
    '../../assets/gallery/54_1.jpg',
    '../../assets/gallery/54_2.jpg',
    '../../assets/gallery/55.JPG'
  ]]


  ]);

  

  private profiles = [
    new Profiledetails('SUNNY Geevarghese <br/><span class="subtitle">Ryushin-Kan India</span><br/><span class="subtitle">Shihan 7th Dan</span>','../../assets/01_Shihan_Sunny_Geevarghese.jpg', `<p class='p-paragraph' ><b>B</b>orn in 1960, SUNNY Geevarghese started learning Shotokan in 1978.</p><p class='p-paragraph' ><b>I</b>n 1980, he joined Alan-Thilak Shito-Ryu karate school in India.</p>
    <p class='p-paragraph' ><b>F</b>rom 1990 to 1996, he trained karate in Fujairah (UAE).</p>
    <p class='p-paragraph' ><b>I</b>n 1996, SUNNY started his own Dojo in Punalur (Kerala, India) and started teaching Shito-Ryu.</p>
    <p class='p-paragraph' ><b>I</b>n 2000, He has been certified as ‘JUDGE – KUMITE’ by All India Karate-Do Federation (AIKF).</p>
    <p class='p-paragraph' ><b>I</b>n 2016, He has been certified as ‘JUDGE – KUMITE’ by Karate Association of India (KAI).</p>
    <p class='p-paragraph' ><b>I</b>n 2017, he has been awarded the title of ‘Chief Instructor & Technical Director - Ryushin-Kan India’.</p>
    <p class='p-paragraph' ><b>I</b>n 2018, he has been awarded the title of ‘Chief Examiner - Ryushin-Kan India’.</p>
    <center>
    <h4 class="cust-h4" >Dan</h4>
    <table class="cust-table break-table" border="1" style="width:100%; text-align:center;">
    <tbody>
    <tr>
<td>
<p>Sho-Dan</p>
</td>
<td>
<p>(1st)</p>
</td>
<td>
<p>1988</p>
</td>
<td>
<p>September</p>
</td>
<td>
<p>5th</p>
</td>
</tr>
<tr>
<td>
<p>Ni-Dan</p>
</td>
<td>
<p>(2nd)</p>
</td>
<td>
<p>1993</p>
</td>
<td>
<p>May</p>
</td>
<td>
<p>8th</p>
</td>
</tr>
<tr>
<td>
<p>San-Dan</p>
</td>
<td>
<p>(3rd)</p>
</td>
<td>
<p>1993</p>
</td>
<td>
<p>May</p>
</td>
<td>
<p>8th</p>
</td>
</tr>
<tr>
<td>
<p>Yon-Dan</p>
</td>
<td>
<p>(4th)</p>
</td>
<td>
<p>1998</p>
</td>
<td>
<p>December</p>
</td>
<td>
<p>22nd</p>
</td>
</tr>

<tr>
<td>
<p>Ni-Dan (AIKF)</p>
</td>
<td>
<p>(2nd)</p>
</td>
<td>
<p>2000</p>
</td>
<td>
<p>February</p>
</td>
<td>
<p>5th</p>
</td>
</tr>

<tr>
<td>
<p>Go-Dan</p>
</td>
<td>
<p>(5th)</p>
</td>
<td>
<p>2000</p>
</td>
<td>
<p>August</p>
</td>
<td>
<p>5th</p>
</td>
</tr>

<tr>
<td>
<p>Roku-Dan (AIKF)</p>
</td>
<td>
<p>(6th)</p>
</td>
<td>
<p>2017</p>
</td>
<td>
<p>February</p>
</td>
<td>
<p>8th</p>
</td>
</tr>

<tr>
<td>
<p>Roku-Dan</p>
</td>
<td>
<p>(6th)</p>
</td>
<td>
<p>2017</p>
</td>
<td>
<p>March</p>
</td>
<td>
<p>29th</p>
</td>
</tr>
<tr>
<td>
<p>Nana-Dan</p>
</td>
<td>
<p>(7th)</p>
</td>
<td>
<p>2017</p>
</td>
<td>
<p>March</p>
</td>
<td>
<p>29th</p>
</td>
</tr>

<tr>
<td>
<p>Nana-Dan (AIKF)</p>
</td>
<td>
<p>(7th)</p>
</td>
<td>
<p>2017</p>
</td>
<td>
<p>October</p>
</td>
<td>
<p>29th</p>
</td>
</tr>

<tr>
<td>
<p>Roku-Dan (Ryushin-Kan)</p>
</td>
<td>
<p>(6th)</p>
</td>
<td>
<p>2018</p>
</td>
<td>
<p>February</p>
</td>
<td>
<p>10th</p>
</td>
</tr>
<tr>
<td>
<p>Nana-Dan (Ryushin-Kan)</p>
</td>
<td>
<p>(7th)</p>
</td>
<td>
<p>2018</p>
</td>
<td>
<p>February</p>
</td>
<td>
<p>10th</p>
</td>
</tr>
    </tbody>
    </table>
    </center>
    `),
    
    new Profiledetails('MASUYAMA Takeshi <br/><span class="subtitle">SWKU-Ryushin-Kan</span><br/><span class="subtitle">Soke 10th Dan</span>','../../assets/02_Soke_Masuyama_Takeshi.png', `<p class='p-paragraph' ><b>B</b>orn in 1949, MASUYAMA Takeshi started karate in April 1965.</p>
<p class='p-paragraph' ><b>H</b>e learned directly from TANI Chojiro, founder of Shuko-Kai World Karate Union and a direct disciple of MABUNI Kenwa who is the Founder of Shito-Ryu Karate and who had learned Shuri-Te from ITOSU Anko and Naha-Te from HIGASHIONNA Kanryo, in Okinawa.</p><p class='p-paragraph' ><b>I</b>n March 2002 he founded the Ryushin-Kan International Karate-do Federation.</p>
    
    <center>
    
    <h4 class="cust-h4">Dan</h4>
    
    <table class="cust-table break-table" border="1" style="width:100%; text-align:center;">
    <tbody>
    <td colspan="2">
    <p><span style="">Sho-Dan</span></p>
    </td>
    <td>
    <p><span style="">(1st)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">1973</span></p>
    </td>
    <td colspan="2">
    <p><span style="">April</span></p>
    </td>
    <td>
    <p><span style="">21st</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">Ni-Dan</span></p>
    </td>
    <td>
    <p><span style="">(2nd)</span></p>
    </td>
    <td colspan="3" >
    <p><span style="">1974</span></p>
    </td>
    <td colspan="2" >
    <p><span style="">December</span></p>
    </td>
    <td >
    <p><span style="">12th</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">San-Dan</span></p>
    </td>
    <td>
    <p><span style="">(3rd)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">1975</span></p>
    </td>
    <td colspan="2">
    <p><span style="">December</span></p>
    </td>
    <td>
    <p><span style="">19th</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">Yon-Dan</span></p>
    </td>
    <td>
    <p><span style="">(4th)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">1977</span></p>
    </td>
    <td colspan="2">
    <p><span style="">October</span></p>
    </td>
    <td>
    <p><span style="">21st</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">Go-Dan</span></p>
    </td>
    <td>
    <p><span style="">(5th)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">1981</span></p>
    </td>
    <td colspan="2">
    <p><span style="">March</span></p>
    </td>
    <td>
    <p><span style="">23rd</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">Roku-Dan</span></p>
    </td>
    <td>
    <p><span style="">(6th)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">1985</span></p>
    </td>
    <td colspan="2">
    <p><span style="">March</span></p>
    </td>
    <td>
    <p><span style="">1st</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">Nana-Dan</span></p>
    </td>
    <td>
    <p><span style="">(7th)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">1990</span></p>
    </td>
    <td colspan="2">
    <p><span style="">April</span></p>
    </td>
    <td>
    <p><span style="">17th</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2">
    <p><span style="">Hachi-Dan</span></p>
    </td>
    <td>
    <p><span style="">(8th)</span></p>
    </td>
    <td colspan="3">
    <p><span style="">2000</span></p>
    </td>
    <td colspan="2">
    <p><span style="">November</span></p>
    </td>
    <td>
    <p><span style="">5th</span></p>
    </td>
    </tr>
    <tr>
  </tbody>
  </table>
  <h4 class="cust-h4">Titles Received</h4>
  <table class="cust-table break-table" border="1">
  <tbody>
    
    <tr>
    <td>
    <p><span style="">Shido</span></p>
    </td>
    <td colspan="3">
    <p><span style="">Instructor</span></p>
    </td>
    <td>
    <p><span style="">1975</span></p>
    </td>
    <td colspan="2">
    <p><span style="">January</span></p>
    </td>
    <td colspan="2">
    <p><span style="">18th</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">Shihan</span></p>
    </td>
    <td colspan="3">
    <p><span style="">Head of Dojo</span></p>
    </td>
    <td>
    <p><span style="">1992</span></p>
    </td>
    <td colspan="2">
    <p><span style="">December</span></p>
    </td>
    <td colspan="2">
    <p><span style="">1st</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">Kyoshi</span></p>
    </td>
    <td colspan="3">
    <p><span style="">Leader</span></p>
    </td>
    <td>
    <p><span style="">1997</span></p>
    </td>
    <td colspan="2">
    <p><span style="">November</span></p>
    </td>
    <td colspan="2">
    <p><span style="">3rd</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">Hanshi</span></p>
    </td>
    <td colspan="3">
    <p><span style="">Great master (litt. "model")</span></p>
    </td>
    <td>
    <p><span style="">2000</span></p>
    </td>
    <td colspan="2">
    <p><span style="">December</span></p>
    </td>
    <td colspan="2">
    <p><span style="">12th</span></p>
    </td>
    </tr>
    </tbody>
    </table>

    <h4 class="cust-h4" >A Summary of his Career in the S.W.K.U</h4>
    <h4 class="cust-h4" >RYUSHIN-KAN International Karate Federation</h4>
    <table class="cust-table break-table" border="1" style="width:100%; text-align:center;" cellspacing="0" cellpadding="1">
    <tbody>
    <tr>
    <td>
    <p><span style="">April</span></p>
    </td>
    <td>
    <p><span style="">1965</span></p>
    </td>
    <td>
    <p><span style="">Joined S.W.K.U</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">January</span></p>
    </td>
    <td>
    <p><span style="">1975</span></p>
    </td>
    <td>
    <p><span style="">Became Superintendent of S.W.K.U.</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">January</span></p>
    </td>
    <td>
    <p><span style="">1975</span></p>
    </td>
    <td>
    <p><span style="">Became Supervisor of S.W.K.U.</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">July</span></p>
    </td>
    <td>
    <p><span style="">1978</span></p>
    </td>
    <td>
    <p><span style="">Branch Chief of Shuko-Kai Youth Karate Development,</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">July</span></p>
    </td>
    <td>
    <p><span style="">1978</span></p>
    </td>
    <td>
    <p><span style="">Founded the Shuko-Kai Headquarters' second dojo,</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">March</span></p>
    </td>
    <td>
    <p><span style="">1981</span></p>
    </td>
    <td>
    <p><span style="">Founded the Zebra Club Headquarters,</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">June</span></p>
    </td>
    <td>
    <p><span style="">1997</span></p>
    </td>
    <td>
    <p><span style="">Became Shihan of the Overseas Karate-Do Development,</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">November</span></p>
    </td>
    <td>
    <p><span style="">1997</span></p>
    </td>
    <td>
    <p><span style="">Founded the Ryushin-Kan Headquarters,</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">September</span></p>
    </td>
    <td>
    <p><span style="">2000</span></p>
    </td>
    <td>
    <p><span style="">Became President of S.W.K.U. South Africa,</span></p>
    </td>
    </tr>
    <tr>
    <td>
    <p><span style="">December</span></p>
    </td>
    <td>
    <p><span style="">2000</span></p>
    </td>
    <td>
    <p><span style="">Became Hanshi of S.W.K.U. Headquarters,</span></p>
    </td>
    </tr>
    <tr>
    <td valign="top">
    <p><span style="">March</span></p>
    </td>
    <td valign="top">
    <p><span style="">2002</span></p>
    </td>
    <td>
    <p><span style="">Founded the Ryushin-Kan International Karate-do Federation,</span></p>
    </td>
    </tr>
    </tbody>
    </table>
    </center>
    `),

    new Profiledetails('TANI Chojiro <span class="make-small">(1915 – 1998)</span><br/><span class="subtitle">Tani-Ha Shito-Ryu/Shukokai</span>','../../assets/03_Sensei_Tani_Chojiro.jpg', `<p class='p-paragraph' ><b>T</b>ANI Chojiro was born in Kobe and started his formal Karate training under CHOJUN Miyagi, the founder of Goju-Ryu.</p><p class='p-paragraph' ><b>H</b>e continued training at the University Karate Club under MABUNI Kenwa, the founder of Shito-Ryu.</p><p class='p-paragraph' ><b>T</b>ANI Chojiro received, as one of MABUNI’s most senior students, the certificate of succession entitling him to use the name of "Tani-Ha Shito-Ryu", the Tani style of Shito-Ryu.</p><p class='p-paragraph' ><b>L</b>ater he found the Shuko-Kai World Karate Union.</p>`),
    
    new Profiledetails('MABUNI Kenwa <span class="make-small">(1887 – 1952)</span> <br/><span class="subtitle">Shito-Ryu</span>','../../assets/04_Sensei_Mabuni_Kenwa.jpg', `<p class='p-paragraph' ><b>M</b>ABUNI Kenwa started karate at the age of 13 under ITOSU Anko, the man who organized early karate in the Okinawan school system.</p>
    <p class='p-paragraph' ><b>I</b>TOSU and MABUNI developed a very close master-disciple relationship.</p>
    <p class='p-paragraph' ><b>M</b>ABUNI was the natural "heir" of  23 kata handed down by his master.</p>
    <p class='p-paragraph' ><b>C</b>HOJUM Miyagi introduced MABUNI to HIGASHIONNA Kanryo and he began to learn under him as well.</p>
    <p class='p-paragraph' ><b>W</b>hen ITOSU died, MABUNI became his successor.
    Later MABUNI found Shito-Ryu.</p>`),

    new Profiledetails('HIGASHIONNA Kanryo <span class="make-small">(1853 – 1915)</span> <br/><span class="subtitle">Naha-Te</span>','../../assets/05_Sensei_Higashionna_Kanryo.jpg', `<p class='p-paragraph' ><b>H</b>IGASHIONNA Kanryo was born in Naha, who finally formalized Naha-te, a Chinese style karate.</p>
    <p class='p-paragraph' ><b>H</b>e learned the Shorinji-Kempo, and after becoming the Okinawa royal family official martial artist, devoted his life to developing the Naha-te style and teaching.</p>`),
    
    new Profiledetails('ITOSU Anko <span class="make-small">(1830 – 1915)</span>  <br/><span class="subtitle">Shuri-Te</span>','../../assets/06_Sensei_Itosu_Anko.jpg', `<p class='p-paragraph' ><b>I</b>TOSU Anko was the man  who organized early karate in the Okinawan school system.</p>
    <p class='p-paragraph' ><b>I</b>TOSU was a student of one of Okinawa's most famous karate masters, MATSUMURA Sokon (1809-1899).</p>
    <p class='p-paragraph' ><b>I</b>n 1908 he wrote a letter to the Prefectural Educational Department encouraging the introduction of Karate (Tode) to all Okinawan schools including those on the Japanese mainland.</p>`),

    new Profiledetails('MATSUMURA Sokon <span class="make-small">(1809 - 1899)</span>  <br/><span class="subtitle">Shuri-Te</span>','../../assets/07_Matsumura_Sokon.jpg', `<p class='p-paragraph' ><b>M</b>ATSUMURA Sokon was one of the original karate masters of Okinawa.</p><p class='p-paragraph' ><b>M</b>ATSUMURA began the study of karate under the guidance of Sakukawa Kanga.</p><p class='p-paragraph' ><b>I</b>n 1836 MATSUMURA was recruited into the service of the Sho family, the royal family of the Ryukyu Kingdome and received the title Shikudon a gentry rank.</p><p class='p-paragraph' ><b>M</b>ATSUMURA is credited with passing on the Shorin-Ryu Kempo-Karate kata known as Naihanchi I & II, Passai, Seisan, Chinto, Gojushiho, Kusanku  and Hakutsuru.</p><p class='p-paragraph' ><b>M</b>ATSUMURA was given the title "Bushi" meaning "Warrior" by the Okinawan king in recognition of his abilities and accomplishments in the martial arts.
    </p>`)
    
  ]

  listDan = [
    {'name': 'SHIHAN SUNNY GEEVARGHESE', 'dan': '7th Dan (Japan)', 'description': ['President, RIKF & SWKU - India','Chief Instructor & Examiner'],'rank':'1', 'img': '../../assets/members/SUNNY_GEEVARGHESE.jpg'},
    {'name': 'SHIHAN SYAMAN K G', 'dan': '6th Dan (Japan)', 'description': ['Instructor & Examiner','Co - Ordinator - India'],'rank':'1', 'img': '../../assets/members/SYAMAN_K_G.jpg'},
    {'name': 'RONY S GEEVARGHESE', 'dan': '3rd Dan (Japan)', 'description': '','rank':'2', 'img': '../../assets/members/RONY_S_GEEVARGHESE.jpg'},
    {'name': 'SONY SUNNY', 'dan': '3rd Dan (Japan)', 'description': '','rank':'2', 'img': '../../assets/members/SONY_SUNNY.jpg'},
    {'name': 'VARGHESE T', 'dan': '3rd Dan (Japan)', 'description': '','rank':'2', 'img': '../../assets/members/VARGHESE_T.jpg'},
    {'name': 'REMGARAJAN P T', 'dan': '3rd Dan (Japan)', 'description': '','rank':'2', 'img': '../../assets/members/REMGARAJAN_P_T.jpg'},
    {'name': 'FRANCIS GEORGE', 'dan': '2nd Dan (Japan)', 'description': '../../assets/members/','rank':'3', 'img': '../../assets/members/FRANCIS_GEORGE.jpg'},
    {'name': 'FLINTO GEORGE', 'dan': '2nd Dan (Japan)', 'description': '','rank':'3', 'img': '../../assets/members/FLINTO_GEORGE.jpg'},
    {'name': 'GIRISH S KAIPPALLIL', 'dan': '2nd Dan (Japan)', 'description': '','rank':'3', 'img': '../../assets/members/GIRISH_S_KAIPPALLIL.jpg'},
    {'name': 'RAJESH S', 'dan': '2nd Dan (Japan)', 'description': '','rank':'3', 'img': '../../assets/members/RAJESH_S.jpg'},
    {'name': 'SREERAJ S', 'dan': '2nd Dan (Japan)', 'description': '','rank':'3', 'img': '../../assets/members/SREERAJ_S.jpg'},
    {'name': 'AJAY JAYAN', 'dan': '2nd Dan (Japan)', 'description': '','rank':'3', 'img': '../../assets/members/AJAY_JAYAN.jpg'},
    {'name': 'LINTA RENJITH', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/LINTA_RENJITH.jpg'},
    {'name': 'VISWANTH A', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/VISWANTH_A.jpg'},
    {'name': 'ALEENA MARIYAM REJI', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/ALEENA_MARIYAM_REJI.jpg'},
    {'name': 'JAGATHESH M', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/JAGATHESH_M.jpg'},
    {'name': 'ALVIN C ROY', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/ALVIN_C_ROY.jpg'},
    {'name': 'SOORAJ SAMPATH KANDESAR', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/SOORAJ_SAMPATH_KANDESAR.jpg'},
    {'name': 'SARATH PRAKASH J', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/SARATH_PRAKASH_J.jpg'},
    {'name': 'ABHISHEK AJIKUMAR', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/ABHISHEK_AJIKUMAR.jpg'},
    {'name': 'B S ABHIRAJ', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/B_S_ABHIRAJ.jpg'},
    {'name': 'RISHY S RAJ', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/RISHY_S_RAJ.jpg'},
    {'name': 'KIRAN RAJ', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/KIRAN_RAJ.jpg'},
    {'name': 'ABHIRAM R B', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/ABHIRAM_R_B.jpg'},
    {'name': 'KARTHIK S PILLAI', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/KARTHIK_S_PILLAI.jpg'},
    {'name': 'RENI ALEXANDER', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/RENI_ALEXANDER.jpg'},
    {'name': 'KARTHIK J', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/KARTHIK_J.jpg'},
    {'name': 'AKHOSH DAS S', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/AKHOSH_DAS_S.jpg'},
    {'name': 'GOVIND D', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/govind.jpg'},
    {'name': 'ABHIMANYU A', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/ABHIMANYU_A.jpg'},
    {'name': 'ADITHYAN B RAJ', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/ADITHYAN_B_RAJ.jpg'},
    {'name': 'VISHNU J', 'dan': '1st Dan (Japan)', 'description': '','rank':'4', 'img': '../../assets/members/VISHNU_J.jpg'},
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

  getLeaders(){
    return this.listDan.filter((item)=>{
        if(item.rank == '1')
        {
            return true;
        }
        else
        {
            return false;
        }
    });
  }

  getMembers(rank){
    return this.listDan.filter((item)=>{
        if(item.rank == rank)
        {
            return true;
        }
        else
        {
            return false;
        }
    });
  }
}

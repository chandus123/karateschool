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
    '../../assets/gallery/45.JPG',
    '../../assets/gallery/46.JPG',
    '../../assets/gallery/47.JPG',
    '../../assets/gallery/48.JPG',
    '../../assets/gallery/49.JPG',
    '../../assets/gallery/50.JPG',
    '../../assets/gallery/51.JPG',
    '../../assets/gallery/52.JPG',
    '../../assets/gallery/53.JPG',
    '../../assets/gallery/54.JPG',
    '../../assets/gallery/55.JPG',
    '../../assets/gallery/56.JPG'
  ]]
  ]);

  

  private profiles = [
    new Profiledetails('SUNNY Geevarghese <br/><span class="subtitle">Ryushin-Kan India</span><br/><span class="subtitle">Shihan 7th Dan</span>','../../assets/01_Shihan_Sunny_Geevarghese.jpg', `<p class='p-paragraph' ><b>B</b>orn in 1960, SUNNY Geevarghese started learning Shotokan in 1978.</p><p class='p-paragraph' ><b>I</b>n 1980, he joined Alan-Thilak Shito-Ryu karate school in India.</p>
    <p class='p-paragraph' ><b>F</b>rom 1990 to 1996, he trained karate in Fujairah (UAE).</p>
    <p class='p-paragraph' ><b>I</b>n 1996, SUNNY started his own Dojo in Punalur (Kerala, India) and started teaching Shito-Ryu.</p>
    <p class='p-paragraph' ><b>I</b>n 2000, He has been certified as ‘JUDGE – KUMITE’ by All India Karate-Do Federation (AIKF).</p>
    <p class='p-paragraph' ><b>I</b>n 2016, He has been certified as ‘JUDGE – KUMITE’ by Karate Association of India (KAI).</p>
    <p class='p-paragraph' ><b>I</b>n 2017, he has been awarded the title of ‘Chief Instructor - Ryushin-Kan India’.</p>
    <p class='p-paragraph' ><b>I</b>n 2018, he has been awarded the title of ‘Chief Examiner - Ryushin-Kan India’.</p>
    <center>
    <h4 class="cust-h4" >Dan</h4>
    <table class="cust-table" border="1" style="width:100%; text-align:center;">
    <tbody>
    <tr>
<td width="147">
<p>Sho-Dan &nbsp;</p>
</td>
<td width="112">
<p>(1st)&nbsp;</p>
</td>
<td width="87">
<p>1988</p>
</td>
<td width="118">
<p>September</p>
</td>
<td width="74">
<p>5th</p>
</td>
</tr>
<tr>
<td width="147">
<p>Ni-Dan&nbsp;</p>
</td>
<td width="112">
<p>(2nd)</p>
</td>
<td width="87">
<p>1993</p>
</td>
<td width="118">
<p>May</p>
</td>
<td width="74">
<p>8th</p>
</td>
</tr>
<tr>
<td width="147">
<p>San-Dan</p>
</td>
<td width="112">
<p>(3rd)</p>
</td>
<td width="87">
<p>1993</p>
</td>
<td width="118">
<p>May</p>
</td>
<td width="74">
<p>8th</p>
</td>
</tr>
<tr>
<td width="147">
<p>Yon-Dan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
</td>
<td width="112">
<p>(4th)</p>
</td>
<td width="87">
<p>1998</p>
</td>
<td width="118">
<p>December</p>
</td>
<td width="74">
<p>22nd&nbsp;&nbsp;</p>
</td>
</tr>
<tr>
<td width="147">
<p>Go-Dan&nbsp;&nbsp;</p>
</td>
<td width="112">
<p>(5th)&nbsp;</p>
</td>
<td width="87">
<p>2000&nbsp;</p>
</td>
<td width="118">
<p>August</p>
</td>
<td width="74">
<p>5th</p>
</td>
</tr>
<tr>
<td width="147">
<p>Roku-Dan&nbsp;</p>
</td>
<td width="112">
<p>(6th)&nbsp;</p>
</td>
<td width="87">
<p>2017</p>
</td>
<td width="118">
<p>March&nbsp;</p>
</td>
<td width="74">
<p>29th&nbsp;</p>
</td>
</tr>
<tr>
<td width="147">
<p>Nana-Dan&nbsp;&nbsp;</p>
</td>
<td width="112">
<p>(7th)</p>
</td>
<td width="87">
<p>2017</p>
</td>
<td width="118">
<p>March&nbsp;</p>
</td>
<td width="74">
<p>29th</p>
</td>
</tr>
<tr>
<td width="147">
<p>Roku-Dan&nbsp;(Ryushin-Kan)</p>
</td>
<td width="112">
<p>(6th)</p>
</td>
<td width="87">
<p>2018</p>
</td>
<td width="118">
<p>February</p>
</td>
<td width="74">
<p>10th&nbsp;</p>
</td>
</tr>
<tr>
<td width="147">
<p>Nana-Dan&nbsp;(Ryushin-Kan)</p>
</td>
<td width="112">
<p>(7th)</p>
</td>
<td width="87">
<p>2018</p>
</td>
<td width="118">
<p>February</p>
</td>
<td width="74">
<p>10th&nbsp;</p>
</td>
</tr>
    </tbody>
    </table>
    </center>
    `),
    
    new Profiledetails('MASUYAMA Takeshi <br/><span class="subtitle">SWKU-Ryushin-Kan</span><br/><span class="subtitle">Soke 9th Dan</span>','../../assets/02_Soke_Masuyama_Takeshi.png', `<p class='p-paragraph' ><b>B</b>orn in 1949, MASUYAMA Takeshi, Founder of  Ryushin-Kan International Karate-do Federation</p>
<p class='p-paragraph' ><b>L</b>earned directly from TANI Chojiro, Founder of Shuko-Kai World Karate Union</p><p class='p-paragraph' ><b>A</b> direct disciple of MABUNI Kenwa,  Founder of  Shito-Ryu Karate</p><p class='p-paragraph' ><b>W</b>ho had learned Shuri-Te from ITOSU Anko and Nara-Te from HIGASHIONNA Kanryo, in Okinawa</p>
    
    <center>
    
    <h4 class="cust-h4" >Dan</h4>
    
    <table class="cust-table" border="1" style="width:100%; text-align:center;">
    <tbody>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Sho-Dan &nbsp;</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(1st)&nbsp;</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1973</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">April</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">21st&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Ni-Dan&nbsp;</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(2nd)</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1974</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">December</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">12th</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">San-Dan</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(3rd)</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1975</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">December</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">19th</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Yon-Dan&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(4th)</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1977</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">October</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">21st&nbsp;&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Go-Dan&nbsp;&nbsp;</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(5th)&nbsp;</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1981&nbsp;</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">March</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">23rd</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Roku-Dan&nbsp;</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(6th)&nbsp;</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1985</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">March&nbsp;</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">1st&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Nana-Dan&nbsp;&nbsp;</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(7th)</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">1990</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">April&nbsp;</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">17th</span></p>
    </td>
    </tr>
    <tr>
    <td colspan="2" width="148">
    <p><span style="font-size: medium;">Hachi- Dan</span></p>
    </td>
    <td width="110">
    <p><span style="font-size: small;">(8th)</span></p>
    </td>
    <td colspan="3" width="84">
    <p><span style="font-size: medium;">2000</span></p>
    </td>
    <td colspan="2" width="116">
    <p><span style="font-size: medium;">November</span></p>
    </td>
    <td width="162">
    <p><span style="font-size: medium;">5th&nbsp;</span></p>
    </td>
    </tr>
    <tr>
  </tbody>
  </table>
  <h4 class="cust-h4" >Titles Received</h4>
  <table class="cust-table" border="1">
  <tbody>
    
    <tr>
    <td width="79">
    <p><span style="font-size: medium;">Shido&nbsp;</span></p>
    </td>
    <td colspan="3" width="181">
    <p><span style="font-size: small;">Instructor</span></p>
    </td>
    <td width="76">
    <p><span style="font-size: small;">1975</span></p>
    </td>
    <td colspan="2" width="102">
    <p><span style="font-size: small;">January</span></p>
    </td>
    <td colspan="2" width="182">
    <p><span style="font-size: small;">18th&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="79">
    <p><span style="font-size: medium;">Shihan&nbsp;</span></p>
    </td>
    <td colspan="3" width="181">
    <p><span style="font-size: small;">Head of Dojo</span></p>
    </td>
    <td width="76">
    <p><span style="font-size: small;">1992</span></p>
    </td>
    <td colspan="2" width="102">
    <p><span style="font-size: small;">December&nbsp;</span></p>
    </td>
    <td colspan="2" width="182">
    <p><span style="font-size: small;">1st&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="79">
    <p><span style="font-size: medium;">Kyoshi&nbsp;</span></p>
    </td>
    <td colspan="3" width="181">
    <p><span style="font-size: small;">Leader</span></p>
    </td>
    <td width="76">
    <p><span style="font-size: small;">1997</span></p>
    </td>
    <td colspan="2" width="102">
    <p><span style="font-size: small;">November&nbsp;</span></p>
    </td>
    <td colspan="2" width="182">
    <p><span style="font-size: small;">3rd&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="79">
    <p><span style="font-size: medium;">Hanshi&nbsp;&nbsp;</span></p>
    </td>
    <td colspan="3" width="181">
    <p><span style="font-size: small;">Great master&nbsp; ( litt. "model")</span></p>
    </td>
    <td width="76">
    <p><span style="font-size: small;">2000</span></p>
    </td>
    <td colspan="2" width="102">
    <p><span style="font-size: small;">December&nbsp;</span></p>
    </td>
    <td colspan="2" width="182">
    <p><span style="font-size: small;">12th&nbsp;</span></p>
    </td>
    </tr>
    </tbody>
    </table>

    <h4 class="cust-h4" >A Summary of his Career in the&nbsp;S.W.K.U</h4>
    <h4 class="cust-h4" >RYUSHIN-KAN International Karate Federation&nbsp;</h4>
    <table class="cust-table" border="1" style="width:100%; text-align:center;" cellspacing="0" cellpadding="1">
    <tbody>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">April&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1965&nbsp;</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Joined S.W.K.U</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">January&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1975</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Became Superintendent of&nbsp; S.W.K.U.&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">January&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1975</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Became Supervisor of&nbsp; S.W.K.U.&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">July&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1978</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Branch Chief of&nbsp; Shuko-Kai Youth Karate Development,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">July&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1978</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Founded the Shuko-Kai Headquarters' second dojo,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">March&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1981</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Founded the Zebra Club Headquarters ,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">June&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1997</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Became Shihan of the Overseas Karate-Do Development,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">November&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">1997</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Founded the Ryushin-Kan Headquarters,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">September&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">2000</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Became President of S.W.K.U. South Africa,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td width="78">
    <p><span style="font-size: small;">December&nbsp;</span></p>
    </td>
    <td width="45">
    <p><span style="font-size: small;">2000</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Became Hanshi of S.W.K.U. Headquarters,&nbsp;</span></p>
    </td>
    </tr>
    <tr>
    <td valign="top" width="78">
    <p><span style="font-size: small;">March</span></p>
    </td>
    <td valign="top" width="45">
    <p><span style="font-size: small;">2002</span></p>
    </td>
    <td width="463">
    <p><span style="font-size: small;">Founded the Ryushin-Kan International Karate-do Federation,&nbsp;</span></p>
    </td>
    </tr>
    </tbody>
    </table>
    </center>
    `),

    new Profiledetails('TANI Chojiro (1915 – 1998) <br/><span class="subtitle">Tani-Ha Shito-Ryu/Shukokai</span>','../../assets/03_Sensei_Tani_Chojiro.jpg', `<p class='p-paragraph' ><b>T</b>ANI Chojiro was born in Kobe and started his formal Karate training under CHOJUN Miyagi, the founder of Goju-Ryu.</p><p class='p-paragraph' ><b>H</b>e continued training at the University Karate Club under MABUNI Kenwa, the founder of Shito-Ryu.</p><p class='p-paragraph' ><b>T</b>ANI Chojiro received, as one of MABUNI’s most senior students, the certificate of succession entitling him to use the name of "Tani-Ha Shito-Ryu", the Tani style of Shito-Ryu.</p><p class='p-paragraph' ><b>L</b>ater he found the Shuko-Kai World Karate Union.</p>`),
    
    new Profiledetails('MABUNI Kenwa (1887 – 1952) <br/><span class="subtitle">Shito-Ryu</span>','../../assets/04_Sensei_Mabuni_Kenwa.jpg', `<p class='p-paragraph' ><b>M</b>ABUNI Kenwa started karate at the age of 13 under ITOSU Anko, the man who organized early karate in the Okinawan school system.</p>
    <p class='p-paragraph' ><b>I</b>TOSU and MABUNI developed a very close master-disciple relationship.</p>
    <p class='p-paragraph' ><b>M</b>ABUNI was the natural "heir" of  23 kata handed down by his master.</p>
    <p class='p-paragraph' ><b>C</b>HOJUM Miyagi introduced MABUNI to HIGASHIONNA Kanryo and he began to learn under him as well.</p>
    <p class='p-paragraph' ><b>W</b>hen ITOSU died, MABUNI became his successor.
    Later MABUNI found Shito-Ryu.</p>`),

    new Profiledetails('HIGASHIONNA Kanryo (1853 – 1915) <br/><span class="subtitle">Naha-Te</span>','../../assets/05_Sensei_Higashionna_Kanryo.jpg', `<p class='p-paragraph' ><b>H</b>IGASHIONNA Kanryo was born in Naha, who finally formalized Naha-te, a Chinese style karate.</p>
    <p class='p-paragraph' ><b>H</b>e learned the Shorinji-Kempo, and after becoming the Okinawa royal family official martial artist, devoted his life to developing the Naha-te style and teaching.</p>`),
    
    new Profiledetails('ITOSU Anko (1830 – 1915)  <br/><span class="subtitle">Shuri-Te</span>','../../assets/06_Sensei_Itosu_Anko.jpg', `<p class='p-paragraph' ><b>I</b>TOSU Anko was the man  who organized early karate in the Okinawan school system.</p>
    <p class='p-paragraph' ><b>I</b>TOSU was a student of one of Okinawa's most famous karate masters, MATSUMURA Sokon (1850-1899), founder of Shorin-ryu.</p>
    <p class='p-paragraph' ><b>I</b>n 1908 he wrote a letter to the Prefectural Educational Department encouraging the introduction of Karate (Tode) to all Okinawan schools including those on the Japanese mainland.</p>`),

    new Profiledetails('MATSUMURA Sokon (1809 - 1899)  <br/><span class="subtitle">Shuri-Te</span>','../../assets/07_Matsumura_Sokon.jpg', `<p class='p-paragraph' ><b>MATSUMURA</b> Sokon was one of the original karate masters of Okinawa.</p><p class='p-paragraph' ><b>MATSUMURA</b> began the study of karate under the guidance of Sakukawa Kanga.</p><p class='p-paragraph' >in 1836 <b>MATSUMURA</b> was recruited into the service of the Sho family, the royal family of the Ryukyu Kingdome and received the title Shikudon a gentry rank.</p><p class='p-paragraph' ><b>MATSUMURA</b> is credited with passing on the Shorin-Ryu Kempo-Karate kata known as Naihanchi I & II, Passai, Seisan, Chinto, Gojushiho, Kusanku  and Hakutsuru.</p><p class='p-paragraph' ><b>MATSUMURA</b> was given the title "Bushi" meaning "Warrior" by the Okinawan king in recognition of his abilities and accomplishments in the martial arts.
    </p>`)
    
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

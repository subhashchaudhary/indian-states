/*
 * Indian State and City Populater
 * author: Pawnesh Rai
 * version: 1.0
 */
(function($) {
    $.fn.pwn_states = function(options) {
        var nicobar = '<option value="Campbell Bay (Great Nicobar)">Campbell Bay (Great Nicobar)</option>';
        nicobar = nicobar + '<option value="Diglipur">Diglipur</option>';
        nicobar = nicobar + '<option value="Mayabunder">Mayabunder</option>';
        nicobar = nicobar + '<option value="Rangat">Rangat</option>';
        nicobar = nicobar + '<option value="Port Blair‎">Port Blair‎</option>';
        nicobar = nicobar + '<option value="Garacharma">Garacharma</option>';
        nicobar = nicobar + '<option value="Bombooflat">Bombooflat</option>';
        nicobar = nicobar + '<option value="Tushnabad">Tushnabad</option>';

        var andhra = '<option value="Adoni">Adoni</option>';
        andhra = andhra + '<option value="Anantapur">Anantapur</option>';
        andhra = andhra + '<option value="Bhimavaram">Bhimavaram</option>';
        andhra = andhra + '<option value="Chittoor">Chittoor</option>';
        andhra = andhra + '<option value="Eluru">Eluru</option>';
        andhra = andhra + '<option value="Guntur">Guntur</option>';
        andhra = andhra + '<option value="Hindupur">Hindupur</option>';
        andhra = andhra + '<option value="Kadapa">Kadapa</option>';
        andhra = andhra + '<option value="Kakinada">Kakinada</option>';
        andhra = andhra + '<option value="Kurnool">Kurnool</option>';
        andhra = andhra + '<option value="Madanapalle">Madanapalle</option>';
        andhra = andhra + '<option value="Nandyal">Nandyal</option>';
        andhra = andhra + '<option value="Narasaraopet">Narasaraopet</option>';
        andhra = andhra + '<option value="Nellore">Nellore</option>';
        andhra = andhra + '<option value="Ongole">Ongole</option>';
        andhra = andhra + '<option value="Proddatur">Proddatur</option>';
        andhra = andhra + '<option value="Rajahmundry">Rajahmundry</option>';
        andhra = andhra + '<option value="Srikakulam">Srikakulam</option>';
        andhra = andhra + '<option value="Tadepalligudem">Tadepalligudem</option>';
        andhra = andhra + '<option value="Tenali">Tenali</option>';
        andhra = andhra + '<option value="Tirupati">Tirupati</option>';
        andhra = andhra + '<option value="Vijayawada">Vijayawada</option>';
        andhra = andhra + '<option value="Visakhapatnam">Visakhapatnam</option>';
        andhra = andhra + '<option value="Vizianagaram">Vizianagaram</option>';

        var arunachal = '';
        arunachal = arunachal + '<option value="Bordumsa">Bordumsa</option>';
        arunachal = arunachal + '<option value="Bubang">Bubang</option>';
        arunachal = arunachal + '<option value="Changlang">Changlang</option>';
        arunachal = arunachal + '<option value="Chopelling">Chopelling</option>';
        arunachal = arunachal + '<option value="Deban">Deban</option>';
        arunachal = arunachal + '<option value="Dharampur">Dharampur</option>';
        arunachal = arunachal + '<option value="Gandhigram">Gandhigram</option>';
        arunachal = arunachal + '<option value="Jairampur">Jairampur</option>';
        arunachal = arunachal + '<option value="Kharsang">Kharsang</option>';
        arunachal = arunachal + '<option value="Khemiyong">Khemiyong</option>';
        arunachal = arunachal + '<option value="Kherem Bisa">Kherem Bisa</option>';
        arunachal = arunachal + '<option value="Kutum Basti">Kutum Basti</option>';
        arunachal = arunachal + '<option value="Lallung">Lallung</option>';
        arunachal = arunachal + '<option value="Manabhum">Manabhum</option>';
        arunachal = arunachal + '<option value="Manmao">Manmao</option>';
        arunachal = arunachal + '<option value="Miao">Miao</option>';
        arunachal = arunachal + '<option value="Namchik">Namchik</option>';
        arunachal = arunachal + '<option value="Namdang">Namdang</option>';
        arunachal = arunachal + '<option value="Namphai">Namphai</option>';
        arunachal = arunachal + '<option value="Namtok">Namtok</option>';
        arunachal = arunachal + '<option value="New Mohang">New Mohang</option>';
        arunachal = arunachal + '<option value="Rajanagar">Rajanagar</option>';
        arunachal = arunachal + '<option value="Rangfrah Covt College">Rangfrah Covt College</option>';
        arunachal = arunachal + '<option value="Ranglum">Ranglum</option>';
        arunachal = arunachal + '<option value="Two-hat">Two-hat</option>';
        arunachal = arunachal + '<option value="Vijoynagar">Vijoynagar</option>';
        arunachal = arunachal + '<option value="Vijoypur">Vijoypur</option>';
        arunachal = arunachal + '<option value="Yangkang">Yangkang</option>';
        arunachal = arunachal + '<option value="Alinye">Alinye</option>';
        arunachal = arunachal + '<option value="Anelih">Anelih</option>';
        arunachal = arunachal + '<option value="Anini">Anini</option>';
        arunachal = arunachal + '<option value="Bameng">Bameng</option>';
        arunachal = arunachal + '<option value="Bana">Bana</option>';
        arunachal = arunachal + '<option value="Chyangtajo">Chyangtajo</option>';
        arunachal = arunachal + '<option value="Khenewa">Khenewa</option>';
        arunachal = arunachal + '<option value="Lada">Lada</option>';
        arunachal = arunachal + '<option value="P.kessang">P.kessang</option>';
        arunachal = arunachal + '<option value="Palizi">Palizi</option>';
        arunachal = arunachal + '<option value="Pipu-dipu">Pipu-dipu</option>';
        arunachal = arunachal + '<option value="Seijosa">Seijosa</option>';
        arunachal = arunachal + '<option value="Seppa">Seppa</option>';
        arunachal = arunachal + '<option value="Thrizino">Thrizino</option>';
        arunachal = arunachal + '<option value="Veo">Veo</option>';
        arunachal = arunachal + '<option value="Adipasi">Adipasi</option>';
        arunachal = arunachal + '<option value="Ayeng">Ayeng</option>';
        arunachal = arunachal + '<option value="Balek">Balek</option>';
        arunachal = arunachal + '<option value="Bilat">Bilat</option>';
        arunachal = arunachal + '<option value="Boleng">Boleng</option>';
        arunachal = arunachal + '<option value="Borguli">Borguli</option>';
        arunachal = arunachal + '<option value="Dalbing">Dalbing</option>';
        arunachal = arunachal + '<option value="Damro">Damro</option>';
        arunachal = arunachal + '<option value="Debing">Debing</option>';
        arunachal = arunachal + '<option value="Gtc">Gtc</option>';
        arunachal = arunachal + '<option value="Hill Top">Hill Top</option>';
        arunachal = arunachal + '<option value="Kebang">Kebang</option>';
        arunachal = arunachal + '<option value="Korang">Korang</option>';
        arunachal = arunachal + '<option value="Koyu">Koyu</option>';
        arunachal = arunachal + '<option value="Ledum">Ledum</option>';
        arunachal = arunachal + '<option value="Mebo">Mebo</option>';
        arunachal = arunachal + '<option value="Namsing">Namsing</option>';
        arunachal = arunachal + '<option value="Nari">Nari</option>';
        arunachal = arunachal + '<option value="Ngopok">Ngopok</option>';
        arunachal = arunachal + '<option value="Oyan">Oyan</option>';
        arunachal = arunachal + '<option value="Pangin">Pangin</option>';
        arunachal = arunachal + '<option value="Pasighat">Pasighat</option>';
        arunachal = arunachal + '<option value="Rani">Rani</option>';
        arunachal = arunachal + '<option value="Renging">Renging</option>';
        arunachal = arunachal + '<option value="Riga">Riga</option>';
        arunachal = arunachal + '<option value="Ruksin">Ruksin</option>';
        arunachal = arunachal + '<option value="Sille">Sille</option>';
        arunachal = arunachal + '<option value="Silluk">Silluk</option>';
        arunachal = arunachal + '<option value="Sirem">Sirem</option>';
        arunachal = arunachal + '<option value="Yagrung">Yagrung</option>';
        arunachal = arunachal + '<option value="mirem mikong debing miglung">mirem mikong debing miglung</option>';
        arunachal = arunachal + '<option value="Chambang">Chambang</option>';
        arunachal = arunachal + '<option value="Damin">Damin</option>';
        arunachal = arunachal + '<option value="Hiya">Hiya</option>';
        arunachal = arunachal + '<option value="Koloriang">Koloriang</option>';
        arunachal = arunachal + '<option value="Nyapin">Nyapin</option>';
        arunachal = arunachal + '<option value="Palin">Palin</option>';
        arunachal = arunachal + '<option value="Sangram">Sangram</option>';
        arunachal = arunachal + '<option value="Sarli">Sarli</option>';
        arunachal = arunachal + '<option value="Tali">Tali</option>';
        arunachal = arunachal + '<option value="Alubari">Alubari</option>';
        arunachal = arunachal + '<option value="Chakma">Chakma</option>';
        arunachal = arunachal + '<option value="Changliang">Changliang</option>';
        arunachal = arunachal + '<option value="Chowkham">Chowkham</option>';
        arunachal = arunachal + '<option value="Danglat">Danglat</option>';
        arunachal = arunachal + '<option value="Diyun">Diyun</option>';
        arunachal = arunachal + '<option value="Gohaingaon">Gohaingaon</option>';
        arunachal = arunachal + '<option value="Innao">Innao</option>';
        arunachal = arunachal + '<option value="Jaipur">Jaipur</option>';
        arunachal = arunachal + '<option value="Kamlang Nagar">Kamlang Nagar</option>';
        arunachal = arunachal + '<option value="Kherem">Kherem</option>';
        arunachal = arunachal + '<option value="Kumari Kachari">Kumari Kachari</option>';
        arunachal = arunachal + '<option value="Kumsai">Kumsai</option>';
        arunachal = arunachal + '<option value="Lathao">Lathao</option>';
        arunachal = arunachal + '<option value="Lohitpur">Lohitpur</option>';
        arunachal = arunachal + '<option value="Loiliang">Loiliang</option>';
        arunachal = arunachal + '<option value="Mahadevpur">Mahadevpur</option>';
        arunachal = arunachal + '<option value="Manmao">Manmao</option>';
        arunachal = arunachal + '<option value="Medo">Medo</option>';
        arunachal = arunachal + '<option value="Momong">Momong</option>';
        arunachal = arunachal + '<option value="Nampong">Nampong</option>';
        arunachal = arunachal + '<option value="Namsai">Namsai</option>';
        arunachal = arunachal + '<option value="Nanam">Nanam</option>';
        arunachal = arunachal + '<option value="Peyong">Peyong</option>';
        arunachal = arunachal + '<option value="Podumani">Podumani</option>';
        arunachal = arunachal + '<option value="Sunpura">Sunpura</option>';
        arunachal = arunachal + '<option value="Tafragram">Tafragram</option>';
        arunachal = arunachal + '<option value="Tezu">Tezu</option>';
        arunachal = arunachal + '<option value="Tezu Covt.college">Tezu Covt.college</option>';
        arunachal = arunachal + '<option value="Tindolong">Tindolong</option>';
        arunachal = arunachal + '<option value="Udaipur">Udaipur</option>';
        arunachal = arunachal + '<option value="Wakro">Wakro</option>';
        arunachal = arunachal + '<option value="Wingko">Wingko</option>';
        arunachal = arunachal + '<option value="Yealing">Yealing</option>';
        arunachal = arunachal + '<option value="Abango">Abango</option>';
        arunachal = arunachal + '<option value="Anupam">Anupam</option>';
        arunachal = arunachal + '<option value="Bijari">Bijari</option>';
        arunachal = arunachal + '<option value="Bolung">Bolung</option>';
        arunachal = arunachal + '<option value="Bomjir">Bomjir</option>';
        arunachal = arunachal + '<option value="Dambuk">Dambuk</option>';
        arunachal = arunachal + '<option value="Desali">Desali</option>';
        arunachal = arunachal + '<option value="Elopa">Elopa</option>';
        arunachal = arunachal + '<option value="Etalin">Etalin</option>';
        arunachal = arunachal + '<option value="Hunli">Hunli</option>';
        arunachal = arunachal + '<option value="Iduli">Iduli</option>';
        arunachal = arunachal + '<option value="Jia">Jia</option>';
        arunachal = arunachal + '<option value="Koranu">Koranu</option>';
        arunachal = arunachal + '<option value="Kronli">Kronli</option>';
        arunachal = arunachal + '<option value="Meka">Meka</option>';
        arunachal = arunachal + '<option value="Paglam">Paglam</option>';
        arunachal = arunachal + '<option value="Parbuk">Parbuk</option>';
        arunachal = arunachal + '<option value="Roing">Roing</option>';
        arunachal = arunachal + '<option value="Santipur">Santipur</option>';
        arunachal = arunachal + '<option value="Boasimla">Boasimla</option>';
        arunachal = arunachal + '<option value="Chimpu">Chimpu</option>';
        arunachal = arunachal + '<option value="Deed">Deed</option>';
        arunachal = arunachal + '<option value="Godak">Godak</option>';
        arunachal = arunachal + '<option value="Hija">Hija</option>';
        arunachal = arunachal + '<option value="Joram">Joram</option>';
        arunachal = arunachal + '<option value="Mengio">Mengio</option>';
        arunachal = arunachal + '<option value="Old Ziro">Old Ziro</option>';
        arunachal = arunachal + '<option value="Raga">Raga</option>';
        arunachal = arunachal + '<option value="Ranga Nadi Project">Ranga Nadi Project</option>';
        arunachal = arunachal + '<option value="Talo">Talo</option>';
        arunachal = arunachal + '<option value="Yachuli">Yachuli</option>';
        arunachal = arunachal + '<option value="Yazali">Yazali</option>';
        arunachal = arunachal + '<option value="Ziro">Ziro</option>';
        arunachal = arunachal + '<option value="A P Sectt.">A P Sectt.</option>';
        arunachal = arunachal + '<option value="Arunachal University">Arunachal University</option>';
        arunachal = arunachal + '<option value="Balijan">Balijan</option>';
        arunachal = arunachal + '<option value="Banderdewa">Banderdewa</option>';
        arunachal = arunachal + '<option value="Doimukh">Doimukh</option>';
        arunachal = arunachal + '<option value="Donyi-Polo">Donyi-Polo</option>';
        arunachal = arunachal + '<option value="Hawa Camp">Hawa Camp</option>';
        arunachal = arunachal + '<option value="Itanagar">Itanagar</option>';
        arunachal = arunachal + '<option value="Kheel">Kheel</option>';
        arunachal = arunachal + '<option value="Kimin">Kimin</option>';
        arunachal = arunachal + '<option value="Kokila">Kokila</option>';
        arunachal = arunachal + '<option value="Midpu">Midpu</option>';
        arunachal = arunachal + '<option value="Model Village">Model Village</option>';
        arunachal = arunachal + '<option value="Naharlagun">Naharlagun</option>';
        arunachal = arunachal + '<option value="Nirjuli">Nirjuli</option>';
        arunachal = arunachal + '<option value="Ram Krishna Mission">Ram Krishna Mission</option>';
        arunachal = arunachal + '<option value="Saglee">Saglee</option>';
        arunachal = arunachal + '<option value="Sonajuli">Sonajuli</option>';
        arunachal = arunachal + '<option value="Vivek Vihar">Vivek Vihar</option>';
        arunachal = arunachal + '<option value="Yupia">Yupia</option>';
        arunachal = arunachal + '<option value="B.supply">B.supply</option>';
        arunachal = arunachal + '<option value="Gispu">Gispu</option>';
        arunachal = arunachal + '<option value="Jang">Jang</option>';
        arunachal = arunachal + '<option value="Kitpi">Kitpi</option>';
        arunachal = arunachal + '<option value="Lhou">Lhou</option>';
        arunachal = arunachal + '<option value="Lumberdung">Lumberdung</option>';
        arunachal = arunachal + '<option value="Lumla">Lumla</option>';
        arunachal = arunachal + '<option value="Mukto">Mukto</option>';
        arunachal = arunachal + '<option value="Sakpret">Sakpret</option>';
        arunachal = arunachal + '<option value="Tawang">Tawang</option>';
        arunachal = arunachal + '<option value="Temple Gompa">Temple Gompa</option>';
        arunachal = arunachal + '<option value="Thingbu">Thingbu</option>';
        arunachal = arunachal + '<option value="Zimithang">Zimithang</option>';
        arunachal = arunachal + '<option value="Borduria">Borduria</option>';
        arunachal = arunachal + '<option value="Dadam">Dadam</option>';
        arunachal = arunachal + '<option value="Deomali">Deomali</option>';
        arunachal = arunachal + '<option value="Hukanjuri">Hukanjuri</option>';
        arunachal = arunachal + '<option value="K/nokno">K/nokno</option>';
        arunachal = arunachal + '<option value="Kaimai">Kaimai</option>';
        arunachal = arunachal + '<option value="Kanubari">Kanubari</option>';
        arunachal = arunachal + '<option value="Kapu">Kapu</option>';
        arunachal = arunachal + '<option value="Khela">Khela</option>';
        arunachal = arunachal + '<option value="Kheti">Kheti</option>';
        arunachal = arunachal + '<option value="Khonsa">Khonsa</option>';
        arunachal = arunachal + '<option value="Khonsa Basti">Khonsa Basti</option>';
        arunachal = arunachal + '<option value="Khotnu">Khotnu</option>';
        arunachal = arunachal + '<option value="Lazu">Lazu</option>';
        arunachal = arunachal + '<option value="Longding">Longding</option>';
        arunachal = arunachal + '<option value="Longfong">Longfong</option>';
        arunachal = arunachal + '<option value="Minthong">Minthong</option>';
        arunachal = arunachal + '<option value="Nampong">Nampong</option>';
        arunachal = arunachal + '<option value="Namsang">Namsang</option>';
        arunachal = arunachal + '<option value="Namsang Mukh">Namsang Mukh</option>';
        arunachal = arunachal + '<option value="Narottam Nagar">Narottam Nagar</option>';
        arunachal = arunachal + '<option value="Nginu">Nginu</option>';
        arunachal = arunachal + '<option value="Niausa">Niausa</option>';
        arunachal = arunachal + '<option value="Panchou">Panchou</option>';
        arunachal = arunachal + '<option value="Senewa">Senewa</option>';
        arunachal = arunachal + '<option value="Soha">Soha</option>';
        arunachal = arunachal + '<option value="Thinsa">Thinsa</option>';
        arunachal = arunachal + '<option value="Tissa">Tissa</option>';
        arunachal = arunachal + '<option value="Tupi">Tupi</option>';
        arunachal = arunachal + '<option value="Vally View">Vally View</option>';
        arunachal = arunachal + '<option value="Wakka">Wakka</option>';
        arunachal = arunachal + '<option value="Geku">Geku</option>';
        arunachal = arunachal + '<option value="Gelling">Gelling</option>';
        arunachal = arunachal + '<option value="Karko">Karko</option>';
        arunachal = arunachal + '<option value="Mariyang">Mariyang</option>';
        arunachal = arunachal + '<option value="Migging">Migging</option>';
        arunachal = arunachal + '<option value="Shimong">Shimong</option>';
        arunachal = arunachal + '<option value="Singa">Singa</option>';
        arunachal = arunachal + '<option value="Tuting">Tuting</option>';
        arunachal = arunachal + '<option value="Yingkiong">Yingkiong</option>';
        arunachal = arunachal + '<option value="Daporijo">Daporijo</option>';
        arunachal = arunachal + '<option value="Dumporijo">Dumporijo</option>';
        arunachal = arunachal + '<option value="Giba">Giba</option>';
        arunachal = arunachal + '<option value="Lemiking">Lemiking</option>';
        arunachal = arunachal + '<option value="Lepajaring">Lepajaring</option>';
        arunachal = arunachal + '<option value="Maro">Maro</option>';
        arunachal = arunachal + '<option value="Muri">Muri</option>';
        arunachal = arunachal + '<option value="Nacho">Nacho</option>';
        arunachal = arunachal + '<option value="Sippi">Sippi</option>';
        arunachal = arunachal + '<option value="Siyum">Siyum</option>';
        arunachal = arunachal + '<option value="Tabarijo">Tabarijo</option>';
        arunachal = arunachal + '<option value="Taksing">Taksing</option>';
        arunachal = arunachal + '<option value="Taliha">Taliha</option>';
        arunachal = arunachal + '<option value="Balemu">Balemu</option>';
        arunachal = arunachal + '<option value="Bhalukpong">Bhalukpong</option>';
        arunachal = arunachal + '<option value="Bomdila">Bomdila</option>';
        arunachal = arunachal + '<option value="Dahung">Dahung</option>';
        arunachal = arunachal + '<option value="Dedza">Dedza</option>';
        arunachal = arunachal + '<option value="Dirang">Dirang</option>';
        arunachal = arunachal + '<option value="Dirang Basti">Dirang Basti</option>';
        arunachal = arunachal + '<option value="Kalaktang">Kalaktang</option>';
        arunachal = arunachal + '<option value="Khellong">Khellong</option>';
        arunachal = arunachal + '<option value="Lish">Lish</option>';
        arunachal = arunachal + '<option value="Munna Camp">Munna Camp</option>';
        arunachal = arunachal + '<option value="Nafra">Nafra</option>';
        arunachal = arunachal + '<option value="Rupa">Rupa</option>';
        arunachal = arunachal + '<option value="Salari">Salari</option>';
        arunachal = arunachal + '<option value="Sangti">Sangti</option>';
        arunachal = arunachal + '<option value="Senge">Senge</option>';
        arunachal = arunachal + '<option value="Shergaon">Shergaon</option>';
        arunachal = arunachal + '<option value="Singchung">Singchung</option>';
        arunachal = arunachal + '<option value="Tenga Market">Tenga Market</option>';
        arunachal = arunachal + '<option value="Tenzingaon">Tenzingaon</option>';
        arunachal = arunachal + '<option value="Tippi">Tippi</option>';
        arunachal = arunachal + '<option value="Along">Along</option>';
        arunachal = arunachal + '<option value="Bagra">Bagra</option>';
        arunachal = arunachal + '<option value="Bame">Bame</option>';
        arunachal = arunachal + '<option value="Basar">Basar</option>';
        arunachal = arunachal + '<option value="Bene">Bene</option>';
        arunachal = arunachal + '<option value="Dali">Dali</option>';
        arunachal = arunachal + '<option value="Darak">Darak</option>';
        arunachal = arunachal + '<option value="Daring">Daring</option>';
        arunachal = arunachal + '<option value="Darka">Darka</option>';
        arunachal = arunachal + '<option value="Garu">Garu</option>';
        arunachal = arunachal + '<option value="Gensi">Gensi</option>';
        arunachal = arunachal + '<option value="Kambang">Kambang</option>';
        arunachal = arunachal + '<option value="Kaying">Kaying</option>';
        arunachal = arunachal + '<option value="Kombo">Kombo</option>';
        arunachal = arunachal + '<option value="Likabali">Likabali</option>';
        arunachal = arunachal + '<option value="Liromoba">Liromoba</option>';
        arunachal = arunachal + '<option value="Logum Jining">Logum Jining</option>';
        arunachal = arunachal + '<option value="Mechuka">Mechuka</option>';
        arunachal = arunachal + '<option value="Monigong">Monigong</option>';
        arunachal = arunachal + '<option value="Nikte">Nikte</option>';
        arunachal = arunachal + '<option value="Payum">Payum</option>';
        arunachal = arunachal + '<option value="Rumgong">Rumgong</option>';
        arunachal = arunachal + '<option value="Tato">Tato</option>';
        arunachal = arunachal + '<option value="Tirbin">Tirbin</option>';
        arunachal = arunachal + '<option value="Vivek Nagar">Vivek Nagar</option>';
        arunachal = arunachal + '<option value="Yoji Yora">Yoji Yora</option>';
        arunachal = arunachal + '<option value="Yomcha">Yomcha</option>';

        var asam = '';
        asam = asam + '<option value="Odalguri">Odalguri</option>';
        asam = asam + '<option value="Karimganj">Karimganj</option>';
        asam = asam + '<option value="Silchar">Silchar</option>';
        asam = asam + '<option value="Amingaon">Amingaon</option>';
        asam = asam + '<option value="Guwahati">Guwahati</option>';
        asam = asam + '<option value="Diphu">Diphu</option>';
        asam = asam + '<option value="Kokrajhar">Kokrajhar</option>';
        asam = asam + '<option value="Golaghat">Golaghat</option>';
        asam = asam + '<option value="Goalpara">Goalpara</option>';
        asam = asam + '<option value="Basugaon">Basugaon</option>';
        asam = asam + '<option value="Dibrugarh">Dibrugarh</option>';
        asam = asam + '<option value="Haflong">Haflong</option>';
        asam = asam + '<option value="Tinsukia">Tinsukia</option>';
        asam = asam + '<option value="Mangaldoi">Mangaldoi</option>';
        asam = asam + '<option value="Dhubri">Dhubri</option>';
        asam = asam + '<option value="Dhemaji">Dhemaji</option>';
        asam = asam + '<option value="Nagaon">Nagaon</option>';
        asam = asam + '<option value="Nalbari">Nalbari</option>';
        asam = asam + '<option value="Bongaigaon">Bongaigaon</option>';
        asam = asam + '<option value="Barpeta">Barpeta</option>';
        asam = asam + '<option value="Musalpur">Musalpur</option>';
        asam = asam + '<option value="Morigaon">Morigaon</option>';
        asam = asam + '<option value="Jorhat">Jorhat</option>';
        asam = asam + '<option value="North Lakhimpur">North Lakhimpur</option>';
        asam = asam + '<option value="Sivasagar">Sivasagar</option>';
        asam = asam + '<option value="Tezpur">Tezpur</option>';
        asam = asam + '<option value="Hailakandi">Hailakandi</option>';


        var bihar = '';
        bihar = bihar + '<option value="Siwan">Siwan</option>';
        bihar = bihar + '<option value="Sitamarhi">Sitamarhi</option>';
        bihar = bihar + '<option value="Sasaram">Sasaram</option>';
        bihar = bihar + '<option value="Saharsa">Saharsa</option>';
        bihar = bihar + '<option value="Purnia">Purnia</option>';
        bihar = bihar + '<option value="Patna">Patna</option>';
        bihar = bihar + '<option value="Nawada">Nawada</option>';
        bihar = bihar + '<option value="Muzaffarpur">Muzaffarpur</option>';
        bihar = bihar + '<option value="Munger">Munger</option>';
        bihar = bihar + '<option value="Motihari">Motihari</option>';
        bihar = bihar + '<option value="Kishanganj">Kishanganj</option>';
        bihar = bihar + '<option value="Katihar">Katihar</option>';
        bihar = bihar + '<option value="Jehanabad">Jehanabad</option>';
        bihar = bihar + '<option value="Jamalpur">Jamalpur</option>';
        bihar = bihar + '<option value="Hajipur">Hajipur</option>';
        bihar = bihar + '<option value="Gaya">Gaya</option>';
        bihar = bihar + '<option value="Dehri">Dehri</option>';
        bihar = bihar + '<option value="Darbhanga">Darbhanga</option>';
        bihar = bihar + '<option value="Chhapra">Chhapra</option>';
        bihar = bihar + '<option value="Buxar">Buxar</option>';
        bihar = bihar + '<option value="Bihar Sharif">Bihar Sharif</option>';
        bihar = bihar + '<option value="Bhagalpur">Bhagalpur</option>';
        bihar = bihar + '<option value="Bettiah">Bettiah</option>';
        bihar = bihar + '<option value="Begusarai">Begusarai</option>';
        bihar = bihar + '<option value="Bagaha">Bagaha</option>';
        bihar = bihar + '<option value="Aurangabad">Aurangabad</option>';
        bihar = bihar + '<option value="Arrah">Arrah</option>';
        bihar = bihar + '<option value=""></option>';

        var Chandigarh = '';
        Chandigarh = Chandigarh + '<option value="Ludhiana">Ludhiana</option>';
        Chandigarh = Chandigarh + '<option value="Amritsar">Amritsar</option>';
        Chandigarh = Chandigarh + '<option value="Jalandhar">Jalandhar</option>';
        Chandigarh = Chandigarh + '<option value="Patiala">Patiala</option>';
        Chandigarh = Chandigarh + '<option value="Bathinda">Bathinda</option>';
        Chandigarh = Chandigarh + '<option value="Ajitgarh">Ajitgarh</option>';
        Chandigarh = Chandigarh + '<option value="Hoshiarpur">Hoshiarpur</option>';
        Chandigarh = Chandigarh + '<option value="Batala">Batala</option>';
        Chandigarh = Chandigarh + '<option value="Pathankot">Pathankot</option>';
        Chandigarh = Chandigarh + '<option value="Moga">Moga</option>';
        Chandigarh = Chandigarh + '<option value="Abohar">Abohar</option>';
        Chandigarh = Chandigarh + '<option value="Malerkotla">Malerkotla</option>';
        Chandigarh = Chandigarh + '<option value="Khanna">Khanna</option>';
        Chandigarh = Chandigarh + '<option value="Phagwara">Phagwara</option>';
        Chandigarh = Chandigarh + '<option value="Muktasar">Muktasar</option>';
        Chandigarh = Chandigarh + '<option value="Barnala">Barnala</option>';
        Chandigarh = Chandigarh + '<option value="Rajpura">Rajpura</option>';
        Chandigarh = Chandigarh + '<option value="Firozpur">Firozpur</option>';
        Chandigarh = Chandigarh + '<option value="Kapurthala">Kapurthala</option>';

        var Chhattisgarh = '';
        Chhattisgarh = Chhattisgarh + '<option value="Raipur">Raipur</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Durg-Bhilainagar">Durg-Bhilainagar</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Bilaspur">Bilaspur</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Korba">Korba</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Rajnandgaon">Rajnandgaon</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Raigarh">Raigarh</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Jagdalpur">Jagdalpur</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Ambikapur">Ambikapur</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Chirmiri">Chirmiri</option>';
        Chhattisgarh = Chhattisgarh + '<option value="Dhamtari">Dhamtari</option>';

        var dadar = '';
        dadar = dadar + '<option value="Amli">Amli</option>';
        dadar = dadar + '<option value="Dadra, Dadra and Nagar Haveli">Dadra, Dadra and Nagar Haveli</option>';
        dadar = dadar + '<option value="Nagar Haveli">Nagar Haveli</option>';
        dadar = dadar + '<option value="Silvassa">Silvassa</option>';

        var delhi = '';
        delhi = delhi + '<option value="Faridabad">Faridabad</option>';
        delhi = delhi + '<option value="Gurgaon">Gurgaon</option>';
        delhi = delhi + '<option value="Panipat">Panipat</option>';
        delhi = delhi + '<option value="Ambala">Ambala</option>';
        delhi = delhi + '<option value="Yamunanagar">Yamunanagar</option>';
        delhi = delhi + '<option value="Rohtak">Rohtak</option>';
        delhi = delhi + '<option value="Hisar">Hisar</option>';
        delhi = delhi + '<option value="Karnal">Karnal</option>';
        delhi = delhi + '<option value="Sonipat">Sonipat</option>';
        delhi = delhi + '<option value="Panchkula">Panchkula</option>';
        delhi = delhi + '<option value="Bhiwani">Bhiwani</option>';
        delhi = delhi + '<option value="Sirsa">Sirsa</option>';
        delhi = delhi + '<option value="Bahadurgarh">Bahadurgarh</option>';
        delhi = delhi + '<option value="Jind">Jind</option>';
        delhi = delhi + '<option value="Thanesar">Thanesar</option>';
        delhi = delhi + '<option value="Kaithal">Kaithal</option>';
        delhi = delhi + '<option value="Rewari">Rewari</option>';
        delhi = delhi + '<option value="Palwal">Palwal</option>';

        var Goa = '';
        Goa = Goa + '<option value="Baga, Goa">Baga, Goa</option>';
        Goa = Goa + '<option value="Bambolim">Bambolim</option>';
        Goa = Goa + '<option value="Bandora, Goa">Bandora, Goa</option>';
        Goa = Goa + '<option value="Batim">Batim</option>';
        Goa = Goa + '<option value="Bicholim">Bicholim</option>';
        Goa = Goa + '<option value="Borim">Borim</option>';
        Goa = Goa + '<option value="Calapor">Calapor</option>';
        Goa = Goa + '<option value="Campal">Campal</option>';
        Goa = Goa + '<option value="Candolim">Candolim</option>';
        Goa = Goa + '<option value="Carapur">Carapur</option>';
        Goa = Goa + '<option value="Chimbel">Chimbel</option>';
        Goa = Goa + '<option value="Colvale">Colvale</option>';
        Goa = Goa + '<option value="Cumbarjua">Cumbarjua</option>';
        Goa = Goa + '<option value="Curti, Goa">Curti, Goa</option>';
        Goa = Goa + '<option value="Patradevi">Patradevi</option>';
        Goa = Goa + '<option value="Penha de França, Goa">Penha de França, Goa</option>';
        Goa = Goa + '<option value="Pernem">Pernem</option>';
        Goa = Goa + '<option value="Ponda, Goa">Ponda, Goa</option>';
        Goa = Goa + '<option value="Porvorim">Porvorim</option>';
        Goa = Goa + '<option value="Queula">Queula</option>';
        Goa = Goa + '<option value="Reis Magos">Reis Magos</option>';
        Goa = Goa + '<option value="Ribandar">Ribandar</option>';
        Goa = Goa + '<option value="Saligao">Saligao</option>';
        Goa = Goa + '<option value="Sanquelim">Sanquelim</option>';
        Goa = Goa + '<option value="Savoi Verem">Savoi Verem</option>';
        Goa = Goa + '<option value="Socorro, Goa">Socorro, Goa</option>';
        Goa = Goa + '<option value="Madkai">Madkai</option>';
        Goa = Goa + '<option value="Mapusa">Mapusa</option>';
        Goa = Goa + '<option value="Mardol, Goa">Mardol, Goa</option>';
        Goa = Goa + '<option value="Mashel">Mashel</option>';
        Goa = Goa + '<option value="Pale, Goa">Pale, Goa</option>';
        Goa = Goa + '<option value="Panaji">Panaji</option>';
        Goa = Goa + '<option value="Parcem">Parcem</option>';

        var Gujarat = '';
        Gujarat = Gujarat + '<option value="Ahmedabad">Ahmedabad</option>';
        Gujarat = Gujarat + '<option value="Surat">Surat</option>';
        Gujarat = Gujarat + '<option value="Vadodara">Vadodara</option>';
        Gujarat = Gujarat + '<option value="Rajkot">Rajkot</option>';
        Gujarat = Gujarat + '<option value="Bhavnagar">Bhavnagar</option>';
        Gujarat = Gujarat + '<option value="Jamnagar">Jamnagar</option>';
        Gujarat = Gujarat + '<option value="Junagadh">Junagadh</option>';
        Gujarat = Gujarat + '<option value="Gandhinagar">Gandhinagar</option>';
        Gujarat = Gujarat + '<option value="Nadiad">Nadiad</option>';
        Gujarat = Gujarat + '<option value="Morbi">Morbi</option>';
        Gujarat = Gujarat + '<option value="Surendranagar">Surendranagar</option>';
        Gujarat = Gujarat + '<option value="Gandhidham">Gandhidham</option>';
        Gujarat = Gujarat + '<option value="Veraval">Veraval</option>';
        Gujarat = Gujarat + '<option value="Navsari">Navsari</option>';
        Gujarat = Gujarat + '<option value="Bharuch">Bharuch</option>';
        Gujarat = Gujarat + '<option value="Anand">Anand</option>';
        Gujarat = Gujarat + '<option value="Porbandar">Porbandar</option>';
        Gujarat = Gujarat + '<option value="Godhra">Godhra</option>';
        Gujarat = Gujarat + '<option value="Botad">Botad</option>';
        Gujarat = Gujarat + '<option value="Sidhpur">Sidhpur</option>';

        var Himachal = '';
        Himachal = Himachal + '<option value="Bilaspur">Bilaspur</option>';
        Himachal = Himachal + '<option value="Chamba">Chamba</option>';
        Himachal = Himachal + '<option value="Hamirpur">Hamirpur</option>';
        Himachal = Himachal + '<option value="Kangra">Kangra</option>';
        Himachal = Himachal + '<option value="Kinnaur">Kinnaur</option>';
        Himachal = Himachal + '<option value="Kullu">Kullu</option>';
        Himachal = Himachal + '<option value="Lahaul and Spiti">Lahaul and Spiti</option>';
        Himachal = Himachal + '<option value="Mandi">Mandi</option>';
        Himachal = Himachal + '<option value="Shimla">Shimla</option>';
        Himachal = Himachal + '<option value="Sirmaur">Sirmaur</option>';
        Himachal = Himachal + '<option value="Solan">Solan</option>';
        Himachal = Himachal + '<option value="Una">Una</option>';

        var Jharkhand = '';
        Jharkhand = Jharkhand + '<option value="Jamshedpur">Jamshedpur</option>';
        Jharkhand = Jharkhand + '<option value="Dhanbad">Dhanbad</option>';
        Jharkhand = Jharkhand + '<option value="Ranchi">Ranchi</option>';
        Jharkhand = Jharkhand + '<option value="Bokaro Steel City">Bokaro Steel City</option>';
        Jharkhand = Jharkhand + '<option value="Deoghar">Deoghar</option>';
        Jharkhand = Jharkhand + '<option value="Phusro">Phusro</option>';
        Jharkhand = Jharkhand + '<option value="Hazaribagh">Hazaribagh</option>';
        Jharkhand = Jharkhand + '<option value="Giridih">Giridih</option>';
        Jharkhand = Jharkhand + '<option value="Ramgarh">Ramgarh</option>';
        Jharkhand = Jharkhand + '<option value="Medininagar">Medininagar</option>';
        Jharkhand = Jharkhand + '<option value="Chirkunda">Chirkunda</option>';

        var Karnataka = '';
        Karnataka = Karnataka + '<option value="Bengaluru Urban">Bengaluru Urban</option>';
        Karnataka = Karnataka + '<option value="Bengaluru Rural">Bengaluru Rural</option>';
        Karnataka = Karnataka + '<option value="Chikkaballapur">Chikkaballapur</option>';
        Karnataka = Karnataka + '<option value="Chitradurga">Chitradurga</option>';
        Karnataka = Karnataka + '<option value="Davanagere">Davanagere</option>';
        Karnataka = Karnataka + '<option value="Kolar">Kolar</option>';
        Karnataka = Karnataka + '<option value="Ramanagara">Ramanagara</option>';
        Karnataka = Karnataka + '<option value="Shivamogga">Shivamogga</option>';
        Karnataka = Karnataka + '<option value="Tumakuru">Tumakuru</option>';

        var Kerala = '';
        Kerala = Kerala + '<option value="Thiruvananthapuram (previously Trivandrum)">Thiruvananthapuram (previously Trivandrum)</option>';
        Kerala = Kerala + '<option value="Kollam (previously Quilon)">Kollam (previously Quilon)</option>';
        Kerala = Kerala + '<option value="Kottayam">Kottayam</option>';
        Kerala = Kerala + '<option value="Ernakulam">Ernakulam</option>';
        Kerala = Kerala + '<option value="Kochi (previously Cochin)">Kochi (previously Cochin)</option>';
        Kerala = Kerala + '<option value="Thrissur (previously Trichur)">Thrissur (previously Trichur)</option>';
        Kerala = Kerala + '<option value="Palakkad (previously Palghat)">Palakkad (previously Palghat)</option>';
        Kerala = Kerala + '<option value="Malappuram">Malappuram</option>';
        Kerala = Kerala + '<option value="Calicut (see Kozhikode)">Calicut (see Kozhikode)</option>';
        Kerala = Kerala + '<option value="Cannanore (see Kannur)">Cannanore (see Kannur)</option>';
        Kerala = Kerala + '<option value="Alappuzha (previously Alleppey)">Alappuzha (previously Alleppey)</option>';

        var Lakshadweep = '';
        Lakshadweep = Lakshadweep + '<option value="Kavaratti‎ ">Kavaratti‎ </option>';
        Lakshadweep = Lakshadweep + '<option value="Andrott">Andrott</option>';
        Lakshadweep = Lakshadweep + '<option value="Kavaratti">Kavaratti</option>';

        var MadhyaPradesh = '';
        MadhyaPradesh = MadhyaPradesh + '<option value="Indore">Indore</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Bhopal">Bhopal</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Jabalpur">Jabalpur</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Gwalior">Gwalior</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Ujjain">Ujjain</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Sagar">Sagar</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Dewas">Dewas</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Satna">Satna</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Ratlam">Ratlam</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Rewa">Rewa</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Murwara (Katni)">Murwara (Katni)</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Singrauli">Singrauli</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Burhanpur">Burhanpur</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Khandwa">Khandwa</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Morena">Morena</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Bhind">Bhind</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Chhindwara">Chhindwara</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="bina-etawa">bina-etawa</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Chhatarpur">Chhatarpur</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Damoh">Damoh</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Mandsaur">Mandsaur</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Khargone">Khargone</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Neemuch">Neemuch</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Pithampur">Pithampur</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Hoshangabad">Hoshangabad</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Itarsi">Itarsi</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Sehore">Sehore</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Betul">Betul</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Seoni">Seoni</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Datia">Datia</option>';
        MadhyaPradesh = MadhyaPradesh + '<option value="Nagda">Nagda</option>';

        var Maharashtra = '';
        Maharashtra = Maharashtra + '<option value="Mumbai">Mumbai</option>';
        Maharashtra = Maharashtra + '<option value="Pune">Pune</option>';
        Maharashtra = Maharashtra + '<option value="Nagpur">Nagpur</option>';
        Maharashtra = Maharashtra + '<option value="Thane">Thane</option>';
        Maharashtra = Maharashtra + '<option value="Pimpri-Chinchwad">Pimpri-Chinchwad</option>';
        Maharashtra = Maharashtra + '<option value="Nashik">Nashik</option>';
        Maharashtra = Maharashtra + '<option value="Kalyan-Dombivali">Kalyan-Dombivali</option>';
        Maharashtra = Maharashtra + '<option value="Vasai-Virar">Vasai-Virar</option>';
        Maharashtra = Maharashtra + '<option value="Aurangabad">Aurangabad</option>';
        Maharashtra = Maharashtra + '<option value="Navi Mumbai">Navi Mumbai</option>';
        Maharashtra = Maharashtra + '<option value="Solapur">Solapur</option>';
        Maharashtra = Maharashtra + '<option value="[">[</option>';
        Maharashtra = Maharashtra + '<option value="Nanded">Nanded</option>';
        Maharashtra = Maharashtra + '<option value="Kolhapur">Kolhapur</option>';
        Maharashtra = Maharashtra + '<option value="Sangli">Sangli</option>';
        Maharashtra = Maharashtra + '<option value="Jalgaon">Jalgaon</option>';
        Maharashtra = Maharashtra + '<option value="Akola">Akola</option>';
        Maharashtra = Maharashtra + '<option value="Latur">Latur</option>';
        Maharashtra = Maharashtra + '<option value="Dhule">Dhule</option>';
        Maharashtra = Maharashtra + '<option value="Ahmednagar">Ahmednagar</option>';
        Maharashtra = Maharashtra + '<option value="Chandrapur">Chandrapur</option>';


        var Manipur = '';
        Manipur = Manipur + '<option value="Bishnupur">Bishnupur</option>';
        Manipur = Manipur + '<option value="Churachandpur">Churachandpur</option>';
        Manipur = Manipur + '<option value="Chandel">Chandel</option>';
        Manipur = Manipur + '<option value="Imphal East">Imphal East</option>';
        Manipur = Manipur + '<option value="Senapati">Senapati</option>';
        Manipur = Manipur + '<option value="Tamenglong">Tamenglong</option>';
        Manipur = Manipur + '<option value="Thoubal">Thoubal</option>';
        Manipur = Manipur + '<option value="Ukhrul">Ukhrul</option>';
        Manipur = Manipur + '<option value="Imphal West">Imphal West</option>';


        var Nagaland = '';
        Nagaland = Nagaland + '<option value="Dimapur‎">Dimapur‎</option>';
        Nagaland = Nagaland + '<option value="Chumukedima">Chumukedima</option>';
        Nagaland = Nagaland + '<option value="Dimapur">Dimapur</option>';
        Nagaland = Nagaland + '<option value="Dimapur-Chumukedima">Dimapur-Chumukedima</option>';
        Nagaland = Nagaland + '<option value="Medziphema">Medziphema</option>';

        var UttarPradesh = '';
        UttarPradesh = UttarPradesh + '<option value="Kanpur">Kanpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Lucknow">Lucknow</option>';
        UttarPradesh = UttarPradesh + '<option value="Ghaziabad">Ghaziabad</option>';
        UttarPradesh = UttarPradesh + '<option value="Agra">Agra</option>';
        UttarPradesh = UttarPradesh + '<option value="Varanasi">Varanasi</option>';
        UttarPradesh = UttarPradesh + '<option value="Meerut">Meerut</option>';
        UttarPradesh = UttarPradesh + '<option value="Allahabad">Allahabad</option>';
        UttarPradesh = UttarPradesh + '<option value="Bareilly">Bareilly</option>';
        UttarPradesh = UttarPradesh + '<option value="Aligarh">Aligarh</option>';
        UttarPradesh = UttarPradesh + '<option value="Moradabad">Moradabad</option>';
        UttarPradesh = UttarPradesh + '<option value="Saharanpur">Saharanpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Gorakhpur">Gorakhpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Noida">Noida</option>';
        UttarPradesh = UttarPradesh + '<option value="Firozabad">Firozabad</option>';
        UttarPradesh = UttarPradesh + '<option value="Jhansi">Jhansi</option>';
        UttarPradesh = UttarPradesh + '<option value="Muzaffarnagar">Muzaffarnagar</option>';
        UttarPradesh = UttarPradesh + '<option value="Mathura">Mathura</option>';
        UttarPradesh = UttarPradesh + '<option value="Rampur">Rampur</option>';
        UttarPradesh = UttarPradesh + '<option value="Shahjahanpur">Shahjahanpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Farrukhabad-cum-Fategarh">Farrukhabad-cum-Fategarh</option>';
        UttarPradesh = UttarPradesh + '<option value="Maunath Bhanjan">Maunath Bhanjan</option>';
        UttarPradesh = UttarPradesh + '<option value="Hapur">Hapur</option>';
        UttarPradesh = UttarPradesh + '<option value="Faizabad">Faizabad</option>';
        UttarPradesh = UttarPradesh + '<option value="Etawah">Etawah</option>';
        UttarPradesh = UttarPradesh + '<option value="Mirzapur-cum-Vindhyachal">Mirzapur-cum-Vindhyachal</option>';
        UttarPradesh = UttarPradesh + '<option value="Bulandshahr">Bulandshahr</option>';
        UttarPradesh = UttarPradesh + '<option value="Sambhal">Sambhal</option>';
        UttarPradesh = UttarPradesh + '<option value="Amroha">Amroha</option>';
        UttarPradesh = UttarPradesh + '<option value="Hardoi">Hardoi</option>';
        UttarPradesh = UttarPradesh + '<option value="Fatehpur">Fatehpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Raebareli">Raebareli</option>';
        UttarPradesh = UttarPradesh + '<option value="Orai">Orai</option>';
        UttarPradesh = UttarPradesh + '<option value="Sitapur">Sitapur</option>';
        UttarPradesh = UttarPradesh + '<option value="Bahraich">Bahraich</option>';
        UttarPradesh = UttarPradesh + '<option value="Modinagar">Modinagar</option>';
        UttarPradesh = UttarPradesh + '<option value="Unnao">Unnao</option>';
        UttarPradesh = UttarPradesh + '<option value="Jaunpur">Jaunpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Lakhimpur">Lakhimpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Hathras">Hathras</option>';
        UttarPradesh = UttarPradesh + '<option value="Banda">Banda</option>';
        UttarPradesh = UttarPradesh + '<option value="Pilibhit">Pilibhit</option>';
        UttarPradesh = UttarPradesh + '<option value="Budaun">Budaun</option>';
        UttarPradesh = UttarPradesh + '<option value="Mughalsarai">Mughalsarai</option>';
        UttarPradesh = UttarPradesh + '<option value="Barabanki">Barabanki</option>';
        UttarPradesh = UttarPradesh + '<option value="Khurja">Khurja</option>';
        UttarPradesh = UttarPradesh + '<option value="Gonda">Gonda</option>';
        UttarPradesh = UttarPradesh + '<option value="Mainpuri">Mainpuri</option>';
        UttarPradesh = UttarPradesh + '<option value="Lalitpur">Lalitpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Etah">Etah</option>';
        UttarPradesh = UttarPradesh + '<option value="Deoria">Deoria</option>';
        UttarPradesh = UttarPradesh + '<option value="Ghazipur">Ghazipur</option>';
        UttarPradesh = UttarPradesh + '<option value="Sultanpur">Sultanpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Azamgarh">Azamgarh</option>';
        UttarPradesh = UttarPradesh + '<option value="Bijnor">Bijnor</option>';
        UttarPradesh = UttarPradesh + '<option value="Basti">Basti</option>';
        UttarPradesh = UttarPradesh + '<option value="Chandausi">Chandausi</option>';
        UttarPradesh = UttarPradesh + '<option value="Akbarpur">Akbarpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Ballia">Ballia</option>';
        UttarPradesh = UttarPradesh + '<option value="Mubarakpur">Mubarakpur</option>';
        UttarPradesh = UttarPradesh + '<option value="Greater Noida">Greater Noida</option>';
        UttarPradesh = UttarPradesh + '<option value="Shikohabad">Shikohabad</option>';
        UttarPradesh = UttarPradesh + '<option value="Shamli">Shamli</option>';
        UttarPradesh = UttarPradesh + '<option value="Khair">Khair</option>';
        UttarPradesh = UttarPradesh + '<option value="Kasganj">Kasganj</option>';

        var settings = $.extend({
            city: null
        }, options);
        $(this).append('<option value="-1">--Select State--</option>');
        $(this).append('<option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>');
        $(this).append('<option value="Andhra Pradesh">Andhra Pradesh</option>');
        $(this).append('<option value="Arunachal Pradesh">Arunachal Pradesh</option>');
        $(this).append('<option value="Assam">Assam</option>');
        $(this).append('<option value="Bihar">Bihar</option>');
        $(this).append('<option value="Chandigarh">Chandigarh</option>');
        $(this).append('<option value="Chhattisgarh">Chhattisgarh</option>');
        $(this).append('<option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>');
        $(this).append('<option value="Daman and Diu">Daman and Diu</option>');
        $(this).append('<option value="Delhi">Delhi</option>');
        $(this).append('<option value="Goa">Goa</option>');
        $(this).append('<option value="Gujarat">Gujarat</option>');
        $(this).append('<option value="Haryana">Haryana</option>');
        $(this).append('<option value="Himachal Pradesh">Himachal Pradesh</option>');
        $(this).append('<option value="Jammu and Kashmir">Jammu and Kashmir</option>');
        $(this).append('<option value="Jharkhand">Jharkhand</option>');
        $(this).append('<option value="Karnataka">Karnataka</option>');
        $(this).append('<option value="Kerala">Kerala</option>');
        $(this).append('<option value="Lakshadweep">Lakshadweep</option>');
        $(this).append('<option value="Madhya Pradesh">Madhya Pradesh</option>');
        $(this).append('<option value="Maharashtra">Maharashtra</option>');
        $(this).append('<option value="Manipur">Manipur</option>');
        $(this).append('<option value="Meghalaya">Meghalaya</option>');
        $(this).append('<option value="Mizoram">Mizoram</option>');
        $(this).append('<option value="Nagaland">Nagaland</option>');
        $(this).append('<option value="Orissa">Orissa</option>');
        $(this).append('<option value="Pondicherry">Pondicherry</option>');
        $(this).append('<option value="Punjab">Punjab</option>');
        $(this).append('<option value="Rajasthan">Rajasthan</option>');
        $(this).append('<option value="Sikkim">Sikkim</option>');
        $(this).append('<option value="Tamil Nadu">Tamil Nadu</option>');
        $(this).append('<option value="Tripura">Tripura</option>');
        $(this).append('<option value="Uttaranchal">Uttaranchal</option>');
        $(this).append('<option value="Uttar Pradesh">Uttar Pradesh</option>');
        $(this).append('<option value="West Bengal">West Bengal</option>');
        $(this).change(function() {
            var value = $(this).val();
            if (value == "Andaman and Nicobar Islands") {
                $('#city').html(nicobar);
            }
            if (value == "Andhra Pradesh") {
                $('#city').html(andhra);
            }
            if (value == "Arunachal Pradesh") {
                $('#city').html(arunachal);
            }
            if (value == "Assam") {
                $('#city').html(asam);
            }
            if (value == "Bihar") {
                $('#city').html(bihar);
            }
            if (value == "Chandigarh") {
                $('#city').html(Chandigarh);
            }
            if (value == "Chhattisgarh") {
                $('#city').html(Chhattisgarh);
            }
            if (value == "Dadra and Nagar Haveli") {
                $('#city').html(dadar);
            }
            if (value == "Daman and Diu") {
                $('#city').html('<option value="Daman and Diu">Daman and Diu</option>');
            }
            if (value == "Delhi") {
                $('#city').html(delhi);
            }
            if (value == "Goa") {
                $('#city').html(Goa);
            }
            if (value == "Gujarat") {
                $('#city').html(Gujarat);
            }
            if (value == "Haryana") {
                $('#city').html(delhi);
            }
            if (value == "Himachal Pradesh") {
                $('#city').html(Himachal);
            }
            if (value == "Jharkhand") {
                $('#city').html(Jharkhand);
            }
            if (value == "Karnataka") {
                $('#city').html(Karnataka);
            }
            if (value == "Kerala") {
                $('#city').html(Kerala);
            }
            if (value == "Lakshadweep") {
                $('#city').html(Lakshadweep);
            }
            if (value == "Madhya Pradesh") {
                $('#city').html(MadhyaPradesh);
            }
            if (value == "Maharashtra") {
                $('#city').html(Maharashtra);
            }
            if (value == "Manipur") {
                $('#city').html(Manipur);
            }
            if (value == "Nagaland") {
                $('#city').html(Nagaland);
            }
            if (value == "Uttar Pradesh") {
                $('#city').html(UttarPradesh);
            }
        });
    }
}(jQuery));
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    if (!calendarEl) {
        console.error("Calendar element not found. Aborting calendar initialization.");
        return;
    }

    var today = new Date();
    var yyyy = today.getFullYear(); // Corrected variable name
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var dd = String(today.getDate()).padStart(2, '0');
    var todayFormatted = yyyy + '-' + mm + '-' + dd;

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: todayFormatted,
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        events: []
    });

    var startYear = yyyy - 1;
    var endYear = yyyy + 1;

    // Define an array of event details
    var events = [
        // January
        {
            title: 'New Year (First Sunday after Christmas)',
            day: '01-01'
        },
        {
            title: 'Circumcision of our Lord, Feast of St Basil and St Gregory & All the Holy Fathers',
            day: '01-01'
        },
        {
            title: 'Feast of St. Sylvester the Pope of Rome',
            day: '01-02'
        },
        {
            title: 'Feast of St. John The Apostle and Evangelist',
            day: '01-02'
        },
        {
            title: 'Commemoration of HH Mar Baselios Geevarghese II Catholicos (Devalokam Aramana)',
            day: '01-03'
        },
        {
            title: 'Oath of Koonan Cross',
            day: '01-03'
        },
        {
            title: 'Feast of Prophet Malachi',
            day: '01-03'
        },
        {
            title: 'Synaxis of the Seventy Disciples of the Lord',
            day: '01-04'
        },
        {
            title: 'Epiphany/Danaha, Baptism of our Lord Jesus Christ',
            day: '01-06'
        },
        {
            title: 'Feast Commemorating the Beheading of St John the Baptist',
            day: '01-07'
        },
        {
            title: 'First Sunday after Epiphany',
            day: '01-07'
        },
        {
            title: 'Second Sunday after Christmas',
            day: '01-07'
        },
        {
            title: 'Feast Commemorating the Martyrdom of St. Stephen, the Head of the Deacons and the First Among Martyrs',
            day: '01-08'
        },
        {
            title: 'Feast of St. Gregory of Nyssa',
            day: '01-10'
        },
        {
            title: 'Feast of St. Theodosius of Antioch',
            day: '01-11'
        },
        {
            title: 'Second Sunday after Epiphany',
            day: '01-14'
        },
        {
            title: 'Feast of St. Mary for Seeds',
            day: '01-15'
        },
        {
            title: 'Commemoration of Paul the Monk',
            day: '01-15'
        },
        {
            title: 'Feast of St Anthony the Great',
            day: '01-17'
        },
        {
            title: 'Feast of St. Samuel, St. Simon, St. Antonios, Head of the Ascetics',
            day: '01-18'
        },
        {
            title: 'Commemoration of Michael Mar Dionysius Metropolitan (Panampady)',
            day: '01-18'
        },
        {
            title: 'Feast of St. Cyril of Alexandria',
            day: '01-18'
        },
        {
            title: 'Feast of St Athanasius the Great the Patriarch of Alexandria',
            day: '01-18'
        },
        {
            title: 'Feast of St. Shemoun (Simeon) of Qartmin',
            day: '01-19'
        },
        {
            title: 'Sunday before Three day Lent (Pethurtho of Nineveh Fast)',
            day: '01-21'
        },
        {
            title: 'Third Sunday after Epiphany',
            day: '01-21'
        },
        {
            title: 'Commemoration of HG Philipose Mar Eusebius (St. Basil Dayara, Pathanamthitta)',
            day: '01-21'
        },
        {
            title: 'Commemoration of St John Chrysostom (Golden-mouthed)',
            day: '01-21'
        },
        {
            title: 'Feast of St. Agnes of Rome',
            day: '01-21'
        },
        {
            title: 'Feast of St. Anastasia the Patrician of Alexandria',
            day: '01-21'
        },
        {
            title: 'Monday of Three day Lent',
            day: '01-22'
        },
        {
            title: 'Feast of St. Clement, Pope of Rome',
            day: '01-22'
        },
        {
            title: 'Feast of St. Timothy',
            day: '01-22'
        },
        {
            title: 'Tuesday of Three day Lent',
            day: '01-23'
        },
        {
            title: 'Commemoration of St Augen the monk',
            day: '01-23'
        },
        {
            title: 'Wednesday of Three day Lent (Commemoration of Prophet Jonah)',
            day: '01-24'
        },
        {
            title: 'Thursday / The end of Three day Lent',
            day: '01-25'
        },
        {
            title: 'Commemoration of HH Baselios Marthoma Mathews II Catholicos (Shastamkotta Mount Horeb)',
            day: '01-26'
        },
        {
            title: 'Commemoration of HG Paulose Mar Athanasios Metropolitan (Aluva Thrikunnathu Seminary)',
            day: '01-26'
        },
        {
            title: 'All Departed Priests',
            day: '01-28'
        },
        {
            title: 'Fourth Sunday after Epiphany (Sunday for Workers)',
            day: '01-28'
        },
        // February
        {
            title: 'Mayaltho (Entry of our Lord into the temple), Feast of St Simeon',
            day: '02-02'
        },
        {
            title: 'Commemoration of HG Pathrose Mar Osthathios Metropolitan (Kandanadu Carmel Dayara)',
            day: '02-02'
        },
        {
            title: 'Commemoration of St Simon And Hanna',
            day: '02-02'
        },
        {
            title: 'All Departed Holy Fathers, Feast of St. Bar Soumo - the Chief Among Mourners & Mar Qauma',
            day: '02-03'
        },
        {
            title: 'All the Departed Faithful',
            day: '02-04'
        },
        {
            title: 'Fifth Sunday after Epiphany',
            day: '02-04'
        },
        {
            title: 'Feast of Saint Severios of Antioch',
            day: '02-08'
        },
        {
            title: 'Commemoration of HG Mathews Mar Epiphanios (St. Thomas Cathedral Kollam)',
            day: '02-09'
        },
        {
            title: 'First Sunday of Great Lent (Kothine Sunday) (Pethurtha of the Great Lent)',
            day: '02-11'
        },
        {
            title: 'First Monday of the Great Lent (Shubkono)',
            day: '02-12'
        },
        {
            title: 'Commemoration of Patriarch Ignatius Elias III (Manjinikkara Dayara)',
            day: '02-13'
        },
        {
            title: 'First Tuesday of the Great Lent',
            day: '02-13'
        },
        {
            title: 'Commemoration of Mar Ephrem Malpan the Syrian & Mar Theodorus of Amasea',
            day: '02-13'
        },
        {
            title: 'First Wednesday of the Great Lent',
            day: '02-14'
        },
        {
            title: 'First Thursday of the Great Lent',
            day: '02-15'
        },
        {
            title: 'First Friday of the Great Lent',
            day: '02-16'
        },
        {
            title: 'Commemoration of HG Geevarghese Mar Osthathios (St. Pauls Mission Chapel, Mavelikkara)',
            day: '02-16'
        },
        {
            title: 'First Saturday of the Great Lent',
            day: '02-17'
        },
        {
            title: 'Second Sunday of Great Lent (Lepers Sunday)',
            day: '02-18'
        },
        {
            title: 'Second Monday of the Great Lent',
            day: '02-19'
        },
        {
            title: 'Commemoration of Elias Mar Julius Metropolitan (Manjanikara Dayra)',
            day: '02-19'
        },
        {
            title: 'Second Tuesday of the Great Lent',
            day: '02-20'
        },
        {
            title: 'Feast of the Establishment of the Throne in Antioch by Saint Peter',
            day: '02-21'
        },
        {
            title: 'Second Wednesday of the Great Lent',
            day: '02-21'
        },
        {
            title: 'Second Thursday of the Great Lent',
            day: '02-22'
        },
        {
            title: 'Feast of St Policarpos & St. Geevarghese Mar Dionysius Metropolitan Vatasseril, Malankara Church Bhasuran (Orthodox Theological Old Seminary Chapel, Kottayam)',
            day: '02-23'
        },
        {
            title: 'Second Friday of the Great Lent',
            day: '02-23'
        },
        {
            title: 'Commemoration of HG Thomas Mar Makarios (Devalokam Aramana Chapel, Kottayam)',
            day: '02-23'
        },
        {
            title: 'Feast of St. Mathew the Evangelist',
            day: '02-24'
        },
        {
            title: 'Second Saturday of the Great Lent',
            day: '02-24'
        },
        {
            title: 'Third Sunday of Great Lent (Palsy Sunday)',
            day: '02-25'
        },
        {
            title: 'Third Monday of the Great Lent',
            day: '02-26'
        },
        {
            title: 'Third Tuesday of the Great Lent',
            day: '02-27'
        },
        {
            title: 'Commemoration of Mar Aprem Malpan',
            day: '02-28'
        },
        {
            title: 'Commemoration of Mar Theodoros the Martyr',
            day: '02-28'
        },
        {
            title: 'Third Wednesday of the Great Lent',
            day: '02-28'
        },
        {
            title: 'Third Thursday of the Great Lent',
            day: '02-29'
        },
        // March
        {
            title: 'Third Friday of the Great Lent',
            day: '03-01'
        },
        {
            title: 'Third Saturday of the Great Lent',
            day: '03-02'
        },
        {
            title: 'Commemoration of King Abgar of Edessa',
            day: '03-02'
        },
        {
            title: 'Memorial of Konattu Abraham Malpan (Pampakuda)',
            day: '03-02'
        },
        {
            title: 'Fourth Sunday of Great Lent (Canaanite woman)',
            day: '03-03'
        },
        {
            title: 'Fourth Monday of the Great Lent',
            day: '03-04'
        },
        {
            title: 'Feast of St Theodore of Amasea and St Ephrem the Syrian',
            day: '03-04'
        },
        {
            title: 'Fourth Tuesday of the Great Lent',
            day: '03-05'
        },
        {
            title: 'Fourth Wednesday of the Great Lent (Mid Lent)',
            day: '03-06'
        },
        {
            title: 'Fourth Thursday of the Great Lent',
            day: '03-07'
        },
        {
            title: 'Fourth Friday of the Great Lent',
            day: '03-08'
        },
        {
            title: 'Fourth Saturday of the Great Lent',
            day: '03-09'
        },
        {
            title: 'Memory of Forty Martyrs of Sebastia',
            day: '03-09'
        },
        {
            title: 'Commemoration of Ambattu Geevarghese Mar Coorilose Metropolitan (Angamaly Cheria Palli)',
            day: '03-09'
        },
        {
            title: 'Fifth Sunday of Great Lent (Kpiptho/Crippled woman)',
            day: '03-10'
        },
        {
            title: 'Fifth Monday of the Great Lent',
            day: '03-11'
        },
        {
            title: 'Fifth Tuesday of the Great Lent',
            day: '03-12'
        },
        {
            title: 'Fifth Wednesday of the Great Lent',
            day: '03-13'
        },
        {
            title: 'Fifth Thursday of the Great Lent',
            day: '03-14'
        },
        {
            title: 'Fifth Friday of the Great Lent',
            day: '03-15'
        },
        {
            title: 'Fifth Saturday of the Great Lent',
            day: '03-16'
        },
        {
            title: 'Commemoration of HG Paulose Mar Severios Metropolitan (Kunnamkulam Arthat Puthur Church)',
            day: '03-17'
        },
        {
            title: 'Sixth Sunday of Great Lent (Blind Man, Catholicate Day)',
            day: '03-17'
        },
        {
            title: 'Monday before Hosanna',
            day: '03-18'
        },
        {
            title: 'Commemoration of HG Sleeba Mar Osthathios Metropolitan (Kunnamkulam Arthat Puthur Church)',
            day: '03-19'
        },
        {
            title: 'Tuesday before Hosanna',
            day: '03-19'
        },
        {
            title: 'Wednesday before Hosanna',
            day: '03-20'
        },
        {
            title: 'Thursday before Hosanna',
            day: '03-21'
        },
        {
            title: 'Commemoration of Konattu Geevarghese Mar Julios Metropolitan (Pampukuda)',
            day: '03-22'
        },
        {
            title: 'Saturday before Hosanna (Lazarus Saturday)',
            day: '03-23'
        },
        {
            title: 'Hosanna/Palm Sunday (Boys and Girls Day)',
            day: '03-24'
        },
        {
            title: 'Vachanippu (Suboro), Anunciation to St Mary',
            day: '03-25'
        },
        {
            title: 'Commemoration of Marthoma IV (Kandanadu Church)',
            day: '03-25'
        },
        {
            title: 'Monday of the Passion Week',
            day: '03-25'
        },
        {
            title: 'Tuesday of the Passion Week',
            day: '03-26'
        },
        {
            title: 'Wednesday of the Passion Week',
            day: '03-27'
        },
        {
            title: 'Passover (Maundy Thursday)',
            day: '03-28'
        },
        {
            title: 'Good Friday',
            day: '03-29'
        },
        {
            title: 'Gospel Saturday (Saturday of Good Tidings)',
            day: '03-30'
        },
        {
            title: 'Kymtho/Easter',
            day: '03-31'
        },
        // April
        {
            title: 'Hevorae Monday (Monday after Easter)',
            day: '04-01'
        },
        {
            title: 'Commemoration of Mawdyone',
            day: '04-01'
        },
        {
            title: 'Hevorae Tuesday',
            day: '04-02'
        },
        {
            title: 'Hevorae Wednesday',
            day: '04-03'
        },
        {
            title: 'Hevorae Thursday',
            day: '04-04'
        },
        {
            title: 'Commemoration of HG Kuriakose Mar Gregorios Metropolitan (Pambady Dayara)',
            day: '04-05'
        },
        {
            title: 'Hevorae Friday',
            day: '04-05'
        },
        {
            title: 'Hevorae Saturday',
            day: '04-06'
        },
        {
            title: 'Commemoration of HG Marthoma VI, also known as Valiya Mar Divanasios Metropolitan (Puthencavu Church)',
            day: '04-07'
        },
        {
            title: 'New Sunday (Sunday after Easter - The Sunday of the Youth)',
            day: '04-07'
        },
        {
            title: 'Commemoration of HG Geevarghese Mar Ivanios (Mar Baselios Dayara, Kottayam)',
            day: '04-12'
        },
        {
            title: 'First Sunday after New Sunday',
            day: '04-14'
        },
        {
            title: 'Commemoration of Marthoma II (Niranam Valiya Church)',
            day: '04-16'
        },
        {
            title: 'Commemoration of Mar Thoma VIII (Puthencavu)',
            day: '04-16'
        },
        {
            title: 'Commemoration of HG Geevarghese Mar Philoxenos Metropolitan (Puthencavu Church)',
            day: '04-17'
        },
        {
            title: 'Second Sunday after New Sunday',
            day: '04-21'
        },
        {
            title: 'Commemoration of Yuhanon Mar Ivanios Episcopa (Chengannur)',
            day: '04-21'
        },
        {
            title: 'Commemoration of Marthoma III (Kadambanadu Church)',
            day: '04-22'
        },
        {
            title: 'St Georges Day',
            day: '04-23'
        },
        {
            title: 'Feast of Saint Mark the Evangelist',
            day: '04-25'
        },
        {
            title: 'Commemoration of Marthoma I (Ankamali Cheriyapally)',
            day: '04-25'
        },
        {
            title: 'Commemoration of HG Mar Gregorios Abdel Jaleel Metropolitan (Vadakan Paravur Church)',
            day: '04-27'
        },
        {
            title: 'Third Sunday after New Sunday',
            day: '04-28'
        },
        {
            title: 'Commemoration of Mar Sabor & Mar Aproth',
            day: '04-29'
        },
        // May
        {
            title: 'Commemoration of St James the Apostle (Son of Zebedee)',
            day: '05-01'
        },
        {
            title: 'Baselios Paulose I Catholicos (Pampakuda Cheriyapally)',
            day: '05-03'
        },
        {
            title: 'Fourth Sunday after New Sunday',
            day: '05-05'
        },
        {
            title: 'Feast of Saint John the Evangelist',
            day: '05-08'
        },
        {
            title: 'Ascension of our Lord / Suloqo (Thursday after the fourth Sunday following New Sunday)',
            day: '05-09'
        },
        {
            title: 'Feast of Saint Simon the Zealot',
            day: '05-10'
        },
        {
            title: 'Commemoration of Marthoma V (Niranam Valiyapally)',
            day: '05-10'
        },
        {
            title: 'Sunday before Pentecost (Sunday of the Monks)',
            day: '05-12'
        },
        {
            title: 'Fest of Saint Mary for Good Crops & Harvest',
            day: '05-15'
        },
        {
            title: 'Commemoration of St Isaac',
            day: '05-15'
        },
        {
            title: 'Commemoration of HG Yuhanon Mar Severios (Zion Seminary Chapel, Koratty)',
            day: '05-16'
        },
        {
            title: 'Commemoration of St Aaron the Monk',
            day: '05-16'
        },
        {
            title: 'Commemoration of HG Mar Divanasios III (Punnathra) Metropolitan (Kottayam Cheriyapally)',
            day: '05-19'
        },
        {
            title: 'Pentecost - Fiftieth day after Easter (Sunday School Day)',
            day: '05-19'
        },
        {
            title: 'Commemoration of the 4 Evangelists, All fathers of the 3 Ecumenical Synods',
            day: '05-20'
        },
        {
            title: 'Commemoration of St Helen the Queen',
            day: '05-21'
        },
        {
            title: 'Golden Friday (Friday after Pentecost)',
            day: '05-24'
        },
        {
            title: 'First Sunday after Pentecost',
            day: '05-26'
        },
        {
            title: 'Commemoration of HH Baselios Marthoma Didymus I Catholicos (Pathanapuram Mount Tabor)',
            day: '05-26'
        },
        // June
        {
            title: 'Second Sunday after Pentecost',
            day: '06-02'
        },
        {
            title: 'Commemoration of HG Yuyakim Mar Ivanios Metropolitan (Parumala Church)',
            day: '06-06'
        },
        {
            title: 'Commemoration of HG Augen Mar Divanyasios (Vallikkattu Dayara, Vakathanam)',
            day: '06-06'
        },
        {
            title: 'Third Sunday after Pentecost',
            day: '06-09'
        },
        {
            title: 'Feast of Saint Bartholomew the Apostle & St Barnabas',
            day: '06-11'
        },
        {
            title: 'Commemoration of HG Simon Mar Athanasios Metropolitan (Kottayam Puthupally)',
            day: '06-11'
        },
        {
            title: 'Commemoration of Geevarghese Mar Severios Metropolitan (Kottayam Valiyapalli)',
            day: '06-11'
        },
        {
            title: 'Feast of St Mary, Commemoration of the Establishment of the First Church in Saint Marys Name',
            day: '06-15'
        },
        {
            title: 'Apostles Fast (13 day Sleeha Fast)',
            day: '06-16'
        },
        {
            title: 'Fourth Sunday after Pentecost',
            day: '06-09'
        },
        {
            title: 'Third Sunday after Pentecost',
            day: '06-16'
        },
        {
            title: 'Feast of St. James, Brother of Jesus and the First Bishop of Jerusalem',
            day: '06-19'
        },
        {
            title: 'Fifth Sunday after Pentecost',
            day: '06-23'
        },
        {
            title: 'Birth of St John the Baptist',
            day: '06-24'
        },
        {
            title: 'Feast of St Peter and St Paul',
            day: '06-29'
        },
        {
            title: 'Feast of the Twelve Apostles',
            day: '06-30'
        },
        {
            title: 'Sixth Sunday after Pentecost',
            day: '06-30'
        },
        // July
        {
            title: 'Dukhrono of St Thomas',
            day: '07-03'
        },
        {
            title: 'Feast of the Seventy-Two Evangelists',
            day: '07-05'
        },
        {
            title: 'Commemoration of Marthoma VII (Kolencherry Church)',
            day: '07-05'
        },
        {
            title: 'Mission Sunday',
            day: '07-07'
        },
        {
            title: 'Commemoration of HG Zechariah Mar Dionysius Metropolitan (Pathanapuram Tabor Dayara)',
            day: '07-07'
        },
        {
            title: 'Seventh Sunday after Pentecost',
            day: '07-07'
        },
        {
            title: 'Commemoration of HG Yuhannon Mar Gregorios Metropolitan (Mulanthuruthy Church)',
            day: '07-10'
        },
        {
            title: 'Commemoration of HG Pulikkottil Joseph Mar Divanasios V Metropolitan, Founder of the Kottayam M.D. Seminary (Kottayam Pazhiya Seminary)',
            day: '07-12'
        },
        {
            title: 'Commemoration of HH Baselios Marthoma Paulose II (Devalokam Catholicate Aramana)',
            day: '07-12'
        },
        {
            title: 'Eighth Sunday after Pentecost',
            day: '07-14'
        },
        {
            title: 'Feast of the Kuriakose the Martyr and his Mother, St Yulithy, St. Abhai of Nicea',
            day: '07-15'
        },
        {
            title: 'Feast of Prophet Mar Elijah',
            day: '07-20'
        },
        {
            title: 'Ninth Sunday after Pentecost',
            day: '07-21'
        },
        {
            title: 'Feast of Saint Mary Magdalene',
            day: '07-22'
        },
        {
            title: 'Commemoration of HG Geevarghese Mar Dioscoros Metropolitan (Ranny Holy Trinity Ashram)',
            day: '07-23'
        },
        {
            title: 'Feast of St. Simon the Stylite',
            day: '07-27'
        },
        {
            title: 'Tenth Sunday after Pentecost',
            day: '07-28'
        },
        // August
        {
            title: 'Assumption Fast (15 day), Feast of Martyrs Marth Shmouny, her 7 children and Eliazar their teacher',
            day: '08-01'
        },
        {
            title: 'Commemoration of HG Paulose Mar Pachomios Metropolitan (Bethany Ashramam, Ranni Perunaad)',
            day: '08-01'
        },
        {
            title: 'Eleventh Sunday after Pentecost',
            day: '08-04'
        },
        {
            title: 'The festival of Transfiguration, Koodaara Perunnal',
            day: '08-06'
        },
        {
            title: 'Commemoration of HG Alexios Mar Theodosios Metropolitan (Perunadu Bethany Ashram)',
            day: '08-06'
        },
        {
            title: 'Commemoration of Arch Deacon Geevarghese the Great (Angamaly cheriapally)',
            day: '08-09'
        },
        {
            title: 'Twelfth Sunday after Pentecost',
            day: '08-11'
        },
        {
            title: 'First Sunday after the festival of Transfiguration',
            day: '08-11'
        },
        {
            title: 'Feast of St. Azazayel the Martyr',
            day: '08-12'
        },
        {
            title: 'Commemoration of Prophet Micha',
            day: '08-14'
        },
        {
            title: 'Soonoyo, Festival of the Ascension of St Mary, Martha Mariam Samajam day',
            day: '08-15'
        },
        {
            title: 'Commemoration of Patriarch Mar Ignatios Abded Meshiha (Kurkuma Dayara at Devalokam)',
            day: '08-15'
        },
        {
            title: 'Commemoration of HG Mar Ivanios Hidayatulla Metropolitan (Mulunthuruthy Church)',
            day: '08-16'
        },
        {
            title: 'Second Sunday after the festival of Transfiguration',
            day: '08-18'
        },
        {
            title: 'First Sunday after the festival of the Ascension of St Mary',
            day: '08-18'
        },
        {
            title: 'Feast of Saint Labbaeus (Thaddeus) the Apostle',
            day: '08-19'
        },
        {
            title: 'Commemoration of HG Joseph Mar Pachomios Metropolitan (Mulakulam Carmel Kunnupally)',
            day: '08-19'
        },
        {
            title: 'Commemoration of Prophet Samuel',
            day: '08-20'
        },
        {
            title: 'Feast of Saint Mathew the Apostle',
            day: '08-24'
        },
        {
            title: 'Commemoration of HG Thomas Mar Athanasios (Othara Dayara Chapel)',
            day: '08-24'
        },
        {
            title: 'Second Sunday after the festival of the Ascension of St Mary',
            day: '08-25'
        },
        {
            title: 'Feast Commemorating the Beheading of Saint John the Baptist',
            day: '08-29'
        },
        {
            title: 'Commemoration of Mar Gabriel Episcopa (Kottayam Cheriyapalli)',
            day: '08-30'
        },
        {
            title: 'Commemoration of HG Mathews Mar Ivanios Metropolitan (Pambady Mar Kuriakose Dayara)',
            day: '08-31'
        },
        // September
        {
            title: 'Third Sunday after the festival of the Ascension of St Mary',
            day: '09-01'
        },
        {
            title: 'Commemoration of HG Yuyakim Mar Kurilos Metropolitan (Mulunthuruhy Church)',
            day: '09-02'
        },
        {
            title: 'Feast of the Birth of Saint Mary, the Mother of God',
            day: '09-08'
        },
        {
            title: 'Fourth Sunday after the festival of the Ascension of St Mary',
            day: '09-08'
        },
        {
            title: 'Feast of St. Marys Parents, Youyakim and Hanna',
            day: '09-09'
        },
        {
            title: 'Feast of the Holy Cross (Sleeba Perunnal)',
            day: '09-14'
        },
        {
            title: 'Fifth Sunday after the festival of the Ascension of St Mary',
            day: '09-15'
        },
        {
            title: 'First Sunday after the Feast of Holy Cross',
            day: '09-15'
        },
        {
            title: 'Anniversary of the Establishment of Catholicate in Malankara',
            day: '09-15'
        },
        {
            title: 'Second Sunday after the Feast of Holy Cross',
            day: '09-22'
        },
        {
            title: 'Commemoration of HG Alvarez Mar Julius Metropolitan (Panjim St. Mary?s Church Church, Goa)',
            day: '09-23'
        },
        {
            title: 'Feast of Saint Dimeth',
            day: '09-24'
        },
        {
            title: 'Commemoration of HG Philipose Mar Theophilos Metropolitan (Aluva Thrikunathu Seminary)',
            day: '09-28'
        },
        {
            title: 'Third Sunday after the Feast of Holy Cross',
            day: '09-29'
        },
        // October
        {
            title: 'Feast of evangelist St. Adai, Abhai the Martyr, Mar Malke',
            day: '10-01'
        },
        {
            title: 'Commemoration of Karottuveettil Shemavon Mar Dionysius (Kadungamangalam)',
            day: '10-02'
        },
        {
            title: 'Commemoration of HH Mar Baselios Yeldo Catholicos (Kothamangalam Cheriyapally)',
            day: '10-03'
        },
        {
            title: 'Fourth Sunday after the Feast of Holy Cross',
            day: '10-06'
        },
        {
            title: 'Feast of Martyrs St. Sargis and St. Bakos',
            day: '10-07'
        },
        {
            title: 'Commemoration of HG Philipos Mar Divanasios IV Metropolitan 152th (Cheppadu Church)',
            day: '10-12'
        },
        {
            title: 'Commemoration of HG Yuhannon Mar Athanasios (Perunadu Bethany Ashram)',
            day: '10-12'
        },
        {
            title: 'Fifth Sunday after the Feast of Holy Cross',
            day: '10-13'
        },
        {
            title: 'Commemoration of St Athanasios of Alexandria',
            day: '10-14'
        },
        {
            title: 'Feast of Saint Osyo the Ascetic',
            day: '10-15'
        },
        {
            title: 'Feast of Saint Luke the Evangelist',
            day: '10-18'
        },
        {
            title: 'Sixth Sunday after the Feast of Holy Cross',
            day: '10-20'
        },
        {
            title: 'Commemoration of HH Mar Baselios Shakralla Catholicos (Kandanadu Church)',
            day: '10-22'
        },
        {
            title: 'Feast of St. James the Apostle, Son of Alphaeus',
            day: '10-23'
        },
        {
            title: 'Commemoration of HG Zachariah Mar Theophilos (Thadagam Ashram, Near Coimbatore, Tamilnadu)',
            day: '10-24'
        },
        {
            title: 'Seventh Sunday after the Feast of Holy Cross',
            day: '10-27'
        },
        {
            title: 'Commemoration of HG Mathews Mar Evanios Parett (Pampady Dayara)',
            day: '10-31'
        },
        // November
        {
            title: 'Feast of All Saints',
            day: '11-01'
        },
        {
            title: 'Parumala Perunnal, Commemoration of Saint Geevarghese Mar Gregorios of Parumala (St Peter and St Pauls Church, Parumala)',
            day: '11-02'
        },
        {
            title: 'Commemoration of HG Kadavil Paulose Mar Athanasios Metropolitan Anniversary (Aluva Thrikunnathu)',
            day: '11-02'
        },
        {
            title: 'Koodosh Eetho (Santification)',
            day: '11-03'
        },
        {
            title: 'Commemoration of HG Stephanos Mar Theodosios (St. Thomas Ashram, Bhilai)',
            day: '11-05'
        },
        {
            title: 'Commemoration of HG Geevarghese Mar Gregorios Metropolitan (Aluva Thrikunnathu Seminary)',
            day: '11-06'
        },
        {
            title: 'Commemoration of HH Mar Baselios Marthoma Mathews I Catholicos (Devalokam Catholicate Aramana)',
            day: '11-08'
        },
        {
            title: 'Memorial of Konattu Mathan Malpan (Pampakuda)',
            day: '11-08'
        },
        {
            title: 'Hoodosh Eetho (Dedication)',
            day: '11-10'
        },
        {
            title: 'Memorial of Kayamkulam Philipose Ramban (Adoor, Kannamkode)',
            day: '11-10'
        },
        {
            title: 'Feast of Saint John Chrysostom, Bishop of Constantinople',
            day: '11-13'
        },
        {
            title: 'Feast of Saint Philip the Apostle',
            day: '11-14'
        },
        {
            title: 'Suboreh Dazkharyo Revelation to Zachariah (Father of John the Baptist)',
            day: '11-15'
        },
        {
            title: 'Anunciation to Zachariah (Parents Day)',
            day: '11-17'
        },
        {
            title: 'Commemoration of HG Job Mar Philoxenos (Mount Tabor Dayara, Pathanapuram)',
            day: '11-20'
        },
        {
            title: 'Feast Commemorating the Entry of Saint Mary to the Temple of Jerusalem',
            day: '11-21'
        },
        {
            title: 'Commemoration of HG Pulikkottil Joseph Mar Divanasios II (Orthodox Theological Seminary Chapel, Kottayam)',
            day: '11-24'
        },
        {
            title: 'Commemoration of HG Paulose Mar Gregorios Metroplitan (Orthodox Theological Seminary Chapel, Kottayam)',
            day: '11-24'
        },
        {
            title: 'Anunciation to Mary',
            day: '11-24'
        },
        {
            title: 'Feast of Saint Jacob Baradaeus & St Dionysius Barsleebi',
            day: '11-28'
        },
        {
            title: 'Feast of Saint Jacob of Serugh, Bishop of Batnan and Universal Doctor',
            day: '11-29'
        },
        {
            title: 'Feast of Saint Andrew the Apostle and First-Called',
            day: '11-30'
        },
        // December
        {
            title: 'Fast of the Nativity (25 days fast)',
            day: '12-01'
        },
        {
            title: 'Marys Journey to Elizabeth',
            day: '12-01'
        },
        {
            title: 'Commemoration of HG Thoma Mar Divanyasios (Mount Tabor Dayara, Pathanapuram)',
            day: '12-03'
        },
        {
            title: 'Feast of the Martyrs St. Barbara and St. Juliana',
            day: '12-04'
        },
        {
            title: 'Feast of Saint Soke, Bishop of Myre (also known as Saint Nikolas, Christmas Father)',
            day: '12-06'
        },
        {
            title: 'Commemoration of HH Baselios Mar Augen I Catholicos (Devalokam Catholicate Aramana)',
            day: '12-08'
        },
        {
            title: 'Birth of John the Baptist (Childrens Day)',
            day: '12-08'
        },
        {
            title: 'Commemoration of HG Mathews Mar Barnabas (St. Peters and St. Pauls, Valayanchirangara)',
            day: '12-09'
        },
        {
            title: 'Feast of the Martyrs, Saint Behanam, his sister, Saint Sarah, and Others Martyrs',
            day: '12-10'
        },
        {
            title: 'Feast of St. Philoxenus of Mabbog',
            day: '12-10'
        },
        {
            title: 'Commemoration of HG Daniel Mar Philoxenos Metropolitan 17th (Pathanamthitta Basil Aramana)',
            day: '12-13'
        },
        {
            title: 'Commemoration of Paulose Mar Coorilos Metropolitan (Panampady)',
            day: '12-14'
        },
        {
            title: 'Anunciation to St Joseph',
            day: '12-15'
        },
        {
            title: 'Commemoration of HG Yuhannon Mar Severios Metropolitan (Koratty Zion Seminary)',
            day: '12-16'
        },
        {
            title: 'Commemoration of HH Baselios Mar Geevarghese I Catholicos 79th (Vakathanam Vallikattu Dayara)',
            day: '12-17'
        },
        {
            title: 'Feast of St Thomas the Apostle',
            day: '12-18'
        },
        {
            title: 'Feast of Saint Ignatius Nourono of Antioch (also known as Saint Ignatius the Fiery One)',
            day: '12-20'
        },
        {
            title: 'Dukhrono of St Thomas the Apostle',
            day: '12-21'
        },
        {
            title: 'Sunday before Christmas',
            day: '12-22'
        },
        {
            title: 'Memorial of N K Koruthu Malpanachan (Vadavukodu)',
            day: '12-23'
        },
        {
            title: 'Yeldho, Incarnation of our Lord (Christmas)',
            day: '12-25'
        },
        {
            title: 'Feast of the Glory of St. Mary, Mother of God',
            day: '12-26'
        },
        {
            title: 'Commemoration of HG Yakkob Mar Policarpos (Zion Seminary, Koratty)',
            day: '12-26'
        },
        {
            title: 'Feast Commemorating the Slaughter of the Infants by King Herod',
            day: '12-27'
        },
        {
            title: 'First Sunday after Christmas (The Holy Family flee to Egypt)',
            day: '12-29'
        },
        // end of var events
    ];

    for (var year = startYear; year <= endYear; year++) {
        events.forEach(function(eventDetail) {
            var eventDate = year + '-' + eventDetail.day;
            var event = {
                title: eventDetail.title,
                start: eventDate,
                allDay: true // Essential for all-day events!
            };
            calendar.addEvent(event);
        });
    }

    calendar.render();
});

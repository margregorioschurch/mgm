document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
   // Get today's date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
    var yyyy = today.getFullYear();

    var todayFormatted = yyyy + '-' + mm + '-' + dd;

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: todayFormatted, // Set initialDate to today's date
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
        url: 'https://malankaralibrary.com/book/details/2161/Malankara_Orthodox_Syrian_Church_Liturgical_Calendar_2023'
      },
      events: [
        {
          title: 'New Year (First Sunday after Christmas)',
          url: 'https://malankaralibrary.com/book/details/2161/Malankara_Orthodox_Syrian_Church_Liturgical_Calendar_2023',
          start: '2023-01-01',
          end: '2023-01-01'
        },
        {
            title: 'Epiphany/Danaha (Baptism of our Lord Jesus Christ)',
            start: '2023-01-06',
            end: '2023-01-06'
          },
          {
            title: 'First Sunday after Epiphany',
            start: '2023-01-08',
            end: '2023-01-08'
          },
          {
            title: 'Second Sunday after Epiphany',
            start: '2023-01-15',
            end: '2023-01-15'
          },
        {
          title: 'Third Sunday after Epiphany',
          start: '2023-01-22',
          end: '2023-01-22'
        },
        {
            title: 'Sunday before Nineveh Lent (Pethurtho of Nineveh Fast)',
            start: '2023-01-29',
            end: '2023-01-29'
          },
        {
            title: 'Monday of Nineveh Lent',
            start: '2023-01-30',
            end: '2023-01-30'
          },
          {
            title: 'Mayaltho (Entry of our Lord into the temple)',
            start: '2023-02-02',
            end: '2023-02-02'
          },
          {
            title: 'Commemoration of all Departed Priests (Kohne Sunday)',
            start: '2023-02-05',
            end: '2023-02-05'
          },
          {
            title: 'Commemoration of all the Departed Faithful (Anide Sunday)',
            start: '2023-02-12',
            end: '2023-02-12'
          },
          {
            title: 'First Sunday of Great Lent (Kothine Sunday) (Pethurtha of the Great Lent)',
            start: '2023-02-19',
            end: '2023-02-19'
          },
          {
            title: 'Second Sunday of Great Lent (Leper`s Sunday)',
            start: '2023-02-26',
            end: '2023-02-26'
          },
          {
            title: 'Third Sunday of Great Lent (Palsy Sunday)',
            start: '2023-03-05',
            end: '2023-03-05'
          },
          {
            title: 'Fourth Sunday of Great Lent (Canaanite woman)',
            start: '2023-03-12',
            end: '2023-03-12'
          },
          {
            title: 'Fifth Sunday of Great Lent (Kpiptho/Crippled woman)',
            start: '2023-03-19',
            end: '2023-03-19'
          },
          {
            title: 'Sixth Sunday of Great Lent (Blind Man)',
            start: '2023-03-26',
            end: '2023-03-26'
          },
          {
            title: 'Lazarus Saturday',
            start: '2023-04-01',
            end: '2023-04-01'
          },
          {
            title: 'Hosanna/Palm Sunday (Boys and Girls Day)',
            start: '2023-04-02',
            end: '2023-04-02'
          },
          {
            title: 'Holy Friday of Crucifixion',
            start: '2023-04-07',
            end: '2023-04-07'
          },
          {
            title: 'Kyomtho/Easter',
            start: '2023-04-09',
            end: '2023-04-09'
          },
          {
            title: 'New Sunday (First Sunday after Easter)',
            start: '2023-04-16',
            end: '2023-04-16'
          },
          {
            title: 'First Sunday after New Sunday (Second Sunday after Easter)',
            start: '2023-04-23',
            end: '2023-04-23'
          },
          {
            title: 'Second Sunday after New Sunday (Third Sunday after Easter)',
            start: '2023-04-30',
            end: '2023-04-30'
          },
          {
            title: 'Third Sunday after New Sunday (Fourth Sunday after Easter)',
            start: '2023-05-07',
            end: '2023-05-07'
          },
          {
            title: 'Fourth Sunday after New Sunday (Fifth Sunday after Easter)',
            start: '2023-05-14',
            end: '2023-05-14'
          },
          {
            title: 'Fifth Sunday after New Sunday (Sixth Sunday after Easter - Sunday before Pentecost)',
            start: '2023-05-21',
            end: '2023-05-21'
          },
          {
            title: 'Pentecost Sunday',
            start: '2023-05-28',
            end: '2023-05-28'
          },
          {
            title: 'First Sunday after Pentecost',
            start: '2023-06-04',
            end: '2023-06-04'
          },
          {
            title: 'Second Sunday after Pentecost',
            start: '2023-06-11',
            end: '2023-06-11'
          },
          {
            title: 'Third Sunday after Pentecost',
            start: '2023-06-18',
            end: '2023-06-18'
          },
          {
            title: 'Fourth Sunday after Pentecost',
            start: '2023-06-25',
            end: '2023-06-25'
          },
          {
            title: 'Fifth Sunday after Pentecost',
            start: '2023-07-02',
            end: '2023-07-02'
          },
          {
            title: 'Sixth Sunday after Pentecost',
            start: '2023-07-09',
            end: '2023-07-09'
          },
          {
            title: 'Seventh Sunday after Pentecost',
            start: '2023-07-16',
            end: '2023-07-16'
          },
          {
            title: 'Eighth Sunday after Pentecost',
            start: '2023-07-23',
            end: '2023-07-23'
          },
          {
            title: 'Ninth Sunday after Pentecost',
            start: '2023-07-30',
            end: '2023-07-30'
          },
          {
            title: 'Tenth Sunday after Pentecost',
            start: '2023-08-06',
            end: '2023-08-06'
          },
          {
            title: 'First Sunday after the Transfiguration',
            start: '2023-08-13',
            end: '2023-08-13'
          },
          {
            title: 'First Sunday after the feast of the Ascension',
            start: '2023-08-20',
            end: '2023-08-20'
          },
          {
            title: 'Second Sunday after the feast of the Ascension',
            start: '2023-08-27',
            end: '2023-08-27'
          },
          {
            title: 'Third Sunday after the feast of the Ascension',
            start: '2023-09-03',
            end: '2023-09-03'
          },
          {
            title: 'Fourth Sunday after the feast of the Ascension',
            start: '2023-09-10',
            end: '2023-09-10'
          },
          {
            title: 'First Sunday after the feast of the Holy Cross',
            start: '2023-09-17',
            end: '2023-09-17'
          },
          {
            title: 'Second Sunday after the feast of the Holy Cross',
            start: '2023-09-24',
            end: '2023-09-24'
          },
          {
            title: 'Third Sunday after the feast of the Holy Cross',
            start: '2023-10-01',
            end: '2023-10-01'
          },
          {
            title: 'Fourth Sunday after the feast of the Holy Cross',
            start: '2023-10-08',
            end: '2023-10-08'
          },
          {
            title: 'Fifth Sunday after the feast of the Holy Cross',
            start: '2023-10-15',
            end: '2023-10-15'
          },
          {
            title: 'Sixth Sunday after the feast of the Holy Cross',
            start: '2023-10-22',
            end: '2023-10-22'
          },
          {
            title: 'Seventh Sunday after the feast of the Holy Cross',
            start: '2023-10-25',
            end: '2023-10-25'
          },
          {
            title: 'Koodosh Eetho Sunday (Santification)',
            start: '2023-11-05',
            end: '2023-11-05'
          },
          {
            title: 'Hoodosh Eetho Sunday (Dedication)',
            start: '2023-11-12',
            end: '2023-11-12'
          },
          {
            title: 'Sunday of Revelation to Zachariah (Father of John the Baptist)',
            start: '2023-11-19',
            end: '2023-11-19'
          },
          {
            title: 'Sunday of Annunciation to St. Mary',
            start: '2023-11-26',
            end: '2023-11-26'
          },
          {
            title: 'Sunday of St. Mary`s Journey to Elizabeth',
            start: '2023-12-03',
            end: '2023-12-03'
          },
          {
            title: 'Sunday of Birth of John the Baptist (Children`s Day)',
            start: '2023-12-10',
            end: '2023-12-10'
          },
          {
            title: 'Sunday of Revelation to St Joseph',
            start: '2023-12-17',
            end: '2023-12-17'
          },
          {
            title: 'Sunday before Christmas',
            start: '2023-12-24',
            end: '2023-12-24'
          },
          {
            title: 'First Sunday after Christmas',
            start: '2023-12-31',
            end: '2023-12-31'
          },
          {
            title: 'New Year, Circumcision of our Lord, Feast of St Basil and St Gregory & All the Holy Fathers',
            url: 'https://www.stgregoriosnc.org/component/ioccal/events',
            start: '2024-01-01',
            end: '2024-01-01'
          },
          {
            title: 'Feast of St. Sylvester the Pope of Rome',
            start: '2024-01-02',
            end: '2024-01-02'
          },
          {
            title: 'Feast of St. John The Apostle and Evangelist',
            start: '2024-01-02',
            end: '2024-01-02'
          },
          {
            title: 'Commemoration of HH Mar Baselios Geevarghese II Catholicos (Devalokam Aramana)',
            start: '2024-01-03',
            end: '2024-01-03'
          },
          {
            title: 'Oath of Koonan Cross, Feast of Prophet Malachi',
            start: '2024-01-03',
            end: '2024-01-03'
          },
          {
            title: 'Synaxis of the Seventy Disciples of the Lord',
            start: '2024-01-04',
            end: '2024-01-04'
          },
          {
            title: 'Epiphany/Danaha, Baptism of our Lord Jesus Christ',
            start: '2024-01-06',
            end: '2024-01-06'
          },
          {
            title: 'Feast Commemorating the Beheading of St John the Baptist',
            start: '2024-01-07',
            end: '2024-01-07'
          },
          {
            title: 'First Sunday after Epiphany, Second Sunday after Christmas',
            start: '2024-01-07',
            end: '2024-01-04'
          },
          {
            title: 'Feast Commemorating the Martyrdom of St. Stephen, the Head of the Deacons and the First Among Martyrs',
            start: '2024-01-08',
            end: '2024-01-08'
          },
          {
            title: 'Feast of St. Gregory of Nyssa',
            start: '2024-01-10',
            end: '2024-01-10'
          },
          {
            title: 'Feast of St. Theodosius of Antioch',
            start: '2024-01-11',
            end: '2024-01-11'
          },
           {
            title: 'Second Sunday after Epiphany',
            start: '2024-01-14',
            end: '2024-01-14'
          },
          {
            title: 'Feast of St. Mary for Seeds',
            start: '2024-01-15',
            end: '2024-01-15'
          },
          {
            title: 'Commemoration of Paul the Monk',
            start: '2024-01-15',
            end: '2024-01-15'
          },
          {
            title: 'Feast of St. Samuel, St. Simon, St. Antonios, Head of the Ascetics, Feast of St Athanasius the Great the Patriarch of Alexandria',
            start: '2024-01-18',
            end: '2024-01-18'
          },
          {
            title: 'Commemoration of Michael Mar Dionysius Metropolitan (Panampady), Feast of St. Cyril of Alexandria',
            start: '2024-01-18',
            end: '2024-01-18'
          },
           {
            title: 'Feast of St. Shemoun (Simeon) of Qartmin',
            start: '2024-01-19',
            end: '2024-01-19'
          },
          {
            title: 'Sunday before Three day Lent (Pethurtho of Nineveh Fast), Commemoration of St John Chrysostom (Golden-mouthed)',
            start: '2024-01-21',
            end: '2024-01-21'
          },
          {
            title: 'Third Sunday after Epiphany, Commemoration of HG Philipose Mar Eusebius (St. Basil Dayara, Pathanamthitta)',
            start: '2024-01-21',
            end: '2024-01-21'
          },
          {
            title: 'Feast of St. Agnes of Rome, Feast of St. Anastasia the Patrician of Alexandria',
            start: '2024-01-21',
            end: '2024-01-21'
          },
           {
            title: 'Monday of Three day Lent, Feast of St. Timothy',
            start: '2024-01-22',
            end: '2024-01-22'
          },
          {
            title: 'Feast of St. Clement, Pope of Rome',
            start: '2024-01-22',
            end: '2024-01-22'
          },
          {
            title: 'Feast of St. Timothy',
            start: '2024-01-22',
            end: '2024-01-22'
          },
          {
            title: 'Tuesday of Three day Lent',
            start: '2024-01-23',
            end: '2024-01-23'
          },
           {
            title: 'Commemoration of St Augen the monk',
            start: '2024-01-23',
            end: '2024-01-23'
          },
          {
            title: 'Wednesday of Three day Lent (Commemoration of Prophet Jonah)',
            start: '2024-01-24',
            end: '2024-01-24'
          },
          {
            title: 'Thursday / The end of Three day Lent',
            start: '2024-01-25',
            end: '2024-01-25'
          },
          {
            title: 'Commemoration of HG Paulose Mar Athanasios Metropolitan (Aluva Thrikunnathu Seminary)',
            start: '2024-01-26',
            end: '2024-01-26'
          },
          {
            title: 'All Departed Priests',
            start: '2024-01-28',
            end: '2024-01-28'
          },
           {
            title: 'Fourth Sunday after Epiphany (Sunday for Workers)',
            start: '2024-01-28',
            end: '2024-01-28'
          },
          {
            title: 'Mayaltho (Entry of our Lord into the temple), Feast of St Simeon',
            start: '2024-02-02',
            end: '2024-02-02'
          },
          {
            title: 'Commemoration of HG Pathrose Mar Osthathios Metropolitan (Kandanadu Carmel Dayara)',
            start: '2024-02-02',
            end: '2024-02-02'
          },
          {
            title: 'Commemoration of St Simon And Hanna',
            start: '2024-02-02',
            end: '2024-02-02'
          },
          {
            title: 'All Departed Holy Fathers, Feast of St. Bar Soumo - the Chief Among Mourners & Mar Qauma',
            start: '2024-02-03',
            end: '2024-02-03'
          },
          {
            title: 'All the Departed Faithful',
            start: '2024-02-04',
            end: '2024-02-04'
          },
          {
            title: 'Fifth Sunday after Epiphany',
            start: '2024-02-04',
            end: '2024-02-04'
          },
          {
            title: 'Feast of Saint Severios of Antioch',
            start: '2024-02-08',
            end: '2024-02-08'
          },
          {
            title: 'Commemoration of HG Mathews Mar Epiphanios (St. Thomas Cathedral Kollam)',
            start: '2024-02-09',
            end: '2024-02-09'
          },
          {
            title: 'First Sunday of Great Lent (Kothine Sunday) (Pethurtha of the Great Lent)',
            start: '2024-02-11',
            end: '2024-02-11'
          },
          {
            title: 'First Monday of the Great Lent (Shubkono)',
            start: '2024-02-12',
            end: '2024-02-12'
          },
          {
            title: 'Commemoration of Patriarch Ignatius Elias III (Manjinikkara Dayara), First Tuesday of the Great Lent',
            start: '2024-02-13',
            end: '2024-02-13'
          },
           {
            title: 'Commemoration of Mar Ephrem Malpan the Syrian & Mar Theodorus of Amasea',
            start: '2024-02-13',
            end: '2024-02-13'
          },
          {
            title: 'First Wednesday of the Great Lent',
            start: '2024-02-14',
            end: '2024-02-14'
          },
          {
            title: 'First Thursday of the Great Lent',
            start: '2024-02-15',
            end: '2024-02-15'
          },
          {
            title: 'First Friday of the Great Lent',
            start: '2024-02-16',
            end: '2024-02-16'
          },
          {
            title: 'Commemoration of HG Geevarghese Mar Osthathios (St. Paul`s Mission Chapel, Mavelikkara)',
            start: '2024-02-16',
            end: '2024-02-16'
          },
          {
            title: 'First Saturday of the Great Lent',
            start: '2024-02-17',
            end: '2024-02-17'
          },
          {
            title: 'Second Sunday of Great Lent (Lepers Sunday)',
            start: '2024-02-18',
            end: '2024-02-18'
          },
          {
            title: 'Second Monday of the Great Lent',
            start: '2024-02-19',
            end: '2024-02-19'
          },
          {
            title: 'Commemoration of Elias Mar Julius Metropolitan (Manjanikara Dayra)',
            start: '2024-02-19',
            end: '2024-02-19'
          },
          {
            title: 'Second Tuesday of the Great Lent',
            start: '2024-02-20',
            end: '2024-02-20'
          },
           {
            title: 'Feast of the Establishment of the Throne in Antioch by Saint Peter',
            start: '2024-02-21',
            end: '2024-02-21'
          },
          {
            title: 'Second Wednesday of the Great Lent',
            start: '2024-02-21',
            end: '2024-02-21'
          },
          {
            title: 'Second Thursday of the Great Lent',
            start: '2024-02-22',
            end: '2024-02-22'
          },
          {
            title: 'Feast of St Policarpos & St. Geevarghese Mar Dionysius Metropolitan Vatasseril, Malankara Church Bhasuran (Orthodox Theological Old Seminary Chapel, Kottayam)',
            start: '2024-02-23',
            end: '2024-02-23'
          },
          {
            title: 'Second Friday of the Great Lent, Commemoration of HG Thomas Mar Makarios (Devalokam Aramana Chapel, Kottayam)',
            start: '2024-02-23',
            end: '2024-02-23'
          },
          {
            title: 'Feast of St. Mathew the Evangelist, Second Saturday of the Great Lent',
            start: '2024-02-24',
            end: '2024-02-24'
          },
          {
            title: 'Third Sunday of Great Lent (Palsy Sunday)',
            start: '2024-02-25',
            end: '2024-02-25'
          },
          {
            title: 'Third Monday of the Great Lent',
            start: '2024-02-26',
            end: '2024-02-26'
          },
          {
            title: 'Third Tuesday of the Great Lent',
            start: '2024-02-27',
            end: '2024-02-27'
          },
          {
            title: 'Commemoration of Mar Aprem Malpan',
            start: '2024-02-28',
            end: '2024-02-28'
          },
          {
            title: 'Commemoration of Mar Theodoros the Martyr',
            start: '2024-02-28',
            end: '2024-02-28'
          },
          {
            title: 'Third Wednesday of the Great Lent',
            start: '2024-02-28',
            end: '2024-02-28'
          },
          {
            title: 'Third Thursday of the Great Lent',
            start: '2024-02-29',
            end: '2024-02-29'
          },
          {
            title: 'Third Friday of the Great Lent',
            start: '2024-03-01',
            end: '2024-03-01'
          },
          {
            title: 'Third Saturday of the Great Lent',
            start: '2024-03-02',
            end: '2024-03-02'
          },
          {
            title: 'Commemoration of King Abgar of Edessa',
            start: '2024-03-02',
            end: '2024-03-02'
          },
          {
            title: 'Memorial of Konattu Abraham Malpan (Pampakuda)',
            start: '2024-03-02',
            end: '2024-03-02'
          },
          {
            title: 'Fourth Sunday of Great Lent (Canaanite woman)',
            start: '2024-03-03',
            end: '2024-03-03'
          },
          {
            title: 'Fourth Monday of the Great Lent',
            start: '2024-03-04',
            end: '2024-03-04'
          },
          {
            title: 'Feast of St Theodore of Amasea and St Ephrem the Syrian',
            start: '2024-03-04',
            end: '2024-03-04'
          },
          {
            title: 'Fourth Tuesday of the Great Lent',
            start: '2024-03-05',
            end: '2024-03-05'
          },
          {
            title: 'Fourth Wednesday of the Great Lent (Mid Lent)',
            start: '2024-03-06',
            end: '2024-03-06'
          },
          {
            title: 'Fourth Thursday of the Great Lent',
            start: '2024-03-07',
            end: '2024-03-07'
          },
          {
            title: 'Fourth Friday of the Great Lent',
            start: '2024-03-08',
            end: '2024-03-08'
          },
          {
            title: 'Fourth Saturday of the Great Lent',
            start: '2024-03-09',
            end: '2024-03-09'
          },
          {
            title: 'Memory of Forty Martyrs of Sebastia',
            start: '2024-03-09',
            end: '2024-03-09'
          },
          {
            title: 'Commemoration of Ambattu Geevarghese Mar Coorilose Metropolitan (Angamaly Cheria Palli)',
            start: '2024-03-09',
            end: '2024-03-09'
          },
          {
            title: 'Fifth Sunday of Great Lent (Kpiptho/Crippled woman)',
            start: '2024-03-10',
            end: '2024-03-10'
          },
          {
            title: 'Fifth Monday of the Great Lent',
            start: '2024-03-11',
            end: '2024-03-11'
          },
          {
            title: 'Fifth Tuesday of the Great Lent',
            start: '2024-03-12',
            end: '2024-03-12'
          },
          {
            title: 'Fifth Wednesday of the Great Lent',
            start: '2024-03-13',
            end: '2024-03-13'
          },
          {
            title: 'Fifth Thursday of the Great Lent',
            start: '2024-03-14',
            end: '2024-03-14'
          },
          {
            title: 'Fifth Friday of the Great Lent',
            start: '2024-03-15',
            end: '2024-03-15'
          },
          {
            title: 'Fifth Saturday of the Great Lent',
            start: '2024-03-16',
            end: '2024-03-16'
          },
          {
            title: 'Commemoration of HG Paulose Mar Severios Metropolitan (Kunnamkulam Arthat Puthur Church)',
            start: '2024-03-17',
            end: '2024-03-17'
          },
          {
            title: 'Sixth Sunday of Great Lent (Blind Man, Catholicate Day)',
            start: '2024-03-17',
            end: '2024-03-17'
          },
           {
            title: 'Monday before Hosanna',
            start: '2024-03-18',
            end: '2024-03-18'
          },
          {
            title: 'Commemoration of HG Sleeba Mar Osthathios Metropolitan (Kunnamkulam Arthat Puthur Church)',
            start: '2024-03-19',
            end: '2024-03-19'
          },
          {
            title: 'Tuesday before Hosanna',
            start: '2024-03-19',
            end: '2024-03-19'
          },
          {
            title: 'Wednesday before Hosanna',
            start: '2024-03-20',
            end: '2024-03-20'
          },
           {
            title: 'Thursday before Hosanna',
            start: '2024-03-21',
            end: '2024-03-21'
          },
           {
            title: 'Friday before Hosanna (40th Friday)',
            start: '2024-03-22',
            end: '2024-03-22'
          },
           {
            title: 'Commemoration of Konattu Geevarghese Mar Julios Metropolitan (Pampukuda)',
            start: '2024-03-22',
            end: '2024-03-22'
          },
           {
            title: 'Saturday before Hosanna (Lazarus Saturday)',
            start: '2024-03-23',
            end: '2024-03-23'
          },
           {
            title: 'Hosanna/Palm Sunday (Boys and Girls Day)',
            start: '2024-03-24',
            end: '2024-03-24'
          },
           {
            title: 'Vachanippu (Suboro), Anunciation to St Mary',
            start: '2024-03-25',
            end: '2024-03-25'
          },
           {
            title: 'Commemoration of Marthoma IV (Kandanadu Church)',
            start: '2024-03-25',
            end: '2024-03-25'
          },
           {
            title: 'Monday of the Passion Week',
            start: '2024-03-25',
            end: '2024-03-25'
          },
           {
            title: 'Tuesday of the Passion Week',
            start: '2024-03-26',
            end: '2024-03-26'
          },
          {
            title: 'Wednesday of the Passion Week',
            start: '2024-03-27',
            end: '2024-03-27'
          },
           {
            title: 'Passover (Maundy Thursday)',
            start: '2024-03-28',
            end: '2024-03-28'
          },
           {
            title: 'Good Friday',
            start: '2024-03-29',
            end: '2024-03-29'
          },
          {
            title: 'Gospel Saturday (Saturday of Good Tidings)',
            start: '2024-03-30',
            end: '2024-03-30'
          },
           {
            title: 'Kymtho/Easter',
            start: '2024-03-31',
            end: '2024-03-31'
          },
          
          














          
        // {
        //   groupId: '999',
        //   title: 'Repeating Event',
        //   start: '2023-02-16T16:00:00'
        // },
        // {
        //   title: 'Click for Google',
        //   url: 'https://malankaralibrary.com/book/details/2161/Malankara_Orthodox_Syrian_Church_Liturgical_Calendar_2023',
        //   start: '2023-02-28'
        // }
      ]
    });
    // var event = document.getElementById('event-name');
    //     event: 'heading'{
    //        event [
    //         {
    //          name: "Event-01",
    //         date: "00/00/00"
    //         }
    //     ]};
    //       document.getElementById("event-name-1").innerHTML=event_name.name;
    //       document.getElementById("event-date-1").innerHTML=event_name.date;
    //       console.log("hello");
    calendar.render();
  });
// var x = 0;
// var array = Array();

// function add_element_to_array()
// {
//    array[x] = document.getElementById("text1").value;
//    alert(array[x] + " had added at index " + x);
//    x++;
//    document.getElementById("text1").value = "";
//   }

//   function display_array()
//   {
//      var e = "";   
      
//      for (var y=0; y<array.length; y++)
//      {
//        e += array[y] + "<br/>";
//      }
//      document.getElementById("event-name").innerHTML = e;
// }

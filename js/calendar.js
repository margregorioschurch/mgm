document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  if (!calendarEl) {
      console.error("Calendar element not found. Aborting calendar initialization.");
      return;
  }

  // Get today's date
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  var yyyy = today.getFullYear();

  var todayFormatted = yyyy + '-' + mm + '-' + dd;

  // Initialize FullCalendar
  var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: todayFormatted, // Set initialDate to today's date
      headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [] // Start with empty events array
    });

    // Define the range of years to iterate over
    var startYear = yyyy; // var startYear = yyyy - 1; Adjusted start year to 1 years before current year
    var endYear = yyyy; // var endYear = yyyy + 1; Extended end year to 1 years after current year

    // Define an array of event details
    var events = [
      // January
      { title: 'New Year. Circumcision of our Lord. Feast of St. Basil and St. Gregory & All the Holy Fathers.', day: '01-01' },
      { title: '61th Commemoration of H. H. Baselios Geevarghese II Catholicos. (Catholicate Aramana, Devalokam). Memorial Day of Oath of Koonan Cross. (St. George Church, Mattanchery).', day: '01-03' },
      { title: 'Second Sunday after Christmas. (Niram 2)', day: '01-05' },
      { title: 'Epiphany/Danaha (Baptism of our Lord Jesus Christ). (Niram 2)', day: '01-06' },
      { title: 'Feast Commemorating the Beheading of St. John the Baptist. (Niram 8)', day: '01-07' },
      { title: 'Feast Commemorating the Martyrdom of St. Stephen. (Niram 8)', day: '01-08' },
      { title: 'First Sunday after Epiphany. (Niram 3)', day: '01-12' },
      { title: 'Feast of St. Mary for Seeds. Commemoration of Paul the Monk.', day: '01-15' },
      { title: 'Feast of St. Samuel, St. Simon & St. Antony.', day: '01-18' },
      { title: 'Second Sunday after Epiphany. (Niram 4)', day: '01-19' },
      { title: '16th Commemoration of H.G. Philipose Mar Eusebius Metropolitan. (St. Basil Dayara, Pathanamthitta).', day: '01-21' },
      { title: '209th Commemoration of Marthoma VIII. (Puthencavu Cathedral).', day: '01-22' },
      { title: 'Commemoration of St. Augen the Monk.', day: '01-23' },
      { title: 'Third Sunday after Epiphany. (Niram 5) 71th Commemoration of H. G. Paulose Mar Athanasios Metropolitan, Kuttikkattil. Thrikkunnathu Seminary, Aluva.', day: '01-26' },
      { title: '19th Commemoration of H. H. Baselios Marthoma Mathews II Catholicos. (Mount Horeb Ashram, Sasthamcotta). Republic Day.', day: '01-26' },
      // February
      { title: 'Fourth Sunday after Epiphany. (Niram 3) Mayaltho (Entry of our Lord into the Temple). (Niram 3) Commemoration of St. Simon and Hanna. (Elder’s Day). 57th Commemoration of H. G. Pathrose Mar Osthathios Metropolitan, Mookkancheril. (Carmel Dayara, Kandanadu)', day: '02-02' },
      { title: 'Feast of St. Bar Soumo - the Chief Among Mourners & Mar Kauma.', day: '02-03' },
      { title: 'Feast of Mar Severios of Antioch.', day: '02-08' },
      { title: 'Sunday before Nineveh Lent (Pethurtho of Nineveh Lent). (Niram 6) * Commemoration of All Departed Fathers and Malpans.', day: '02-09' },
      { title: '16th Commemoration of H. G. Mathews Mar Epiphanios Metropolitan. (St. Thomas Cathedral, Kollam).', day: '02-09' },
      { title: 'Monday of Nineveh Lent.', day: '02-10' },
      { title: 'The end of Nineveh Lent. (Niram 6) Commemoration of Prophet Jonah. 93rd Commemoration of Patriarch Ignatius Elias III. (Manjinikkara Dayara).', day: '02-13' },
      { title: 'Commemoration of all the Departed Priests (Kohne Sunday). (Niram 7) 13th Commemoration of Sabha Ratnam H. G. Dr. Geevarghese Mar Osthathios Metropolitan. (St. Paul\'s Chapel, Mavelikkara).', day: '02-16' },
      { title: 'Commemoration of all the Departed Faithful (Anide Sunday). (Niram 8) 91st Feast of Malankara Sabha Bhasuran St. Geevarghese Mar Dionysius Metropolitan Vattasseril. (Old Seminary, Kottayam).', day: '02-23' },
      { title: '17th Commemoration of H. G. Dr. Thomas Mar Makarios Metropolitan. (Catholicate Aramana, Devalokam). Feast of St. Policarpos of Smyrna.', day: '02-23' },
      { title: 'Feast of St. Mathew the Evangelist.', day: '02-24' },
      // March
      { title: 'First Sunday of Great Lent (Kothine Sunday). (Pethurtho of the Great Lent). (Niram 1)', day: '03-02' },
      { title: 'First Monday of the Great Lent. (Shubkono).', day: '03-03' },
      { title: 'Commemoration of Mar Ephrem Malpan & Mar Theodoros the Martyr. (First Saturday of the Great Lent). (Niram 8)', day: '03-08' },
      { title: 'Second Sunday of Great Lent (Garbo/Leper\'s Sunday). (Niram 2) x Memory of Forty Martyrs of Sebastia. 134th Commemoration of Ambattu Geevarghese Mar Coorilos Metropolitan. (Angamaly Cheriyapally).', day: '03-09' },
      { title: 'Third Sunday of Great Lent (Palsy Sunday). (Niram 3)', day: '03-16' },
      { title: '63rd Commemoration of H. G. Paulose Mar Severios Metropolitan, Mulayirickal. (Kunnamkulam Arthat Puthen Pally).', day: '03-18' },
      { title: '95th Commemoration of H. G. Sleeba Mar Osthathios Metropolitan. (Kunnamkulam Arthat Puthen Pally).', day: '03-19' },
      { title: '140th Commemoration of Konattu Geevarghese Mar Julius Metropolitan. (Pampakuda Valiyapally).', day: '03-21' },
      { title: 'Fourth Sunday of Great Lent (Canaanite woman). (Niram 4)', day: '03-23' },
      { title: 'Annunciation to St. Mary, Vachanippu (Suboro). (Niram 4) 297th Commemoration of Marthoma IV. (Kandanadu Cathedral).', day: '03-25' },
      { title: 'Mid Lent. (Niram 8) * Commemoration of King Abgar of Uraha.', day: '03-26' },
      { title: 'Fifth Sunday of Great Lent (Kphiphtho/Crippled woman). (Niram 5)', day: '03-30' },
      // April
      { title: '60th Commemoration of H. G. Kuriakose Mar Gregorios Metropolitan. (Pampady Dayara).', day: '04-05' },
      { title: 'Sixth Sunday of Great Lent (Blind Man). (Niram 6) Malankara Orthodox Church Day Catholicate Day.', day: '04-06' },
      { title: '217th Commemoration of Valiya Mar Dionysius Metropolitan. (Marthoma VI) (Puthencavu Cathedral).', day: '04-07' },
      { title: '40th Friday. (Niram 2)', day: '04-11' },
      { title: 'Lazarus\' Saturday. (Niram 8) 12th Commemoration of H. G. Geevarghese Mar Ivanios Metropolitan. (Mar Baselios Dayara, Njaliakuzhy).', day: '04-12' },
      { title: 'Hosanna/Palm Sunday (Boys’ and Girls’ Day). (Niram 7)', day: '04-13' },
      { title: 'Monday of the Holy Week.', day: '04-14' },
      { title: 'Tuesday of the Holy Week.', day: '04-15' },
      { title: 'Wednesday of the Holy Week.', day: '04-16' },
      { title: 'Passover (Maundy Thursday). 74th Commemoration of Catholicate Ratnadeepam H. G. Geevarghese Mar Philoxenos Metropolitan. (Puthencavu Cathedral).', day: '04-17' },
      { title: 'Holy Friday of Crucifixion.', day: '04-18' },
      { title: 'Gospel Saturday (Saturday of Good Tidings).', day: '04-19' },
      { title: 'Kyomtho/Easter. (Evening to 1st Kauma of Night - Niram 8; Then Niram 1)', day: '04-20' },
      { title: 'Hevoro Monday. (Niram 2) 231st Commemoration of Yuhanon Mar Ivanios Episcopa. (Chengannur Old Syrian Church)', day: '04-21' },
      { title: 'Hevoro Tuesday. (Niram 3) 337th Commemoration of Marthoma III. (Kadampanadu Cathedral).', day: '04-22' },
      { title: 'Hevoro Wednesday. (Niram 4) Feast of St. George.', day: '04-23' },
      { title: 'Hevoro Thursday. (Niram 5)', day: '04-24' },
      { title: 'Hevoro Friday. (Niram 6) * Commemoration of Confessors of Faith. 355th Commemoration of Marthoma I, the Great. (Ankamali Cheriyapally). Feast of Saint Mark the Evangelist.', day: '04-25' },
      { title: 'Hevoro Saturday. (Niram 7)', day: '04-26' },
      { title: 'New Sunday (First Sunday after Easter). (Evening to 1st Kauma of Night - Niram 8; Then Niram 1) 354th Commemoration of Mar Gregorios Abdel Jaleel Bava. (Vadakan Paravur Church).', day: '04-27' },
      { title: 'Commemoration of Mar Sabor & Mar Afroth.', day: '04-29' },
      // May
      { title: 'Commemoration of St. James the Apostle. (Son of Zebedee).', day: '05-01' },
      { title: '112th Commemoration of H. H. Baselios Paulose I Catholicos. (Pampakuda Cheriyapally).', day: '05-03' },
      { title: 'First Sunday after New Sunday (Second Sunday after Easter). (Niram 2)', day: '05-04' },
      { title: 'Feast of St. John the Apostle. 20th Commemoration of Marthoma V. (Niranam Valiyapally).', day: '05-08' },
      { title: 'Feast of St. Simon the Zealot.', day: '05-10' },
      { title: 'Second Sunday after New Sunday (Third Sunday after Easter). (Niram 3)', day: '05-11' },
      { title: 'Feast of St. Mary for Good Crops & Harvest. Commemoration of St. Isaac.', day: '05-15' },
      { title: '35th Commemoration of H. G. Yuhanon Mar Severios Metropolitan. (Zion Seminary, Koratty).', day: '05-16' },
      { title: 'Third Sunday after New Sunday (Fourth Sunday after Easter). (Niram 4)', day: '05-18' },
      { title: '200th Commemoration of H. G. Mar Dionysius III (Punnathra) Metropolitan. (Kottayam Cheriyapally).', day: '05-19' },
      { title: 'Commemoration of the King Constantine and Helen the Queen. Commemoration of the 4 Evangelists & All Fathers of the 3 Ecumenical Synods.', day: '05-20' },
      { title: 'Fourth Sunday after New Sunday (Fifth Sunday after Easter). (Niram 5)', day: '05-25' },
      { title: '11th Commemoration of H. H. Baselios Marthoma Didymus I Catholicos. (Mount Tabor Dayara, Pathanapuram).', day: '05-26' },
      { title: 'Ascension of our Lord (Suloqo). (Niram 5)', day: '05-29' },
      { title: 'The Days of Preparation to Pentecost.', day: '05-30' },
      // June
      { title: 'Fifth Sunday after New Sunday (Sixth Sunday after Easter Sunday before Pentecost). (Niram 6) Sunday School Day.', day: '06-01' },
      { title: 'World Environment Day.', day: '06-05' },
      { title: '101st Commemoration of Karottuveettil H. G. Yuyakim Mar Ivanios Metropolitan. (Parumala Seminary).', day: '06-06' },
      { title: '18th Commemoration of H. G. Augen Mar Dionysius Metropolitan. (Vallikkattu Dayara, Vakathanam).', day: '06-18' },
      { title: 'Pentecost Sunday. (Niram 7)', day: '06-08' },
      { title: 'Commemoration of St. Aaron the Monk.', day: '06-09' },
      { title: 'Feast of St. Bartholomew the Apostle. 136th Commemoration of H. G. Simon Mar Athanasios Metropolitan. (Kottayam Puthen Pally).', day: '06-11' },
      { title: 'Golden Friday (Friday after Pentecost).', day: '06-13' },
      { title: 'First Sunday after Pentecost. (Niram 8) Feast of St. Mary, Commemoration of the Establishment of the First Church in St. Mary\'s Name.', day: '06-15' },
      { title: 'Beginning of Apostles\' Fast (13 days Sleeha Fast).', day: '06-16' },
      { title: 'Feast of St. James, Brother of Jesus and the First Bishop of Jerusalem.', day: '06-19' },
      { title: 'Second Sunday after Pentecost. (Niram 1)', day: '06-22' },
      { title: 'Commemoration of the Birth of St. John the Baptist.', day: '06-24' },
      { title: 'Third Sunday after Pentecost. (Niram 2) Feast of St. Peter and St. Paul. End of Apostles\' Fast (13 days Sleeha Fast).', day: '06-29' },
      { title: 'Feast of the Twelve Apostles.', day: '06-30' },
      // July
      { title: 'Dukhrono of St. Thomas. (Niram 8)', day: '07-03' },
      { title: 'Feast of the Seventy-Two Evangelists. 216th Commemoration of Marthoma VII. (Kolencherry Church).', day: '07-05' },
      { title: 'Fourth Sunday after Pentecost. (Niram 3) Mission Sunday.', day: '07-06' },
      { title: '28th Commemoration of H. G. Zachariah Mar Dionysius Metropolitan. (Mount Tabor Dayara, Pathanapuram).', day: '07-07' },
      { title: '252nd Commemoration of H. G. Yuhannon Mar Gregorios Metropolitan. (Mulanthuruthy Cathedral).', day: '07-10' },
      { title: '116th Commemoration of Malankara Sabha Thejus H. G. Pulikkottil Joseph Mar Dionysius V Metropolitan, Founder of the Kottayam M. D. Seminary. (Old Seminary, Kottayam).', day: '07-11' },
      { title: '4th Commemoration of H. H. Baselios Marthoma Paulose II Catholicos. (Catholicate Aramana, Devalokam).', day: '07-12' },
      { title: 'Fifth Sunday after Pentecost. (Niram 4)', day: '07-13' },
      { title: 'Feast St. Kuriakose the Martyr and his mother Marth Yulithy & St. Abahai of Nicea.', day: '07-15' },
      { title: 'Sixth Sunday after Pentecost. (Niram 5) Feast of Prophet Mar Elijah.', day: '07-20' },
      { title: 'Feast of St. Mary Magdalene.', day: '07-22' },
      { title: '26th Commemoration of H. G. Geevarghese Mar Dioscoros Metropolitan. (Holy Trinity Ashram, Ranni).', day: '07-23' },
      { title: 'Feast of Mar Epiphanios of Cyprus.', day: '07-25' },
      { title: 'Seventh Sunday after Pentecost. (Niram 6) Feast of St. Simon the Stylite.', day: '07-27' },
      { title: '739th Feast of Mar Gregorios Bar Hebraeus.', day: '07-31' },
      // August
      { title: 'Beginning of Assumption (Shoonoyo) Fast (15 days). Feast of Martyrs Marth Shmuni, her 7 children and Eliazar their teacher.', day: '08-01' },
      { title: '13th Commemoration of H. G. Paulose Mar Pachomios Metropolitan (Bethany Ashram, Ranni Perunad).', day: '08-01' },
      { title: 'Eighth Sunday after Pentecost. (Niram 7)', day: '08-03' },
      { title: 'The festival of Transfiguration (Koodara Perunal). (Niram 6) 60th Commemoration of Malankarayude Dharmayogy H. G. Alexios Mar Theodosios Metropolitan. (Bethany Ashram, Ranni-Perunad).', day: '08-06' },
      { title: 'Feast of St. Demetrios of Thessalonica. Commemoration of Yathivaryan Fr. Younan (Anchal Achen).', day: '08-07' },
      { title: 'First Sunday after the Transfiguration. (Niram 8)', day: '08-10' },
      { title: 'Feast of St. Azazayel the Martyr.', day: '08-12' },
      { title: 'Commemoration of Prophet Micha.', day: '08-13' },
      { title: 'Festival of the Assumption of St. Mary (Shoonoyo Perunal). (Niram 7) Indian Independence Day. 110th Commemoration of Patriarch Mar Ignatios Abded Meshiha II. (Kurkuma Dayara). Martha Mariam Samajam day. Kottayam Devalokam Catholicate Aramana Chapel Perunal.', day: '08-15' },
      { title: '332nd Commemoration of Mar Ivanios Hidayatulla Episcopa (Mulanthuruthy Cathedral).', day: '08-16' },
      { title: 'First Sunday after the feast of the Assumption of St. Mary. (Niram 1)', day: '08-17' },
      { title: 'Feast of All Prophets. Feast of St. Labbaeus (Thaddeus) the Apostle. 34th Commemoration of H. G. Joseph Mar Pachomios Metropolitan (Carmelkunnu Pally, Mulakkulam).', day: '08-19' },
      { title: '2nd Commemoration of H. G. Zachariah Mar Anthonios Metropolitan (Mount Horeb Ashram, Sastamcotta). Commemoration of Prophet Samuel.', day: '08-20' },
      { title: 'Second Sunday after the feast of the Assumption of St. Mary. (Niram 2) Feast of St. Matthias the Apostle. 7th Commemoration of H. G. Thomas Mar Athanasios Metropolitan (St. George Dayara, Othera).', day: '08-24' },
      { title: 'Feast of the Beheading of St. John the Baptist.', day: '08-29' },
      { title: 'Third Sunday after the feast of the Assumption of St. Mary. (Niram 3) 45th Commemoration of H. G. Paret Mathews Mar Ivanios Metropolitan (Mar Kuriakose Dayara, Pampady).', day: '08-31' },
      // September
      { title: '151st Commemoration of H. G. Yuyakim Mar Coorilos Metropolitan. (Mulanthuruthy Cathedral).', day: '09-02' },
      { title: 'Fourth Sunday after the feast of the Assumption of St. Mary. (Niram 4)', day: '09-07' },
      { title: 'Feast of the Birth of St. Mary, the Mother of God.', day: '09-08' },
      { title: 'Feast of St. Mary\'s Parents, Youyakim and Hanna.', day: '09-09' },
      { title: 'Fifth Sunday after the feast of the Assumption of St. Mary. (Niram 8) Feast of the Holy Cross. (Sleeba Perunal).', day: '09-14' },
      { title: '113th Anniversary of the Establishment of Catholicate in Malankara.', day: '09-15' },
      { title: 'First Sunday after the feast of the Holy Cross. (Niram 1)', day: '09-21' },
      { title: '102nd Commemoration of H. G. Antonio Francisco Xavier Alvarez Mar Julius Metropolitan. (Panjim St. Mary’s Church, Goa).', day: '09-23' },
      { title: 'Feast of St. Dimeth of Persia.', day: '09-24' },
      { title: '131st Commemoration of Patriarch Mar Ignatius Peter III of Antioch.', day: '09-25' },
      { title: 'Second Sunday after the feast of the Holy Cross. (Niram 2) 28th Commemoration of H. G. Philipose Mar Theophilos Metropolitan. (Aluva Thrikkunathu Seminary).', day: '09-28' },
      // October
      { title: 'Feast of Evangelist Adai, Abahai the Martyr & Mar Malke.', day: '10-01' },
      { title: '137th Commemoration of Karottu veettil Shemavoon Mar Dionysius. (Kadungamangalam Church).', day: '10-02' },
      { title: '340th Feast of St. Baselios Yeldho Catholicos. (Kothamangalam Cheriyapally).', day: '10-03' },
      { title: 'Third Sunday after the feast of the Holy Cross. (Niram 3) Seminary Day.', day: '10-05' },
      { title: 'Feast of Martyrs Sargis & Bakos.', day: '10-07' },
      { title: 'Fourth Sunday after the feast of the Holy Cross. (Niram 4)', day: '10-12' },
      { title: '170th Commemoration of H. G. Cheppad Philipose Mar Dionysius IV Metropolitan. (Cheppad Church).', day: '10-12' },
      { title: '45th Commemoration of H. G. Yuhannon Mar Athanasios Episcopa. (Bethany Ashram, Ranni-Perunadu).', day: '10-12' },
      { title: 'Commemoration of St. Athanasios of Alexandria.', day: '10-14' },
      { title: '4th Anniversary of the Enthronement of H. H. Baselios Marthoma Mathews III Catholicos. Feast of St. Osyo the Ascetic.', day: '10-15' },
      { title: 'Feast of St. Luke the Evangelist.', day: '10-18' },
      { title: 'Fifth Sunday after the feast of the Holy Cross. (Niram 5)', day: '10-19' },
      { title: '261st Commemoration of H. H. Mar Baselios Shakralla. (Kandanadu Cathedral). Feast of St. James the Apostle, Son of Alphaeus.', day: '10-22' },
      { title: '8th Commemoration of H. G. Zachariah Mar Theophilos Metropolitan. (Thadagam Ashram, Coimbatore).', day: '10-24' },
      { title: 'Sixth Sunday after the feast of the Holy Cross. (Niram 6)', day: '10-26' },
      // November
      { title: 'Feast of All Saints.', day: '11-01' },
      { title: 'Koodosh Eetho Sunday (Sanctification). (Niram 1)', day: '11-02' },
      { title: '123rd Commemoration of St. Geevarghese Mar Gregorios of Parumala. (Parumala Seminary).', day: '11-02' },
      { title: '118th Commemoration of H. G. Kadavil Paulose Mar Athanasios Metropolitan. (Thrikkunnathu Seminary, Aluva).', day: '11-02' },
      { title: '18th Commemoration of H. G. Stephanos Mar Theodosius Metropolitan. (St. Thomas Ashram, Bhilai).', day: '11-05' },
      { title: '59th Commemoration of H. G. Vayaliparambil Geevarghese Mar Gregorios Metropolitan. (Thrikkunnathu Seminary, Aluva).', day: '11-06' },
      { title: '29th Commemoration of H. H. Mar Baselios Marthoma Mathews I Catholicos. (Catholicate Aramana, Devalokam).', day: '11-08' },
      { title: 'Hoodosh Eetho Sunday (Dedication). (Niram 2)', day: '11-09' },
      { title: '213th Commemoration of Veda Ratnam Kayamkulam Philipose Ramban. (Kannamkode Cathedral, Adoor).', day: '11-12' },
      { title: 'Feast of St. John Chrysostom.', day: '11-13' },
      { title: 'Feast of St. Philip the Apostle.', day: '11-14' },
      { title: 'Sunday of Revelation to Zachariah (Father of John the Baptist). (Niram 3)', day: '11-16' },
      { title: '14th Commemoration of H. G. Job Mar Philoxenos Metropolitan. (Mount Tabor Dayara, Pathanapuram).', day: '11-20' },
      { title: 'Commemorating the Entry of St. Mary to the Temple of Jerusalem.', day: '11-21' },
      { title: 'Sunday of Annunciation to St. Mary. (Niram 4)', day: '11-23' },
      { title: '209th Commemoration of Malankara Sabha Jyothis H. G. Pulikkottil Joseph Mar Dionysius II, the founder of Old Seminary & 29th Commemoration of H. G. Paulose Mar Gregorios Metropolitan. (Old Seminary, Kottayam).', day: '11-24' },
      { title: 'Feast of Mar Jacob Baradaeus & Mar Dionysius Barsleebi.', day: '11-28' },
      { title: 'Feast of Mar Jacob of Serugh.', day: '11-29' },
      { title: 'Sunday of St. Mary\'s Journey to Elizabeth. (Niram 5) Feast of St. Andrew the Apostle.', day: '11-30' },
      // December
      { title: 'Beginning of the Fast of the Nativity (25 days Fast).', day: '12-01' },
      { title: '53rd Commemoration of H. G. Thoma Mar Dionysius Metropolitan. (Mount Tabor Dayara, Pathanapuram).', day: '12-03' },
      { title: 'Feast of the Martyrs Marth Barbara and Marth Juliana.', day: '12-04' },
      { title: 'Feast of St. Sokhe, Bishop of Myre. (St. Nikolas, Christmas Father).', day: '12-06' },
      { title: 'Sunday of Birth of John the Baptist (Children\'s Day). (Niram 6) Intercession Day.', day: '12-07' },
      { title: '50th Commemoration of H. H. Baselios Mar Augen I Catholicos. (Catholicate Aramana, Devalokam).', day: '12-08' },
      { title: '13th Commemoration of H. G. Mathews Mar Barnabas Metropolitan. (St. Peter\'s & St. Paul\'s Church, Valayanchirangara).', day: '12-09' },
      { title: 'Feast of the Martyrs, St. Behanam, his sister, St. Sarah, and Co-Martyrs. Feast of Mar Philoxenos of Mabugh.', day: '12-10' },
      { title: '35th Commemoration of H. G. Daniel Mar Philoxenos Metropolitan. (Basil Aramana, Pathanamthitta).', day: '12-13' },
      { title: 'Sunday of Revelation to St. Joseph. (Niram 7)', day: '12-14' },
      { title: '97th Commemoration of H. H. Baselios Mar Geevarghese I Catholicos (Vallikattu Dayara, Vakathanam).', day: '12-17' },
      { title: 'Feast of St. Thomas the Apostle (Commemoration of the Day he was stabbed by Spear).', day: '12-18' },
      { title: 'Feast of Mar Ignatius Nourono of Antioch.', day: '12-20' },
      { title: 'Sunday before Christmas. (Niram 8) Dukhrono of St. Thomas the Apostle.', day: '12-21' },
      { title: 'Yeldho, Incarnation of our Lord. (Christmas). (Niram 1)', day: '12-25' },
      { title: 'Feast of the Exultation of St. Mary, Mother of God. (Niram 1)', day: '12-26' },
      { title: '39th Commemoration of H. G. Yakob Mar Policarpos Metropolitan. (Zion Seminary, Koratty).', day: '12-26' },
      { title: 'Feast Commemorating the Slaughter of the Infants.', day: '12-27' },
      { title: 'First Sunday after Christmas. (Niram 1)', day: '12-28' },
      // End of var events
      // How to ask chatGPT for text formatting!
      // "Can you convert the list of dates and events for [month] into the JavaScript array format like you did for [previous month]?"
      // "Can you convert the December events and their dates into a JavaScript array format?"
    ];

// Iterate through each year in the specified range
for (var year = startYear; year <= endYear; year++) {
    // Iterate through each event detail in the events array
    events.forEach(function(eventDetail) {
        // Construct the event date string using the current year and event day
        var eventDate = year + '-' + eventDetail.day;
  
        // Create the event object with the specified title, start date, and end date (all-day event)
        var event = {
            title: eventDetail.title,
            start: eventDate,
            end: eventDate // All-day event ends on the same day
        };
  
        // Add the event to the calendar
        calendar.addEvent(event);
    });
  }
  
  // Render the calendar with added events
  calendar.render();
});

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      initialDate: '2023-01-01',
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
            start: '2024-01-02T06:00:00',
            end: '2024-01-02'
          },
          {
            title: 'Feast of St. John The Apostle and Evangelist',
            start: '2024-01-02T11:00:00',
            end: '2024-01-02'
          },
          {
            title: 'Commemoration of HH Mar Baselios Geevarghese II Catholicos (Devalokam Aramana)',
            start: '2024-01-03',
            end: '2024-01-03'
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

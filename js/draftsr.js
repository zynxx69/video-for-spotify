/* ==========================================================================
   STUDENT REPUBLIC — EDITABLE CONTENT FILE
   ==========================================================================
   This is the ONLY file you need to touch to update the website:
     - add / remove / edit EVENTS
     - add / remove / edit OFFICERS
     - change the Facebook page link
   ========================================================================== */

/* --------------------------------------------------------------------------
   1) FACEBOOK PAGE LINK
   Replace the URL below with your official Student Republic Facebook page.
   -------------------------------------------------------------------------- */
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61563801204011";

/* --------------------------------------------------------------------------
   2) EVENTS
   Add a new event by copying one of the objects below (including the { })
   and pasting it inside the square brackets, then edit the fields.

   FIELDS:
   - title       : event name (text)
   - start       : "YYYY-MM-DDTHH:MM" 24-hour format, e.g. "2026-09-05T08:00"
   - end         : same format as start. Used to detect "ongoing" events.
                   If the event has no clear end time, just add a few hours.
   - description : short 1-2 sentence description
   - location     : where on campus, e.g. "ISAT-U Dumangas Gymnasium"
   - image       : optional. Path to an image file, e.g. "assets/events/foundationday.jpg"
                   Leave as "" (empty quotes) to show a plain placeholder instead.
   - announced   : true  -> visible on the website
                   false -> HIDDEN from the site (use this to prepare an event
                            in advance without publishing it yet — flip to
                            true whenever you're ready to announce it)

   The website automatically figures out if an event is "ongoing", "upcoming"
   or "past" by comparing start/end to the current date and time — you never
   need to set that manually.
   -------------------------------------------------------------------------- */
   
const eventsData = [
  {
  title: "Orientation",           /* On Going*/ 
  start: "2026-09-3T10:27",
  end: "2026-09-1T11:00",
  description: "Campus-wide orientation for new students.",
  location: "Gymnasium",
  image: "orientation.jpg",
  announced: true
  },
  {
    title: "General Assembly & Orientation",
    start: "2026-08-20T8:00",
    end:   "2026-08-21T12:30",
    description: "Campus-wide orientation on Student Republic programs, committees, and how to get involved this semester.",
    location: "ISAT-U Dumangas Campus Gymnasium",
    image: "orientation.jpg",
    announced: true
  },
  {
    title: "Student Leadership Training",  /* upcoming */
    start: "2026-09-21T08:00",
    end:   "2026-09-29T17:00",
    description: "A full-day workshop for class officers and org leaders on leadership, communication, and event planning.",
    location: "ISAT-U Dumangas Multipurpose Hall",
    image: "student leadership.jpg",
    announced: true
  },
  {
    title: "Foundation Week Celebration",    
    start: "2026-08-29T13:00",
    end:   "2026-08-30T18:00", /*  Example    */
    description: "A week-long celebration featuring sports, talent competitions, and academic exhibits across all departments.",
    location: "Campus-wide",
    image: "election.jpeg",
    announced: true
  },
  {
    title: "Intramurals Sportsfest",
    start: "2026-08-15T07:00",
    end:   "2026-08-30T18:00",
    description: "Department vs. department sports competition — basketball, volleyball, and more.",
    location: "ISAT-U Dumangas Open Field & Gymnasium",
    image: "",
    announced: false
  },
  {
    title: "Environmental Do-Day",    /* Past */
    start: "2026-08-09T06:30",
    end:   "2026-08-09T10:00",
    description: "Campus and coastal clean-up in partnership with the Environmental Committee. All students welcome.",
    location: "ISAT-U Dumangas Grounds",
    image: "clean up drive.jpeg",
    announced: true
  },
  {
    title: "Student Elections",
    start: "2026-08-16T08:00",
    end:   "2026-08-16T16:00",
    description: "Annual election of the next set of Student Republic officers. Every enrolled student may vote.",
    location: "Designated polling areas per department",
    image: "election.jpeg",
    announced: true
  },
  {
    title: "Student Day",
    start: "2026-09-15T08:00",
    end:   "2026-09-19T16:00",
    description: "enjoy students hihi gwapo si paul",
    location: "ISATU Dumangas Gymnasium",
    image: "election.jpeg",
    announced: true
  },

  /* Example of an UNANNOUNCED / draft event (hidden from the site until
     you set announced to true):

  ,{
    title: "Surprise Christmas Party",
    start: "2026-12-18T13:00",
    end:   "2026-12-18T17:00",
    description: "To be revealed soon!",
    location: "TBA",
    image: "",
    announced: false
  }
  */
];
const officersData = [
  { name: "Jose B. Baltero III, Ed. D.",     role: "Chair, SR Board of advisers, ASCOS Coordinator",          photo: "untitled10_20260806200512.jpg" },
  { name: "Klarc Ceasar B. Corona",      role: "President",                photo: "corona.jpg" },
  { name: "Cherrie Mae C. Paguntalan",        role: "Vice President", photo: "paguntalan.jpg" },
  { name: "Louie C. de Asis		 ",         role: "Executive Secretary", photo: "de asis.jpg" },
  { name: "Rhea Karel Dula-ogon Buhawi		",      role: "Recording Secretary",         photo: "buhawi.jpg" },
  { name: "Karen Jemina Grace D. Soliman 		",        role: "Senate President",                 photo: "[5] soliman.jpg" },
  { name: "Nicole Shayne D. Bayona",       role: "Senate Pro Tempore",                   photo: "[6] bayona.jpg" },
  { name: "Jessica D. Donaire",      role: "Senator, DOE",      photo: "[7] d. jessica.jpg" },
  { name: "Jennelyn D. Donaire",     role: "Senator, DWM",          photo: "[8] d. jennelyn.jpg" },
  { name: "Keit Bryan D. Demavivas",     role: "Senator, DENR",          photo: "[9] demavivas k_.jpg" },
  { name: "Dwight Denver D. Depliyan",     role: "Senator, SGT, DOJ",          photo: "[10] depliyan.jpg" },
  { name: "Jericho D. Defiño",     role: "Senator, DILG",          photo: "[11] defiño.jpg" },
  { name: "John Paul B. Palma",     role: "Senator, DPIC",          photo: "[12] palma.jpg" },
  { name: "Richsha Ella D. Deypalubos",     role: "Senator, DSCA",          photo: "[13] deypalubos.jpg" },
  { name: "Ashley Jean P. Demafeliz",     role: "Senator, DPW",          photo: "[14] demafeliz.jpg" },
  { name: "Neagen P. Fernandez",     role: "Senator, DEA",          photo: "[15] fernandez.jpg" },
  { name: "Jorielle Faye P. Dujali",     role: "Senator, DOH",          photo: "[16] dujali.jpg" },
  { name: "Jhun Rhey F. Gabucay",     role: "BSIT Governor",          photo: "[19] gabucay.jpg" },
  { name: "Elizer E. Sayo",     role: "BTVTED Governor",          photo: "[20] sayo.jpg" },
  { name: "Shahara J. Cabahit",     role: "BSHM Governor",          photo: "[21] cabahit.jpg" },   
  { name: "Vennace Jenn M. Demavivas",     role: "BSE Governor",          photo: "[17] demavivas v.j..jpg" },       
  { name: "Edna Faith D. Dequito",     role: "BINDTECH Governor",          photo: "[18] dequito.jpg" },
  { name: "Jewel Mamon",     role: " 1st Year Batch Representative",          photo: "" },
  { name: "Queeni",     role: " 1st Year Batch Representative",          photo: "" },
  { name: "Stacey Kaye T. Digdigan",     role: " 2nd Year Batch Representative",          photo: "[22] digdigan.jpg" },
  { name: "Crystal Gayle A. Eldo",     role: " 2nd Year Batch Representative",          photo: "[23] eldo.jpg" },
  { name: "Eza R. Diosanta",     role: " 3rd Year Batch Representative",          photo: "[24] diosanta.jpg" },
  { name: "John Patrick G. Arbis",     role: " 3rd Year Batch Representative",          photo: "[25] arbis.jpg" },
  { name: "Alijah A. Balibol",     role: " 4th Year Batch Representative",          photo: "[27] balibol.jpg" },
  { name: "John Axel C. Buyco",     role: " 4th Year Batch Representative",          photo: "[26] buyco.jpg" },
];
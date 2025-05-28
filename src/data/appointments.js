export const calendarData = [
  { label: "Mon 25", date: "2021-10-25", times: ["09:00 AM", "10:00 AM", "11:00 AM"] },
  { label: "Tue 26", date: "2021-10-26", times: ["10:00 AM", "11:00 AM", "02:00 PM"] },
  { label: "Wed 27", date: "2021-10-27", times: ["09:30 AM", "02:00 PM", "03:00 PM"] },
  { label: "Thu 28", date: "2021-10-28", times: ["08:00 AM", "01:00 PM", "02:00 PM"] },
  { label: "Fri 29", date: "2021-10-29", times: ["11:30 AM", "02:00 PM", "04:00 PM"] },
  { label: "Sat 30", date: "2021-10-30", times: ["10:00 AM", "11:00 AM", "02:00 PM"] },
  { label: "Sun 31", date: "2021-10-31", times: ["11:30 AM", "02:00 PM", "04:00 PM"] },
];

export const appointments = [
  { title: "Dentist", time: "09:00-11:00", doctor: "Dr. Cameron Williamson", icon: "🦷" },
  { title: "Physiotherapy Appointment", time: "11:00-12:00", doctor: "Dr. Kevin Djones", icon: "🦵" },
];

export const activityData = [
  // Monday
  { height: "60px", active: true },
  { height: "40px", active: false },
  { height: "30px", active: false },

  // Tuesday
  { height: "50px", active: true },
  { height: "30px", active: false },
  { height: "20px", active: false },

  // Wednesday
  { height: "60px", active: false },
  { height: "40px", active: true },
  { height: "30px", active: false },

  // Thursday
  { height: "50px", active: false },
  { height: "40px", active: true },
  { height: "30px", active: false },

  // Friday
  { height: "70px", active: true },
  { height: "50px", active: false },
  { height: "40px", active: false },

  // Saturday
  { height: "60px", active: false },
  { height: "30px", active: true },
  { height: "20px", active: false },

  // Sunday
  { height: "50px", active: true },
  { height: "30px", active: false },
  { height: "40px", active: false },
];


export const upcomingSchedule = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
      { title: "Ophthalmologist", time: "14:00 PM", icon: "👁️" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "16:00 PM", icon: "🧠" },
    ],
  },
];
const cohort = {
  name: 'September2022',
  id: 7777,
  studentNames: ['Piper', 'Em', 'Miles']
};

const cohortMessage = (cohort) => {
  console.log(`${cohort.id} - ${cohort.name} - ${cohort.studentNames.length} students in this cohort.`);
};


cohortMessage(cohort);
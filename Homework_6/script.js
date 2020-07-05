const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
];


studentAvarage(students);
groupAvarage(students);


function studentAvarage(studentsGroup) {
    studentsGroup.forEach(learner => {
        const avgLearnerMark = learner.marks.reduce((acc, value) => (acc + value)) / learner.marks.length
        console.log(`Student ${learner.name} has avarage mark: ${avgLearnerMark}`)
    });
}

function groupAvarage(studentsGroup) {
    const groupMarks = studentsGroup.flatMap((learner) => learner.marks);
    const avgGroupMark = groupMarks.reduce((acc, value) => (acc + value)) / groupMarks.length
       
    console.log(`Avarage group mark is: ${avgGroupMark}`)

}

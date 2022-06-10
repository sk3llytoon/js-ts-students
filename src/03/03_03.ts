import {student, StudentType} from "../02/02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (s: StudentType) => {
    s.isActive = true;
}

export function doesStudentLiveIn (s: StudentType, cityName: string) {
    return s.adress.city.title === cityName;
}
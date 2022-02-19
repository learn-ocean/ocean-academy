import { COURSE_TYPE, _courses, getCourseFromIdx } from "./courses";

const USER_ID_SIZE = 8
const COURSE_IDX_SIZE = 3

export interface FromTokenId{
    courseObj: COURSE_TYPE;
    userId: number;
}

export const toTokenId = (userId: number, course: COURSE_TYPE): string => {
    const courseIndex = _courses.indexOf(course) + 1;
    const courseIndexPadded = courseIndex.toString().padStart(COURSE_IDX_SIZE, '0');
    const userIdPadded = userId.toString().padStart(USER_ID_SIZE, '0');
   
    return courseIndexPadded + userIdPadded
}


export const fromTokenId = (tokenId: number): FromTokenId => {
    if(isValidTokenId(tokenId)){
        const tokenIdStr = tokenId.toString();
        const sizeCourseIdx = tokenIdStr.length - USER_ID_SIZE;
        const courseIdx = tokenIdStr.slice(0, sizeCourseIdx)
        const userId = tokenIdStr.slice(sizeCourseIdx)
        return {courseObj: getCourseFromIdx(parseInt(courseIdx)), userId: parseInt(userId)}
    }else{
        throw Error("Invalid tokenId")
    }
}

export const isValidTokenId = (tokenId: number): boolean => 
        tokenId.toString().length >= 9 && tokenId.toString().length <= 11 


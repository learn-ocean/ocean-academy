//Helper file for dealing with courses and progress

export type COURSE_TYPE = {
    name: string
    title: string
    chapters: number
}

export const _courses: Array<COURSE_TYPE> = [
    {name:"Ocean 101", title:"ocean101", chapters: 24},
    {name:"Intro to Data Defi", title:"introToDataDefi", chapters: 6},
    {name:"Compute To Data",title:"ComputeToData", chapters: 7}
]

//Note: Maybe add this to a more general constants file so other
//modules may access it.
export const COURSES = {
    OCEAN_101: _courses[0],
    INTRO_TO_DATA_DEFI: _courses[1],
    COMPUTE_TO_DATA: _courses[2]
}

export const coursesTitles = _courses.map(x => x.title)

/**
 * Returns the number of completed chapters of a course.
 * Expectecs the progress array as "/{courseName}/{chapter}"
 * The {chapter} formatting is ignored. 
 * @param course should be the same as the one used inside the progress array.
 * @param progress ["/{courseName}/{chapter}", "/{courseName}/{chapter}", "/{courseName}/{chapter}", "/{courseName}/{chapter}"]
 * @returns number of completed chapters for the input courseName.
 */
 export const getNbProgressForCourse = (course : COURSE_TYPE, progress: string[]): number => 
 getProgressForCourse(course, progress).length

/**
* Filters the courses among all of the user progress for
* the given input course.
* @param course COURSE_TYPE object to filter the chapters progress.
* @param progress something in the format ["/{courseName}/{chapter}", "/{courseName}/{chapter}"]
* @returns an array of chapters of the given course.
*/
export const getProgressForCourse = (course : COURSE_TYPE, progress: string[]): string[] =>
      progress.filter(chapter => chapter.split("/")[1] === course.title) 


export const isCourseCompletedFromTitle = (courseTitle : string, progress: string[]): boolean =>  {
     const course = getCourseByTitle(courseTitle)
     if(course)
        return isCourseCompleted(course, progress)
     else
        throw Error(`Course with title ${courseTitle} not found.`)
}

export const isCourseCompleted = (course : COURSE_TYPE, progress: string[]): boolean =>  {
       return getNbProgressForCourse(course, progress) >= course.chapters
}

export const getCourseByTitle = (courseTitle: string): COURSE_TYPE | undefined =>
    _courses.find(course => course.title === courseTitle)

export const courseTitleExists = (courseTitle: string): boolean => getCourseByTitle(courseTitle) ? true : false

export const getCourseFromIdx = (courseIdx: number): COURSE_TYPE => _courses[courseIdx - 1]

export const toTokenId = (userId: number, course: COURSE_TYPE): string => {
    const courseIndex = _courses.indexOf(course) + 1;
    const courseIndexPadded = courseIndex.toString().padStart(3, '0');
    const userIdPadded = userId.toString().padStart(8, '0');
   
    return courseIndexPadded + userIdPadded
}


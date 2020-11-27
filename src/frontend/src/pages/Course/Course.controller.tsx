export interface Course {
    path: string | undefined
    description: string | undefined
}

export interface ShowingChaptersState {
    course: string,
    showingChapters: boolean
}


export interface DataTown {
    id: number,
    name: string,
    top: string,
    left: string,
    description: string,
    image: string,
    heroImage: string
    details: {
        geography: {
            department: string
            location: string
            altitude?: string
            extension?: string
            climate?: string
            border?: {
                norte?: string
                sur?: string
                oeste?: string
                este?: string
            }
        }
        demographics?: {
            population?: string
            ethnicity?: string
            languge?: string
            economy?: string
        }
        culture: {
            nameOrigin?: string
            history?: string
            festival?: string
            traditions?: string
        }
        activities: string[]
    }
}

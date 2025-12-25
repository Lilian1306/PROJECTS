

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
            climate?: string
            fullDescription: string
        }
        demographics?: {
            population?: string
        }
        activities: string[]
    }
}

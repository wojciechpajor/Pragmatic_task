
export interface MovieProps {
    props: MovieDto
}

export interface MovieDto {
    id: string,
    imageURL: string,
    title: string,
    summary: string,
    rating: number
}
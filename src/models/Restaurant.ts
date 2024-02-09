class Restaurant {
  image: string
  infos: string[]
  title: string
  resume: string
  rating: string
  id: number

  constructor(
    image: string,
    infos: string[],
    title: string,
    resume: string,
    rating: string,
    id: number
  ) {
    this.image = image
    this.infos = infos
    this.title = title
    this.resume = resume
    this.rating = rating
    this.id = id
  }
}

export default Restaurant

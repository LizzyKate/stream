export default function ({ $axios }) {
  $axios.setBaseURL(
    'https://cors-anywhere.herokuapp.com/https://api.deezer.com'
  )
}
